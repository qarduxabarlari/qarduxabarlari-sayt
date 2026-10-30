# QarDU Xabarlari — Ilmiy-Nazariy va Uslubiy Jurnal Veb-Platformasi

> **Ushbu hujjat loyihaning to'liq arxitekturasi, bajarilgan ishlar xotirasi, qilingan to'g'ri va noto'g'ri ishlar tahlili, hozirgi holati va kelgusi agentlar/dasturchilar uchun ko'rsatmalarni o'z ichiga oladi.**

---

## 1. Loyiha Haqida Umumiy Ma'lumot

- **Nomi**: QarDU Xabarlari (Bulletin of Karshi State University)
- **Muassasa**: Qarshi Davlat Universiteti rasmiy ilmiy nashri
- **Yo'nalishi**: OAK e'tirof etgan ilmiy-nazariy va uslubiy jurnal platformasi
- **Ishlab chiqarish (Production) domeni**: `https://qardu-xabarlari.vercel.app`
- **Mahalliy server**: `http://localhost:3000` (`node local-server.js`)
- **Git Repozitoriy**: `https://github.com/qarduxabarlari/qarduxabarlari-sayt.git`
- **Git Mualliflik talabi**: Har doim `qarduxabarlari <xabarlariqardu@gmail.com>` nomi bilan commit va push qilinadi.
- **Fayllar tarkibi**:
  - `index.html` — Asosiy HTML tuzilmasi, Bosh sahifa (Hero va Karusel), Maqolalar bo'limi, Arxiv bo'limi, Aloqa sozlamalari, pasport, modallar.
  - `app.js` — Barcha frontend mantiq, ko'p tillilik (UZ, RU, EN), avtorizatsiya, admin panel, karusel qadash, arxivlash, IndexedDB va Supabase integratsiyasi.
  - `styles.css` — Maxsus akademik dizayn tizimi (Vanilla CSS, BirdsNZ jurnali uslubidagi toza metadata jadvallari, responsiv mobil dizayn).
  - `supabase-client.js` — Supabase SDK v2 ulanishi va konfiguratsiyasi.
  - `schema.sql` — Supabase PostgreSQL jadvallari, RLS siyosatlari va migratsiyalar.
  - `local-server.js` — Mahalliy test qilish uchun sof Node.js HTTP serveri.
  - `qardu-xabarlari.png` — Jurnal rasmiy logotipi / gerbi.

---

## 2. Texnologik Stek

1. **Frontend Core**: Sof HTML5 va JavaScript (ES6+ Vanilla). Frameworklarsiz o'ta tez va barqaror ishlaydi.
2. **Styling**: Sof Vanilla CSS (TailwindCSS yoki tashqi CSS frameworklar ishlatilmaydi).
3. **Database & Auth**: Supabase (PostgreSQL + Supabase Auth).
   - **URL**: `https://vmzbgcgcafptdgwdarsm.supabase.co`
   - **Anon Key**: `supabase-client.js` faylida sozlangan.
4. **Fayllarni Saqlash (PDF Engine)**:
   - Brauzerning **IndexedDB** (`qardu_academic_db` -> `pdf_files`) — yuklangan asl `.pdf` fayllarni doimiy saqlash uchun.
   - **Base64 / Memory Cache** (`ARTICLE_FILES`) — tezkor zaxira va darhol yuklab olish uchun.
   - **Haqiqiy PDF 1.4 Generator** — agar maqolaga fayl biriktirilmagan bo'lsa, avtomatik rasmiy `.pdf` generatsiya qilib beruvchi sof JS moduli. Hech qachon `.txt` yuklanmaydi.

---

## 3. Sayt Arxitekturasi va Bo'limlar Tuzilishi

### A. Ko'rinishlar (Views) Boshqaruvi
Sayt bitta sahifali (SPA) arxitekturada ishlaydi va URL hash (`#home`, `#publications`, `#archive`, `#contacts`, `#admin`) orqali dinamik almashadi:
1. **`#homeView` (Bosh sahifa)**:
   - BirdsNZ uslubidagi Hero bloki va avto-aylanuvchi suzuvchi Karusel (Bosh panel).
   - Jurnal haqida qisqacha ma'lumot va OAK akkreditatsiyasi.
   - Rasmiy kanallar va aloqa bloki (Telegram, Instagram, Telefon, Pochta, Manzil).
   - *Eslatma*: Bosh sahifada maqolalar oqimi ko'rinmaydi (faqat karuselda qadalgan 10 tagacha maqola chiqadi).
