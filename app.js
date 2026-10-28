/* ========================================================
   QarDU Xabarlari - Academic Journal JavaScript Engine
   Multilingual Support (UZ / RU / EN), Passport Table,
   Dynamic Article Loader, PDF Viewer, Citation & Sharing Tools
   ======================================================== */

// --- 0. ADMIN CONFIGURATION ---
const ADMIN_EMAIL = 'xabarlariqardu@gmail.com';

// --- 1. LOCALIZATION DICTIONARY (UI TEXTS) ---
const I18N = {
  uz: {
    topBarUni: "Qarshi Davlat Universiteti rasmiy ilmiy nashri",
    sampleArticleLabel: "Namuna maqola:",
    uniName: "QARSHI DAVLAT UNIVERSITETI",
    journalSubtitle: "ILMIY-NAZARIY VA USLUBIY JURNAL",
    searchPlaceholder: "Maqola nomi, muallif yoki kalit so'z...",
    searchBtn: "Qidirish",
    submitArticleBtn: "Maqola topshirish",
    navHome: "Bosh sahifa",
    navAbout: "Jurnal haqida",
    navEditorial: "Tahririyat hay'ati",
    navPublications: "Maqolalar",
    navArchive: "Arxiv",
    navAuthors: "Mualliflarga",
    navIndexing: "Indekslanish",
    navContact: "Aloqa",
    navContacts: "Aloqa sozlamalari",
    archiveViewTitle: "Arxivlangan maqolalar",
    bcHome: "Bosh sahifa",
    bcArticles: "Maqolalar",
    passportHeading: "Maqola pasporti",
    journalCaption: "Qarshi Davlat Universiteti axborotnomasi",
    oacApproved: "OAK e'tirof etgan nashr",
    fieldPubType: "Nashr turi",
    fieldPubYear: "Nashr yili",
    fieldAuthors: "Muallif(lar)",
    fieldJournalName: "Jurnal nomi",
    fieldVolIssue: "Tom, Son",
    fieldPagination: "Sahifalar",
    fieldArticleType: "Maqola turi",
    fieldDOI: "DOI",
    fieldUDC: "UDK",
    copyDoiBtn: "Nusxa",
    keywordsLabel: "Kalit so'zlar",
    attachmentTitle: "Ilova",
    downloadLinkText: "Yuklab olish",
    readOnlineBtn: "Onlayn mutolaa",
    citeBtn: "Iqtibos olish",
    shareBtn: "Ulashish",
    printBtn: "Chop etish",
    abstractHeading: "Annotatsiya",
    howToCiteLabel: "Ushbu maqolaga qanday havola berish kerak:",
    copyTextBtn: "Nusxa olish",
    authorsHeading: "Mualliflar haqida ma'lumot",
    referencesHeading: "Foydalanilgan adabiyotlar ro'yxati",
    collapseBtn: "Yig'ish",
    expandBtn: "Kengaytirish",
    currentIssueTitle: "Ushbu son haqida",
    viewFullIssueLink: "Son mundarijasini ko'rish →",
    indexingTitle: "Xalqaro indekslar",
    licenseTitle: "Ochiq litsenziya",
    licenseDesc: "Ushbu maqola Creative Commons Attribution 4.0 International (CC BY 4.0) litsenziyasi asosida erkin tarqatiladi.",
    downloadBtn: "Yuklab olish",
    citeModalHeading: "Maqoladan iqtibos keltirish",
    copyCitationBtn: "Iqtibosdan nusxa olish",
    downloadRisBtn: ".RIS faylini yuklash",
    shareModalHeading: "Maqolani ulashish",
    shareIntro: "Hamkasblaringiz va ilmiy jamoatchilik bilan ulashing:",
    copyLinkBtn: "Havolani nusxalash",
    footerSub: "Qarshi Davlat Universiteti rasmiy ilmiy jurnali",
    footerDesc: "Jurnalda tabiiy, gumanitar, ijtimoiy-iqtisodiy va texnika fanlari sohalaridagi dolzarb ilmiy tadqiqotlar natijalari chop etiladi.",
    footerNavTitle: "Bo'limlar",
    footerContactTitle: "Tahririyat manzili",
    footerCredits: "QarDU Xabarlari elektron tahririyat platformasi",
    toastCopySuccess: "Nusxa muvaffaqiyatli olindi!",
    toastDownloadStart: "Maqola yuklab olinmoqda...",
    authBtnHeader: "Kirish / Ro'yxatdan o'tish",
    authModalTitle: "QarDU Xabarlari",
    authModalSubtitle: "Elektron tahririyat va mualliflar kabineti",
    tabLogin: "Tizimga kirish",
    tabRegister: "Ro'yxatdan o'tish",
    googleLoginText: "Google orqali kirish",
    googleRegisterText: "Google orqali ro'yxatdan o'tish",
    orEmailText: "yoki elektron pochta orqali",
    labelFullName: "Ism va familiyangiz *",
    labelEmailLogin: "Elektron pochta",
    labelEmailReg: "Elektron pochta *",
    labelPassword: "Parol",
    labelNewPassword: "Parol *",
    labelConfirmPassword: "Parolni tasdiqlang *",
    labelRememberMe: "Meni eslab qol",
    linkForgotPw: "Parolni unutdingizmi?",
    btnSignIn: "Kirish",
    btnRegisterSubmit: "Ro'yxatdan o'tish",
    noAccountText: "Hali hisobingiz yo'qmi?",
    goToRegister: "Ro'yxatdan o'ting",
    haveAccountText: "Allaqachon hisobingiz bormi?",
    goToLogin: "Tizimga kiring",
    forgotPasswordDesc: "Ro'yxatdan o'tgan elektron pochta manzilingizni kiriting. Biz sizga parolni qayta tiklash havolasini yuboramiz.",
    btnSendResetLink: "Tiklash havolasini yuborish",
    btnBackToLogin: "← Kirishga qaytish",
    toastLoginSuccess: "Tizimga muvaffaqiyatli kirdingiz!",
    toastRegisterSuccess: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!",
    toastLogoutSuccess: "Tizimdan chiqdingiz!",
    toastForgotSent: "Tiklash havolasi elektron pochtangizga yuborildi!",
    toastPwMismatch: "Parollar bir-biriga mos kelmadi!",
    adminPanelBtn: "Maqola joylash",
    adminModalTitle: "Yangi maqola joylash",
    adminModalSubtitle: "Admin panel — maqolani saytga qo'shish",
    adminFieldTitle: "Maqola nomi *",
    adminFieldAuthors: "Muallif(lar) *",
    adminFieldPubType: "Nashr turi",
    adminFieldPubYear: "Nashr yili *",
    adminFieldVolIssue: "Tom, Son",
    adminFieldPagination: "Sahifalar",
    adminFieldArticleType: "Maqola turi",
    adminFieldDOI: "DOI",
    adminFieldUDC: "UDK",
    adminFieldKeywords: "Kalit so'zlar (vergul bilan ajratib yozing)",
    adminFieldAbstract: "Annotatsiya *",
    adminFieldCoverImage: "Maqola muqova rasmi (ixtiyoriy)",
    adminFieldFile: "PDF fayl yuklash",
    adminBtnPublish: "Maqolani joylash",
    adminBtnCancel: "Bekor qilish",
    adminToastSuccess: "Maqola muvaffaqiyatli joylashtirildi!",
    adminToastError: "Xatolik! Maqola joylanmadi.",
    adminToastFillRequired: "Iltimos, barcha majburiy maydonlarni to'ldiring.",
    adminToastOnlyPdf: "Faqat .pdf formatdagi maqolalarni yuklash mumkin!",
    browseArticlesBtn: "Barcha maqolalar",
    articlesModalTitle: "Barcha maqolalar",
    articlesModalSubtitle: "QarDU Xabarlari ilmiy jurnali maqolalari to'plami",
    btnViewArticle: "O'qish",
    badgeAdminArticle: "Yangi qo'shilgan",
    noArticlesBreadcrumb: "Maqolalar",
    noArticlesTitle: "Hozircha saytda maqolalar mavjud emas",
    noArticlesNoticeTitle: "Hozircha maqolalar mavjud emas",
    noArticlesNoticeDesc: "Admin hisobi (xabarlariqardu@gmail.com) orqali tizimga kirib, 'Maqola joylash' tugmasi yordamida saytga yangi ilmiy maqola joylashingiz mumkin.",
    noArticlesInList: "Hozircha saytda maqolalar mavjud emas.",
    heroTitle: "QarDU<br>Xabarlari",
    heroDesc: "Qarshi Davlat Universiteti rasmiy ilmiy-nazariy va uslubiy jurnali veb-platformasiga xush kelibsiz! Jurnal OAK tomonidan e'tirof etilgan bo'lib, tabiiy, aniq, axborot texnologiyalari va ijtimoiy-gumanitar sohalardagi eng so'nggi ilmiy tadqiqotlar va kashfiyotlarni muntazam chop etadi.",
    heroBrowseBtn: "Maqolalar bilan tanishish →",
    heroSubmitBtn: "Maqola topshirish",
    badgeOak: "OAK e'tirof etgan nashr",
    badgeOakDesc: "Oliy Attestatsiya Komissiyasi ro'yxatida",
    badgeDoi: "CrossRef DOI a'zosi",
    badgeDoiDesc: "10.59272/qardu xalqaro prefiksi",
    badgeIndex: "Xalqaro ilmiy indekslar",
    badgeIndexDesc: "Google Scholar, Index Copernicus",
    badgeAccess: "Open Access (CC BY 4.0)",
    badgeAccessDesc: "Ochiq va erkin ilmiy mutolaa",
    streamHeading: "So'nggi nashr etilgan maqolalar",
    streamSubtitle: "QarDU Xabarlari ilmiy jurnalining yangi sonidagi dolzarb tadqiqotlar va tahliliy ishlar",
    filterAll: "Barchasi",
    filterNat: "Tabiiy fanlar va ekologiya",
    filterTech: "Axborot texnologiyalari va AI",
    filterEcon: "Iqtisodiyot va innovatsiyalar",
    filterHist: "Tarix va filologiya",
    searchStreamPlaceholder: "Maqolalardan izlash (nomi, muallif, kalit so'z)...",
    btnReadMore: "Batafsil o'qish →",
    btnReadArticle: "Maqolani o'qish",
    btnDownloadPdf: "PDF yuklab olish",
    btnQuickCite: "Iqtibos",
    btnQuickShare: "Ulashish",
    btnBackToHome: "← Bosh sahifaga qaytish",
    articlesCount: "ta maqola",
    noArticlesFound: "Qidiruv bo'yicha maqolalar topilmadi.",
    contactSectionBadge: "Rasmiy aloqa va ijtimoiy tarmoqlar",
    contactSectionTitle: "Biz bilan bog'laning va yangiliklarni kuzatib boring",
    contactSectionDesc: "Qarshi davlat universiteti «QarDU Xabarlari» ilmiy jurnali rasmiy kanallari va tahririyat bilan bog'lanish ma'lumotlari",
    socialTelegramTitle: "Telegram kanalimiz",
    socialInstagramTitle: "Instagram sahifamiz",
    socialPhoneTitle: "Tahririyat telefoni",
    socialBadgePhone: "Bog'lanish",
    adminEditContactsBtn: "Aloqani tahrirlash",
    adminTabArticle: "Yangi maqola joylash",
    adminTabContact: "Aloqa va ijtimoiy tarmoq sozlamalari",
    adminContactAlertText: "Ushbu sozlamalar Bosh sahifaning pastki qismidagi rasmiy kanallar va bog'lanish blokida darhol yangilanadi.",
    adminFieldTelegram: "Telegram kanali (havola yoki @username) *",
    adminFieldInstagram: "Instagram sahifasi (havola yoki @username) *",
    adminFieldPhone: "Bog'lanish uchun telefon raqami *",
    adminBtnSaveContacts: "Sozlamalarni saqlash",
    adminToastContactsSaved: "Aloqa va ijtimoiy tarmoq sozlamalari muvaffaqiyatli saqlandi!",
    adminToastFillContacts: "Iltimos, barcha aloqa maydonlarini to'ldiring."
  },
  ru: {
    topBarUni: "Официальное научное издание Каршинского государственного университета",
    sampleArticleLabel: "Пример статьи:",
    uniName: "КАРШИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ",
    journalSubtitle: "НАУЧНО-ТЕОРЕТИЧЕСКИЙ И МЕТОДИЧЕСКИЙ ЖУРНАЛ",
    searchPlaceholder: "Название статьи, автор или ключевое слово...",
    searchBtn: "Поиск",
    submitArticleBtn: "Подать статью",
    navHome: "Главная",
    navAbout: "О журнале",
    navEditorial: "Редколлегия",
    navPublications: "Статьи",
    navArchive: "Архив",
    navAuthors: "Авторам",
    navIndexing: "Индексация",
    navContact: "Контакты",
    bcHome: "Главная",
    bcArticles: "Статьи",
    passportHeading: "Паспорт статьи",
    journalCaption: "Вестник Каршинского государственного университета",
    oacApproved: "Издание из перечня ВАК",
    fieldPubType: "Тип публикации",
    fieldPubYear: "Год публикации",
    fieldAuthors: "Автор(ы)",
    fieldJournalName: "Название журнала",
    fieldVolIssue: "Том, Выпуск",
    fieldPagination: "Страницы",
    fieldArticleType: "Тип статьи",
    fieldDOI: "DOI",
    fieldUDC: "УДК",
    copyDoiBtn: "Копия",
    keywordsLabel: "Ключевые слова",
    attachmentTitle: "Вложение",
    downloadLinkText: "Скачать",
    readOnlineBtn: "Читать онлайн",
    citeBtn: "Цитировать",
    shareBtn: "Поделиться",
    printBtn: "Печать",
    abstractHeading: "Аннотация",
    howToCiteLabel: "Как цитировать эту статью:",
    copyTextBtn: "Копировать",
    authorsHeading: "Сведения об авторах",
    referencesHeading: "Список использованной литературы",
    collapseBtn: "Свернуть",
    expandBtn: "Развернуть",
    currentIssueTitle: "Об этом выпуске",
    viewFullIssueLink: "Посмотреть содержание выпуска →",
    indexingTitle: "Международная индексация",
    licenseTitle: "Открытая лицензия",
    licenseDesc: "Статья распространяется на условиях лицензии Creative Commons Attribution 4.0 International (CC BY 4.0).",
    downloadBtn: "Скачать",
    citeModalHeading: "Цитирование научной статьи",
    copyCitationBtn: "Копировать цитату",
    downloadRisBtn: "Скачать файл .RIS",
    shareModalHeading: "Поделиться статьей",
    shareIntro: "Поделитесь статьей с коллегами и научным сообществом:",
    copyLinkBtn: "Копировать ссылку",
    footerSub: "Официальный научный журнал Каршинского государственного университета",
    footerDesc: "В журнале публикуются актуальные результаты исследований по естественным, гуманитарным, общественно-экономическим и техническим наукам.",
    footerNavTitle: "Разделы",
    footerContactTitle: "Адрес редакции",
    footerCredits: "Электронная платформа Вестника КарГУ",
    toastCopySuccess: "Успешно скопировано в буфер!",
    toastDownloadStart: "Началась загрузка файла...",
    authBtnHeader: "Войти / Регистрация",
    authModalTitle: "Вестник КарГУ",
    authModalSubtitle: "Электронная редакция и кабинет автора",
    tabLogin: "Вход в систему",
    tabRegister: "Регистрация",
    googleLoginText: "Войти через Google",
    googleRegisterText: "Регистрация через Google",
    orEmailText: "или через электронную почту",
    labelFullName: "Имя и фамилия *",
    labelEmailLogin: "Электронная почта",
    labelEmailReg: "Электронная почта *",
    labelPassword: "Пароль",
    labelNewPassword: "Пароль *",
    labelConfirmPassword: "Подтвердите пароль *",
    labelRememberMe: "Запомнить меня",
    linkForgotPw: "Забыли пароль?",
    btnSignIn: "Войти",
    btnRegisterSubmit: "Зарегистрироваться",
    noAccountText: "Ещё нет аккаунта?",
    goToRegister: "Зарегистрируйтесь",
    haveAccountText: "Уже есть аккаунт?",
    goToLogin: "Войти",
    forgotPasswordDesc: "Введите адрес электронной почты, указанный при регистрации. Мы отправим ссылку для восстановления пароля.",
    btnSendResetLink: "Отправить ссылку для сброса",
    btnBackToLogin: "← Назад ко входу",
    toastLoginSuccess: "Вы успешно вошли в систему!",
    toastRegisterSuccess: "Регистрация успешно завершена!",
    toastLogoutSuccess: "Вы вышли из системы!",
    toastForgotSent: "Ссылка для сброса пароля отправлена на почту!",
    toastPwMismatch: "Введённые пароли не совпадают!",
    adminPanelBtn: "Добавить статью",
    adminModalTitle: "Публикация новой статьи",
    adminModalSubtitle: "Админ-панель — добавление статьи на сайт",
    adminFieldTitle: "Название статьи *",
    adminFieldAuthors: "Автор(ы) *",
    adminFieldPubType: "Тип публикации",
    adminFieldPubYear: "Год публикации *",
    adminFieldVolIssue: "Том, Выпуск",
    adminFieldPagination: "Страницы",
    adminFieldArticleType: "Тип статьи",
    adminFieldDOI: "DOI",
    adminFieldUDC: "УДК",
    adminFieldKeywords: "Ключевые слова (через запятую)",
    adminFieldAbstract: "Аннотация *",
    adminFieldFile: "Загрузить PDF-файл",
    adminBtnPublish: "Опубликовать статью",
    adminBtnCancel: "Отмена",
    adminToastSuccess: "Статья успешно опубликована!",
    adminToastError: "Ошибка! Статья не опубликована.",
    adminToastFillRequired: "Пожалуйста, заполните все обязательные поля.",
    adminToastOnlyPdf: "Разрешено загружать статьи только в формате .pdf!",
    browseArticlesBtn: "Все статьи",
    articlesModalTitle: "Все статьи",
    articlesModalSubtitle: "Сборник статей научного журнала Вестник КарГУ",
    btnViewArticle: "Читать",
    badgeAdminArticle: "Новая публикация",
    noArticlesBreadcrumb: "Статьи",
    noArticlesTitle: "На сайте пока нет опубликованных статей",
    noArticlesNoticeTitle: "Статьи пока не добавлены",
    noArticlesNoticeDesc: "Вы можете войти под учетной записью администратора (xabarlariqardu@gmail.com) и опубликовать статью через кнопку 'Опубликовать статью'.",
    noArticlesInList: "На сайте пока нет опубликованных статей.",
    heroTitle: "Вестник<br>КарГУ",
    heroDesc: "Добро пожаловать на веб-платформу официального научно-теоретического и методического журнала Каршинского государственного университета! Журнал признан ВАК и регулярно публикует результаты передовых исследований.",
    heroBrowseBtn: "Перейти к статьям →",
    heroSubmitBtn: "Подать статью",
    badgeOak: "Издание из перечня ВАК",
    badgeOakDesc: "Признано Высшей аттестационной комиссией",
    badgeDoi: "Член CrossRef DOI",
    badgeDoiDesc: "Международный префикс 10.59272/qardu",
    badgeIndex: "Международная индексация",
    badgeIndexDesc: "Google Scholar, Index Copernicus",
    badgeAccess: "Open Access (CC BY 4.0)",
    badgeAccessDesc: "Открытый доступ к научным статьям",
    streamHeading: "Последние опубликованные статьи",
    streamSubtitle: "Актуальные научные исследования нового выпуска журнала Вестник КарГУ",
    filterAll: "Все статьи",
    filterNat: "Естественные науки и экология",
    filterTech: "ИТ и искусственный интеллект",
    filterEcon: "Экономика и инновации",
    filterHist: "История и филология",
    searchStreamPlaceholder: "Поиск по статьям (название, автор, ключевое слово)...",
    btnReadMore: "Подробнее →",
    btnReadArticle: "Читать статью",
    btnDownloadPdf: "Скачать PDF",
    btnQuickCite: "Цитировать",
    btnQuickShare: "Поделиться",
    btnBackToHome: "← Вернуться на главную",
    articlesCount: "статей",
    noArticlesFound: "По вашему запросу статей не найдено.",
    contactSectionBadge: "Официальные контакты и социальные сети",
    contactSectionTitle: "Свяжитесь с нами и следите за новостями",
    contactSectionDesc: "Официальные каналы и контакты редакции научного журнала «Вестник КарГУ»",
    socialTelegramTitle: "Наш Telegram-канал",
    socialInstagramTitle: "Наша страница в Instagram",
    socialPhoneTitle: "Телефон редакции",
    socialBadgePhone: "Связь",
    adminEditContactsBtn: "Редактировать контакты",
    adminTabArticle: "Опубликовать статью",
    adminTabContact: "Контакты и соцсети",
    adminContactAlertText: "Эти настройки сразу же обновятся в блоке официальных каналов и контактов внизу главной страницы.",
    adminFieldTelegram: "Telegram-канал (ссылка или @username) *",
    adminFieldInstagram: "Instagram-страница (ссылка или @username) *",
    adminFieldPhone: "Номер телефона для связи *",
    adminBtnSaveContacts: "Сохранить настройки",
    adminToastContactsSaved: "Настройки контактов и соцсетей успешно сохранены!",
    adminToastFillContacts: "Пожалуйста, заполните все контактные поля."
  },
  en: {
    topBarUni: "Official Scientific Publication of Karshi State University",
    sampleArticleLabel: "Sample Article:",
    uniName: "KARSHI STATE UNIVERSITY",
    journalSubtitle: "SCIENTIFIC-THEORETICAL AND METHODOLOGICAL JOURNAL",
    searchPlaceholder: "Article title, author or keyword...",
    searchBtn: "Search",
    submitArticleBtn: "Submit Article",
    navHome: "Home",
    navAbout: "About Journal",
    navEditorial: "Editorial Board",
    navPublications: "Articles",
    navArchive: "Archive",
    navAuthors: "For Authors",
    navIndexing: "Indexing",
    navContact: "Contact",
    bcHome: "Home",
    bcArticles: "Articles",
    passportHeading: "Publication Details",
    journalCaption: "Bulletin of Karshi State University",
    oacApproved: "HAC Uzbekistan Accredited",
    fieldPubType: "Publication Type",
    fieldPubYear: "Publication Year",
    fieldAuthors: "Author(s)",
    fieldJournalName: "Journal Name",
    fieldVolIssue: "Volume, Issue",
    fieldPagination: "Pagination",
    fieldArticleType: "Article Type",
    fieldDOI: "DOI",
    fieldUDC: "UDC",
    copyDoiBtn: "Copy",
    keywordsLabel: "Keywords",
    attachmentTitle: "Attachment",
    downloadLinkText: "Download",
    readOnlineBtn: "Read Online",
    citeBtn: "Cite Paper",
    shareBtn: "Share",
    printBtn: "Print",
    abstractHeading: "Abstract",
    howToCiteLabel: "How to cite this article:",
    copyTextBtn: "Copy Citation",
    authorsHeading: "Authors and Affiliations",
    referencesHeading: "References",
    collapseBtn: "Collapse",
    expandBtn: "Expand",
    currentIssueTitle: "About this Issue",
    viewFullIssueLink: "View Issue Table of Contents →",
    indexingTitle: "Indexing & Abstracting",
    licenseTitle: "Open License",
    licenseDesc: "This article is licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) License.",
    downloadBtn: "Download",
    citeModalHeading: "Cite this Publication",
    copyCitationBtn: "Copy Citation",
    downloadRisBtn: "Download .RIS file",
    shareModalHeading: "Share Article",
    shareIntro: "Share this article with colleagues and research community:",
    copyLinkBtn: "Copy Link",
    footerSub: "Official Scientific Journal of Karshi State University",
    footerDesc: "The journal publishes original scientific results across natural, humanitarian, socio-economic and technical sciences.",
    footerNavTitle: "Sections",
    footerContactTitle: "Editorial Office",
    footerCredits: "Bulletin of KarSU Electronic Editorial System",
    toastCopySuccess: "Copied to clipboard!",
    toastDownloadStart: "Downloading paper...",
    authBtnHeader: "Sign In / Register",
    authModalTitle: "Bulletin of KarSU",
    authModalSubtitle: "Online Editorial & Author Portal",
    tabLogin: "Sign In",
    tabRegister: "Register",
    googleLoginText: "Continue with Google",
    googleRegisterText: "Sign up with Google",
    orEmailText: "or with email",
    labelFullName: "Full Name *",
    labelEmailLogin: "Email",
    labelEmailReg: "Email Address *",
    labelPassword: "Password",
    labelNewPassword: "Password *",
    labelConfirmPassword: "Confirm Password *",
    labelRememberMe: "Remember me",
    linkForgotPw: "Forgot password?",
    btnSignIn: "Sign In",
    btnRegisterSubmit: "Create Account",
    noAccountText: "Don't have an account?",
    goToRegister: "Register now",
    haveAccountText: "Already have an account?",
    goToLogin: "Sign In",
    forgotPasswordDesc: "Enter your registered email address. We will send you instructions to reset your password.",
    btnSendResetLink: "Send Reset Link",
    btnBackToLogin: "← Back to Sign In",
    toastLoginSuccess: "Signed in successfully!",
    toastRegisterSuccess: "Registration completed successfully!",
    toastLogoutSuccess: "You have signed out!",
    toastForgotSent: "Reset link has been sent to your email!",
    toastPwMismatch: "Passwords do not match!",
    adminPanelBtn: "Add Article",
    adminModalTitle: "Publish New Article",
    adminModalSubtitle: "Admin Panel — add article to the site",
    adminFieldTitle: "Article Title *",
    adminFieldAuthors: "Author(s) *",
    adminFieldPubType: "Publication Type",
    adminFieldPubYear: "Publication Year *",
    adminFieldVolIssue: "Volume, Issue",
    adminFieldPagination: "Pages",
    adminFieldArticleType: "Article Type",
    adminFieldDOI: "DOI",
    adminFieldUDC: "UDC",
    adminFieldKeywords: "Keywords (comma-separated)",
    adminFieldAbstract: "Abstract *",
    adminFieldCoverImage: "Article Cover Image (optional)",
    adminFieldFile: "Upload PDF File",
    adminBtnPublish: "Publish Article",
    adminBtnCancel: "Cancel",
    adminToastSuccess: "Article published successfully!",
    adminToastError: "Error! Article was not published.",
    adminToastFillRequired: "Please fill in all required fields.",
    adminToastOnlyPdf: "Only .pdf format articles are allowed to be uploaded!",
    browseArticlesBtn: "All Articles",
    articlesModalTitle: "All Articles",
    articlesModalSubtitle: "Collection of articles of Bulletin of KarSU",
    btnViewArticle: "Read",
    badgeAdminArticle: "Newly published",
    noArticlesBreadcrumb: "Articles",
    noArticlesTitle: "No published articles on the site yet",
    noArticlesNoticeTitle: "No articles available yet",
    noArticlesNoticeDesc: "Log in with the administrator account (xabarlariqardu@gmail.com) and publish articles using the 'Publish Article' button.",
    noArticlesInList: "There are no published articles yet.",
    heroTitle: "Bulletin of<br>KarSU",
    heroDesc: "Welcome to the official scholarly journal web platform of Karshi State University! The journal is recognized by the Supreme Attestation Commission (OAC) and publishes cutting-edge academic discoveries and peer-reviewed research.",
    heroBrowseBtn: "Explore Articles →",
    heroSubmitBtn: "Submit Paper",
    badgeOak: "OAC Accredited Journal",
    badgeOakDesc: "Recognized by Supreme Attestation Commission",
    badgeDoi: "CrossRef DOI Member",
    badgeDoiDesc: "Prefix 10.59272/qardu",
    badgeIndex: "Global Indexing",
    badgeIndexDesc: "Google Scholar, Index Copernicus",
    badgeAccess: "Open Access (CC BY 4.0)",
    badgeAccessDesc: "Free and open scientific reading",
    streamHeading: "Latest Published Articles",
    streamSubtitle: "Current research papers published in the newest issue of Bulletin of KarSU",
    filterAll: "All Fields",
    filterNat: "Natural Sciences & Ecology",
    filterTech: "Information Technology & AI",
    filterEcon: "Economics & Innovation",
    filterHist: "History & Humanities",
    searchStreamPlaceholder: "Search articles by title, author, keyword...",
    btnReadMore: "Read More →",
    btnReadArticle: "Read Article",
    btnDownloadPdf: "Download PDF",
    btnQuickCite: "Cite",
    btnQuickShare: "Share",
    btnBackToHome: "← Back to Home",
    articlesCount: "articles",
    noArticlesFound: "No articles matched your criteria.",
    contactSectionBadge: "Official Contacts & Social Media",
    contactSectionTitle: "Connect with Us & Follow the Latest Updates",
    contactSectionDesc: "Official channels and editorial office contact information for Bulletin of KarSU",
    socialTelegramTitle: "Our Telegram Channel",
    socialInstagramTitle: "Our Instagram Page",
    socialPhoneTitle: "Editorial Office Phone",
    socialBadgePhone: "Contact",
    adminEditContactsBtn: "Edit Contacts",
    adminTabArticle: "Publish Article",
    adminTabContact: "Contacts & Social Media",
    adminContactAlertText: "These settings will immediately take effect in the official channels and contact section at the bottom of the Home page.",
    adminFieldTelegram: "Telegram Channel (link or @username) *",
    adminFieldInstagram: "Instagram Page (link or @username) *",
    adminFieldPhone: "Contact Phone Number *",
    adminBtnSaveContacts: "Save Settings",
    adminToastContactsSaved: "Contact and social media settings saved successfully!",
    adminToastFillContacts: "Please fill in all contact fields."
  }
};

