# QarDU Xabarlari — Ilmiy-Nazariy va Uslubiy Jurnal Veb-Platformasi

> **Ushbu hujjat loyihaning to'liq arxitekturasi, bajarilgan ishlar xotirasi, hozirgi holati va kelgusi agentlar/dasturchilar uchun ko'rsatmalarni o'z ichiga oladi.**

---

## 1. Loyiha Haqida Umumiy Ma'lumot

- **Nomi**: QarDU Xabarlari (Bulletin of Karshi State University)
- **Muassasa**: Qarshi Davlat Universiteti rasmiy ilmiy nashri
- **Yo'nalishi**: OAK e'tirof etgan ilmiy-nazariy va uslubiy jurnal platformasi
- **Mahalliy server**: `http://localhost:3000`
- **Fayllar tarkibi**:
  - `index.html` — Asosiy HTML tuzilmasi, maqola pasporti, annotatsiya, modallar (avtorizatsiya, PDF mutolaa, iqtibos olish, ulashish, admin panel, barcha maqolalar ro'yxati).
  - `app.js` — Barcha dinamik mantiq, ko'p tillilik (UZ, RU, EN), avtorizatsiya, admin maqola joylash, IndexedDB xotirasi, PDF generatsiya va yuklab olish.
  - `styles.css` — Maxsus akademik dizayn tizimi (Vanilla CSS, zamonaviy shriftlar, BirdsNZ jurnali uslubidagi toza metadata jadvallari).
  - `supabase-client.js` — Supabase SDK v2 ulanishi va konfiguratsiyasi.
  - `qardu-xabarlari.png` — Jurnal rasmiy logotipi / gerbi.

---

## 2. Texnologik Stek

1. **Frontend Core**: Sof HTML5 va JavaScript (ES6+ Vanilla). Frameworklarsiz tez va yengil ishlaydi.
2. **Styling**: Vanilla CSS (TailwindCSS ishlatilmaydi).
3. **Database & Auth**: Supabase (PostgreSQL + Supabase Auth).
   - **URL**: `https://vmzbgcgcafptdgwdarsm.supabase.co`
   - **Anon Key**: `supabase-client.js` faylida sozlangan.
4. **Fayllarni Saqlash (PDF Engine)**:
   - Brauzerning **IndexedDB** (`qardu_academic_db` -> `pdf_files`) — yuklangan asl `.pdf` fayllarni sahifa yangilanganda ham yo'qotmay saqlash uchun.
   - **Base64 / Memory Cache** (`ARTICLE_FILES`) — tezkor zaxira va darhol yuklab olish uchun.
   - **Haqiqiy PDF 1.4 Generator** — agar maqolaga fayl biriktirilmagan bo'lsa, avtomatik rasmiy `.pdf` generatsiya qilib beruvchi sof JS moduli. Hech qachon `.txt` yuklanmaydi.

---

## 3. Bajarilgan Ishlar Xronologiyasi (Xotira)

### A. Dizayn va Ko'p Tillilik
1. Jurnal uchun zamonaviy, jiddiy akademik dizayn yaratildi.
2. Tilni o'zgartirish bloki (UZ / RU / EN) ixcham ko'rinishga keltirildi.
3. BirdsNZ ilmiy jurnali andozasida maqola pasporti (zebra-jadval), annotatsiya va ilovalar bloki tayyorlandi.
4. Foydalanuvchi talabiga binoan saytning pastki qismi (footer) butunlay olib tashlandi.
5. Maqola pasportidagi takroriy yozuvlar va rasmdagi ortiqcha qismlar foydalanuvchi ko'rsatmasi bo'yicha tozalandi.

### B. Admin Tizimi va Maqola Joylash
1. **Admin elektron pochtasi**: `xabarlariqardu@gmail.com`.
2. Ushbu pochta bilan kirilganda sayt boshqaruvida maxsus **"Maqola joylash"** tugmasi paydo bo'ladi.
3. Oddiy foydalanuvchilar faqat maqolalarni o'qishi, iqtibos olishi va PDF formatda yuklab olishi mumkin.
4. Admin panelida yangi maqola kiritish modal oynasi yaratildi:
   - Maqola nomi (Title)
   - Muallif(lar) (Authors)
   - Nashr turi (Publication Type), Nashr yili (Year), Tom/Son (Volume/Issue), Sahifalar (Pagination)
   - Maqola turi (Article Type), DOI havolasi, UDK indeksi
   - Kalit so'zlar (Keywords)
   - Annotatsiya (Abstract)
   - **Fayl yuklash**: Faqat va faqat `.pdf` format qabul qilinadi (`accept=".pdf,application/pdf"`).

### C. Shablon (Namuna) Maqolalarni Butunlay O'chirish
1. Avval sinov uchun kiritilgan statik maqolalar (`art-1`, `art-2`, `art-3`) `app.js` dan butunlay o'chirildi (`ARTICLES = {}`).
2. Sayt ochilganda agar hali maqola joylanmagan bo'lsa, xatolik chiqmasdan toza "Bo'sh holat" (Empty State) ko'rinadi:
   - Sarlavhada: *"Hozircha saytda maqolalar mavjud emas"*.
   - Pasport va annotatsiya bloklari yashirilib, admin uchun qulay yo'riqnoma ko'rsatiladi.
   - "Barcha maqolalar" modalida ham toza bo'sh holat xabari chiqadi.

### D. PDF Yuklab Olish Muammosini Hal Qilish
1. **Muammo**: Avval yuklangan PDF fayl faqat vaqtinchalik `blob:` URL sifatida saqlangani uchun sahifa yangilanganda havola kuyib ketar va "Yuklab olish" tugmasi ishlamay qolardi.
2. **Yechim**:
   - Brauzerning doimiy `IndexedDB` xotirasiga to'liq binar fayl sifatida saqlash yo'lga qo'yildi.
   - Kichik hajmli fayllar uchun `Base64` zaxirasi qo'shildi.
   - Yuklab olish tugmasi semantik `<button type="button">` ga aylantirildi.
   - Har qanday holatda ham (hatto faylsiz kiritilgan eski maqolalar uchun ham) `.txt` emas, faqat haqiqiy `.pdf` fayl shakllantirilib yuklanadi.

---

## 4. Hozirgi Holat va Database Tuzilishi

### Supabase Database Tekshiruvi Natijalari:
- **Mavjud jadvallar**:
  1. `articles`
  2. `profiles`
- **`articles` jadvalining aniqlangan ustunlari (Schema)**:
  - `id` (Primary Key, uuid / serial)
  - `created_at` (timestamp)
  - `title_uz` (text) — Maqola nomi (O'zbekcha)
  - `title_ru` (text) — Maqola nomi (Ruscha)
  - `title_en` (text) — Maqola nomi (Inglizcha)
  - `abstract_uz` (text) — Annotatsiya (O'zbekcha)
  - `abstract_ru` (text) — Annotatsiya (Ruscha)
  - `abstract_en` (text) — Annotatsiya (Inglizcha)
  - `keywords_uz` (text / array) — Kalit so'zlar (O'zbekcha)
  - `keywords_ru` (text / array) — Kalit so'zlar (Ruscha)
  - `keywords_en` (text / array) — Kalit so'zlar (Inglizcha)
  - `doi` (text) — DOI raqami
  - `pdf_url` (text) — PDF fayl manzili
  - `metrics` (jsonb / integer) — Statistika (views, downloads)

- **`profiles` jadvalining ustunlari**:
  - `id`, `created_at`, `email`, `full_name`, `role`, `avatar_url`

---

## 5. Bosh Sahifa (BirdsNZ Uslubidagi Karusel va Maqolalar Oqimi)

### Yaratilgan Komponentlar va Arxitektura:
1. **BirdsNZ Bosh Sahifa Banneri (`c-page-header__homepage`)**:
   - Chap ustun: QarDU Xabarlari nomi, OAK/ISSN indeksi, jurnal missiyasi va "Maqolalar bilan tanishish →" hamda "Maqola topshirish" tugmalari.
   - O'ng ustun: **Dinamik avto-karusel (`c-homeCarousel`)** — maqolalarni BirdsNZ andozasidagi sarlavha foni (`c-homeCarousel__slide--title-highlight`), mualliflar, sana va "Batafsil o'qish →" tugmasi bilan 5.5 soniyada ketma-ket almashtirib turadi (sichqoncha olib borilganda to'xtaydi, o'qlar va nuqtalar orqali ham boshqariladi).
2. **Akademik E'tirof va Metrikalar Tasmasi (`c-journal-badges`)**:
   - OAK e'tirof etgan nashr
   - CrossRef DOI a'zosi (`10.59272/qardu`)
   - Xalqaro ilmiy indekslar (Google Scholar, Index Copernicus)
   - Open Access (CC BY 4.0 ochiq litsenziya)
3. **Ketma-ket Maqolalar Oqimi ("So'nggi nashr etilgan maqolalar")**:
   - Maqolalar ketma-ket kartochkalar ko'rinishida chiqariladi.
   - Toifalar bo'yicha saralash tugmalari: *Barchasi, Tabiiy fanlar va ekologiya, Axborot texnologiyalari va AI, Iqtisodiyot va innovatsiyalar, Tarix va filologiya*.
   - Tezkor qidiruv maydoni (jonli filtr).
   - Har bir maqolada: toifa nishoni, son/tom, DOI, to'liq sarlavha, mualliflar, annotatsiya qisqartmasi, kalit so'zlar teglari, "Maqolani o'qish (Pasport & Annotatsiya)", "PDF yuklab olish", "Iqtibos" va "Ulashish" tugmalari.
4. **Sahifalar O'rtasida O'tish (View Switcher)**:
   - `showHomeView()`: Bosh sahifani (karusel va maqolalar oqimini) ko'rsatadi.
   - `showArticleDetailView(id)`: Tanlangan maqola pasporti va to'liq annotatsiya sahifasini ochadi.
   - `btnBackToHome`: Maqola sahifasidan orqaga — Bosh sahifaga qaytaradi.
5. **Ko'p Tillilik (UZ, RU, EN)**:
   - Bosh sahifadagi barcha matnlar, sarlavhalar, tugmalar va metrikalar til tanlanganda darhol tarjima qilinadi.

---

## 7. Aloqa, Ijtimoiy Tarmoqlar va Menyu Yangilanishi (2026-yil oktyabr)

1. **Menyu Qisqartirildi**:
   - Foydalanuvchi talabi bilan yuqori menyudan ortiqcha bandlar (*Jurnal haqida, Tahririyat hay'ati, Arxiv, Mualliflarga, Indekslanish, Aloqa*) o'chirildi.
   - Menyuda faqat ikkita asosiy yo'nalish qoldirildi: **Bosh sahifa** va **Maqolalar**.
2. **Bosh Sahifaning Pastki Qismiga Rasmiy Kanallar va Aloqa Bloki (`c-journal-contact-section`)**:
   - **Telegram kanali**: to'g'ridan-to'g'ri havola (`linkSocialTelegram`) va ko'rinuvchi `@username` (`displaySocialTelegram`).
   - **Instagram sahifasi**: to'g'ridan-to'g'ri havola (`linkSocialInstagram`) va ko'rinuvchi `@username` (`displaySocialInstagram`).
   - **Telefon raqami**: to'g'ridan-to'g'ri qo'ng'iroq qilish havolasi `tel:` (`linkSocialPhone`) va formatlangan raqam (`displaySocialPhone`).
   - Barcha bloklar 3 ta tilda (UZ / RU / EN) moslashuvchan.
3. **Admin Panel Muhitiga Bog'lanishi**:
   - Admin (`xabarlariqardu@gmail.com`) tizimga kirganida:
     - Admin modalida 2 ta qulay tab mavjud: **«Yangi maqola joylash»** va **«Aloqa va ijtimoiy tarmoq sozlamalari»**.
     - Bosh sahifadagi aloqa blokida ham maxsus **«Aloqani tahrirlash»** tezkor tugmasi paydo bo'ladi.
     - Admin Telegram, Instagram havolalarini va telefon raqamini kiritib, "Sozlamalarni saqlash" tugmasini bosishi bilan ma'lumotlar saqlanadi va saytda bir zumda real vaqtda yangilanadi.

---

## 8. Foydalanuvchi Ko'rsatmalari (Qayta Eslatma)
1. **Fayl formati**: Yuklanadigan maqolalar FAQAT `.pdf` formatda bo'lishi shart.
2. **Admin elektron pochtasi**: `xabarlariqardu@gmail.com`.
3. **Muloqot tili**: Foydalanuvchi bilan o'zbek tilida, qisqa va aniq muloqot qiling.
