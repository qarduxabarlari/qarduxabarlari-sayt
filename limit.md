<style>
  body, p, h1, h2, h3, h4, h5, h6, table, th, td, ul, ol, li, div, span, blockquote, strong, em, code {
    font-family: "Times New Roman", Times, serif !important;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
  }
  th, td {
    border: 1px solid #d1d5db;
    padding: 10px 14px;
    text-align: left;
  }
  th {
    background-color: #f3f4f6;
    font-weight: bold;
  }
  tr:nth-child(even) {
    background-color: #f9fafb;
  }
</style>

<div style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6; color: #111827;">

# "QarDU Xabarlari" Loyihasi: Bepul Tarif (Free Tier) Resurs Limitlari

Ushbu hujjat **Supabase**, **Vercel** hamda **Storage (fayllar ombori)** bepul tarif rejalaridagi (Free / Hobby Plan) barcha imkoniyatlar, texnik cheklovlar va amaliy tavsiyalarni o'z ichiga oladi.

---

## 1. Supabase (Free Tier — Bepul Tarif)

Supabase bepul tarifi kichik va o'rta hajmdagi loyihalar, ilmiy jurnallar va shaxsiy portallar uchun to'liq bepul xizmat ko'rsatadi. Eng muhim qulayligi — limit tugaganda hisobingizdan **hech qachon pul yechib olinmaydi**.

### Texnik ko'rsatkichlar va cheklovlar

| Resurs / Xizmat | Bepul tarif limiti | Izoh va muhim jihatlar |
| :--- | :--- | :--- |
| **Faol loyihalar soni** | **2 ta loyiha** | Bitta hisobda bir vaqtning o'zida 2 ta faol loyiha yaratish mumkin. |
| **Ma'lumotlar bazasi (PostgreSQL disk hajmi)** | **500 MB** | Matnlar, maqolalar jadvali, foydalanuvchilar va izohlar uchun yetarli (minglab matnli maqolalar sig'adi). |
| **Hisoblash quvvati (Compute / RAM)** | **Shared Nano (~0.5 GB RAM)** | Umumiy server yadrosi va yarim gigabayt operativ xotira. |
| **API so'rovlari soni** | **Cheklanmagan (Unlimited)** | Saytga kiruvchilar ma'lumotlar bazasidan cheksiz ko'p so'rovlar yuborishi mumkin. |
| **Realtime ulanishlar** | **200 ta ulanish / oyiga 2 mln xabar** | Saytda bir vaqtda 200 ta foydalanuvchi jonli efir rejimida ulanib tura oladi. |
| **Foydalanuvchilar autentifikatsiyasi (Auth / MAU)** | **50,000 MAU** (oylik faol foydalanuvchi) | Har oy 50 mingtagacha noyob admin yoki foydalanuvchi ro'yxatdan o'tishi va kirishi mumkin. |
| **Edge Functions** | **Oyiga 500,000 marta chaqiruv** | Serverless funksiyalar chaqiruvlari. |
| **Faoliyat to'xtashi (Inactivity Pause)** | **7 kun (1 hafta)** | Agar loyihaga 7 kun davomida hech qanday so'rov kelmasa, ma'lumotlar bazasi uxlash ("pause") rejimiga o'tadi. Supabase dashboard'iga kirib bitta tugma bilan bepul uyg'otiladi. |
| **Zaxira nusxalash (Backups)** | **Qo'lda eksport (Manual Dump)** | Avtomatik kunlik tiklash yo'q, lekin istalgan vaqtda SQL formatida bepul yuklab olish mumkin. |
| **Loglarni saqlash muddati** | **1 kun** | Baza va API jurnallari 24 soat davomida saqlanadi. |

---

## 2. Storage (Fayllar Xotirasi Limitlari)

Saytdagi rasmlar (muqovalar, bannerlar) va maqolalarning to'liq PDF fayllari Supabase Storage'da saqlanadi.

### Supabase Storage (Fayllar ombori)