// --- 2. ARTICLES DATA STORE & PERSISTENT PDF ENGINE ---
const BASELINE_ARTICLES = {
  'art-qardu-1': {
    id: 'art-qardu-1',
    categoryKey: 'nat',
    category: {
      uz: "Tabiiy fanlar va ekologiya",
      ru: "Естественные науки и экология",
      en: "Natural Sciences & Ecology"
    },
    title: {
      uz: "Qashqadaryo vohasi tuproq-iqlim sharoitida qurg'oqchilikka chidamli ekinlarni yetishtirishning ekologik va agrotexnik asoslari",
      ru: "Экологические и агротехнические основы возделывания засухоустойчивых культур в почвенно-климатических условиях Кашкадарьинского оазиса",
      en: "Ecological and Agrotechnical Foundations of Cultivating Drought-Resistant Crops in the Soil and Climatic Conditions of the Kashkadarya Oasis"
    },
    pubDate: {
      uz: "2025-yil, 15-aprel",
      ru: "15 апреля 2025 г.",
      en: "April 15, 2025"
    },
    issue: {
      uz: "2025-yil, 2-son",
      ru: "2025 г., 2-й выпуск",
      en: "2025, Issue 2"
    },
    slideImage: "images/slide-ecology.jpg",
    credit: "© QarDU Biologiya va tuproqshunoslik laboratoriyasi",
    passport: {
      pubType: { uz: "Jurnal maqolasi", ru: "Статья в журнале", en: "Journal Article" },
      pubYear: "2025",
      authorsText: "X.O. Xolliyev, S.M. Mamatov",
      journalName: { uz: "QarDU Xabarlari", ru: "Вестник КарГУ", en: "Bulletin of KarSU" },
      volumeIssue: "74, 2",
      pagination: "45-56",
      articleType: { uz: "Ilmiy maqola", ru: "Научная статья", en: "Research Article" },
      doi: "https://doi.org/10.59272/qardu.2025.2.14",
      udc: "631.524.85:581.5(575.14)",
      fileSize: "1.8 MB",
      fileUrl: null,
      fileName: "Xolliyev_Qashqadaryo_Ekologiya_2025.pdf"
    },
    keywords: {
      uz: ["qurg'oqchilikka chidamlilik", "Qashqadaryo vohasi", "sho'rlangan tuproqlar", "namlikni tejash", "agrotexnologiya", "ekologik barqarorlik"],
      ru: ["засухоустойчивость", "Кашкадарьинский оазис", "засоленные почвы", "влагосбережение", "агротехнологии", "экологическая устойчивость"],
      en: ["drought tolerance", "Kashkadarya oasis", "saline soils", "moisture conservation", "agrotechnology", "ecological resilience"]
    },
    abstract: {
      uz: "Ushbu tadqiqotda Janubiy O'zbekistonning qurg'oqchil va sho'rlanishga moyil hududlari, xususan Qashqadaryo vohasi tuproq-iqlim sharoitida qishloq xo'jaligi ekinlarini yetishtirishning innovatsion agrotexnik usullari ilmiy asoslangan. Tadqiqot jarayonida o'simliklarning fiziologik xususiyatlari, ildiz tizimining rivojlanishi hamda tomchilatib sug'orish tizimlari orqali suv sarfini 35-40% ga kamaytirish imkoniyatlari aniqlangan. Natijalar mintaqada oziq-ovqat xavfsizligini ta'minlash va suv resurslaridan oqilona foydalanishda muhim amaliy ahamiyatga ega.",
      ru: "В исследовании научно обоснованы инновационные агротехнические методы возделывания сельскохозяйственных культур в аридных и засоленных условиях юга Узбекистана, в частности Кашкадарьинского оазиса. Выявлены физиологические адаптационные механизмы растений и доказана эффективность водосберегающих технологий капельного орошения со снижением водопотребления на 35-40%.",
      en: "This research provides a comprehensive scientific analysis of innovative agrotechnical cultivation methods for drought-resistant crops in the arid and salinity-prone conditions of the Kashkadarya oasis in Southern Uzbekistan. The study evaluates physiological adaptation mechanisms, root system development, and proves that precision drip-irrigation saves up to 35-40% of irrigation water while increasing crop yield."
    },
    metrics: { views: 428, downloads: 154, citations: 12 },
    authors: [
      {
        name: { uz: "Xolliyev Xurshid Ochilovich", ru: "Холлиев Хуршид Очилович", en: "Khurshid O. Kholliyev" },
        degree: { uz: "biologiya fanlari doktori, professor", ru: "доктор биологических наук, профессор", en: "D.Sc. in Biology, Professor" },
        affiliation: { uz: "Qarshi Davlat Universiteti, Botanika va ekologiya kafedrasi", ru: "Каршинский государственный университет", en: "Karshi State University, Department of Botany & Ecology" },
        orcid: "0000-0002-3914-7718",
        email: "x.kholliyev@qardu.uz"
      },
      {
        name: { uz: "Mamatov Sarvar Murodovich", ru: "Маматов Сарвар Муродович", en: "Sarvar M. Mamatov" },
        degree: { uz: "qishloq xo'jaligi fanlari nomzodi, dotsent", ru: "кандидат сельскохозяйственных наук, доцент", en: "Ph.D. in Agricultural Sciences" },
        affiliation: { uz: "Qarshi Davlat Universiteti", ru: "Каршинский государственный университет", en: "Karshi State University" },
        orcid: "0000-0003-1284-5502",
        email: "s.mamatov@qardu.uz"
      }
    ],
    references: [
      "Xolliyev X.O. O'zbekistonning qurg'oqchil hududlari ekologiyasi. Toshkent: Fan, 2021. - 240 b.",
      "FAO. The State of the World's Land and Water Resources for Food and Agriculture (SOLAW). Rome, 2021.",
      "Mamatov S.M., Berdiyev T. Qashqadaryo vohasi sug'oriladigan tuproqlarining agrokimyoviy holati // QarDU Xabarlari. - 2024. - № 1. - B. 32-39."
    ]
  },

  'art-qardu-2': {
    id: 'art-qardu-2',
    categoryKey: 'tech',
    category: {
      uz: "Axborot texnologiyalari va AI",
      ru: "Информационные технологии и ИИ",
      en: "Information Technology & AI"
    },
    title: {
      uz: "Sun'iy intellekt va neyron tarmoqlar asosida qishloq xo'jaligi hosildorligini bashorat qilishning intellektual modellari",
      ru: "Интеллектуальные модели прогнозирования урожайности сельскохозяйственных культур на основе искусственного интеллекта и нейронных сетей",
      en: "Intelligent Models for Predicting Crop Yields Based on Artificial Intelligence and Deep Neural Networks"
    },
    pubDate: {
      uz: "2025-yil, 20-aprel",
      ru: "20 апреля 2025 г.",
      en: "April 20, 2025"
    },
    issue: {
      uz: "2025-yil, 2-son",
      ru: "2025 г., 2-й выпуск",
      en: "2025, Issue 2"
    },
    slideImage: "images/slide-ai.jpg",
    credit: "© QarDU Sun'iy intellekt va raqamli texnologiyalar markazi",
    passport: {
      pubType: { uz: "Jurnal maqolasi", ru: "Статья в журнале", en: "Journal Article" },
      pubYear: "2025",
      authorsText: "U.B. Oripov, A.T. Rustamov",
      journalName: { uz: "QarDU Xabarlari", ru: "Вестник КарГУ", en: "Bulletin of KarSU" },
      volumeIssue: "74, 2",
      pagination: "57-69",
      articleType: { uz: "Ilmiy maqola", ru: "Научная статья", en: "Research Article" },
      doi: "https://doi.org/10.59272/qardu.2025.2.15",
      udc: "004.89:004.032.26:631.1",
      fileSize: "2.1 MB",
      fileUrl: null,
      fileName: "Oripov_Suniy_Intellekt_QarDU_2025.pdf"
    },
    keywords: {
      uz: ["sun'iy intellekt", "mashinali o'rganish", "chuqur neyron tarmoqlar", "LSTM arxitekturasi", "hosildorlik bashorati", "sensor monitoringi"],
      ru: ["искусственный интеллект", "машинное обучение", "глубокие нейросети", "архитектура LSTM", "прогнозирование урожая", "сенсорный мониторинг"],
      en: ["artificial intelligence", "machine learning", "deep neural networks", "LSTM architecture", "crop yield prediction", "IoT sensor monitoring"]
    },
    abstract: {
      uz: "Mazkur maqolada qishloq xo'jaligida hosildorlikni yuqori aniqlik bilan bashorat qilish uchun ko'p qatlamli neyron tarmoqlar (Deep Neural Networks) va takrorlanuvchi neyron tarmoqlar (LSTM) gibrid modeli ishlab chiqilgan. Model meteorologik ma'lumotlar, tuproq namligi datchiklari va sun'iy yo'ldosh multispektral (NDVI) tasvirlari ma'lumotlariga tayanadi. Tajribalar natijasida ishlab chiqilgan gibrid algoritm bashorat qilish aniqligini (R² = 0.94, RMSE = 1.82) ta'minlab, an'anaviy statistik usullardan 18% yuqori samaradorlik ko'rsatdi.",
      ru: "В статье разработана гибридная модель глубоких нейронных сетей (LSTM + CNN) для высокоточного прогнозирования урожайности сельхозкультур. Модель интегрирует агрометеорологические параметры, данные датчиков влажности почвы и спектральные спутниковые индексы (NDVI). Точность предсказания достигла R² = 0.94 при погрешности RMSE = 1.82.",
      en: "This paper presents a hybrid deep learning architecture combining Convolutional Neural Networks and Long Short-Term Memory (CNN-LSTM) networks to predict agricultural crop yields with superior accuracy. The model ingests multi-source time-series data including IoT soil sensors, microclimate telemetry, and multispectral Sentinel-2 NDVI satellite imagery, achieving an R² of 0.94."
    },
    metrics: { views: 612, downloads: 289, citations: 19 },
    authors: [
      {
        name: { uz: "Oripov Umidjon Baxtiyorovich", ru: "Орипов Умиджон Бахтиёрович", en: "Umidjon B. Oripov" },
        degree: { uz: "texnika fanlari bo'yicha falsafa doktori (PhD), dotsent", ru: "PhD по техническим наукам, доцент", en: "Ph.D. in Computer Science" },
        affiliation: { uz: "Qarshi Davlat Universiteti, Axborot texnologiyalari fakulteti", ru: "Каршинский государственный университет", en: "Karshi State University, Faculty of Information Technology" },
        orcid: "0000-0001-8823-4109",
        email: "u.oripov@qardu.uz"
      },
      {
        name: { uz: "Rustamov Asror Temirovich", ru: "Рустамов Асрор Темирович", en: "Asror T. Rustamov" },
        degree: { uz: "katta o'qituvchi, tadqiqotchi", ru: "старший преподаватель", en: "Senior Researcher" },
        affiliation: { uz: "Qarshi Davlat Universiteti", ru: "Каршинский государственный университет", en: "Karshi State University" },
        orcid: "0000-0002-7710-9014",
        email: "a.rustamov@qardu.uz"
      }
    ],
    references: [
      "Goodfellow I., Bengio Y., Courville A. Deep Learning. MIT Press, 2016.",
      "Oripov U.B. Raqamli qishloq xo'jaligida ma'lumotlarni intellektual tahlil qilish algoritmlari // Axborot texnologiyalari va modellashtirish. - 2024. - № 3. - B. 112-120.",
      "LeCun Y., Bengio Y., Hinton G. Deep learning // Nature. - 2015. - Vol. 521. - P. 436-444."
    ]
  },

  'art-qardu-3': {
    id: 'art-qardu-3',
    categoryKey: 'econ',
    category: {
      uz: "Iqtisodiyot va innovatsiyalar",
      ru: "Экономика и инновации",
      en: "Economics & Innovation"
    },
    title: {
      uz: "Raqamli iqtisodiyot sharoitida mintaqaviy sanoat korxonalari investitsion jozibadorligini oshirish mexanizmlari",
      ru: "Механизмы повышения инвестиционной привлекательности региональных промышленных предприятий в условиях цифровой экономики",
      en: "Mechanisms for Increasing the Investment Attractiveness of Regional Industrial Enterprises in the Digital Economy"
    },
    pubDate: {
      uz: "2025-yil, 25-aprel",
      ru: "25 апреля 2025 г.",
      en: "April 25, 2025"
    },
    issue: {
      uz: "2025-yil, 2-son",
      ru: "2025 г., 2-й выпуск",
      en: "2025, Issue 2"
    },
    slideTheme: "linear-gradient(135deg, #0a2540 0%, #1e3a8a 50%, #0f172a 100%)",
    credit: "© QarDU Iqtisodiyot va biznes fakulteti",
    passport: {
      pubType: { uz: "Jurnal maqolasi", ru: "Статья в журнале", en: "Journal Article" },
      pubYear: "2025",
      authorsText: "N.Sh. Berdiyeva, I.K. Eshmurodov",
      journalName: { uz: "QarDU Xabarlari", ru: "Вестник КарГУ", en: "Bulletin of KarSU" },
      volumeIssue: "74, 2",
      pagination: "70-82",
      articleType: { uz: "Ilmiy maqola", ru: "Научная статья", en: "Research Article" },
      doi: "https://doi.org/10.59272/qardu.2025.2.16",
      udc: "330.341.1:338.45",
      fileSize: "1.9 MB",
      fileUrl: null,
      fileName: "Berdiyeva_Investitsiya_Raqamli_Iqtisodiyot_2025.pdf"
    },
    keywords: {
      uz: ["raqamli iqtisodiyot", "investitsion jozibadorlik", "mintaqaviy sanoat", "klaster tizimi", "innovatsion faollik", "moliyaviy tahlil"],
      ru: ["цифровая экономика", "инвестиционная привлекательность", "региональная промышленность", "кластерная система", "инновации"],
      en: ["digital economy", "investment attractiveness", "regional industry", "industrial clusters", "financial modeling", "innovation"]
    },
    abstract: {
      uz: "Maqolada raqamli transformatsiya jarayonlarining O'zbekiston hududlari, xususan Qashqadaryo viloyati sanoat korxonalarining investitsion jozibadorligiga ta'siri ekonometrik modellar yordamida tahlil qilingan. Korxonalarning raqamli infratuzilmasi, moliyaviy barqarorligi va klasterlashuv darajasini hisobga oluvchi ko'p omilli baholash metodikasi taklif etilgan. Tadqiqot xulosalari sanoat tarmoqlariga xorijiy va mahalliy to'g'ridan-to'g'ri investitsiyalarni jalb qilish strategiyasini takomillashtirishga xizmat qiladi.",
      ru: "В статье исследовано влияние цифровой трансформации на инвестиционную привлекательность региональных промышленных предприятий. Предложена многофакторная модель оценки готовности предприятий к внедрению инноваций и привлечению прямых инвестиций.",
      en: "This article investigates the econometric impact of digital transformation on the investment attractiveness of regional industrial manufacturing enterprises in Uzbekistan. A multi-criteria quantitative evaluation matrix is developed to help industrial leaders and policymakers optimize foreign direct investment attraction."
    },
    metrics: { views: 375, downloads: 142, citations: 8 },
    authors: [
      {
        name: { uz: "Berdiyeva Nodira Shodiyevna", ru: "Бердиева Нодира Шодиевна", en: "Nodira Sh. Berdiyeva" },
        degree: { uz: "iqtisodiyot fanlari doktori, professor", ru: "доктор экономических наук, профессор", en: "D.Sc. in Economics, Professor" },
        affiliation: { uz: "Qarshi Davlat Universiteti, Iqtisodiyot kafedrasi", ru: "Каршинский государственный университет", en: "Karshi State University, Department of Economics" },
        orcid: "0000-0002-5401-8933",
        email: "n.berdiyeva@qardu.uz"
      },
      {
        name: { uz: "Eshmurodov Ilhom Kamolovich", ru: "Эшмуродов Илхом Камолович", en: "Ilhom K. Eshmurodov" },
        degree: { uz: "iqtisodiyot fanlari nomzodi", ru: "кандидат экономических наук", en: "Ph.D. in Economics" },
        affiliation: { uz: "Qarshi Davlat Universiteti", ru: "Каршинский государственный университет", en: "Karshi State University" },
        orcid: "0000-0003-4412-1980",
        email: "i.eshmurodov@qardu.uz"
      }
    ],
    references: [
      "Berdiyeva N.Sh. Mintaqa iqtisodiyotini innovatsion rivojlantirish omillari. - Toshkent: Iqtisodiyot, 2023. - 210 b.",
      "Schwab K. The Fourth Industrial Revolution. Crown Publishing, 2017.",
      "World Bank. Uzbekistan Digital Economy Country Assessment. Washington, DC: World Bank, 2022."
    ]
  },

  'art-qardu-4': {
    id: 'art-qardu-4',
    categoryKey: 'hist',
    category: {
      uz: "Tarix va filologiya",
      ru: "История и филология",
      en: "History & Humanities"
    },
    title: {
      uz: "Nasaf va Kesh allomalarining islom sivilizatsiyasi va O'rta asrlar fan taraqqiyotiga qo'shgan hissasi (tarixiy-manbashunoslik tahlili)",
      ru: "Вклад ученых Насафа и Кеша в развитие исламской цивилизации и средневековой науки (историко-источниковедческий анализ)",
      en: "Contribution of Nasaf and Kesh Scholars to the Development of Islamic Civilization and Medieval Science (Historical and Source Study Analysis)"
    },
    pubDate: {
      uz: "2025-yil, 28-aprel",
      ru: "28 апреля 2025 г.",
      en: "April 28, 2025"
    },
    issue: {
      uz: "2025-yil, 2-son",
      ru: "2025 г., 2-й выпуск",
      en: "2025, Issue 2"
    },
    slideTheme: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%)",
    credit: "© QarDU Tarix va manbashunoslik ilmiy laboratoriyasi",
    passport: {
      pubType: { uz: "Jurnal maqolasi", ru: "Статья в журнале", en: "Journal Article" },
      pubYear: "2025",
      authorsText: "A.K. Ravshanov, F.I. Rahmonov",
      journalName: { uz: "QarDU Xabarlari", ru: "Вестник КарГУ", en: "Bulletin of KarSU" },
      volumeIssue: "74, 2",
      pagination: "83-95",
      articleType: { uz: "Ilmiy maqola", ru: "Научная статья", en: "Research Article" },
      doi: "https://doi.org/10.59272/qardu.2025.2.17",
      udc: "94(575.1):28-9",
      fileSize: "1.7 MB",
      fileUrl: null,
      fileName: "Ravshanov_Nasaf_Kesh_Allomalari_2025.pdf"
    },
    keywords: {
      uz: ["Nasaf", "Kesh", "manbashunoslik", "allomalar merosi", "islom sivilizatsiyasi", "Abu Hafs an-Nasafiy", "Sharq qo'lyozmalari"],
      ru: ["Насаф", "Кеш", "источниковедение", "научное наследие", "исламская цивилизация", "восточные рукописи"],
      en: ["Nasaf", "Kesh", "historiography", "scholarly heritage", "Islamic civilization", "Abu Hafs an-Nasafi", "Oriental manuscripts"]
    },
    abstract: {
      uz: "Ushbu ilmiy maqolada qadimgi Nasaf (hozirgi Qarshi) va Kesh (Shahrisabz) shaharlaridan yetishib chiqqan mutafakkir va olimlarning (Abu Hafs Umar an-Nasafiy, Abul Barakot an-Nasafiy, Najmiddin an-Nasafiy va boshqalar) ilmiy-ma'naviy merosi ilk manbalar asosida tahlil qilingan. Olimlarning kalom ilmi, mantiq, fiqh, falakiyot va adabiyot sohalaridagi asarlari jahon sivilizatsiyasi rivojiga qo'shgan hissasi manbashunoslik nuqtai nazaridan yoritilgan.",
      ru: "В статье на основе арабографичных первоисточников исследуется научно-богословское наследие ученых древнего Насафа и Кеша (Абу Хафса ан-Насафи, Абу-л-Бараката ан-Насафи и др.). Освещается их весомый вклад в развитие фикха, калама, логики и средневековой восточной мысли.",
      en: "This research presents a critical source-based historiographical analysis of the intellectual contributions of scholars from ancient Nasaf (Karshi) and Kesh (Shahrisabz) to the Islamic Golden Age. Works by luminaries such as Abu Hafs an-Nasafi and Abul Barakat an-Nasafi across theology, logic, jurisprudence, and astronomy are examined."
    },
    metrics: { views: 498, downloads: 210, citations: 14 },
    authors: [
      {
        name: { uz: "Ravshanov Alisher Xoliqovich", ru: "Равшанов Алишер Холикович", en: "Alisher Kh. Ravshanov" },
        degree: { uz: "tarix fanlari doktori, professor", ru: "доктор исторических наук, профессор", en: "D.Sc. in History, Professor" },
        affiliation: { uz: "Qarshi Davlat Universiteti, O'zbekiston tarixi kafedrasi", ru: "Каршинский государственный университет", en: "Karshi State University, Department of Uzbek History" },
        orcid: "0000-0001-9042-3321",
        email: "a.ravshanov@qardu.uz"
      },
      {
        name: { uz: "Rahmonov Faxriddin Ismatovich", ru: "Рахмонов Фахриддин Исматович", en: "Fakhriddin I. Rahmonov" },
        degree: { uz: "tarix fanlari bo'yicha falsafa doktori (PhD)", ru: "PhD по историческим наукам", en: "Ph.D. in History" },
        affiliation: { uz: "Qarshi Davlat Universiteti", ru: "Каршинский государственный университет", en: "Karshi State University" },
        orcid: "0000-0002-6120-8840",
        email: "f.rahmonov@qardu.uz"
      }
    ],
    references: [
      "Ravshanov A.X. Qashqadaryo tarixi: qadimgi davrdan XX asr boshlarigacha. - Toshkent: Yangi asr avlodi, 2022. - 380 b.",
      "Abu Hafs an-Nasafiy. Al-Qand fi zikri ulamoi Samarqand. - Tehron, 1999.",
      "Bartold V.V. Turkiston madaniy hayoti tarixi. - Toshkent: Fan, 2019."
    ]
  }
};