2. **`#articlesView` (Maqolalar bo'limi)**:
   - Jonli qidiruv va toifalar bo'yicha saralash filtrlari.
   - Maqolalar ketma-ket kartochkalar ko'rinishida chiqariladi.
   - Admin uchun har bir maqola kartochkasi ostida boshqaruv paneli joylashgan: **Qadash / Qadashni bekor qilish**, **Arxivlash**, **O'chirish**.
3. **`#archiveView` (Arxiv bo'limi — Faqat Admin uchun)**:
   - Arxivlangan barcha maqolalar ro'yxati.
   - Har bir maqolada: **«Qayta chiqarish (Tiklash)»** va **«Butunlay o'chirish»** tugmalari.
4. **`#contactsSettingsView` (Aloqa sozlamalari — Faqat Admin uchun)**:
   - Telegram, Instagram, Telefon, Pochta va Manzilni to'g'ridan-to'g'ri o'zgartirish va saqlash sahifasi.
5. **`#articleDetailView` (Maqola tafsilotlari)**:
   - Maqola pasporti (DOI, UDK, mualliflar, sana, toifa, sahifalar), to'liq annotatsiya, iqtibos olish va PDF yuklab olish.

### B. Yuqori Menyu (Navbar) Qoidasi
- **Oddiy foydalanuvchilar va mehmonlar uchun**:
  `Bosh sahifa` | `Maqolalar`
- **Admin (`xabarlariqardu@gmail.com`) kirganda**:
  `Bosh sahifa` | `Maqolalar` | `Arxiv (soni)` | `Aloqa sozlamalari`

---

## 4. Qilingan To'g'ri va Noto'g'ri Ishlar Tahlili (Lessons Learned & Postmortem)

> **Ushbu bo'lim loyihada yo'l qo'yilgan barcha texnik xatoliklar, ularning ildiz sabablari, qanday bartaraf etilgani va qilingan to'g'ri yechimlarning to'liq hisobotidir.**

### 4.1. To'g'ri va Muvaffaqiyatli Qilingan Ishlar

1. **Vanilla Stack tanlovi**: Frameworklarsiz (React/Vue/Next ishlatmasdan) sof HTML, JS va CSS asosida qurilgani tufayli sayt Vercel-da soniyaning ulushlarida yuklanadi, hech qanday og'ir build jarayoni talab qilinmaydi.
2. **IndexedDB va Base64 orqali PDF saqlash**: Tashqi server bo'lmagan sharoitda ham brauzer ichida haqiqiy binar `.pdf` fayllarni xotirada qoldirish va uzluksiz yuklab olish imkoniyati yaratildi.
3. **Maqolalarni bosh sahifadan alohida bo'limga ko'chirish**: Bosh sahifaning ortiqcha yuklanishining oldi olindi va ilmiy jurnal talablariga mos toza, jiddiy ko'rinishga keltirildi.
4. **Har bir maqolaga to'g'ridan-to'g'ri boshqaruv tugmalarini o'rnatish**: Admin endi alohida modal tablarga kirmaydi — to'g'ridan-to'g'ri "Maqolalar" bo'limida har bir maqolani bitta tugma bilan Bosh panelga qadashi, arxivlashi yoki o'chirishi mumkin.
5. **Arxiv va Aloqa bo'limlarini bosh menyuga o'tkazish**: Admin tajribasi (UX) keskin yaxshilandi, admin modali esa faqat "Yangi maqola joylash" uchun ixcham holatga keltirildi.

---

### 4.2. Yuzaga Kelgan Xatoliklar, Noto'g'ri Yondashuvlar va Ularning Yechimlari

#### ❌ 1-Xatolik: Vercel Serverless Function Interception (500 FUNCTION_INVOCATION_FAILED)
- **Nima yuz berdi**: Sayt Vercel-ga deploy qilinganda bosh sahifada `500: FUNCTION_INVOCATION_FAILED` xatoligi chiqib, sahifa ochilmay qoldi.
- **Ildiz sababi**: Loyiha ildiz papkasida `server.js` nomli fayl bor edi. Vercel uni ko'rib, Node.js serverless funksiya deb hisoblagan va statik `index.html` o'rniga `server.js` ni ishga tushirishga uringan, natijada serverless funksiya crash bo'lgan.
- **Tuzatish**: `server.js` fayli `local-server.js` ga o'zgartirildi va `vercel.json` faylida `"outputDirectory": "."` qilib statik hosting qat'iy belgilandi.

#### ❌ 2-Xatolik: Vercel Build Script xatosi ([STATIC_BUILD_NO_OUT_DIR])
- **Nima yuz berdi**: Vercel build loglarida `No Output Directory named "public" found` xatosi chiqdi.
- **Ildiz sababi**: `package.json` da `"build": "echo 'Static site ready'"` buyrug'i bor edi. Vercel build skripti mavjudligini ko'rgach, standart "public" papkasini qidirgan, loyiha esa ildiz (`.`) papkada joylashgan edi.
- **Tuzatish**: `package.json` dagi keraksiz `"build"` skripti o'chirildi va `vercel.json` da statik konfiguratsiya tozalandi.

#### ❌ 3-Xatolik: Git mualliflik pochtasi adashuvi
- **Nima yuz berdi**: Foydalanuvchi asosiy shaxsiy pochtasi (`dilmurodovumid170@gmail.com`) commits tarixiga kirib qolganini payqab e'tiroz bildirdi.
- **Ildiz sababi**: Dastlabki git commitlar local git global konfiguratsiyasi orqali yuborilgan.
- **Tuzatish**: Loyihaning barcha git operatsiyalari qat'iy ravishda quyidagi parametrlar bilan bajariladigan qilindi:
  `git -c user.name="qarduxabarlari" -c user.email="xabarlariqardu@gmail.com" commit`
  Foydalanuvchining shaxsiy pochtasi loyiha commits tarixidan butunlay ajratildi.

#### ❌ 4-Xatolik: Google OAuth orqali kirganda `localhost:3000` ga qaytib ketishi (Redirect Loop)
- **Nima yuz berdi**: Foydalanuvchi `https://qardu-xabarlari.vercel.app` saytida turib "Google orqali kirish"ni bosganida, tizim uni `http://localhost:3000` ga yo'naltirib yubordi.
- **Ildiz sababi**: Supabase Auth boshqaruv panelida birlamchi **Site URL** `http://localhost:3000` qilib qoldirilgan va **Redirect URLs** oq ro'yxatiga `https://qardu-xabarlari.vercel.app` kiritilmagan bo'lgan. Supabase begona domenga redirect qilishni bloklab, avtomatik ravishda o'zining default Site URL manziliga tashlagan.
- **Tuzatish**:
  1. `app.js` da `redirectTo` manzili avtomatik ravishda `https://qardu-xabarlari.vercel.app` ni aniq ko'rsatadigan qilindi.
  2. Supabase URL Configuration sozlamalarida Site URL va Redirect URLs Vercel domeniga moslab berildi.
  3. Foydalanuvchiga redirectsiz parol orqali to'g'ridan-to'g'ri kirish yo'li ko'rsatildi.

#### ❌ 5-Xatolik: Test maqolani tozalashda foydalanuvchining o'z maqolalari o'chib ketishi
- **Nima yuz berdi**: Foydalanuvchi yangi maqola yaratib arxivlaganda, sahifa yangilanishi bilan maqola xotiradan g'oyib bo'ldi.
- **Ildiz sababi**: Avvalgi bosqichda sinov uchun ochilgan test maqolani tozalash maqsadida `isTestArticle()` filtri qo'shilgan edi:
  `auth.includes('umid dilmurodov')`
  Loyihachi / foydalanuvchining haqiqiy ismi Umid Dilmurodov bo'lgani sababli, u o'z ismi bilan maqola yaratganda, ushbu filtr uni "test maqola" deb o'ylab `localStorage` dan o'chirib yuborgan!
- **Tuzatish**: `isTestArticle` filtridan muallif ismi butunlay olib tashlandi, faqat maxsus test kalitlari (`cewrcwec`, `weecwecwe`) qoldirildi. Foydalanuvchi yaratgan haqiqiy maqolalar saqlanib qoladigan qilindi.

#### ❌ 6-Xatolik: Arxivlangan maqolalarning Arxiv bo'limida chiqmasligi
- **Nima yuz berdi**: Maqolani "Arxivlash" tugmasi bosilganda umumiy oqimdan yo'qoldi, lekin "Arxiv" bo'limida ko'rinmadi.
- **Ildiz sababi**: `archiveArticle` funksiyasi yangilangan `#archiveStreamFeed` o'rniga avvalgi modal tabida mavjud bo'lgan, ammo keyinchalik o'chirib tashlangan `#adminArchiveListContainer` ga render qilishga urinayotgan edi. Konteyner topilmagani uchun maqolalar chizilmagan.
- **Tuzatish**: `archiveArticle`, `restoreArticle` va `deleteArticlePermanent` funksiyalari yangi `#archiveStreamFeed` konteyneriga xizmat qiluvchi `renderArchiveStream()` ga ulandi.

#### ❌ 7-Xatolik: Supabase Database-ga maqola tushmasligi (RLS 401 va Ustunlar xatosi)
- **Nima yuz berdi**: Foydalanuvchi Supabase Table Editor-da `articles` jadvali bo'sh turganini ko'rdi.
- **Ildiz sababi**:
  1. Supabase-dagi `articles` jadvalida faqat 1 dona RLS siyosati (SELECT — o'qish) mavjud bo'lgan. INSERT (qo'shish), UPDATE (arxivlash) va DELETE siyosatlari bo'lmagani sababli Supabase REST API `401: new row violates row-level security policy` xatosi bilan so'rovni rad etgan.
  2. Supabase jadvalida `is_archived`, `pub_type`, `vol_issue` ustunlari mavjud bo'lmagan (faqat `title_uz`, `abstract_uz` ochilgan edi).
- **Tuzatish**:
  1. `schema.sql` to'liq yangilandi: barcha etishmayotgan ustunlar (`is_archived`, `title`, `authors`, va h.k.) qo'shildi hamda SELECT, INSERT, UPDATE, DELETE uchun 4 ta to'liq RLS siyosati yozildi.
  2. `app.js` da maqola qo'shish kodi ikkala formatga (`title` va `title_uz`, `abstract` va `abstract_uz`) mos keladigan qilib qayta yozildi.

#### ❌ 8-Xatolik: Google OAuth orqali kirganda sessiyaning o'chib ketishi va admin panelning ochilmasligi
- **Nima yuz berdi**: Foydalanuvchi Google orqali kirishni bosib admin pochtasini (`xabarlariqardu@gmail.com`) tanlaganda, sahifa yangilanib hech narsa o'zgarmadi va admin panel elementlari ko'rinmadi.
- **Ildiz sababi**:
  1. Supabase JS v2 OAuth qaytganda `getSession()` dastlab `null` qaytargani sababli, `localStorage` dagi admin sessiyasi `localStorage.removeItem('qardu_user')` bilan o'chirib yuborilgan.
  2. PKCE oqimidagi `?code=` almashinuvi (`exchangeCodeForSession`) o'z vaqtida bajarilmagan.
  3. Foydalanuvchi talab qilmagan alohida dashboard va qo'shimcha emaillar loyihani chalkashtirgan.
- **Tuzatish**:
  1. **Qat'iy admin cheklovi**: Faqat va faqat `xabarlariqardu@gmail.com` pochtasiga admin huquqi berildi (`const ADMIN_EMAIL = 'xabarlariqardu@gmail.com'`). Barcha boshqa pochtalar olib tashlandi.
  2. **Asl Admin panel qayta tiklandi**: Alohida dashboard sahifasi va keraksiz tugmalar to'liq tozalndi. Admin panel deganda asosiy sahifadagi barcha admin qo'shimchalari («Maqola joylash» tugmasi, navbardagi «Arxiv» va «Aloqa sozlamalari» bo'limlari, har bir maqoladagi «Bosh panelga qadash / Arxivlash / O'chirish» tugmalari hamda pastdagi «Aloqani tahrirlash» tugmasi) tushuniladi va ular `xabarlariqardu@gmail.com` kirishi bilan darhol faollashadi.
  3. **Google OAuth va PKCE to'liq to'g'rilandi**: `supabase-client.js` ishga tushishi bilanoq `onAuthStateChange` tinglovchisi ulandi. Shu sababli Google orqali kirganda hech qanday avtorizatsiya hodisasi boy berilmaydi. `detectSessionInUrl: true` bilan ziddiyatga tushgan takroriy qo'lda `exchangeCodeForSession` chaqiruvi olib tashlandi. Foydalanuvchi `xabarlariqardu@gmail.com` pochtasini tanlab tizimga qaytganda sessiya avtomatik ravishda tasdiqlanib, admin panel imkoniyatlari darhol ishga tushadi.
  4. **Ro'yxatdan o'tish va Login kafolati**: `xabarlariqardu@gmail.com` bilan Google orqali kirilganda, ro'yxatdan o'tilganda yoki parol orqali kirilganda bir zumda admin imkoniyatlari faollashadi.

#### ❌ 9-Vazifa: Shablon sifatida yaratilgan maqolalarni tozalash
- **Nima qilindi**: Boshlang'ich sinov uchun yaratilgan 4 ta sun'iy shablon maqola (`art-qardu-1`, `art-qardu-2`, `art-qardu-3`, `art-qardu-4`) dastur kodidan butunlay o'chirildi.
- **Natija**: Saytda faqat Administrator tomonidan joylashtiriladigan haqiqiy ilmiy maqolalar chiqadigan bo'ldi. Maqola bo'lmagan paytda barcha bo'limlar (Karusel, Maqolalar oqimi, Pasport) estetik va toza bo'sh holat xabarlarini ko'rsatadi.

---

## 5. Kelgusi Ishlar Uchun Qat'iy Qoidalar

1. **Git Commit/Push**: Faqat `xabarlariqardu@gmail.com` nomidan qilinadi.
2. **Framework aralashtirmaslik**: React, Vue, Webpack, Vite yoki og'ir kutubxonalar qo'shilmaydi. Sof Vanilla JS va CSS saqlanadi.
3. **Fayl formatlari**: Yuklanadigan ilmiy maqolalar FAQAT `.pdf` bo'lishi shart.
4. **README yangilab borilishi**: Har bir yangi qadam, tuzatilgan xatolik va yangi qo'shilgan funksiya ushbu `README.md` fayliga darhol qayd etib boriladi.