| Parametr | Bepul tarif limiti | Izoh va maqom |
| :--- | :--- | :--- |
| **Umumiy saqlash hajmi (Disk)** | **1 GB (1024 MB)** | Serverda jami saqlanishi mumkin bo'lgan fayllar (PDF va rasmlar) hajmi. |
| **Bitta faylning maksimal hajmi** | **50 MB** | Hajmi 50 MB dan katta bo'lgan bitta faylni yuklab bo'lmaydi (ilmiy maqola PDF lari odatda 1–5 MB bo'ladi). |
| **Chiqish trafigi (Egress / Bandwidth)** | **Oyiga 5 GB (Origin) + 5 GB (Cached)** | Sayt tashrif buyuruvchilari oyiga 10 GB gacha fayllarni bepul yuklab olishi va ko'rishi mumkin. |
| **Yuklash va o'chirish amallari** | **Cheklanmagan** | Fayllarni yuklash, qayta yuklash va o'chirish soni cheklanmagan. |
| **Ruxsatlar (Security)** | **Public & Private Buckets** | Ommaviy ko'rish uchun havolalar bepul CDN orqali tezkor ochiladi. |

> **Amaliy hisob-kitob:**
> * O'rtacha 1 ta maqola PDF fayli hajmi: **1.5 MB**
> * O'rtacha 1 ta optimallashtirilgan muqova rasmi: **200 KB (0.2 MB)**
> * Jami 1 ta to'liq maqola: **~1.7 MB**
> * **Xulosa:** 1 GB bepul xotiraga bemalol **500 tadan 600 tagacha** to'liq hajmdagi ilmiy maqola va uning rasmini joylash mumkin.

---

## 3. Vercel (Hobby / Free Plan — Hosting)

Vercel saytning frontend qismini (HTML, CSS, JavaScript, dizayn) internetda uzluksiz, yuqori tezlikda va xavfsiz ushlab turadi.

### Vercel Hobby tarif parametrlari

| Resurs / Xususiyat | Bepul tarif limiti | Izoh |
| :--- | :--- | :--- |
| **Oylik chiqish trafigi (Fast Data Transfer / Egress)** | **Oyiga 100 GB** | Sayt foydalanuvchilari uchun juda katta zaxira (oyiga yuz minglab sahifa ko'rishlar). |
| **Origin Transfer** | **Oyiga 10 GB** | Asosiy serverdan uzatiladigan ma'lumotlar. |
| **CDN so'rovlari soni** | **Oyiga 1,000,000 ta so'rov** | Global kesh serverlari orqali sahifani yuklash so'rovlari. |
| **Saytni yangilash (Deployments)** | **Kuniga 100 ta deployment** | Sayt kodini yangilab, internetga chiqarish cheklovi. |
| **Bir vaqtdagi yig'ish (Concurrent Builds)** | **1 ta jarayon** | Bir vaqtda 1 ta yangilanish yig'iladi, qolganlari navbatga turadi. |
| **Bitta build vaqti (Build Duration)** | **Maksimal 45 daqiqa** | Saytni yig'ish jarayoni uchun yetarli vaqt. |
| **Serverless Functions ijrosi** | **Oyiga 100 GB-soat / 4 CPU-soat** | Server funksiyalari ishlashi uchun berilgan bepul resurs. |
| **Funksiya ishlash vaqti (Execution Timeout)** | **10 – 15 soniya** | Bitta backend so'rovi uzog'i bilan shu vaqt ichida javob qaytarishi lozim. |
| **Maxsus domenlar (Custom Domains)** | **Cheklanmagan** | O'zingizning shaxsiy domeningizni (masalan, `qarduxabarlari.uz`) bepul ulashingiz mumkin. |
| **Xavfsizlik sertifikati (SSL / HTTPS)** | **Avtomatik va bepul** | Let's Encrypt orqali avtomatik yangilanib turuvchi bepul SSL sertifikat. |
| **A'zolar soni (Seats)** | **1 ta foydalanuvchi (Shaxsiy hisob)** | Hobby rejasi bitta shaxsiy hisob uchun mo'ljallangan. |

---

## 4. Limitlar tugaganda nima sodir bo'ladi?

1. **Hisobdan pul yechilmaydi:**
   * Supabase va Vercel bepul tarifida karta ma'lumotlari kiritilmagan bo'lsa, hech qanday kutilmagan to'lov undirilmaydi.
2. **Supabase xotirasi (500 MB) yoki Storage (1 GB) to'lsa:**
   * Yangi maqola yoki yangi rasm yuklab bo'lmaydi (xatolik beradi).
   * Mavjud maqolalar va sayt o'qish rejimida (Read-Only) ishlashda davom etadi.
3. **Vercel trafigi (100 GB) tugasa:**
   * Oy yakuniga qadar sayt faoliyati vaqtincha to'xtatiladi yoki keyingi oyning 1-sanasida avtomatik tiklanadi.

---

## 5. Resurslarni tejash va samarali boshqarish bo'yicha tavsiyalar

* **Rasmlarni optimallashtirish:** Saytga yuklanadigan muqova rasmlarini 5–10 MB li asl holatida emas, balki WebP yoki JPEG formatida siqib (200–400 KB gacha) yuklash tavsiya etiladi.
* **PDF fayllarni siqish:** Skanner qilingan juda og'ir PDF fayllarni yuklashdan avval hajmini kamaytirish (PDF compressor) orqali saqlash tavsiya etiladi.
* **Haftalik faollik:** Supabase 7 kun davomida so'rov kelmasa uxlab qolmasligi uchun saytga vaqti-vaqti bilan tashrif buyurib turish yetarli.
* **Zaxira nusxa:** Har oyda bir marta Supabase boshqaruv panelidan ma'lumotlar bazasining SQL zaxira nusxasini (Backup / Export) kompyuterga yuklab olish maqsadga muvofiqdir.

</div>