const ARTICLES = { ...BASELINE_ARTICLES };
const ARTICLE_FILES = {}; // In-memory runtime cache for Blobs / Files

// IndexedDB Helper for persistent local storage of PDF documents
const DB_NAME = 'qardu_academic_db';
const DB_VERSION = 1;
const STORE_NAME = 'pdf_files';

function getDbInstance() {
  return new Promise((resolve) => {
    if (!window.indexedDB) {
      resolve(null);
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = () => resolve(null);
  });
}

async function saveArticleFileToDb(articleId, fileBlob, fileName) {
  try {
    const db = await getDbInstance();
    if (!db) return false;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put({ blob: fileBlob, fileName: fileName, updated: Date.now() }, articleId);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (e) {
    console.warn("IndexedDB save note:", e);
    return false;
  }
}

async function getArticleFileFromDb(articleId) {
  try {
    const db = await getDbInstance();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(articleId);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    console.warn("IndexedDB read note:", e);
    return null;
  }
}

// Convert Base64 data URL to Blob
function base64ToBlob(base64Data, defaultType = 'application/pdf') {
  if (!base64Data) return null;
  const parts = base64Data.split(',');
  const mimeMatch = parts[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : defaultType;
  const bstr = atob(parts[1] || parts[0]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// Read File as Data URL Promise
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });
}

// Trigger browser native download of a Blob as a file
function downloadBlob(blob, filename) {
  const safeName = (filename && filename.toLowerCase().endsWith('.pdf'))
    ? filename
    : `${filename || 'maqola'}.pdf`;

  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = blobUrl;
  link.setAttribute('download', safeName);
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
    URL.revokeObjectURL(blobUrl);
  }, 2000);
}

