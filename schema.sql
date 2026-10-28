-- ========================================================
-- QarDU Xabarlari — Supabase Database Schema
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

-- RLS yoqish
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

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
  title_uz TEXT NOT NULL,
  title_ru TEXT,
  title_en TEXT,
  abstract_uz TEXT NOT NULL,
  abstract_ru TEXT,
  abstract_en TEXT,
  keywords_uz TEXT[],
  keywords_ru TEXT[],
  keywords_en TEXT[],
  authors_data JSONB,
  passport_data JSONB,
  metrics JSONB DEFAULT '{"views": 1284, "downloads": 492, "citations": 14}'::jsonb,
  pdf_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: Maqolalarni hamma o'qiy oladi
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Maqolalarni hamma ko'rishi mumkin"
  ON public.articles FOR SELECT
  USING (true);


-- 3. Submissions jadvali (Mualliflar tomonidan topshirilgan maqolalar)
CREATE TABLE IF NOT EXISTS public.submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  direction TEXT NOT NULL,
  abstract TEXT NOT NULL,
  keywords TEXT,
  file_url TEXT,
  status TEXT DEFAULT 'pending', -- pending, reviewing, accepted, rejected
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: Har kim faqat o'zi topshirgan maqolalarini ko'radi va qo'shadi
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Foydalanuvchi o'z arizalarini ko'rishi mumkin"
  ON public.submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Foydalanuvchi ariza topshirishi mumkin"
  ON public.submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Foydalanuvchi o'z arizasini yangilashi mumkin"
  ON public.submissions FOR UPDATE
  USING (auth.uid() = user_id);
