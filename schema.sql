-- ========================================================
-- QarDU Xabarlari — Supabase Database Schema & Fixes
-- Ushbu SQL kodni Supabase Dashboard -> SQL Editor ga qo'yib, "Run" tugmasini bosing
-- ========================================================

-- 1. Profiles jadvali (Foydalanuvchilar ma'lumotlari)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  role TEXT DEFAULT 'Muallif',
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Har kim profillarni ko'rishi mumkin" ON public.profiles;
DROP POLICY IF EXISTS "Foydalanuvchi o'z profilini o'zgartirishi mumkin" ON public.profiles;
DROP POLICY IF EXISTS "Foydalanuvchi o'z profilini qo'shishi mumkin" ON public.profiles;

CREATE POLICY "Har kim profillarni ko'rishi mumkin"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Foydalanuvchi o'z profilini o'zgartirishi mumkin"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Foydalanuvchi o'z profilini qo'shishi mumkin"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Trigger: Yangi foydalanuvchi ro'yxatdan o'tganda avtomatik profile yaratish
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'Muallif')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- 2. Articles jadvali (Nashr etilgan ilmiy maqolalar)
CREATE TABLE IF NOT EXISTS public.articles (
  id TEXT PRIMARY KEY,
  doi TEXT,
  title TEXT,
  title_uz TEXT,
  title_ru TEXT,
  title_en TEXT,
  authors TEXT,
  pub_type TEXT,
  pub_year INT,
  vol_issue TEXT,
  pagination TEXT,
  article_type TEXT,
  udc TEXT,
  keywords TEXT,
  keywords_uz TEXT[],
  keywords_ru TEXT[],
  keywords_en TEXT[],
  abstract TEXT,
  abstract_uz TEXT,
  abstract_ru TEXT,
  abstract_en TEXT,
  authors_data JSONB,
  passport_data JSONB,
  metrics JSONB DEFAULT '{"views": 128, "downloads": 42, "citations": 2}'::jsonb,
  file_url TEXT,
  file_name TEXT,
  pdf_url TEXT,
  cover_url TEXT,
  cover_image TEXT,
  is_archived BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ustunlar allaqachon mavjud bo'lsa, ularni qo'shish (xavfsiz migratsiya)
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS is_archived BOOLEAN DEFAULT false;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS authors TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS pub_type TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS pub_year INT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS vol_issue TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS pagination TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS article_type TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS udc TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS keywords TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS abstract TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS file_url TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS file_name TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS cover_url TEXT;
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS cover_image TEXT;

-- RLS siyosatlari: O'qish, Qo'shish (Insert), Yangilash (Arxivlash/Update) va O'chirish (Delete)
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Maqolalarni hamma ko'rishi mumkin" ON public.articles;
DROP POLICY IF EXISTS "Maqolalarni boshqarish" ON public.articles;
DROP POLICY IF EXISTS "Maqolalarni qo'shish" ON public.articles;
DROP POLICY IF EXISTS "Maqolalarni yangilash" ON public.articles;
DROP POLICY IF EXISTS "Maqolalarni o'chirish" ON public.articles;

CREATE POLICY "Maqolalarni hamma ko'rishi mumkin" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Maqolalarni qo'shish" ON public.articles FOR INSERT WITH CHECK (true);
CREATE POLICY "Maqolalarni yangilash" ON public.articles FOR UPDATE USING (true);
CREATE POLICY "Maqolalarni o'chirish" ON public.articles FOR DELETE USING (true);


-- 3. Journal Settings jadvali (Aloqa va ijtimoiy tarmoqlar)
CREATE TABLE IF NOT EXISTS public.journal_settings (
  id TEXT PRIMARY KEY,
  telegram TEXT,
  instagram TEXT,
  phone TEXT,
  email TEXT,
  address TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.journal_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Sozlamalarni hamma o'qiy oladi" ON public.journal_settings;
DROP POLICY IF EXISTS "Sozlamalarni saqlash" ON public.journal_settings;
DROP POLICY IF EXISTS "Sozlamalarni yangilash" ON public.journal_settings;

CREATE POLICY "Sozlamalarni hamma o'qiy oladi" ON public.journal_settings FOR SELECT USING (true);
CREATE POLICY "Sozlamalarni saqlash" ON public.journal_settings FOR INSERT WITH CHECK (true);
CREATE POLICY "Sozlamalarni yangilash" ON public.journal_settings FOR UPDATE USING (true);