// Generate genuine academic PDF 1.4 document when no uploaded file is available
function generateArticlePdfBlob(article) {
  function clean(str) {
    return String(str || '')
      .replace(/[ʻ‘’`´]/g, "'")
      .replace(/[“”«»]/g, '"')
      .replace(/[–—]/g, '-')
      .replace(/[^\x20-\x7E\r\n\t]/g, ' ')
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)');
  }

  function wrap(str, maxLen = 65) {
    const words = String(str || '').split(/\s+/);
    const lines = [];
    let cur = '';
    for (const w of words) {
      if ((cur + ' ' + w).trim().length > maxLen) {
        if (cur) lines.push(cur.trim());
        cur = w;
      } else {
        cur += ' ' + w;
      }
    }
    if (cur.trim()) lines.push(cur.trim());
    return lines;
  }

  const title = (article.title && (article.title[currentLang] || article.title.uz)) || 'Ilmiy Maqola';
  const authors = (article.passport && article.passport.authorsText) || 'Muallif';
  const year = (article.passport && article.passport.pubYear) || '2025';
  const volIssue = (article.passport && article.passport.volumeIssue) || '1-son';
  const pagination = (article.passport && article.passport.pagination) || '1-10';
  const doi = (article.passport && article.passport.doi) || '';
  const udc = (article.passport && article.passport.udc) || '';
  const pubType = (article.passport && (article.passport.pubType?.[currentLang] || article.passport?.pubType?.uz || article.passport?.pubType)) || 'Ilmiy maqola';
  const abs = (article.abstract && (article.abstract[currentLang] || article.abstract.uz)) || '';
  const kw = article.keywords ? (Array.isArray(article.keywords[currentLang] || article.keywords.uz) ? (article.keywords[currentLang] || article.keywords.uz).join(', ') : (article.keywords[currentLang] || article.keywords.uz)) : '';

  let textOps = [];
  let y = 785;

  textOps.push('BT /F1 15 Tf 50 ' + y + ' Td (QARSHI DAVLAT UNIVERSITETI) Tj ET');
  y -= 20;
  textOps.push('BT /F1 13 Tf 50 ' + y + ' Td (QARDU XABARLARI / BULLETIN OF KARSU) Tj ET');
  y -= 16;
  textOps.push('BT /F2 9.5 Tf 50 ' + y + ' Td (' + clean(`ISSN 2181-7006 | Tom, Son: ${volIssue} | Nashr yili: ${year} | Sahifalar: ${pagination}`) + ') Tj ET');
  y -= 10;
  textOps.push('0.7 0.7 0.7 RG 1 w 50 ' + y + ' m 545 ' + y + ' l S 0 g');
  y -= 26;

  const titleLines = wrap(title, 55);
  titleLines.forEach(tl => {
    textOps.push('BT /F1 13 Tf 50 ' + y + ' Td (' + clean(tl) + ') Tj ET');
    y -= 18;
  });

  y -= 6;
  textOps.push('BT /F1 10.5 Tf 50 ' + y + ' Td (Muallif\\(lar\\): ' + clean(authors) + ') Tj ET');
  y -= 16;
  textOps.push('BT /F2 9 Tf 50 ' + y + ' Td (' + clean(`Nashr turi: ${pubType}` + (udc ? ` | UDK: ${udc}` : '') + (doi ? ` | DOI: ${doi}` : '')) + ') Tj ET');
  y -= 12;

  textOps.push('0.8 0.8 0.8 RG 0.5 w 50 ' + y + ' m 545 ' + y + ' l S 0 g');
  y -= 22;

  textOps.push('BT /F1 11 Tf 50 ' + y + ' Td (ANNOTATSIYA / ABSTRACT:) Tj ET');
  y -= 16;

  const absLines = wrap(abs, 70);
  absLines.slice(0, 24).forEach(al => {
    textOps.push('BT /F2 9.5 Tf 50 ' + y + ' Td (' + clean(al) + ') Tj ET');
    y -= 14;
  });

  if (kw) {
    y -= 10;
    const kwLines = wrap('Kalit so\'zlar / Keywords: ' + kw, 65);
    kwLines.forEach(kl => {
      textOps.push('BT /F1 9 Tf 50 ' + y + ' Td (' + clean(kl) + ') Tj ET');
      y -= 13;
    });
  }

  textOps.push('0.7 0.7 0.7 RG 1 w 50 42 m 545 42 l S 0 g');
  textOps.push('BT /F2 8.5 Tf 50 28 Td (QarDU Xabarlari rasmiy ilmiy elektron jurnali platformasi) Tj ET');
  textOps.push('BT /F2 8.5 Tf 450 28 Td (Sahifa 1 / 1) Tj ET');

  const streamContent = textOps.join('\n');
  const encoder = new TextEncoder();
  const streamLen = encoder.encode(streamContent).length;

  const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
  const obj3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n';
  const obj4 = `4 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream\nendobj\n`;
  const obj5 = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n';
  const obj6 = '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';

  const header = '%PDF-1.4\n';
  let body = header;
  const offsets = [];

  const objs = [obj1, obj2, obj3, obj4, obj5, obj6];
  objs.forEach(o => {
    offsets.push(encoder.encode(body).length);
    body += o;
  });

  const xrefOffset = encoder.encode(body).length;
  let xref = 'xref\n0 7\n0000000000 65535 f \n';
  offsets.forEach(off => {
    xref += String(off).padStart(10, '0') + ' 00000 n \n';
  });

  const trailer = `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  const fullContent = body + xref + trailer;

  return new Blob([fullContent], { type: 'application/pdf' });
}

// Helper: Get active article or first available article
function getCurrentArticle() {
  const keys = Object.keys(ARTICLES);
  if (!keys.length) return null;
  if (currentArticleId && ARTICLES[currentArticleId]) {
    return ARTICLES[currentArticleId];
  }
  currentArticleId = keys[0];
  return ARTICLES[currentArticleId];
}

// --- 3. APPLICATION STATE ---
let currentLang = 'uz';
let currentArticleId = null;
let currentAbstractLang = 'uz';
let currentCiteFormat = 'apa';

// --- Contact Settings State & Manager ---
const DEFAULT_CONTACTS = {
  telegram: 'https://t.me/qardu_xabarlari',
  instagram: 'https://instagram.com/qardu_uz',
  phone: '+998 (75) 221-00-55'
};

function getContactSettings() {
  try {
    const saved = localStorage.getItem('qardu_contact_settings');
    if (saved) return { ...DEFAULT_CONTACTS, ...JSON.parse(saved) };
  } catch (e) {
    console.warn('Error reading contact settings:', e);
  }
  return DEFAULT_CONTACTS;
}

function updateContactSectionDOM(settings) {
  const s = settings || getContactSettings();
  const linkTg = document.getElementById('linkSocialTelegram');
  const dispTg = document.getElementById('displaySocialTelegram');
  const linkInsta = document.getElementById('linkSocialInstagram');
  const dispInsta = document.getElementById('displaySocialInstagram');
  const linkPhone = document.getElementById('linkSocialPhone');
  const dispPhone = document.getElementById('displaySocialPhone');

  const inpTg = document.getElementById('adminContactTelegram');
  const inpInsta = document.getElementById('adminContactInstagram');
  const inpPhone = document.getElementById('adminContactPhone');

  // Normalize telegram URL/handle
  let tgUrl = (s.telegram || '').trim();
  let tgHandle = tgUrl;
  if (tgUrl && !tgUrl.startsWith('http://') && !tgUrl.startsWith('https://')) {
    tgUrl = 'https://t.me/' + tgUrl.replace(/^@/, '');
  }
  if (tgUrl && tgUrl.includes('t.me/')) {
    tgHandle = '@' + tgUrl.split('t.me/')[1].replace(/\/$/, '');
  }

  // Normalize instagram URL/handle
  let instaUrl = (s.instagram || '').trim();
  let instaHandle = instaUrl;
  if (instaUrl && !instaUrl.startsWith('http://') && !instaUrl.startsWith('https://')) {
    instaUrl = 'https://instagram.com/' + instaUrl.replace(/^@/, '');
  }
  if (instaUrl && instaUrl.includes('instagram.com/')) {
    instaHandle = '@' + instaUrl.split('instagram.com/')[1].replace(/\/$/, '');
  }

  const rawPhone = (s.phone || '').replace(/[^0-9+]/g, '');

  if (linkTg && tgUrl) linkTg.href = tgUrl;
  if (dispTg) dispTg.textContent = tgHandle || '@qardu_xabarlari';

  if (linkInsta && instaUrl) linkInsta.href = instaUrl;
  if (dispInsta) dispInsta.textContent = instaHandle || '@qardu_uz';

  if (linkPhone && rawPhone) linkPhone.href = 'tel:' + rawPhone;
  if (dispPhone) dispPhone.textContent = s.phone || '+998 (75) 221-00-55';

  if (inpTg && !inpTg.matches(':focus')) inpTg.value = s.telegram || '';
  if (inpInsta && !inpInsta.matches(':focus')) inpInsta.value = s.instagram || '';
  if (inpPhone && !inpPhone.matches(':focus')) inpPhone.value = s.phone || '';
}

// --- 4. CORE RENDER FUNCTIONS ---

/**
 * Update all static UI elements translated via data-i18n
 */
function updateStaticTranslations() {
  const dict = I18N[currentLang] || I18N.uz;

  // Set html lang
  document.documentElement.lang = currentLang;

  // Translate elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (typeof dict[key] === 'string' && dict[key].includes('<') && dict[key].includes('>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Translate input placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update language buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });

  // Update contact section DOM
  updateContactSectionDOM();
}

/**
 * Render the active article into the DOM
 */
function renderArticle() {
  const article = getCurrentArticle();
  const dict = I18N[currentLang] || I18N.uz;

  const passportEl = document.getElementById('publicationPassport');
  const keywordsEl = document.getElementById('keywordsBlock');
  const attachmentEl = document.getElementById('attachmentSection');
  const secondaryActionsEl = document.querySelector('.secondary-actions-row');
  const abstractEl = document.getElementById('abstractSection');
  let emptyNoticeEl = document.getElementById('emptyArticleNotice');

  if (!article) {
    // Breadcrumbs
    const bcIssue = document.getElementById('bcIssue');
    if (bcIssue) bcIssue.textContent = '—';
    const bcArticleTitle = document.getElementById('bcArticleTitle');
    if (bcArticleTitle) bcArticleTitle.textContent = dict.noArticlesBreadcrumb || "Maqolalar";

    // Main Title
    const artTitle = document.getElementById('artTitle');
    if (artTitle) artTitle.textContent = dict.noArticlesTitle || "Hozircha saytda maqolalar mavjud emas";

    // Hide article sections
    if (passportEl) passportEl.style.display = 'none';
    if (keywordsEl) keywordsEl.style.display = 'none';
    if (attachmentEl) attachmentEl.style.display = 'none';
    if (secondaryActionsEl) secondaryActionsEl.style.display = 'none';
    if (abstractEl) abstractEl.style.display = 'none';

    // Show empty notice card
    if (!emptyNoticeEl) {
      emptyNoticeEl = document.createElement('div');
      emptyNoticeEl.id = 'emptyArticleNotice';
      emptyNoticeEl.className = 'empty-article-notice';
      const articleDetailCard = document.getElementById('articleDetailCard');
      if (articleDetailCard) {
        articleDetailCard.appendChild(emptyNoticeEl);
      }
    }
    if (emptyNoticeEl) {
      emptyNoticeEl.style.display = 'block';
      emptyNoticeEl.innerHTML = `
        <div class="empty-notice-card">
          <div class="empty-notice-icon">📄</div>
          <h3 class="empty-notice-title">${dict.noArticlesNoticeTitle || "Hozircha maqolalar mavjud emas"}</h3>
          <p class="empty-notice-desc">${dict.noArticlesNoticeDesc || "Admin hisobi (xabarlariqardu@gmail.com) orqali tizimga kirib yangi maqola joylashingiz mumkin."}</p>
        </div>
      `;
    }
    return;
  }

  // Article exists: Hide empty notice and show all sections
  if (emptyNoticeEl) emptyNoticeEl.style.display = 'none';
  if (passportEl) passportEl.style.display = '';
  if (keywordsEl) keywordsEl.style.display = '';
  if (attachmentEl) attachmentEl.style.display = '';
  if (secondaryActionsEl) secondaryActionsEl.style.display = '';
  if (abstractEl) abstractEl.style.display = '';

  // Breadcrumbs
  const bcIssue = document.getElementById('bcIssue');
  if (bcIssue) bcIssue.textContent = (article.issue && (article.issue[currentLang] || article.issue.uz)) || '—';
  const bcArticleTitle = document.getElementById('bcArticleTitle');
  if (bcArticleTitle) bcArticleTitle.textContent = (article.title && (article.title[currentLang] || article.title.uz)) || '—';

  // Title & Date
  const artTitle = document.getElementById('artTitle');
  if (artTitle) artTitle.textContent = (article.title && (article.title[currentLang] || article.title.uz)) || '—';
  const artPubDate = document.getElementById('artPubDate');
  if (artPubDate) artPubDate.textContent = (article.pubDate && (article.pubDate[currentLang] || article.pubDate.uz)) || '';
  const artAuthorsList = document.getElementById('artAuthorsList');
  if (artAuthorsList) artAuthorsList.textContent = (article.passport && article.passport.authorsText) || '';

  // Passport Table Values
  const valPubType = document.getElementById('valPubType');
  if (valPubType) {
    valPubType.textContent = (article.passport.pubType && (article.passport.pubType[currentLang] || article.passport.pubType.uz)) || article.passport.pubType || '—';
  }
  const valPubYear = document.getElementById('valPubYear');
  if (valPubYear) valPubYear.textContent = article.passport.pubYear || '—';
  const valAuthors = document.getElementById('valAuthors');
  if (valAuthors) valAuthors.textContent = article.passport.authorsText || '—';
  const valJournalName = document.getElementById('valJournalName');
  if (valJournalName) {
    valJournalName.textContent = (article.passport.journalName && (article.passport.journalName[currentLang] || article.passport.journalName.uz)) || 'QarDU Xabarlari';
  }
  const valVolIssue = document.getElementById('valVolIssue');
  if (valVolIssue) valVolIssue.textContent = article.passport.volumeIssue || '—';
  const valPagination = document.getElementById('valPagination');
  if (valPagination) valPagination.textContent = article.passport.pagination || '—';
  const valArticleType = document.getElementById('valArticleType');
  if (valArticleType) {
    valArticleType.textContent = (article.passport.articleType && (article.passport.articleType[currentLang] || article.passport.articleType.uz)) || article.passport.articleType || '—';
  }

  const doiLink = document.getElementById('doiLinkText');
  if (doiLink) {
    if (article.passport.doi) {
      doiLink.href = article.passport.doi;
      doiLink.textContent = article.passport.doi;
    } else {
      doiLink.removeAttribute('href');
      doiLink.textContent = '—';
    }
  }

  const valUDC = document.getElementById('valUDC');
  if (valUDC) valUDC.textContent = article.passport.udc || '—';

  // Kalit so'zlar
  const keywordsListEl = document.getElementById('keywordsList');
  if (keywordsListEl) {
    const kwList = article.keywords ? (article.keywords[currentLang] || article.keywords.uz) : [];
    keywordsListEl.textContent = Array.isArray(kwList) ? kwList.join(', ') : (kwList || '—');
  }

  // Annotatsiya
  renderAbstract();

  // Quick Citation Box
  renderQuickCitation();

  // Authors & Affiliations
  renderAuthors();

  // References List
  renderReferences();

  // Share URL input
  const shareInput = document.getElementById('shareUrlInput');
  if (shareInput) {
    shareInput.value = `${window.location.origin}/articles/${article.id}`;
  }

  // Update PDF modal content as well
  updatePdfModalContent();
}

// ========================================================
// BIRDSNZ-INSPIRED HOMEPAGE: CAROUSEL & STREAM ENGINES
// ========================================================

let carouselTimer = null;
let currentSlideIndex = 0;
let activeStreamCategory = 'all';
let currentStreamSearch = '';

/**
 * Render dynamic BirdsNZ-style auto-rotating carousel
 */

// --- ADMIN & CAROUSEL & ARCHIVE STATE HELPERS ---
function isAdminLoggedIn() {
  try {
    const rawUser = localStorage.getItem('qardu_user');
    if (!rawUser) return false;
    const user = JSON.parse(rawUser);
    return !!(user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase());
  } catch (e) {
    return false;
  }
}

function getCarouselArticleKeys() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem('qardu_carousel_articles') || 'null');
  } catch (e) {}

  if (Array.isArray(saved) && saved.length > 0) {
    const valid = saved.filter(id => ARTICLES[id] && !ARTICLES[id].isArchived);
    if (valid.length > 0) {
      return valid.slice(0, 10);
    }
  }

  // Fallback default: up to 10 non-archived articles
  const defaultKeys = Object.keys(ARTICLES)
    .filter(id => ARTICLES[id] && !ARTICLES[id].isArchived)
    .slice(0, 10);
  try {
    localStorage.setItem('qardu_carousel_articles', JSON.stringify(defaultKeys));
  } catch (e) {}
  return defaultKeys;
}

function setCarouselArticleKeys(keys) {
  const clean = (keys || []).slice(0, 10);
  localStorage.setItem('qardu_carousel_articles', JSON.stringify(clean));
  renderCarousel();
  updateAdminTabBadges();
}

function togglePinToCarousel(articleId) {
  let keys = getCarouselArticleKeys();
  if (keys.includes(articleId)) {
    keys = keys.filter(id => id !== articleId);
    setCarouselArticleKeys(keys);
    showToast("Maqola Bosh paneldan olindi.");
  } else {
    if (keys.length >= 10) {
      showToast("Bosh panelga ko'pi bilan 10 ta maqola qo'shish mumkin!");
      return;
    }
    keys.push(articleId);
    setCarouselArticleKeys(keys);
    showToast("Maqola Bosh panelga (karuselga) muvaffaqiyatli qo'shildi!");
  }
  renderAdminCarouselList();
  renderArticlesStream();
}

function archiveArticle(articleId) {
  if (!ARTICLES[articleId]) return;
  ARTICLES[articleId].isArchived = true;

  // Remove from carousel if pinned
  let carouselKeys = getCarouselArticleKeys();
  if (carouselKeys.includes(articleId)) {
    carouselKeys = carouselKeys.filter(id => id !== articleId);
    setCarouselArticleKeys(carouselKeys);
  }

  // Save to localStorage
  try {
    const stored = JSON.parse(localStorage.getItem('qardu_custom_articles') || '[]');
    const item = stored.find(x => x.id === articleId);
    if (item) {
      item.isArchived = true;
    } else {
      stored.unshift(ARTICLES[articleId]);
    }
    localStorage.setItem('qardu_custom_articles', JSON.stringify(stored));
  } catch (e) {}

  // Sync with Supabase if available
  if (window.supabaseClient) {
    try {
      const cleanId = articleId.replace('art-sb-', '');
      window.supabaseClient.from('articles')
        .update({ is_archived: true })
        .eq('id', cleanId)
        .then(({ error }) => {
          if (error) console.warn("Supabase archive error:", error.message);
        })
        .catch(err => console.warn("Supabase archive catch:", err));
    } catch (e) {}
  }

  renderArticlesStream();
  renderArchiveStream();
  renderCarousel();
  updateAdminTabBadges();
  showToast("Maqola arxivlandi va Arxiv bo'limiga o'tkazildi!");
}

function restoreArticle(articleId) {
  if (!ARTICLES[articleId]) return;
  ARTICLES[articleId].isArchived = false;

  try {
    const stored = JSON.parse(localStorage.getItem('qardu_custom_articles') || '[]');
    const item = stored.find(x => x.id === articleId);
    if (item) {
      item.isArchived = false;
      localStorage.setItem('qardu_custom_articles', JSON.stringify(stored));
    }
  } catch (e) {}

  if (window.supabaseClient) {
    try {
      const cleanId = articleId.replace('art-sb-', '');
      window.supabaseClient.from('articles')
        .update({ is_archived: false })
        .eq('id', cleanId)
        .then(({ error }) => {
          if (error) console.warn("Supabase restore error:", error.message);
        })
        .catch(err => console.warn("Supabase restore catch:", err));
    } catch (e) {}
  }

  renderArticlesStream();
  renderArchiveStream();
  renderCarousel();
  updateAdminTabBadges();
  showToast("Maqola qayta nashr qilindi va oqimga qaytarildi!");
}

function deleteArticlePermanent(articleId) {
  if (!confirm("Haqiqatan ham ushbu maqolani butunlay o'chirib tashlamoqchimisiz? Bu amalni qaytarib bo'lmaydi.")) {
    return;
  }

  delete ARTICLES[articleId];

  // Remove from localStorage
  try {
    const stored = JSON.parse(localStorage.getItem('qardu_custom_articles') || '[]');
    const filtered = stored.filter(x => x.id !== articleId);
    localStorage.setItem('qardu_custom_articles', JSON.stringify(filtered));
  } catch (e) {}

  // Remove from carousel
  let carouselKeys = getCarouselArticleKeys();
  if (carouselKeys.includes(articleId)) {
    carouselKeys = carouselKeys.filter(id => id !== articleId);
    setCarouselArticleKeys(carouselKeys);
  }

  // Remove from Supabase
  if (window.supabaseClient) {
    try {
      const cleanId = articleId.replace('art-sb-', '');
      window.supabaseClient.from('articles')
        .delete()
        .eq('id', cleanId)
        .then(({ error }) => {
          if (error) console.warn("Supabase delete error:", error.message);
        })
        .catch(err => console.warn("Supabase delete catch:", err));
    } catch (e) {}
  }

  renderArticlesStream();
  renderArchiveStream();
  renderCarousel();
  updateAdminTabBadges();
  showToast("Maqola butunlay o'chirildi!");
}

function updateAdminTabBadges() {
  const carouselKeys = getCarouselArticleKeys();
  const archivedKeys = Object.keys(ARTICLES).filter(id => ARTICLES[id] && ARTICLES[id].isArchived);

  const carouselCountEl = document.getElementById('adminCarouselTabCount');
  if (carouselCountEl) carouselCountEl.textContent = `${carouselKeys.length}/10`;

  const archiveCountEl = document.getElementById('adminArchiveTabCount');
  if (archiveCountEl) archiveCountEl.textContent = `${archivedKeys.length}`;
}

function renderAdminCarouselList() {
  const container = document.getElementById('adminCarouselListContainer');
  const countBadge = document.getElementById('adminCarouselSummaryCount');
  if (!container) return;

  const carouselKeys = getCarouselArticleKeys();
  if (countBadge) {
    countBadge.textContent = `Bosh panelda: ${carouselKeys.length} / 10 ta tanlangan`;
  }

  const allActiveKeys = Object.keys(ARTICLES).filter(id => ARTICLES[id] && !ARTICLES[id].isArchived);

  if (!allActiveKeys.length) {
    container.innerHTML = '<div style="text-align: center; padding: 24px; color: #64748b;">Hozircha saytda faol maqolalar yo\'q.</div>';
    return;
  }

  container.innerHTML = '';
  allActiveKeys.forEach(id => {
    const art = ARTICLES[id];
    const isPinned = carouselKeys.includes(id);
    const title = (art.title && (art.title[currentLang] || art.title.uz)) || 'Nomsiz maqola';
    const authors = (art.passport && art.passport.authorsText) || '';
    const issue = (art.issue && (art.issue[currentLang] || art.issue.uz)) || '';

    const card = document.createElement('div');
    card.className = `admin-manage-card ${isPinned ? 'pinned' : ''}`;
    card.innerHTML = `
      <div class="admin-manage-card-info">
        <h4 class="admin-manage-title">${title}</h4>
        <div class="admin-manage-meta">
          <span>✍️ ${authors}</span>
          <span>•</span>
          <span>📅 ${issue}</span>
          ${isPinned ? '<span style="color: #0284c7; font-weight: 700;">★ Bosh panelda</span>' : ''}
        </div>
      </div>
      <div class="admin-manage-actions">
        <button type="button" class="btn-manage-pin ${isPinned ? 'active' : ''}" data-id="${id}">
          ${isPinned ? '✓ Bosh paneldan olish' : '📌 Bosh panelga qo\'shish'}
        </button>
      </div>
    `;

    card.querySelector('.btn-manage-pin').addEventListener('click', (e) => {
      e.stopPropagation();
      togglePinToCarousel(id);
    });

    container.appendChild(card);
  });
}

function renderAdminArchiveList() {
  const container = document.getElementById('adminArchiveListContainer');
  if (!container) return;

  const archivedKeys = Object.keys(ARTICLES).filter(id => ARTICLES[id] && ARTICLES[id].isArchived);
  updateAdminTabBadges();

  if (!archivedKeys.length) {
    container.innerHTML = '<div style="text-align: center; padding: 32px 16px; color: #64748b; font-size: 0.95rem;">Arxivlangan maqolalar mavjud emas. Maqolalarni arxivlasangiz, ular bu yerda saqlanadi va qayta nashr etish mumkin bo\'ladi.</div>';
    return;
  }

  container.innerHTML = '';
  archivedKeys.forEach(id => {
    const art = ARTICLES[id];
    const title = (art.title && (art.title[currentLang] || art.title.uz)) || 'Nomsiz maqola';
    const authors = (art.passport && art.passport.authorsText) || '';
    const issue = (art.issue && (art.issue[currentLang] || art.issue.uz)) || '';

    const card = document.createElement('div');
    card.className = 'admin-manage-card';
    card.style.background = '#fffbeb';
    card.style.borderColor = '#fde68a';
    card.innerHTML = `
      <div class="admin-manage-card-info">
        <h4 class="admin-manage-title">${title}</h4>
        <div class="admin-manage-meta">
          <span>✍️ ${authors}</span>
          <span>•</span>
          <span>📅 ${issue}</span>
          <span style="color: #b45309; font-weight: 700; background: #fef3c7; padding: 2px 6px; border-radius: 4px;">Arxivda</span>
        </div>
      </div>
      <div class="admin-manage-actions">
        <button type="button" class="btn-manage-restore" data-id="${id}" title="Maqolani yana saytga qaytarish">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
          <span>Qayta chiqarish</span>
        </button>
        <button type="button" class="btn-manage-delete" data-id="${id}" title="Maqolani butunlay o'chirish">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          <span>O'chirish</span>
        </button>
      </div>
    `;

    card.querySelector('.btn-manage-restore').addEventListener('click', () => {
      restoreArticle(id);
    });

    card.querySelector('.btn-manage-delete').addEventListener('click', () => {
      deleteArticlePermanent(id);
    });

    container.appendChild(card);
  });
}

function renderCarousel() {
  const container = document.getElementById('homeCarousel');
  const dotsContainer = document.getElementById('carouselDots');
  if (!container || !dotsContainer) return;

  const articleKeys = getCarouselArticleKeys();
  if (!articleKeys.length) {
    container.innerHTML = `
      <div class="c-homeCarousel__slide active" style="background: linear-gradient(135deg, #01243d, #013a5e); display: flex; align-items: center; justify-content: center;">
        <div style="text-align: center; color: #ffffff; padding: 20px;">
          <h3 style="font-size: 1.4rem; margin-bottom: 8px;">QarDU Xabarlari</h3>
          <p style="color: #93c5fd;">Yangi son nashrga tayyorlanmoqda</p>
        </div>
      </div>
    `;
    dotsContainer.innerHTML = '';
    return;
  }

  container.innerHTML = '';
  dotsContainer.innerHTML = '';

  articleKeys.forEach((key, idx) => {
    const art = ARTICLES[key];
    const slide = document.createElement('div');
    slide.className = `c-homeCarousel__slide ${idx === 0 ? 'active' : ''}`;
    slide.dataset.index = idx;

    if (art.slideImage) {
      slide.style.backgroundImage = `url('${art.slideImage}')`;
    } else if (art.slideTheme) {
      slide.style.background = art.slideTheme;
    } else {
      slide.style.background = `linear-gradient(135deg, #01243d 0%, #014168 100%)`;
    }

    const catText = (art.category && (art.category[currentLang] || art.category.uz)) || 'Ilmiy maqola';
    const titleText = (art.title && (art.title[currentLang] || art.title.uz)) || '';
    const authorText = (art.passport && art.passport.authorsText) || '';
    const issueText = (art.issue && (art.issue[currentLang] || art.issue.uz)) || '2025-yil';
    const dict = I18N[currentLang] || I18N.uz;

    slide.innerHTML = `
      <div class="c-homeCarousel__slide--textWrapper">
        <div class="c-homeCarousel__slide--badge">${catText}</div>
        <p class="c-homeCarousel__slide--title">
          <span class="c-homeCarousel__slide--title-highlight">${titleText}</span>
        </p>
        <div class="c-homeCarousel__slide--meta">
          <span>✍️ ${authorText}</span>
          <span>•</span>
          <span>📅 ${issueText}</span>
        </div>
        <button type="button" class="c-homeCarousel__slide--link" data-id="${key}">
          <span>${dict.btnReadMore || "Batafsil o'qish →"}</span>
        </button>
      </div>
      
    `;

    slide.querySelector('.c-homeCarousel__slide--link').addEventListener('click', (e) => {
      e.stopPropagation();
      showArticleDetailView(key);
    });

    slide.addEventListener('click', () => {
      showArticleDetailView(key);
    });

    container.appendChild(slide);

    // Indicator Dot
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `c-homeCarousel__dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Slide ${idx + 1}`);
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(idx);
    });
    dotsContainer.appendChild(dot);
  });

  currentSlideIndex = 0;
  startCarouselAutoPlay();
}

function goToSlide(index) {
  const container = document.getElementById('homeCarousel');
  const dotsContainer = document.getElementById('carouselDots');
  if (!container) return;
  const slides = container.querySelectorAll('.c-homeCarousel__slide');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.c-homeCarousel__dot') : [];
  if (!slides.length) return;

  const total = slides.length;
  currentSlideIndex = (index + total) % total;

  slides.forEach((s, i) => {
    s.classList.toggle('active', i === currentSlideIndex);
  });
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === currentSlideIndex);
  });
}

function nextSlide() {
  goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  goToSlide(currentSlideIndex - 1);
}

function startCarouselAutoPlay() {
  stopCarouselAutoPlay();
  carouselTimer = setInterval(nextSlide, 5500);
}

function stopCarouselAutoPlay() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
    carouselTimer = null;
  }
}

/**
 * Render Sequential Articles Stream ("Ketma-ket chiqib turishi")
 */
function renderArticlesStream(category = activeStreamCategory, searchQuery = currentStreamSearch) {
  activeStreamCategory = category;
  currentStreamSearch = (searchQuery || '').toLowerCase().trim();

  const container = document.getElementById('articlesStreamFeed');
  const countBadge = document.getElementById('streamCountBadge');
  if (!container) return;

  const dict = I18N[currentLang] || I18N.uz;
  const articleKeys = Object.keys(ARTICLES);

  const filteredKeys = articleKeys.filter(key => {
    const art = ARTICLES[key];
    if (!art || art.isArchived) return false;
    if (activeStreamCategory !== 'all') {
      if (art.categoryKey && art.categoryKey !== activeStreamCategory) {
        return false;
      }
      if (!art.categoryKey) {
        const catName = ((art.category && (art.category[currentLang] || art.category.uz)) || '').toLowerCase();
        if (activeStreamCategory === 'nat' && !catName.includes('tabiiy') && !catName.includes('ekolog')) return false;
        if (activeStreamCategory === 'tech' && !catName.includes('texnolog') && !catName.includes('ai') && !catName.includes('axborot')) return false;
        if (activeStreamCategory === 'econ' && !catName.includes('iqtisod') && !catName.includes('biznes')) return false;
        if (activeStreamCategory === 'hist' && !catName.includes('tarix') && !catName.includes('filolog') && !catName.includes('gumanitar')) return false;
      }
    }

    if (currentStreamSearch) {
      const title = ((art.title && (art.title[currentLang] || art.title.uz)) || '').toLowerCase();
      const authors = ((art.passport && art.passport.authorsText) || '').toLowerCase();
      const abstract = ((art.abstract && (art.abstract[currentLang] || art.abstract.uz)) || '').toLowerCase();
      const kw = ((art.keywords && (art.keywords[currentLang] || art.keywords.uz)) || []).join(' ').toLowerCase();

      if (!title.includes(currentStreamSearch) &&
          !authors.includes(currentStreamSearch) &&
          !abstract.includes(currentStreamSearch) &&
          !kw.includes(currentStreamSearch)) {
        return false;
      }
    }

    return true;
  });

  if (countBadge) {
    countBadge.textContent = `${filteredKeys.length} ${dict.articlesCount || 'ta maqola'}`;
  }

  container.innerHTML = '';

  if (!filteredKeys.length) {
    const emptyBox = document.createElement('div');
    emptyBox.className = 'empty-notice-card';
    emptyBox.style.margin = '20px 0';
    emptyBox.innerHTML = `
      <div class="empty-notice-icon">🔍</div>
      <h3 class="empty-notice-title">${dict.noArticlesFound || "Qidiruv bo'yicha maqolalar topilmadi"}</h3>
      <p class="empty-notice-desc">${dict.noArticlesInList || "Iltimos, boshqa kalit so'z yoki toifani tanlab ko'ring."}</p>
    `;
    container.appendChild(emptyBox);
    return;
  }

  filteredKeys.forEach(key => {
    const art = ARTICLES[key];
    const isPinned = getCarouselArticleKeys().includes(key);
    const isAdmin = isAdminLoggedIn();
    const catText = (art.category && (art.category[currentLang] || art.category.uz)) || 'Ilmiy maqola';
    const titleText = (art.title && (art.title[currentLang] || art.title.uz)) || '';
    const authorText = (art.passport && art.passport.authorsText) || '';
    const issueText = (art.issue && (art.issue[currentLang] || art.issue.uz)) || '';
    const pubYearText = (art.passport && art.passport.pubYear) ? `${art.passport.pubYear}-yil` : '';
    const doiText = (art.passport && art.passport.doi) || '';
    const abstractText = (art.abstract && (art.abstract[currentLang] || art.abstract.uz)) || '';
    const kwList = (art.keywords && (art.keywords[currentLang] || art.keywords.uz)) || [];

    let badgeClass = 'article-stream-category-badge';
    if (art.categoryKey === 'tech') badgeClass += ' article-stream-category-badge--ai';
    else if (art.categoryKey === 'econ') badgeClass += ' article-stream-category-badge--econ';
    else if (art.categoryKey === 'hist') badgeClass += ' article-stream-category-badge--hist';

    const coverImgSrc = art.coverImage || art.slideImage || null;
    const card = document.createElement('article');
    card.className = `article-stream-card ${coverImgSrc ? 'article-stream-card--has-cover' : ''}`;
    card.innerHTML = `
      ${coverImgSrc ? `
        <div class="article-stream-cover">
          <img src="${coverImgSrc}" alt="${titleText}" class="article-stream-cover-img" loading="lazy">
        </div>
      ` : ''}
      <div class="article-stream-meta-row">
        <span class="${badgeClass}">${catText}</span>
        <span class="article-stream-issue-pill">${issueText}</span>
        <span>•</span>
        <span>${pubYearText}</span>
        ${doiText ? `<span>•</span><span class="article-stream-doi">DOI: ${doiText.replace('https://doi.org/', '')}</span>` : ''}
        ${isPinned ? '<span class="article-pinned-pill">📌 Bosh panelda</span>' : ''}
      </div>

      <h3 class="article-stream-title">${titleText}</h3>

      <div class="article-stream-authors-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>${authorText} — Qarshi Davlat Universiteti</span>
      </div>

      <p class="article-stream-abstract">${abstractText}</p>

      ${kwList.length ? `
        <div class="article-stream-keywords">
          <span class="article-stream-kw-label">${dict.keywordsLabel || 'Kalit so\'zlar'}:</span>
          ${kwList.map(kw => `<span class="article-stream-kw-tag">${kw}</span>`).join('')}
        </div>
      ` : ''}

      <div class="article-stream-actions">
        <div class="article-stream-actions-left">
          <button type="button" class="btn-stream-read" data-id="${key}">
            <span>${dict.btnReadArticle || "Maqolani o'qish"}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button type="button" class="btn-stream-pdf" data-id="${key}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>${dict.btnDownloadPdf || "PDF yuklab olish"}</span>
          </button>
        </div>

        <div class="article-stream-actions-right">
          <button type="button" class="btn-stream-tool btn-stream-cite" data-id="${key}" title="${dict.citeBtn || 'Iqtibos'}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            </svg>
            <span>${dict.btnQuickCite || "Iqtibos"}</span>
          </button>
          <button type="button" class="btn-stream-tool btn-stream-share" data-id="${key}" title="${dict.shareBtn || 'Ulashish'}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            <span>${dict.btnQuickShare || "Ulashish"}</span>
          </button>
        </div>
      </div>

      ${isAdmin ? `
        <div class="article-stream-admin-bar">
          <div class="article-stream-admin-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
            </svg>
            <span>Admin boshqaruvi:</span>
          </div>
          <div class="article-stream-admin-buttons">
            <button type="button" class="btn-card-admin btn-card-pin ${isPinned ? 'is-pinned' : ''}" data-id="${key}" title="${isPinned ? 'Bosh paneldan olish' : 'Bosh sahifadagi suzuvchi panelga qadash'}">
              ${isPinned ? `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>Qadashni bekor qilish</span>
              ` : `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/>
                </svg>
                <span>Bosh panelga qadash</span>
              `}
            </button>
            <button type="button" class="btn-card-admin btn-card-archive" data-id="${key}" title="Ushbu maqolani arxivlash">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                <rect x="1" y="3" width="22" height="5"></rect>
                <line x1="10" y1="12" x2="14" y2="12"></line>
              </svg>
              <span>Arxivlash</span>
            </button>
            <button type="button" class="btn-card-admin btn-card-delete" data-id="${key}" title="Maqolani butunlay o'chirish">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span>O'chirish</span>
            </button>
          </div>
        </div>
      ` : ''}
    `;

    if (isAdmin) {
      card.querySelector('.btn-card-pin')?.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePinToCarousel(key);
      });
      card.querySelector('.btn-card-archive')?.addEventListener('click', (e) => {
        e.stopPropagation();
        archiveArticle(key);
      });
      card.querySelector('.btn-card-delete')?.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteArticlePermanent(key);
      });
    }

    card.querySelector('.article-stream-title').addEventListener('click', () => {
      showArticleDetailView(key);
    });

    card.querySelector('.btn-stream-read').addEventListener('click', () => {
      showArticleDetailView(key);
    });

    card.querySelector('.btn-stream-pdf').addEventListener('click', (e) => {
      e.stopPropagation();
      currentArticleId = key;
      triggerPdfDownload();
    });

    card.querySelector('.btn-stream-cite').addEventListener('click', (e) => {
      e.stopPropagation();
      currentArticleId = key;
      const citeModal = document.getElementById('citeModal');
      if (citeModal) {
        updateCitationView();
        citeModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
      }
    });

    card.querySelector('.btn-stream-share').addEventListener('click', (e) => {
      e.stopPropagation();
      currentArticleId = key;
      const shareModal = document.getElementById('shareModal');
      if (shareModal) {
        shareModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
      }
    });

    container.appendChild(card);
  });
}

/**
 * Switch page view to Bosh sahifa (Home Page View)
 * Note: Articles stream is NOT on home view; only Hero & Carousel and Contact
 */
function hideAllViews() {
  const ids = ['homeView', 'articlesView', 'archiveView', 'contactsSettingsView', 'articleDetailView'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

function setActiveNavItem(activeId) {
  const items = ['navItemHome', 'navItemArticles', 'navItemArchive', 'navItemContacts'];
  items.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === activeId) el.classList.add('active');
      else el.classList.remove('active');
    }
  });
}

function showHomeView() {
  currentActiveView = 'home';
  hideAllViews();
  const homeView = document.getElementById('homeView');
  if (homeView) homeView.style.display = 'block';
  setActiveNavItem('navItemHome');
  const breadcrumbBanner = document.getElementById('pageBreadcrumbBanner');
  if (breadcrumbBanner) breadcrumbBanner.style.display = 'none';
  renderCarousel();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showArticlesView() {
  currentActiveView = 'articles';
  hideAllViews();
  const articlesView = document.getElementById('articlesView');
  if (articlesView) articlesView.style.display = 'block';
  setActiveNavItem('navItemArticles');
  const breadcrumbBanner = document.getElementById('pageBreadcrumbBanner');
  if (breadcrumbBanner) breadcrumbBanner.style.display = 'none';
  renderArticlesStream();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showArchiveView() {
  if (!isAdminLoggedIn()) {
    showToast("Arxiv bo'limiga faqat admin ruxsatiga ega!");
    showHomeView();
    return;
  }
  currentActiveView = 'archive';
  hideAllViews();
  const archiveView = document.getElementById('archiveView');
  if (archiveView) archiveView.style.display = 'block';
  setActiveNavItem('navItemArchive');
  const breadcrumbBanner = document.getElementById('pageBreadcrumbBanner');
  if (breadcrumbBanner) breadcrumbBanner.style.display = 'none';
  renderArchiveStream();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showContactsView() {
  if (!isAdminLoggedIn()) {
    showToast("Aloqa sozlamalariga faqat admin ruxsatiga ega!");
    showHomeView();
    return;
  }
  currentActiveView = 'contacts';
  hideAllViews();
  const contactsView = document.getElementById('contactsSettingsView');
  if (contactsView) contactsView.style.display = 'block';
  setActiveNavItem('navItemContacts');
  const breadcrumbBanner = document.getElementById('pageBreadcrumbBanner');
  if (breadcrumbBanner) breadcrumbBanner.style.display = 'none';
  populateContactSettingsForm();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function populateContactSettingsForm() {
  const contacts = getContactSettings();
  const inpTg = document.getElementById('adminPageContactTelegram');
  const inpInsta = document.getElementById('adminPageContactInstagram');
  const inpPhone = document.getElementById('adminPageContactPhone');
  const inpEmail = document.getElementById('adminPageContactEmail');
  const inpAddr = document.getElementById('adminPageContactAddress');

  if (inpTg && contacts.telegram) inpTg.value = contacts.telegram;
  if (inpInsta && contacts.instagram) inpInsta.value = contacts.instagram;
  if (inpPhone && contacts.phone) inpPhone.value = contacts.phone;
  if (inpEmail && contacts.email) inpEmail.value = contacts.email;
  if (inpAddr && contacts.address) inpAddr.value = contacts.address;
}

function showArticleDetailView(articleId) {
  hideAllViews();
  const articleDetailView = document.getElementById('articleDetailView');
  const breadcrumbBanner = document.getElementById('pageBreadcrumbBanner');
  if (articleId && ARTICLES[articleId]) {
    currentArticleId = articleId;
  }
  if (articleDetailView) articleDetailView.style.display = 'block';
  if (breadcrumbBanner) breadcrumbBanner.style.display = 'block';
  setActiveNavItem('navItemArticles');
  renderArticle();
  window.scrollTo({ top: 100, behavior: 'smooth' });
}

/**
 * Render Abstract in current website language
 */
function renderAbstract() {
  const article = getCurrentArticle();
  const textContainer = document.getElementById('abstractContentText');
  if (!textContainer) return;
  if (!article || !article.abstract) {
    textContainer.innerHTML = '';
    return;
  }
  const absText = article.abstract[currentLang] || article.abstract.uz || '';
  textContainer.innerHTML = `<p>${absText}</p>`;
}

/**
 * Render Quick Citation in the search-extract box
 */
function renderQuickCitation() {
  const quickEl = document.getElementById('quickCitationText');
  if (!quickEl) return;
  const article = getCurrentArticle();
  if (!article || !article.passport) {
    quickEl.innerHTML = '';
    return;
  }
  const authors = article.passport.authorsText || '—';
  const year = article.passport.pubYear || '';
  const title = (article.title && (article.title[currentLang] || article.title.uz)) || '—';
  const journal = "QarDU Xabarlari (Bulletin of KarSU)";
  const volIssue = article.passport.volumeIssue || '';
  const pages = article.passport.pagination || '';
  const doi = article.passport.doi || '';

  const quickHtml = `${authors} (${year}). ${title}. <i>${journal}</i>, ${volIssue}, ${pages}. <a href="${doi}" target="_blank" rel="noopener">${doi}</a>`;
  quickEl.innerHTML = quickHtml;
}

/**
 * Render Authors profile cards
 */
function renderAuthors() {
  const container = document.getElementById('authorsGrid');
  if (!container) return;
  container.innerHTML = '';
  const article = getCurrentArticle();
  if (!article || !article.authors || !article.authors.length) return;

  article.authors.forEach(author => {
    const card = document.createElement('div');
    card.className = 'author-card';
    const authorName = (author.name && (author.name[currentLang] || author.name.uz)) || author.name || '—';
    const authorDegree = (author.degree && (author.degree[currentLang] || author.degree.uz)) || author.degree || '';
    const authorAffil = (author.affiliation && (author.affiliation[currentLang] || author.affiliation.uz)) || author.affiliation || '';

    card.innerHTML = `
      <h4 class="author-name">${authorName}</h4>
      ${authorDegree ? `<div class="author-role">${authorDegree}</div>` : ''}
      ${authorAffil ? `<p class="author-affil">${authorAffil}</p>` : ''}
      ${author.orcid ? `
      <div class="author-meta-links">
        <a href="https://orcid.org/${author.orcid}" target="_blank" rel="noopener" class="orcid-link" title="ORCID ID">
          <span>iD</span> ${author.orcid}
        </a>
        ${author.email ? `<span>•</span><a href="mailto:${author.email}">${author.email}</a>` : ''}
      </div>` : ''}
    `;
    container.appendChild(card);
  });
}

/**
 * Render References
 */
function renderReferences() {
  const list = document.getElementById('referencesList');
  if (!list) return;
  list.innerHTML = '';
  const article = getCurrentArticle();
  const parentSection = list.closest('.references-section');

  if (!article || !article.references || !article.references.length) {
    if (parentSection) parentSection.style.display = 'none';
    return;
  }
  if (parentSection) parentSection.style.display = '';

  article.references.forEach((ref) => {
    const li = document.createElement('li');
    li.textContent = ref;
    list.appendChild(li);
  });
}

/**
 * Populate Mock PDF Viewer
 */
function updatePdfModalContent() {
  const article = getCurrentArticle();
  const dict = I18N[currentLang] || I18N.uz;

  const pdfModalTitle = document.getElementById('pdfModalTitle');
  const pdfModalSubtitle = document.getElementById('pdfModalSubtitle');
  const pdfUdcText = document.getElementById('pdfUdcText');
  const pdfDoiText = document.getElementById('pdfDoiText');
  const pdfTitleText = document.getElementById('pdfTitleText');
  const pdfAuthorsText = document.getElementById('pdfAuthorsText');
  const pdfAffilText = document.getElementById('pdfAffilText');
  const pdfAbstractText = document.getElementById('pdfAbstractText');
  const pdfKeywordsText = document.getElementById('pdfKeywordsText');

  if (!article) {
    if (pdfModalTitle) pdfModalTitle.textContent = "Maqola PDF mutolaasi";
    if (pdfModalSubtitle) pdfModalSubtitle.textContent = "—";
    if (pdfUdcText) pdfUdcText.textContent = "UDK: —";
    if (pdfDoiText) pdfDoiText.textContent = "DOI: —";
    if (pdfTitleText) pdfTitleText.textContent = dict.noArticlesTitle || "Hozircha maqolalar mavjud emas";
    if (pdfAuthorsText) pdfAuthorsText.textContent = "—";
    if (pdfAffilText) pdfAffilText.textContent = "—";
    if (pdfAbstractText) pdfAbstractText.textContent = "—";
    if (pdfKeywordsText) pdfKeywordsText.textContent = "—";
    return;
  }

  const title = (article.title && (article.title[currentLang] || article.title.uz)) || '—';
  if (pdfModalTitle) pdfModalTitle.textContent = title;
  if (pdfModalSubtitle) pdfModalSubtitle.textContent = `QarDU Xabarlari, ${article.passport.pubYear || ''}, ${article.passport.volumeIssue || ''}-son`;

  if (pdfUdcText) pdfUdcText.textContent = `UDK: ${article.passport.udc || '—'}`;
  if (pdfDoiText) pdfDoiText.textContent = `DOI: ${article.passport.doi || '—'}`;
  if (pdfTitleText) pdfTitleText.textContent = title;
  if (pdfAuthorsText) pdfAuthorsText.textContent = article.passport.authorsText || '—';

  const firstAuthorAffil = (article.authors && article.authors[0] && article.authors[0].affiliation)
    ? (article.authors[0].affiliation[currentLang] || article.authors[0].affiliation.uz)
    : 'Qarshi Davlat Universiteti';
  if (pdfAffilText) pdfAffilText.textContent = firstAuthorAffil;

  if (pdfAbstractText) {
    pdfAbstractText.textContent = (article.abstract && (article.abstract[currentLang] || article.abstract.uz)) || '—';
  }
  if (pdfKeywordsText) {
    const kw = article.keywords ? (article.keywords[currentLang] || article.keywords.uz) : [];
    pdfKeywordsText.textContent = Array.isArray(kw) ? kw.join(', ') : (kw || '—');
  }
  const pdfFooterPages = document.getElementById('pdfFooterPages');
  if (pdfFooterPages) {
    pdfFooterPages.textContent = article.passport.pagination ? `Sahifalar: ${article.passport.pagination}` : 'Sahifalar: —';
  }
}

// --- 5. INTERACTIVE TOOLS & CITATIONS ---

/**
 * Generate formatted citation string
 */
function generateCitation(format) {
  const article = getCurrentArticle();
  if (!article || !article.passport) return '—';

  const title = (article.title && (article.title[currentLang] || article.title.uz)) || '—';
  const authors = article.passport.authorsText || '—';
  const year = article.passport.pubYear || '';
  const vol = (article.passport.volumeIssue || '').split(',')[0].trim();
  const issue = ((article.passport.volumeIssue || '').split(',')[1] || '').trim();
  const pages = article.passport.pagination || '';
  const doi = article.passport.doi || '';

  switch (format) {
    case 'apa':
      return `${authors} (${year}). ${title}. QarDU Xabarlari, ${vol}(${issue}), ${pages}. ${doi}`;
    case 'gost':
      return `${authors}. ${title} // QarDU Xabarlari. — ${year}. — Tom ${vol}, № ${issue}. — B. ${pages}. — DOI: ${doi}.`;
    case 'bibtex':
      return `@article{qardu_${year}_${article.id},\n  author = {${authors}},\n  title = {${title}},\n  journal = {QarDU Xabarlari (Bulletin of KarSU)},\n  year = {${year}},\n  volume = {${vol}},\n  number = {${issue}},\n  pages = {${pages}},\n  doi = {${doi}}\n}`;
    case 'mla':
      return `${authors}. "${title}." QarDU Xabarlari, vol. ${vol}, no. ${issue}, ${year}, pp. ${pages}. ${doi}.`;
    case 'chicago':
      return `${authors}. "${title}." QarDU Xabarlari ${vol}, no. ${issue} (${year}): ${pages}. ${doi}.`;
    default:
      return `${authors} (${year}). ${title}. QarDU Xabarlari, ${pages}.`;
  }
}

/**
 * Update the Citation modal view
 */
function updateCitationView() {
  const text = generateCitation(currentCiteFormat);
  document.getElementById('citeResultText').textContent = text;
  document.querySelectorAll('.cite-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-format') === currentCiteFormat);
  });
}

/**
 * Toast notification
 */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  msgEl.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/**
 * Realistic PDF File Download Engine
 * Downloads the author's uploaded PDF file or generates a formal academic PDF document
 */
async function triggerPdfDownload() {
  const article = getCurrentArticle();
  const dict = I18N[currentLang] || I18N.uz;

  if (!article || !article.passport) {
    showToast(dict.noArticlesNoticeTitle || "Hozircha yuklab olinadigan maqola mavjud emas.");
    return;
  }

  // Increment download count dynamically
  if (article.metrics) {
    article.metrics.downloads = (article.metrics.downloads || 0) + 1;
    const metricEl = document.getElementById('metricDownloads');
    if (metricEl) metricEl.textContent = article.metrics.downloads.toLocaleString();
  }

  const rawFileName = (article.passport && article.passport.fileName) || `QarDU_Xabarlari_${article.id}.pdf`;
  const fileName = rawFileName.toLowerCase().endsWith('.pdf') ? rawFileName : `${rawFileName}.pdf`;

  showToast(dict.toastDownloadStart || "Maqola yuklab olinmoqda...");

  // 1. Check in-memory runtime cache (Exact original file uploaded by user in current session)
  if (article.id && ARTICLE_FILES[article.id]) {
    downloadBlob(ARTICLE_FILES[article.id], fileName);
    return;
  }

  // 2. Check IndexedDB persistent local storage (Exact original file preserved across refreshes)
  if (article.id) {
    try {
      const record = await getArticleFileFromDb(article.id);
      if (record && record.blob) {
        ARTICLE_FILES[article.id] = record.blob;
        downloadBlob(record.blob, record.fileName || fileName);
        return;
      }
    } catch (dbErr) {
      console.warn("IndexedDB read note:", dbErr);
    }
  }

  // 3. Check Base64 stored in article passport
  if (article.passport && article.passport.fileBase64) {
    try {
      const blob = base64ToBlob(article.passport.fileBase64, 'application/pdf');
      if (blob) {
        downloadBlob(blob, fileName);
        return;
      }
    } catch (b64Err) {
      console.warn("Base64 decoding note:", b64Err);
    }
  }

  // 4. Check remote URL if exists (non-blob)
  if (article.passport && article.passport.fileUrl && !article.passport.fileUrl.startsWith('blob:')) {
    try {
      const resp = await fetch(article.passport.fileUrl);
      if (resp.ok) {
        const blob = await resp.blob();
        downloadBlob(blob, fileName);
        return;
      }
    } catch (fetchErr) {
      console.warn("Remote download note:", fetchErr);
    }
  }

  // 5. Generate genuine academic PDF 1.4 document
  try {
    const pdfBlob = generateArticlePdfBlob(article);
    downloadBlob(pdfBlob, fileName);
  } catch (pdfGenErr) {
    console.error("PDF generation error:", pdfGenErr);
    showToast("PDF faylni shakllantirishda xatolik yuz berdi.");
  }
}

// --- 6. EVENT LISTENERS SETUP ---
document.addEventListener('DOMContentLoaded', () => {

  // A. Language Switcher Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLang) {
        currentLang = selectedLang;
        currentAbstractLang = selectedLang; // sync abstract tab
        updateStaticTranslations();
        renderArticle();
        renderCarousel();
        renderArticlesStream();
        showToast(currentLang === 'uz' ? "O'zbek tiliga o'tkazildi" : (currentLang === 'ru' ? "Язык переключен на русский" : "Switched to English"));
      }
    });
  });

  // BirdsNZ Carousel Controls
  const carouselPrevBtn = document.getElementById('carouselPrevBtn');
  const carouselNextBtn = document.getElementById('carouselNextBtn');
  const homeCarousel = document.getElementById('homeCarousel');

  carouselPrevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    prevSlide();
  });
  carouselNextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    nextSlide();
  });
  homeCarousel?.addEventListener('mouseenter', stopCarouselAutoPlay);
  homeCarousel?.addEventListener('mouseleave', startCarouselAutoPlay);

  // Navigation Links for Views
  const navHomeLink = document.getElementById('navHomeLink');
  const brandLink = document.getElementById('brand-link');
  const bcHomeLink = document.getElementById('bcHomeLink');
  const btnBackToHome = document.getElementById('btnBackToHome');
  const btnHeroBrowse = document.getElementById('btnHeroBrowse');

  navHomeLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showHomeView();
  });

  brandLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showHomeView();
  });

  bcHomeLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showHomeView();
  });

  btnBackToHome?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentActiveView === 'home') {
      showHomeView();
    } else {
      showArticlesView();
    }
  });

  btnHeroBrowse?.addEventListener('click', (e) => {
    e.preventDefault();
    showArticlesView();
  });

  const navPublicationsLink = document.getElementById('navPublications');
  navPublicationsLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showArticlesView();
    history.pushState(null, '', '#publications');
  });

  const navArchiveLink = document.getElementById('navArchiveLink');
  navArchiveLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showArchiveView();
    history.pushState(null, '', '#archive');
  });

  const navContactsLink = document.getElementById('navContactsLink');
  navContactsLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showContactsView();
    history.pushState(null, '', '#contacts');
  });

  const bcArticlesLink = document.getElementById('bcArticles');
  bcArticlesLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showArticlesView();
  });

  // Category Filter Pills
  document.querySelectorAll('.stream-filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.stream-filter-pill').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const cat = e.currentTarget.getAttribute('data-category') || 'all';
      renderArticlesStream(cat, currentStreamSearch);
    });
  });

  // Stream Search Input
  const streamSearchInput = document.getElementById('streamSearchInput');
  streamSearchInput?.addEventListener('input', (e) => {
    renderArticlesStream(activeStreamCategory, e.target.value);
  });

  // B. Sample Article Selector (if present)
  const articleSelect = document.getElementById('articleSelect');
  if (articleSelect) {
    articleSelect.addEventListener('change', (e) => {
      currentArticleId = e.target.value;
      renderArticle();
      window.scrollTo({ top: 180, behavior: 'smooth' });
    });
  }

  // C. Copy DOI Button
  const btnCopyDoi = document.getElementById('btnCopyDoi');
  if (btnCopyDoi) {
    btnCopyDoi.addEventListener('click', () => {
      const article = getCurrentArticle();
      if (!article || !article.passport || !article.passport.doi) return;
      navigator.clipboard.writeText(article.passport.doi).then(() => {
        showToast(`DOI nusxalandi: ${article.passport.doi}`);
      });
    });
  }

  // E. Primary Download Button & Modal Download
  const btnDownloadPdf = document.getElementById('btnDownloadPdf');
  if (btnDownloadPdf) {
    btnDownloadPdf.addEventListener('click', (e) => {
      e.preventDefault();
      triggerPdfDownload();
    });
  }

  const btnModalDownloadDirect = document.getElementById('btnModalDownloadDirect');
  if (btnModalDownloadDirect) {
    btnModalDownloadDirect.addEventListener('click', (e) => {
      e.preventDefault();
      triggerPdfDownload();
    });
  }

  // F. Read Online Button -> Open PDF Modal
  const btnReadOnline = document.getElementById('btnReadOnline');
  const pdfModal = document.getElementById('pdfReaderModal');
  const btnClosePdfModal = document.getElementById('btnClosePdfModal');

  if (btnReadOnline && pdfModal) {
    btnReadOnline.addEventListener('click', () => {
      updatePdfModalContent();
      pdfModal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (btnClosePdfModal && pdfModal) {
    btnClosePdfModal.addEventListener('click', () => {
      pdfModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    });
  }

  // G. Citation Modal & Quick Copy
  const btnOpenCiteModal = document.getElementById('btnOpenCiteModal');
  const citeModal = document.getElementById('citeModal');
  const btnCloseCiteModal = document.getElementById('btnCloseCiteModal');

  if (btnOpenCiteModal && citeModal) {
    btnOpenCiteModal.addEventListener('click', () => {
      updateCitationView();
      citeModal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (btnCloseCiteModal && citeModal) {
    btnCloseCiteModal.addEventListener('click', () => {
      citeModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    });
  }

  // Cite tabs
  document.querySelectorAll('.cite-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      currentCiteFormat = e.currentTarget.getAttribute('data-format');
      updateCitationView();
    });
  });

  // Copy citation from modal
  const btnCopyCiteModal = document.getElementById('btnCopyCiteModal');
  if (btnCopyCiteModal) {
    btnCopyCiteModal.addEventListener('click', () => {
      const text = document.getElementById('citeResultText').textContent;
      navigator.clipboard.writeText(text).then(() => {
        const dict = I18N[currentLang] || I18N.uz;
        showToast(dict.toastCopySuccess);
      });
    });
  }

  // Download .RIS file
  const btnDownloadRis = document.getElementById('btnDownloadRis');
  if (btnDownloadRis) {
    btnDownloadRis.addEventListener('click', () => {
      const article = getCurrentArticle();
      if (!article || !article.passport) return;
      const title = (article.title && (article.title.en || article.title.uz)) || '';
      const authors = (article.passport.authorsText || '').replace(/;\s*/g, '\nAU  - ');
      const risContent = `TY  - JOUR
TI  - ${title}
AU  - ${authors}
T2  - QarDU Xabarlari (Bulletin of Karshi State University)
PY  - ${article.passport.pubYear || ''}
VL  - ${(article.passport.volumeIssue || '').split(',')[0].trim()}
IS  - ${((article.passport.volumeIssue || '').split(',')[1] || '').trim()}
SP  - ${article.passport.pagination || ''}
DO  - ${article.passport.doi || ''}
UR  - /articles/
ER  - `;

      const blob = new Blob([risContent], { type: 'application/x-research-info-systems' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `qardu_${article.id}.ris`;
      link.click();
      URL.revokeObjectURL(link.href);
      showToast(".RIS citation fayli yuklandi!");
    });
  }

  // Quick Citation copy button on the page
  const btnCopyQuickCitation = document.getElementById('btnCopyQuickCitation');
  if (btnCopyQuickCitation) {
    btnCopyQuickCitation.addEventListener('click', () => {
      const citationText = document.getElementById('quickCitationText').innerText;
      navigator.clipboard.writeText(citationText).then(() => {
        const dict = I18N[currentLang] || I18N.uz;
        showToast(dict.toastCopySuccess);
      });
    });
  }

  // H. Share Modal
  const btnOpenShareModal = document.getElementById('btnOpenShareModal');
  const shareModal = document.getElementById('shareModal');
  const btnCloseShareModal = document.getElementById('btnCloseShareModal');

  if (btnOpenShareModal && shareModal) {
    btnOpenShareModal.addEventListener('click', () => {
      shareModal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (btnCloseShareModal && shareModal) {
    btnCloseShareModal.addEventListener('click', () => {
      shareModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    });
  }

  // Copy share URL
  const btnCopyShareUrl = document.getElementById('btnCopyShareUrl');
  if (btnCopyShareUrl) {
    btnCopyShareUrl.addEventListener('click', () => {
      const shareUrl = document.getElementById('shareUrlInput').value;
      navigator.clipboard.writeText(shareUrl).then(() => {
        const dict = I18N[currentLang] || I18N.uz;
        showToast(dict.toastCopySuccess);
      });
    });
  }

  // Social share buttons helper
  function getShareData() {
    const article = getCurrentArticle();
    if (!article) {
      return {
        url: encodeURIComponent(window.location.origin),
        title: encodeURIComponent("QarDU Xabarlari ilmiy jurnali")
      };
    }
    const url = encodeURIComponent(`${window.location.origin}/articles/${article.id}`);
    const title = encodeURIComponent((article.title && (article.title[currentLang] || article.title.uz)) || "QarDU Xabarlari");
    return { url, title };
  }

  document.getElementById('shareTg')?.addEventListener('click', () => {
    const { url, title } = getShareData();
    window.open(`https://t.me/share/url?url=${url}&text=${title}`, '_blank');
  });
  document.getElementById('shareWa')?.addEventListener('click', () => {
    const { url, title } = getShareData();
    window.open(`https://api.whatsapp.com/send?text=${title}%20${url}`, '_blank');
  });
  document.getElementById('shareTw')?.addEventListener('click', () => {
    const { url, title } = getShareData();
    window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, '_blank');
  });
  document.getElementById('shareFb')?.addEventListener('click', () => {
    const { url, title } = getShareData();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  });
  document.getElementById('shareLi')?.addEventListener('click', () => {
    const { url, title } = getShareData();
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  });
  document.getElementById('shareEmail')?.addEventListener('click', () => {
    const { url, title } = getShareData();
    window.location.href = `mailto:?subject=${title}&body=${url}`;
  });

  // I. Print Article
  document.getElementById('btnPrintArticle')?.addEventListener('click', () => {
    window.print();
  });

  // J. Toggle References list
  const btnToggleRefs = document.getElementById('btnToggleRefs');
  const refsList = document.getElementById('referencesList');
  const toggleRefsText = document.getElementById('toggleRefsText');
  let refsExpanded = true;

  if (btnToggleRefs && refsList) {
    btnToggleRefs.addEventListener('click', () => {
      refsExpanded = !refsExpanded;
      refsList.style.display = refsExpanded ? 'block' : 'none';
      const dict = I18N[currentLang] || I18N.uz;
      toggleRefsText.textContent = refsExpanded ? dict.collapseBtn : dict.expandBtn;
    });
  }

  // K. Site Search Simulation
  const searchInput = document.getElementById('siteSearchInput');
  const searchBtn = document.getElementById('searchSubmitBtn');
  function handleSearch() {
    const val = searchInput.value.trim().toLowerCase();
    if (!val) return;

    // Check if query matches any article
    let found = null;
    for (const key of Object.keys(ARTICLES)) {
      const art = ARTICLES[key];
      const allText = `${art.title.uz} ${art.title.ru} ${art.title.en} ${art.keywords.uz.join(' ')} ${art.passport.authorsText}`.toLowerCase();
      if (allText.includes(val)) {
        found = key;
        break;
      }
    }

    if (found) {
      currentArticleId = found;
      if (articleSelect) articleSelect.value = found;
      renderArticle();
      showToast(`Maqola topildi: "${val}"`);
    } else {
      showToast(`Qidiruv natijasi topilmadi: "${val}"`);
    }
  }

  searchBtn?.addEventListener('click', handleSearch);
  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  // L. Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  mobileToggle?.addEventListener('click', () => {
    mainNav.classList.toggle('mobile-open');
  });

  // ========================================================
  // N. AUTHENTICATION & REGISTRATION CONTROLLER
  // ========================================================
  const authModal = document.getElementById('authModal');
  const btnOpenAuthModal = document.getElementById('btnOpenAuthModal');
  const topAuthBtn = document.getElementById('topAuthBtn');
  const btnCloseAuthModal = document.getElementById('btnCloseAuthModal');

  const tabBtnLogin = document.getElementById('tabBtnLogin');
  const tabBtnRegister = document.getElementById('tabBtnRegister');
  const paneLogin = document.getElementById('paneLogin');
  const paneRegister = document.getElementById('paneRegister');
  const paneForgot = document.getElementById('paneForgot');

  const btnGoToRegister = document.getElementById('btnGoToRegister');
  const btnGoToLogin = document.getElementById('btnGoToLogin');
  const linkForgotPassword = document.getElementById('linkForgotPassword');
  const btnBackToLoginFromForgot = document.getElementById('btnBackToLoginFromForgot');

  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const forgotForm = document.getElementById('forgotForm');
  const btnDemoFillAuthor = document.getElementById('btnDemoFillAuthor');

  const userProfilePill = document.getElementById('userProfilePill');
  const userDisplayName = document.getElementById('userDisplayName');
  const userAvatarText = document.getElementById('userAvatarText');
  const userRoleBadge = document.getElementById('userRoleBadge');
  const btnLogout = document.getElementById('btnLogout');

  /**
   * Open Auth Modal on specified tab ('login', 'register', 'forgot')
   */
  function openAuthModal(tab = 'login') {
    if (!authModal) return;
    authModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab);
  }

  /**
   * Close Auth Modal
   */
  function closeAuthModal() {
    if (!authModal) return;
    authModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  /**
   * Switch between Login, Register, and Forgot Password panes
   */
  function switchAuthTab(tabName) {
    if (!paneLogin || !paneRegister || !paneForgot) return;

    paneLogin.classList.remove('active');
    paneRegister.classList.remove('active');
    paneForgot.classList.remove('active');
    tabBtnLogin?.classList.remove('active');
    tabBtnRegister?.classList.remove('active');

    if (tabName === 'login') {
      paneLogin.classList.add('active');
      tabBtnLogin?.classList.add('active');
      document.getElementById('loginEmail')?.focus();
    } else if (tabName === 'register') {
      paneRegister.classList.add('active');
      tabBtnRegister?.classList.add('active');
      document.getElementById('regFullName')?.focus();
    } else if (tabName === 'forgot') {
      paneForgot.classList.add('active');
      document.getElementById('forgotEmail')?.focus();
    }
  }

  /**
   * Update header UI based on user login state (stored in localStorage)
   */
  function updateUserAuthState() {
    const rawUser = localStorage.getItem('qardu_user');
    const dict = I18N[currentLang] || I18N.uz;
    const submitPaperBtn = document.getElementById('submitPaperBtn');
    const adminAddArticleBtn = document.getElementById('adminAddArticleBtn');

    if (rawUser) {
      try {
        const user = JSON.parse(rawUser);
        const isAdmin = user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase();

        if (btnOpenAuthModal) {
          btnOpenAuthModal.style.display = 'none';
          btnOpenAuthModal.setAttribute('hidden', '');
        }
        if (topAuthBtn) topAuthBtn.style.display = 'none';
        if (submitPaperBtn) submitPaperBtn.style.display = 'inline-flex';

        // Show admin button only for admin email
        if (adminAddArticleBtn) {
          adminAddArticleBtn.style.display = isAdmin ? 'inline-flex' : 'none';
        }
        const btnAdminEditContacts = document.getElementById('btnAdminEditContacts');
        if (btnAdminEditContacts) {
          btnAdminEditContacts.style.display = isAdmin ? 'inline-flex' : 'none';
        }
        const navItemArchive = document.getElementById('navItemArchive');
        const navItemContacts = document.getElementById('navItemContacts');
        if (navItemArchive) navItemArchive.style.display = isAdmin ? 'block' : 'none';
        if (navItemContacts) navItemContacts.style.display = isAdmin ? 'block' : 'none';
        updateAdminTabBadges();
        renderArticlesStream();

        if (userProfilePill) {
          userProfilePill.style.display = 'inline-flex';
          userProfilePill.removeAttribute('hidden');
          if (userDisplayName) userDisplayName.textContent = user.name || 'Foydalanuvchi';

          // Generate 2-letter avatar initials
          const names = (user.name || '').trim().split(' ');
          let initials = 'U';
          if (names.length >= 2) {
            initials = (names[0][0] + names[1][0]).toUpperCase();
          } else if (names.length === 1 && names[0].length >= 1) {
            initials = names[0].substring(0, 2).toUpperCase();
          }
          if (userAvatarText) userAvatarText.textContent = initials;
          if (userRoleBadge) userRoleBadge.textContent = isAdmin ? 'Admin' : (user.role || dict.roleAuthorTitle || 'Muallif');
        }
      } catch (e) {
        localStorage.removeItem('qardu_user');
        if (submitPaperBtn) submitPaperBtn.style.display = 'none';
        if (adminAddArticleBtn) adminAddArticleBtn.style.display = 'none';
        const btnAdminEditContacts = document.getElementById('btnAdminEditContacts');
        if (btnAdminEditContacts) btnAdminEditContacts.style.display = 'none';
        if (userProfilePill) {
          userProfilePill.style.display = 'none';
          userProfilePill.setAttribute('hidden', '');
        }
        if (btnOpenAuthModal) {
          btnOpenAuthModal.style.display = 'inline-flex';
          btnOpenAuthModal.removeAttribute('hidden');
        }
      }
    } else {
      if (btnOpenAuthModal) {
        btnOpenAuthModal.style.display = 'inline-flex';
        btnOpenAuthModal.removeAttribute('hidden');
      }
      if (topAuthBtn) topAuthBtn.style.display = 'flex';
      if (submitPaperBtn) submitPaperBtn.style.display = 'none';
      if (adminAddArticleBtn) adminAddArticleBtn.style.display = 'none';
      const btnAdminEditContacts = document.getElementById('btnAdminEditContacts');
      if (btnAdminEditContacts) btnAdminEditContacts.style.display = 'none';
      const navItemArchive = document.getElementById('navItemArchive');
      const navItemContacts = document.getElementById('navItemContacts');
      if (navItemArchive) navItemArchive.style.display = 'none';
      if (navItemContacts) navItemContacts.style.display = 'none';
      if (currentActiveView === 'archive' || currentActiveView === 'contacts') {
        showHomeView();
      }
      renderArticlesStream();
      if (userProfilePill) {
        userProfilePill.style.display = 'none';
        userProfilePill.setAttribute('hidden', '');
      }
    }
  }

  // Open/Close Auth Modal Triggers
  btnOpenAuthModal?.addEventListener('click', () => openAuthModal('login'));
  topAuthBtn?.addEventListener('click', () => openAuthModal('login'));
  btnCloseAuthModal?.addEventListener('click', closeAuthModal);

  // Tab switching triggers
  tabBtnLogin?.addEventListener('click', () => switchAuthTab('login'));
  tabBtnRegister?.addEventListener('click', () => switchAuthTab('register'));
  btnGoToRegister?.addEventListener('click', () => switchAuthTab('register'));
  btnGoToLogin?.addEventListener('click', () => switchAuthTab('login'));
  linkForgotPassword?.addEventListener('click', (e) => {
    e.preventDefault();
    switchAuthTab('forgot');
  });
  btnBackToLoginFromForgot?.addEventListener('click', () => switchAuthTab('login'));

  // Password visibility toggles
  function setupPasswordToggle(btnId, inputId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    if (!btn || !input) return;
    btn.addEventListener('click', () => {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.innerHTML = isPassword
        ? `<svg class="pw-eye-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
        : `<svg class="pw-eye-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    });
  }
  setupPasswordToggle('btnToggleLoginPw', 'loginPassword');
  setupPasswordToggle('btnToggleRegPw', 'regPassword');

  // Helper: Apply user session to UI
  function applySupabaseUser(user) {
    const dict = I18N[currentLang] || I18N.uz;
    const meta = user.user_metadata || {};
    const fullName = meta.full_name || meta.name || (user.email ? user.email.split('@')[0] : 'Muallif');
    const role = meta.role || dict.roleAuthorTitle || 'Muallif';

    const formattedUser = {
      id: user.id,
      name: fullName,
      email: user.email,
      role: role,
      provider: user.app_metadata?.provider || 'email'
    };
    localStorage.setItem('qardu_user', JSON.stringify(formattedUser));
    updateUserAuthState();
  }

  // Initialize Supabase Auth & Session Listener
  async function initSupabaseAuth() {
    // Clear legacy mock author if exists without Supabase auth
    const raw = localStorage.getItem('qardu_user');
    if (raw) {
      try {
        const u = JSON.parse(raw);
        if (u.name === 'Prof. A.R. Oripov' && !u.id) {
          localStorage.removeItem('qardu_user');
        }
      } catch (e) { }
    }

    updateUserAuthState(); // First read cached state

    if (!window.supabaseClient) return;

    try {
      const { data: { session }, error } = await window.supabaseClient.auth.getSession();
      if (session && session.user) {
        applySupabaseUser(session.user);
      } else {
        localStorage.removeItem('qardu_user');
        updateUserAuthState();
      }
    } catch (err) {
      console.warn("Supabase getSession:", err);
    }

    // Subscribe to auth changes (login, logout, token refresh)
    window.supabaseClient.auth.onAuthStateChange((event, session) => {
      console.log("Supabase Auth Event:", event);
      if (session && session.user) {
        applySupabaseUser(session.user);
      } else if (event === 'SIGNED_OUT') {
        localStorage.removeItem('qardu_user');
        updateUserAuthState();
      }
    });
  }

  // Google Authentication Trigger
  const btnGoogleLogin = document.getElementById('btnGoogleLogin');
  const btnGoogleRegister = document.getElementById('btnGoogleRegister');

  async function handleGoogleAuth() {
    const dict = I18N[currentLang] || I18N.uz;
    if (window.supabaseClient) {
      showToast("Google orqali kirilmoqda...");
      try {
        const redirectOrigin = (window.location.origin && !window.location.origin.includes('localhost'))
          ? window.location.origin
          : 'https://qardu-xabarlari.vercel.app';
        const { error } = await window.supabaseClient.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: redirectOrigin + (window.location.pathname || '/')
          }
        });
        if (error) {
          showToast("Google xatoligi: " + error.message);
        }
      } catch (err) {
        showToast("Xatolik: " + err.message);
      }
    } else {
      const sampleUser = {
        name: 'Foydalanuvchi',
        email: 'user@qardu.uz',
        role: 'Foydalanuvchi',
        provider: 'google'
      };
      localStorage.setItem('qardu_user', JSON.stringify(sampleUser));
      updateUserAuthState();
      showToast(dict.toastLoginSuccess || "Tizimga muvaffaqiyatli kirdingiz!");
      closeAuthModal();
    }
  }

  btnGoogleLogin?.addEventListener('click', handleGoogleAuth);
  btnGoogleRegister?.addEventListener('click', handleGoogleAuth);

  // Login Form Submission
  loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail')?.value.trim();
    const pw = document.getElementById('loginPassword')?.value;
    const dict = I18N[currentLang] || I18N.uz;

    if (!email || !pw) {
      showToast("Iltimos, elektron pochta va parolni kiriting.");
      return;
    }

    const submitBtn = loginForm.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Kirilmoqda...";
    }

    if (window.supabaseClient) {
      try {
        const { data, error } = await window.supabaseClient.auth.signInWithPassword({
          email: email,
          password: pw
        });

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }

        if (error) {
          const errMsg = error.message === 'Invalid login credentials'
            ? "Elektron pochta yoki parol noto'g'ri!"
            : error.message;
          showToast("Xatolik: " + errMsg);
          return;
        }

        if (data.user) {
          applySupabaseUser(data.user);
          showToast(dict.toastLoginSuccess || "Tizimga muvaffaqiyatli kirdingiz!");
          closeAuthModal();
          loginForm.reset();
        }
      } catch (err) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
        showToast("Tarmoq xatosi: " + err.message);
      }
    } else {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
      const namePart = email.split('@')[0];
      const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
      const user = {
        name: formattedName,
        email: email,
        role: dict.roleAuthorTitle || 'Muallif',
        provider: 'email'
      };

      localStorage.setItem('qardu_user', JSON.stringify(user));
      updateUserAuthState();
      showToast(dict.toastLoginSuccess || "Tizimga muvaffaqiyatli kirdingiz!");
      closeAuthModal();
      loginForm.reset();
    }
  });

  // Register Form Submission (Google or Email only)
  registerForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dict = I18N[currentLang] || I18N.uz;
    const fullName = document.getElementById('regFullName')?.value.trim();
    const email = document.getElementById('regEmail')?.value.trim();
    const pw = document.getElementById('regPassword')?.value;
    const pwConfirm = document.getElementById('regPasswordConfirm')?.value;

    if (!fullName || !email || !pw) {
      showToast("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    if (pw !== pwConfirm) {
      showToast(dict.toastPwMismatch || "Parollar bir-biriga mos kelmadi!");
      return;
    }

    if (pw.length < 6) {
      showToast("Parol kamida 6 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    const submitBtn = registerForm.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Ro'yxatdan o'tilmoqda...";
    }

    if (window.supabaseClient) {
      try {
        const { data, error } = await window.supabaseClient.auth.signUp({
          email: email,
          password: pw,
          options: {
            data: {
              full_name: fullName,
              role: 'Muallif'
            }
          }
        });

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }

        if (error) {
          showToast("Xatolik: " + error.message);
          return;
        }

        if (data.session && data.user) {
          applySupabaseUser(data.user);
          showToast(dict.toastRegisterSuccess || "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!");
          closeAuthModal();
          registerForm.reset();
        } else {
          showToast("Tasdiqlash xati " + email + " pochtangizga yuborildi!");
          closeAuthModal();
          registerForm.reset();
        }
      } catch (err) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
        showToast("Tarmoq xatosi: " + err.message);
      }
    } else {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
      const newUser = {
        name: fullName,
        email: email,
        role: dict.roleAuthorTitle || 'Muallif',
        provider: 'email'
      };

      localStorage.setItem('qardu_user', JSON.stringify(newUser));
      updateUserAuthState();
      showToast(dict.toastRegisterSuccess || "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!");
      closeAuthModal();
      registerForm.reset();
    }
  });

  // Forgot Password Form Submission
  forgotForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dict = I18N[currentLang] || I18N.uz;
    const email = document.getElementById('forgotEmail')?.value.trim();
    if (!email) {
      showToast("Elektron pochtangizni kiriting.");
      return;
    }

    if (window.supabaseClient) {
      try {
        const redirectOrigin = (window.location.origin && !window.location.origin.includes('localhost'))
          ? window.location.origin
          : 'https://qardu-xabarlari.vercel.app';
        const { error } = await window.supabaseClient.auth.resetPasswordForEmail(email, {
          redirectTo: redirectOrigin + (window.location.pathname || '/')
        });
        if (error) {
          showToast("Xatolik: " + error.message);
          return;
        }
      } catch (err) {
        showToast("Tarmoq xatosi: " + err.message);
        return;
      }
    }

    showToast(dict.toastForgotSent || "Tiklash havolasi elektron pochtangizga yuborildi!");
    forgotForm.reset();
    setTimeout(() => switchAuthTab('login'), 1200);
  });

  // Logout Trigger
  btnLogout?.addEventListener('click', async () => {
    if (window.supabaseClient) {
      try {
        await window.supabaseClient.auth.signOut();
      } catch (err) {
        console.warn("Supabase signOut error:", err);
      }
    }
    localStorage.removeItem('qardu_user');
    updateUserAuthState();
    const dict = I18N[currentLang] || I18N.uz;
    showToast(dict.toastLogoutSuccess || "Tizimdan chiqdingiz!");
  });

  // ========================================================
  // O. ADMIN ARTICLE PUBLISHING PANEL
  // ========================================================
  const adminModal = document.getElementById('adminArticleModal');
  const adminAddArticleBtn = document.getElementById('adminAddArticleBtn');
  const btnCloseAdminModal = document.getElementById('btnCloseAdminModal');
  const btnCancelAdmin = document.getElementById('btnCancelAdmin');
  const adminArticleForm = document.getElementById('adminArticleForm');

  const adminFileInput = document.getElementById('adminFileUpload');
  const adminFileStatusText = document.getElementById('adminFileStatusText');

  // Cover image input elements
  const adminCoverImageInput = document.getElementById('adminCoverImageUpload');
  const adminImagePlaceholder = document.getElementById('adminImagePlaceholder');
  const adminImagePreviewBox = document.getElementById('adminImagePreviewBox');
  const adminImagePreviewThumb = document.getElementById('adminImagePreviewThumb');
  const adminImageFileName = document.getElementById('adminImageFileName');
  const btnRemoveCoverImage = document.getElementById('btnRemoveCoverImage');

  let currentCoverImageBase64 = null;
  let currentCoverImageFile = null;

  adminCoverImageInput?.addEventListener('change', async () => {
    if (adminCoverImageInput.files && adminCoverImageInput.files.length > 0) {
      const file = adminCoverImageInput.files[0];
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
      if (!validTypes.includes(file.type) && !file.name.match(/\.(png|jpe?g|webp)$/i)) {
        showToast("Faqat rasm (.png, .jpg, .webp) fayllarini yuklash mumkin!");
        adminCoverImageInput.value = '';
        currentCoverImageBase64 = null;
        currentCoverImageFile = null;
        return;
      }
      try {
        currentCoverImageFile = file;
        currentCoverImageBase64 = await readFileAsDataUrl(file);
        if (adminImagePreviewThumb) adminImagePreviewThumb.src = currentCoverImageBase64;
        if (adminImageFileName) adminImageFileName.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        if (adminImagePlaceholder) adminImagePlaceholder.style.display = 'none';
        if (adminImagePreviewBox) adminImagePreviewBox.style.display = 'flex';
      } catch (err) {
        console.warn("Cover image read error:", err);
      }
    }
  });

  btnRemoveCoverImage?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (adminCoverImageInput) adminCoverImageInput.value = '';
    currentCoverImageBase64 = null;
    currentCoverImageFile = null;
    if (adminImagePlaceholder) adminImagePlaceholder.style.display = 'flex';
    if (adminImagePreviewBox) adminImagePreviewBox.style.display = 'none';
    if (adminImagePreviewThumb) adminImagePreviewThumb.src = '';
  });

  // Admin Tabs & Contact Settings Elements
  const adminTabBtnArticle = document.getElementById('adminTabBtnArticle');
  const adminTabBtnContact = document.getElementById('adminTabBtnContact');
  const adminPaneArticle = document.getElementById('adminPaneArticle');
  const adminPaneContact = document.getElementById('adminPaneContact');
  const adminContactForm = document.getElementById('adminContactForm');
  const btnCancelContactAdmin = document.getElementById('btnCancelContactAdmin');
  const btnAdminEditContacts = document.getElementById('btnAdminEditContacts');

  const adminTabBtnCarousel = document.getElementById('adminTabBtnCarousel');
  const adminTabBtnArchive = document.getElementById('adminTabBtnArchive');
  const adminPaneCarousel = document.getElementById('adminPaneCarousel');
  const adminPaneArchive = document.getElementById('adminPaneArchive');

  function switchAdminTab(tabName) {
    [adminTabBtnArticle, adminTabBtnCarousel, adminTabBtnArchive, adminTabBtnContact].forEach(b => b?.classList.remove('active'));
    [adminPaneArticle, adminPaneCarousel, adminPaneArchive, adminPaneContact].forEach(p => {
      if (p) p.style.display = 'none';
    });

    if (tabName === 'carousel') {
      adminTabBtnCarousel?.classList.add('active');
      if (adminPaneCarousel) adminPaneCarousel.style.display = 'block';
      renderAdminCarouselList();
    } else if (tabName === 'archive') {
      adminTabBtnArchive?.classList.add('active');
      if (adminPaneArchive) adminPaneArchive.style.display = 'block';
      renderAdminArchiveList();
    } else if (tabName === 'contact') {
      adminTabBtnContact?.classList.add('active');
      if (adminPaneContact) adminPaneContact.style.display = 'block';
      const cur = getContactSettings();
      const inpTg = document.getElementById('adminContactTelegram');
      const inpInsta = document.getElementById('adminContactInstagram');
      const inpPhone = document.getElementById('adminContactPhone');
      if (inpTg) inpTg.value = cur.telegram;
      if (inpInsta) inpInsta.value = cur.instagram;
      if (inpPhone) inpPhone.value = cur.phone;
    } else {
      adminTabBtnArticle?.classList.add('active');
      if (adminPaneArticle) adminPaneArticle.style.display = 'block';
    }
    updateAdminTabBadges();
  }

  adminTabBtnCarousel?.addEventListener('click', () => switchAdminTab('carousel'));
  adminTabBtnArchive?.addEventListener('click', () => switchAdminTab('archive'));

  function openAdminModal() {
    if (!adminModal) return;
    adminModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeAdminModal() {
    if (!adminModal) return;
    adminModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (adminFileStatusText) {
      adminFileStatusText.textContent = "Faqat PDF (.pdf) formatdagi faylni tanlang";
    }
    if (adminCoverImageInput) adminCoverImageInput.value = '';
    currentCoverImageBase64 = null;
    currentCoverImageFile = null;
    if (adminImagePlaceholder) adminImagePlaceholder.style.display = 'flex';
    if (adminImagePreviewBox) adminImagePreviewBox.style.display = 'none';
    if (adminImagePreviewThumb) adminImagePreviewThumb.src = '';
  }

  // Tab switching triggers
  adminTabBtnArticle?.addEventListener('click', () => switchAdminTab('article'));
  adminTabBtnContact?.addEventListener('click', () => switchAdminTab('contact'));
  btnCancelContactAdmin?.addEventListener('click', closeAdminModal);

  // Quick edit button from homepage contact section
  btnAdminEditContacts?.addEventListener('click', (e) => {
    e.preventDefault();
    showContactsView();
    history.pushState(null, '', '#contacts');
  });

  // Admin Page Contacts Form
  const adminPageContactForm = document.getElementById('adminPageContactForm');
  adminPageContactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const telegram = document.getElementById('adminPageContactTelegram')?.value.trim();
    const instagram = document.getElementById('adminPageContactInstagram')?.value.trim();
    const phone = document.getElementById('adminPageContactPhone')?.value.trim();
    const email = document.getElementById('adminPageContactEmail')?.value.trim();
    const address = document.getElementById('adminPageContactAddress')?.value.trim();

    if (!telegram || !instagram || !phone) {
      showToast("Iltimos, asosiy aloqa maydonlarini to'ldiring.");
      return;
    }

    const updated = { telegram, instagram, phone, email, address };
    try {
      localStorage.setItem('qardu_contact_settings', JSON.stringify(updated));
    } catch (err) {}

    if (window.supabaseClient) {
      window.supabaseClient
        .from('journal_settings')
        .upsert({ id: 'contacts', ...updated })
        .then(() => console.log('Contacts synced with Supabase'))
        .catch(e => console.warn('Supabase contacts sync info:', e));
    }

    updateContactSectionDOM(updated);
    showToast("Aloqa sozlamalari muvaffaqiyatli saqlandi!");
  });

  // Admin Contact Form Submission
  adminContactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const telegram = document.getElementById('adminContactTelegram')?.value.trim();
    const instagram = document.getElementById('adminContactInstagram')?.value.trim();
    const phone = document.getElementById('adminContactPhone')?.value.trim();
    const dict = I18N[currentLang] || I18N.uz;

    if (!telegram || !instagram || !phone) {
      showToast(dict.adminToastFillContacts || "Iltimos, barcha aloqa maydonlarini to'ldiring.");
      return;
    }

    const updated = { telegram, instagram, phone };
    try {
      localStorage.setItem('qardu_contact_settings', JSON.stringify(updated));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    if (window.supabaseClient) {
      window.supabaseClient
        .from('journal_settings')
        .upsert({ id: 'contacts', ...updated })
        .then(() => console.log('Contacts synced with Supabase'))
        .catch(e => console.warn('Supabase contacts sync info:', e));
    }

    updateContactSectionDOM(updated);
    showToast(dict.adminToastContactsSaved || "Aloqa va ijtimoiy tarmoq sozlamalari muvaffaqiyatli saqlandi!");
    closeAdminModal();
  });

  // Immediate PDF file type validation on file selection
  adminFileInput?.addEventListener('change', () => {
    if (adminFileInput.files && adminFileInput.files.length > 0) {
      const file = adminFileInput.files[0];
      const isPdf = file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf';
      if (!isPdf) {
        const dict = I18N[currentLang] || I18N.uz;
        showToast(dict.adminToastOnlyPdf || "Faqat .pdf formatdagi maqolalarni yuklash mumkin!");
        adminFileInput.value = '';
        if (adminFileStatusText) {
          adminFileStatusText.textContent = "Faqat PDF (.pdf) formatdagi faylni tanlang";
        }
        return;
      }
      if (adminFileStatusText) {
        adminFileStatusText.textContent = `Tanlandi: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
      }
    } else {
      if (adminFileStatusText) {
        adminFileStatusText.textContent = "Faqat PDF (.pdf) formatdagi faylni tanlang";
      }
    }
  });

  adminAddArticleBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openAdminModal();
  });
  btnCloseAdminModal?.addEventListener('click', closeAdminModal);
  btnCancelAdmin?.addEventListener('click', closeAdminModal);

  // Admin Form Submission
  adminArticleForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dict = I18N[currentLang] || I18N.uz;

    const title = document.getElementById('adminTitle')?.value.trim();
    const authors = document.getElementById('adminAuthors')?.value.trim();
    const pubType = document.getElementById('adminPubType')?.value.trim() || 'Jurnal maqolasi';
    const pubYear = document.getElementById('adminPubYear')?.value.trim();
    const volIssue = document.getElementById('adminVolIssue')?.value.trim();
    const pagination = document.getElementById('adminPagination')?.value.trim();
    const articleType = document.getElementById('adminArticleType')?.value.trim() || 'Ilmiy maqola';
    const doi = document.getElementById('adminDOI')?.value.trim();
    const udc = document.getElementById('adminUDC')?.value.trim();
    const keywordsRaw = document.getElementById('adminKeywords')?.value.trim();
    const abstract = document.getElementById('adminAbstract')?.value.trim();
    const fileInput = document.getElementById('adminFileUpload');

    // Validate required fields
    if (!title || !authors || !pubYear || !abstract) {
      showToast(dict.adminToastFillRequired || "Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    const keywords = keywordsRaw ? keywordsRaw.split(',').map(k => k.trim()).filter(k => k) : [];

    const submitBtn = adminArticleForm.querySelector('button[type="submit"]');
    const originalHTML = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Joylanmoqda...</span>';
    }

    try {
      let fileUrl = null;
      let fileName = null;
      let fileBase64 = null;
      let fileToSave = null;
      let coverImageUrl = currentCoverImageBase64;

      // Also attempt upload cover image to Supabase Storage if configured
      if (currentCoverImageFile && window.supabaseClient) {
        try {
          const imgClean = currentCoverImageFile.name.replace(/[^a-zA-Z0-9.-]/g, '_');
          const imgPath = `covers/${Date.now()}_${imgClean}`;
          const { error: imgErr } = await window.supabaseClient.storage
            .from('article-files')
            .upload(imgPath, currentCoverImageFile);
          if (!imgErr) {
            const { data: imgData } = window.supabaseClient.storage
              .from('article-files')
              .getPublicUrl(imgPath);
            if (imgData?.publicUrl) {
              coverImageUrl = imgData.publicUrl;
            }
          }
        } catch (imgStorageErr) {
          console.warn('Cover image storage upload notice:', imgStorageErr);
        }
      }

      // Handle uploaded PDF file (Strictly .pdf only)
      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const isPdf = file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf';
        if (!isPdf) {
          showToast(dict.adminToastOnlyPdf || "Faqat .pdf formatdagi maqolalarni yuklash mumkin!");
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
          }
          return;
        }

        fileName = file.name;
        fileToSave = file;

        // Read Base64 for fast offline sync
        try {
          fileBase64 = await readFileAsDataUrl(file);
        } catch (b64Err) {
          console.warn("Base64 read note:", b64Err);
        }

        // Also attempt upload to Supabase Storage if configured
        if (window.supabaseClient) {
          try {
            const filePath = `articles/${Date.now()}_${file.name}`;
            const { error: uploadError } = await window.supabaseClient.storage
              .from('article-files')
              .upload(filePath, file);

            if (!uploadError) {
              const { data: urlData } = window.supabaseClient.storage
                .from('article-files')
                .getPublicUrl(filePath);
              if (urlData?.publicUrl) {
                fileUrl = urlData.publicUrl;
              }
            }
          } catch (storageErr) {
            console.warn('Storage upload error (using local persistent store):', storageErr);
          }
        }
      }

      const newId = `art-db-${Date.now()}`;

      // Save file into memory cache and IndexedDB persistent store!
      if (fileToSave) {
        ARTICLE_FILES[newId] = fileToSave;
        await saveArticleFileToDb(newId, fileToSave, fileName);
      }

      const newArticle = {
        id: newId,
        category: { uz: articleType, ru: articleType, en: articleType },
        title: { uz: title, ru: title, en: title },
        pubDate: { uz: `${pubYear}-yil`, ru: `${pubYear} г.`, en: pubYear },
        issue: { uz: `${pubYear}-yil, ${volIssue || '2-son'}`, ru: `${pubYear} г., ${volIssue || '2-й выпуск'}`, en: `${pubYear}, ${volIssue || 'Issue 2'}` },
        passport: {
          pubType: { uz: pubType, ru: pubType, en: pubType },
          pubYear: pubYear,
          authorsText: authors,
          journalName: { uz: 'QarDU Xabarlari', ru: 'Вестник КарГУ', en: 'Bulletin of KarSU' },
          volumeIssue: volIssue || '74, 2',
          pagination: pagination || '1-10',
          articleType: { uz: articleType, ru: articleType, en: articleType },
          doi: doi || `https://doi.org/10.59272/qardu.${pubYear}.admin.${Date.now().toString().slice(-4)}`,
          udc: udc || '',
          fileSize: fileName ? `${(fileToSave ? (fileToSave.size / (1024 * 1024)).toFixed(2) : 1.8)} MB (PDF)` : 'PDF maqola',
          fileUrl: fileUrl,
          fileBase64: (fileBase64 && fileBase64.length < 3.5 * 1024 * 1024) ? fileBase64 : null,
          fileName: fileName || `${newId}.pdf`
        },
        keywords: { uz: keywords, ru: keywords, en: keywords },
        abstract: { uz: abstract, ru: abstract, en: abstract },
        coverImage: coverImageUrl || null,
        slideImage: coverImageUrl || null,
        metrics: { views: 1, downloads: 0, citations: 0 },
        authors: [{
          name: { uz: authors, ru: authors, en: authors },
          degree: { uz: '', ru: '', en: '' },
          affiliation: { uz: 'Qarshi Davlat Universiteti', ru: 'Каршинский государственный университет', en: 'Karshi State University' },
          orcid: '',
          email: ''
        }],
        references: []
      };

      // 1. Try to save into Supabase database (with dual compatibility)
      if (window.supabaseClient) {
        try {
          const sbRecord = {
            id: newId,
            title: title,
            title_uz: title,
            authors: authors,
            pub_type: pubType,
            pub_year: parseInt(pubYear) || new Date().getFullYear(),
            vol_issue: volIssue,
            pagination: pagination,
            article_type: articleType,
            doi: doi || `https://doi.org/10.59272/qardu.${pubYear}.admin.${Date.now().toString().slice(-4)}`,
            udc: udc || '',
            keywords: keywords,
            keywords_uz: Array.isArray(keywords) ? keywords : [keywords],
            abstract: abstract,
            abstract_uz: abstract,
            file_url: fileUrl,
            pdf_url: fileUrl,
            file_name: fileName,
            cover_url: coverImageUrl || null,
            cover_image: coverImageUrl || null,
            is_archived: false,
            created_at: new Date().toISOString()
          };
          const { error } = await window.supabaseClient.from('articles').insert([sbRecord]);
          if (error) {
            console.warn('Supabase insert notice (RLS or column):', error.message);
          } else {
            console.log('Article successfully saved to Supabase database!');
          }
        } catch (sbErr) {
          console.warn('Supabase insert exception:', sbErr);
        }
      }

      // 2. Persist in LocalStorage so article is never lost across refreshes
      try {
        const stored = JSON.parse(localStorage.getItem('qardu_custom_articles') || '[]');
        stored.unshift(newArticle);
        localStorage.setItem('qardu_custom_articles', JSON.stringify(stored));
      } catch (lsErr) {
        // If quota exceeded due to Base64, strip Base64 from localStorage copy and retry
        try {
          const stored = JSON.parse(localStorage.getItem('qardu_custom_articles') || '[]');
          const copyWithoutB64 = JSON.parse(JSON.stringify(newArticle));
          copyWithoutB64.passport.fileBase64 = null;
          stored.unshift(copyWithoutB64);
          localStorage.setItem('qardu_custom_articles', JSON.stringify(stored));
        } catch (innerErr) {
          console.warn('LocalStorage save error:', innerErr);
        }
      }

      // 3. Add to runtime ARTICLES at the top and display
      const updatedArticles = { [newId]: newArticle, ...ARTICLES };
      for (const k in ARTICLES) delete ARTICLES[k];
      Object.assign(ARTICLES, updatedArticles);

      currentArticleId = newId;
      renderArticle();
      renderCarousel();
      renderArticlesStream();

      showToast(dict.adminToastSuccess || "Maqola muvaffaqiyatli joylashtirildi!");
      closeAdminModal();
      adminArticleForm.reset();

    } catch (err) {
      console.error('Admin publish error:', err);
      showToast(dict.adminToastError || "Xatolik!");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
      }
    }
  });

  // ========================================================
  // P. ARTICLES LIST & BROWSER MODAL
  // ========================================================
  const articlesListModal = document.getElementById('articlesListModal');
  const btnCloseArticlesModal = document.getElementById('btnCloseArticlesModal');
  const navPublications = document.getElementById('navPublications');
  const bcArticles = document.getElementById('bcArticles');
  const btnBrowseArticles = document.getElementById('btnBrowseArticles');
  const articlesListContainer = document.getElementById('articlesListContainer');

  function openArticlesModal() {
    if (!articlesListModal) return;
    renderArticlesList();
    articlesListModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeArticlesModal() {
    if (!articlesListModal) return;
    articlesListModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function renderArticlesList() {
    if (!articlesListContainer) return;
    const dict = I18N[currentLang] || I18N.uz;
    articlesListContainer.innerHTML = '';

    const ids = Object.keys(ARTICLES);
    if (!ids.length) {
      const emptyItem = document.createElement('div');
      emptyItem.className = 'empty-articles-box';
      emptyItem.style.padding = '36px 20px';
      emptyItem.style.textAlign = 'center';
      emptyItem.style.color = 'var(--color-text-muted, #64748b)';
      emptyItem.innerHTML = `
        <div style="font-size: 36px; margin-bottom: 12px;">📄</div>
        <p style="font-size: 15px; font-weight: 500; margin: 0;">${dict.noArticlesInList || "Hozircha saytda maqolalar mavjud emas."}</p>
      `;
      articlesListContainer.appendChild(emptyItem);
      return;
    }

    ids.forEach(id => {
      const art = ARTICLES[id];
      const isActive = id === currentArticleId;
      const isAdminArticle = id.startsWith('art-db-') || id.startsWith('art-sb-');

      const item = document.createElement('div');
      item.className = `article-list-item ${isActive ? 'active' : ''}`;
      item.innerHTML = `
        <div class="article-list-info">
          <div class="article-list-meta">
            <span class="article-list-badge ${isAdminArticle ? 'article-list-badge--admin' : ''}">
              ${isAdminArticle ? (dict.badgeAdminArticle || "Yangi qo'shilgan") : ((art.issue && (art.issue[currentLang] || art.issue.uz)) || 'Maqola')}
            </span>
            <span>${art.passport.pubYear || ''}-yil</span>
            <span>•</span>
            <span>${art.passport.authorsText || ''}</span>
          </div>
          <div class="article-list-title">${(art.title && (art.title[currentLang] || art.title.uz)) || ''}</div>
        </div>
        <button type="button" class="btn-article-select" data-id="${id}">
          ${dict.btnViewArticle || "O'qish"}
        </button>
      `;

      item.querySelector('.btn-article-select').addEventListener('click', (e) => {
        e.stopPropagation();
        selectArticleById(id);
      });

      item.addEventListener('click', () => {
        selectArticleById(id);
      });

      articlesListContainer.appendChild(item);
    });
  }

  function selectArticleById(id) {
    if (ARTICLES[id]) {
      closeArticlesModal();
      showArticleDetailView(id);
    }
  }

  navPublications?.addEventListener('click', (e) => {
    e.preventDefault();
    showArticlesView();
  });

  bcArticles?.addEventListener('click', (e) => {
    e.preventDefault();
    showHomeView();
    const streamSec = document.getElementById('articlesStreamSection');
    streamSec?.scrollIntoView({ behavior: 'smooth' });
  });

  btnCloseArticlesModal?.addEventListener('click', closeArticlesModal);

  // M. Close modals with Escape key or clicking outside
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [pdfModal, citeModal, shareModal, authModal, adminModal, articlesListModal].forEach(m => {
        if (m) m.setAttribute('hidden', '');
      });
      document.body.style.overflow = '';
    }
  });

  [pdfModal, citeModal, shareModal, authModal, adminModal, articlesListModal].forEach(m => {
    if (m) {
      m.addEventListener('click', (e) => {
        if (e.target === m) {
          m.setAttribute('hidden', '');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // Helper to detect test articles
  function isTestArticle(item) {
    if (!item) return false;
    const d = ((item.passport && item.passport.doi) || item.doi || '').toLowerCase();
    const a = ((item.abstract && (item.abstract.uz || item.abstract)) || '').toLowerCase();
    return d.includes('cewrcwec') || a.includes('weecwecwe');
  }

  // Load custom stored articles from localStorage and Supabase
  async function loadCustomArticles() {
    // 1. From localStorage (strictly purged of localhost test articles)
    try {
      const raw = localStorage.getItem('qardu_custom_articles');
      if (raw) {
        const list = JSON.parse(raw);
        if (Array.isArray(list)) {
          const filtered = list.filter(item => item && item.id && !['art-1', 'art-2', 'art-3'].includes(item.id) && !isTestArticle(item));
          localStorage.setItem('qardu_custom_articles', JSON.stringify(filtered));
          filtered.forEach(item => {
            ARTICLES[item.id] = item;
            getArticleFileFromDb(item.id).then(rec => {
              if (rec && rec.blob) {
                ARTICLE_FILES[item.id] = rec.blob;
              }
            }).catch(() => {});
          });
        }
      }
    } catch (e) {
      console.warn("Failed to load custom articles from localStorage:", e);
    }

    // 2. From Supabase articles table
    if (window.supabaseClient) {
      try {
        const { data, error } = await window.supabaseClient
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data && data.length) {
          data.forEach(row => {
            if (isTestArticle(row)) return;
            const rowId = row.id ? (row.id.startsWith('art-') ? row.id : `art-sb-${row.id}`) : `art-sb-${Date.now()}`;
            const artTitle = row.title || row.title_uz || 'Ilmiy maqola';
            const artAbstract = row.abstract || row.abstract_uz || '';
            const artAuthors = row.authors || (row.authors_data ? (Array.isArray(row.authors_data) ? row.authors_data.map(a => a.name || a).join(', ') : String(row.authors_data)) : 'Muallif');
            const kw = Array.isArray(row.keywords) ? row.keywords : (row.keywords_uz || (row.keywords ? String(row.keywords).split(',').map(s => s.trim()) : []));
            const y = row.pub_year || new Date().getFullYear();

            ARTICLES[rowId] = {
              id: rowId,
              isArchived: !!row.is_archived,
              category: { uz: row.article_type || 'Ilmiy maqola', ru: row.article_type || 'Научная статья', en: row.article_type || 'Research Article' },
              title: { uz: artTitle, ru: artTitle, en: artTitle },
              pubDate: { uz: `${y}-yil`, ru: `${y} г.`, en: `${y}` },
              issue: { uz: `${y}-yil, ${row.vol_issue || '2-son'}`, ru: `${y} г., ${row.vol_issue || '2-й выпуск'}`, en: `${y}, ${row.vol_issue || 'Issue 2'}` },
              passport: {
                pubType: { uz: row.pub_type || 'Jurnal maqolasi', ru: row.pub_type || 'Статья в журнале', en: row.pub_type || 'Journal Article' },
                pubYear: String(y),
                authorsText: artAuthors,
                journalName: { uz: 'QarDU Xabarlari', ru: 'Вестник КарГУ', en: 'Bulletin of KarSU' },
                volumeIssue: row.vol_issue || '74, 2',
                pagination: row.pagination || '1-10',
                articleType: { uz: row.article_type || 'Ilmiy maqola', ru: row.article_type || 'Научная статья', en: row.article_type || 'Research Article' },
                doi: row.doi || '',
                udc: row.udc || '',
                fileSize: row.file_name ? 'PDF fayl' : '1.8 MB',
                fileUrl: row.file_url || row.pdf_url || null,
                fileName: row.file_name || null
              },
              keywords: { uz: kw, ru: kw, en: kw },
              abstract: { uz: artAbstract, ru: artAbstract, en: artAbstract },
              coverImage: row.cover_image || row.cover_url || null,
              slideImage: row.cover_image || row.cover_url || null,
              metrics: { views: 1, downloads: 0, citations: 0 },
              authors: [{
                name: { uz: artAuthors, ru: artAuthors, en: artAuthors },
                degree: { uz: '', ru: '', en: '' },
                affiliation: { uz: 'Qarshi Davlat Universiteti', ru: 'Каршинский государственный университет', en: 'Karshi State University' },
                orcid: '',
                email: ''
              }],
              references: []
            };
          });
          renderArticle();
        }
      } catch (sbErr) {
        console.warn("Supabase load articles notice:", sbErr);
      }
    }

    renderArticle();
    renderCarousel();
    renderArticlesStream();
    renderArchiveStream();
    updateAdminTabBadges();
  }

  function checkHashRoute() {
    const hash = window.location.hash;
    if (hash === '#articles' || hash === '#publications') {
      showArticlesView();
    } else if (hash === '#archive') {
      showArchiveView();
    } else if (hash === '#contacts' || hash === '#contact-settings') {
      showContactsView();
    } else if (hash === '#home' || !hash) {
      showHomeView();
    } else if (hash === '#admin') {
      if (isAdminLoggedIn()) {
        openAdminModal();
      } else {
        openAuthModal('login');
        showToast("Admin boshqaruv paneliga kirish uchun xabarlariqardu@gmail.com hisobiga kiring.");
      }
    }
  }

  // Initial render & state restoration
  loadCustomArticles().then(() => {
    updateStaticTranslations();
    checkHashRoute();
  }).catch(() => {
    updateStaticTranslations();
    showHomeView();
    checkHashRoute();
  });

  window.addEventListener('hashchange', () => {
    checkHashRoute();
  });

  initSupabaseAuth();
});
