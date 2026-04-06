// Helper: returns translated string for the given language, falls back to English
export const tr = (field, lang) => {
  if (field && typeof field === 'object' && !Array.isArray(field)) {
    return field[lang] || field.en || '';
  }
  return field || '';
};

export const teamProjects = [
  {
    id: 1,
    title: {
      en: 'Pretty Eyes — AI Shopping Assistant for Visual Impairment',
      ko: 'Pretty Eyes — 시각 장애인용 AI 쇼핑 어시스턴트',
      ru: 'Pretty Eyes — AI Shopping Assistant для людей с нарушением зрения',
      uz: "Pretty Eyes — Ko'zi ojizlar uchun AI Shopping Assistant",
    },
    description: {
      en: 'A shopping assistant application designed to help people with visual impairments.',
      ko: '시각 장애인을 돕기 위해 설계된 AI 쇼핑 도우미 애플리케이션입니다.',
      ru: 'Приложение-помощник по покупкам, разработанное для людей с нарушениями зрения.',
      uz: "Ko'zi ojiz odamlarga yordam berish uchun mo'ljallangan AI xarid yordamchisi ilovasi.",
    },
    status: 'Completed',
    role: 'UI/UX Designer, Frontend Developer',
    date: '2024-05-10 ~ 2024-06-22',
    link: 'https://github.com/abbosaliboev/PrettyEyes.git',
  },
  {
    id: 2,
    title: {
      en: 'Plantopia Website',
      ko: 'Plantopia 웹사이트',
      ru: 'Сайт Plantopia',
      uz: 'Plantopia Veb-sayti',
    },
    description: {
      en: 'Plantopia is a website designed to give users easy access to plant based information and products.',
      ko: '식물 관련 정보와 제품에 쉽게 접근할 수 있도록 설계된 웹사이트입니다.',
      ru: 'Сайт, предоставляющий пользователям удобный доступ к информации о растениях и продуктам на их основе.',
      uz: "Foydalanuvchilarga o'simliklar haqida ma'lumot va mahsulotlarga qulay kirish imkonini beruvchi veb-sayt.",
    },
    status: 'Completed',
    role: 'UI/UX Designer, Frontend Developer',
    date: '2024-10-25 ~ 2024-12-15',
    link: 'https://github.com/abbosaliboev/Plantopia.git',
  },
  {
    id: 3,
    title: {
      en: 'Smart Manufacturing AI Safety Monitoring System',
      ko: 'Smart Manufacturing AI 안전 모니터링 시스템',
      ru: 'AI Safety Monitoring System для Smart Manufacturing',
      uz: 'Smart Manufacturing AI Safety Monitoring Tizimi',
    },
    description: {
      en: 'A web-based application designed to detect and monitor PPE (Personal Protective Equipment) compliance in real-time.',
      ko: '실시간으로 PPE(개인 보호 장비) 착용 여부를 감지하고 모니터링하는 웹 기반 애플리케이션입니다.',
      ru: 'Веб-приложение для обнаружения и мониторинга соблюдения требований PPE в режиме реального времени.',
      uz: "Real vaqtda PPE (shaxsiy himoya vositalari) talablariga rioya etilishini aniqlash va monitoring qiluvchi web-ilova.",
    },
    status: 'Completed',
    role: 'Team Leader, UI/UX Designer, Frontend Developer, AI Engineer',
    date: '2025-05-01 ~ 2025-06-16',
    link: 'https://github.com/abbosaliboev/AI_Web_Software_Project.git',
  },
  {
    id: 4,
    title: {
      en: 'AI Mobile App — Online Store (+ For Visual Impairment)',
      ko: 'AI 모바일 앱 — 온라인 쇼핑 (+ 시각 장애인용)',
      ru: 'AI Mobile App — Интернет-магазин (+ для людей с нарушением зрения)',
      uz: "AI Mobile App — Onlayn Do'kon (+ Ko'zi Ojizlar Uchun)",
    },
    description: {
      en: 'An Android shopping app for visually impaired users, featuring a simple screen reader–friendly interface and an AI model that summarizes product information.',
      ko: '시각 장애인을 위한 Android 쇼핑 앱으로, 간단한 screen reader 친화적 인터페이스와 상품 정보를 요약하는 AI 모델을 갖추고 있습니다.',
      ru: 'Android-приложение для покупок для людей с нарушениями зрения: простой screen reader-friendly интерфейс и AI модель для краткого описания товаров.',
      uz: "Ko'zi ojizlar uchun oddiy screen reader qulay interfeys va mahsulot ma'lumotlarini umumlashtiruvchi AI modeli bilan Android xarid ilovasi.",
    },
    status: 'Completed',
    role: 'UI/UX Designer, Frontend Developer',
    date: '2025-04-01 ~ 2025-06-19',
    link: 'https://github.com/Hoogdle/Team_Voida.git',
  },
  {
    id: 5,
    title: {
      en: 'AI COMS: Real-Time Safety Monitoring System',
      ko: 'AI COMS: 실시간 안전 모니터링 시스템',
      ru: 'AI COMS: Real-Time Safety Monitoring System',
      uz: 'AI COMS: Real-Time Safety Monitoring Tizimi',
    },
    description: {
      en: 'A private project integrating AI and Computer Vision for real-time safety monitoring, including PPE violation detection, alert systems, danger zone, and visual analytics in industrial environments.',
      ko: 'PPE 위반 감지, 경보 시스템, 위험 구역, 시각적 분석 등을 포함한 산업 환경 실-타임 안전 모니터링을 위해 AI와 Computer Vision을 통합한 비공개 프로젝트입니다.',
      ru: 'Закрытый проект, объединяющий AI и Computer Vision для real-time мониторинга безопасности: обнаружение нарушений PPE, системы оповещения, опасные зоны и визуальная аналитика.',
      uz: "PPE qoidabuzarliklarini aniqlash, ogohlantirish tizimlari, xavfli zonalar va vizual tahlilni o'z ichiga olgan sanoat muhitida real-time xavfsizlikni monitoring qiluvchi AI va Computer Vision asosidagi maxfiy loyiha.",
    },
    status: 'In Progress',
    role: 'UI/UX Designer, Frontend Developer, AI Integration Assistant, Intern',
    date: '2025-03 ~ Present',
    link: null,
  },
  {
    id: 6,
    title: {
      en: 'Fall Detection AI Research',
      ko: 'Fall Detection AI 연구',
      ru: 'AI исследование Fall Detection',
      uz: 'Fall Detection AI Tadqiqoti',
    },
    description: {
      en: 'A research project focused on detecting human falls using Computer Vision and Machine Learning techniques for improved safety in smart environments.',
      ko: '스마트 환경에서 안전성 향상을 위해 Computer Vision과 Machine Learning으로 인체 낙상을 감지하는 연구 프로젝트입니다.',
      ru: 'Исследовательский проект по обнаружению падений человека с помощью Computer Vision и Machine Learning для повышения безопасности в умных средах.',
      uz: "Aqlli muhitlarda xavfsizlikni oshirish uchun Computer Vision va Machine Learning yordamida insonning yiqilishini aniqlashga qaratilgan tadqiqot loyihasi.",
    },
    status: 'In Progress',
    role: 'Researcher, AI Developer',
    date: '2025-07-01 ~ Present',
    link: 'https://github.com/abbosaliboev/fall-detection-research.git',
  },
  {
    id: 7,
    title: {
      en: 'AI Smart Crosswalk System',
      ko: 'AI Smart Crosswalk 시스템',
      ru: 'AI Smart Crosswalk System',
      uz: 'AI Smart Crosswalk Tizimi',
    },
    description: {
      en: 'AI-powered Smart Crosswalk for safer pedestrian crossings.',
      ko: '보행자의 안전한 횡단을 위한 AI 기반 Smart Crosswalk 시스템입니다.',
      ru: 'Smart Crosswalk система на основе AI для повышения безопасности пешеходов.',
      uz: "Piyodalar uchun xavfsizroq yo'l kesishishni ta'minlovchi AI asosidagi Smart Crosswalk tizimi.",
    },
    status: 'Completed',
    role: 'Team Leader, AI Developer',
    date: '2025-07-23 ~ 2025-08-23',
    link: 'https://github.com/abbosaliboev/AI_Smart_Crosswalk.git',
  },
  {
    id: 8,
    title: {
      en: 'E-ZIP: Foreigner-Friendly Housing Platform',
      ko: 'E-ZIP: 외국인 친화형 주거 플랫폼',
      ru: 'E-ZIP: Платформа жилья для иностранцев',
      uz: 'E-ZIP: Xorijiylar Uchun Uy-Joy Platformasi',
    },
    description: {
      en: 'A web-based housing platform designed for internationals in Korea, providing easy search, posting, and landlord-tenant interaction features.',
      ko: '한국 내 외국인을 위한 웹 기반 주거 플랫폼으로, 쉬운 검색·게시 및 집주인-세입자 소통 기능을 제공합니다.',
      ru: 'Веб-платформа для иностранцев в Корее с удобным поиском жилья, размещением объявлений и общением между арендодателями и жильцами.',
      uz: "Koreyadagi xorijiylar uchun mo'ljallangan uy-joy platformasi: qulay qidiruv, e'lon joylash va uy egasi-ijara oluvchilar o'rtasidagi muloqot imkoniyatlari.",
    },
    status: 'Completed',
    role: 'UI/UX Designer, Frontend Developer, Ideation & Planning',
    date: '2025-09-13 ~ 2025-09-14',
    link: 'https://github.com/abbosaliboev/E-ZIP.git',
  },
];

export const personalProjects = [
  {
    id: 1,
    title: {
      en: 'Tartib AI — Telegram Bot & Mini App',
      ko: 'Tartib AI — Telegram Bot & Mini App',
      ru: 'Tartib AI — Telegram Bot & Mini App',
      uz: 'Tartib AI — Telegram Bot & Mini App',
    },
    description: {
      en: "A Telegram bot + Mini App that helps users manage reminders and financial records (expenses / income) via voice and text in Uzbek. Gained 300+ users within 2 days of launch.",
      ko: "우즈벡어로 음성 및 텍스트를 통해 알림과 재무 기록(지출/수입)을 관리하는 Telegram Bot + Mini App입니다. 출시 2일 만에 300명 이상의 사용자를 확보했습니다.",
      ru: "Telegram Bot + Mini App для управления напоминаниями и финансовыми записями (расходы/доходы) голосом и текстом на узбекском языке. За 2 дня после запуска набрал 300+ пользователей.",
      uz: "O'zbek tilida ovoz va matn orqali eslatmalar va moliyaviy yozuvlarni (xarajat/tushum) boshqaruvchi Telegram Bot + Mini App. Ishga tushirilganidan 2 kun ichida 300+ foydalanuvchi yig'ildi.",
    },
    status: 'In Progress',
    date: '2026-02-10 ~ Present',
    private: true,
  },
  {
    id: 2,
    title: {
      en: 'Jizzax Safar Tour — Travel Agency Website',
      ko: 'Jizzax Safar Tour — 여행사 웹사이트',
      ru: 'Jizzax Safar Tour — Сайт туристического агентства',
      uz: 'Jizzax Safar Tour — Sayohat Agentligi Veb-Sayti',
    },
    description: {
      en: 'A multilingual travel agency website built with React, featuring tour packages, online booking, gallery, and full legal documentation pages. Live at safar-tour.uz.',
      ko: 'React로 제작된 다국어 여행사 웹사이트로, 투어 패키지, 온라인 예약, 갤러리 및 법적 서류 페이지를 포함합니다. safar-tour.uz에서 운영 중입니다.',
      ru: 'Многоязычный сайт турагентства на React с турпакетами, онлайн-бронированием, галереей и страницами юридической документации. Работает на safar-tour.uz.',
      uz: "React yordamida yaratilgan ko'p tilli sayohat agentligi veb-sayti: tur paketlari, onlayn bron qilish, galereya va huquqiy hujjatlar sahifalari. safar-tour.uz domenida ishlaydi.",
    },
    status: 'Completed',
    date: '2025-10-15 ~ 2025-10-22',
    link: 'https://github.com/abbosaliboev/SafarTour_Website',
  },
  {
    id: 3,
    title: {
      en: 'Telegram Inventory Management Bot',
      ko: 'Telegram 재고 관리 Bot',
      ru: 'Telegram Inventory Management Bot',
      uz: 'Telegram Inventory Management Bot',
    },
    description: {
      en: 'A bot that simplifies inventory, sales, and expense management with user authentication, PDF reporting, and real-time tracking. Deployed on Railway with real users.',
      ko: '사용자 인증, PDF 보고서, 실시간 추적 기능을 갖춘 재고·판매·지출 관리 Telegram Bot입니다. Railway에 배포되어 실제 사용자가 있습니다.',
      ru: 'Bot для управления складом, продажами и расходами с авторизацией пользователей, PDF-отчётами и real-time отслеживанием. Развёрнут на Railway, используется реальными клиентами.',
      uz: "Foydalanuvchi autentifikatsiyasi, PDF hisobotlari va real-time kuzatish funksiyalarini o'z ichiga olgan ombor, sotuv va xarajatlarni boshqaruvchi bot. Railway'da joylashtirilgan, real foydalanuvchilari bor.",
    },
    status: 'Completed',
    date: '2024-12-12 ~ 2024-12-31',
    link: 'https://github.com/abbosaliboev/tilla_tandir-bot',
  },
  {
    id: 4,
    title: {
      en: 'Library — Interactive 3D Project',
      ko: 'Library — Interactive 3D 프로젝트',
      ru: 'Library — Interactive 3D Project',
      uz: 'Kutubxona — Interaktiv 3D Loyiha',
    },
    description: {
      en: 'An interactive 3D project created as part of the Computer Graphics course at Chungbuk National University, demonstrating advanced rendering and interactivity techniques using Three.js.',
      ko: '충북대학교 Computer Graphics 수업의 일환으로 제작된 interactive 3D 프로젝트로, Three.js를 활용한 고급 rendering 기법을 구현했습니다.',
      ru: 'Interactive 3D проект, созданный в рамках курса Computer Graphics в Чхунбукском национальном университете, демонстрирующий продвинутые техники rendering с использованием Three.js.',
      uz: "Chungbuk Milliy Universitetida Computer Graphics kursi doirasida yaratilgan interactive 3D loyiha. Three.js yordamida ilg'or rendering texnikalarini namoyish etadi.",
    },
    status: 'Completed',
    date: '2024-09-11 ~ 2024-12-20',
    link: 'https://github.com/abbosaliboev/ThreeJS-Library-Project',
  },
];

export const educationData = [
  {
    title: 'Chungbuk National University (CBNU), South Korea',
    date: 'Mar 2023 – Present',
    note: {
      en: 'B.S. in Computer Science<br/>Major in <strong>Artificial Intelligence</strong> (from Mar 2025)<br/><a href="https://www.cbnu.ac.kr/eng/" target="_blank" rel="noreferrer">cbnu.ac.kr</a>',
      ko: 'Computer Science 학사<br/><strong>Artificial Intelligence</strong> 전공 (2025년 3월부터)<br/><a href="https://www.cbnu.ac.kr/eng/" target="_blank" rel="noreferrer">cbnu.ac.kr</a>',
      ru: 'Бакалавр по Computer Science<br/>Специализация: <strong>Artificial Intelligence</strong> (с марта 2025)<br/><a href="https://www.cbnu.ac.kr/eng/" target="_blank" rel="noreferrer">cbnu.ac.kr</a>',
      uz: 'Computer Science bo\'yicha bakalavr<br/><strong>Artificial Intelligence</strong> ixtisosligi (2025-yil martdan)<br/><a href="https://www.cbnu.ac.kr/eng/" target="_blank" rel="noreferrer">cbnu.ac.kr</a>',
    },
  },
  {
    title: '42.uz, Online',
    date: 'Jun 2025 – Present',
    note: {
      en: 'Express Algorithm & Data Structure<br/>Mentors include software engineers from Meta, Amazon, and Google.<br/><a href="https://42.uz" target="_blank" rel="noreferrer">42.uz</a>',
      ko: '알고리즘 & Data Structure 집중 과정<br/>Meta, Amazon, Google 출신 소프트웨어 엔지니어가 멘토.<br/><a href="https://42.uz" target="_blank" rel="noreferrer">42.uz</a>',
      ru: 'Экспресс-курс по алгоритмам и Data Structure<br/>Наставники — инженеры из Meta, Amazon и Google.<br/><a href="https://42.uz" target="_blank" rel="noreferrer">42.uz</a>',
      uz: 'Algorithm & Data Structure intensiv kursi<br/>Mentorlar orasida Meta, Amazon va Google dasturchilar bor.<br/><a href="https://42.uz" target="_blank" rel="noreferrer">42.uz</a>',
    },
  },
  {
    title: 'academy.pdp.uz, Online',
    date: 'Mar 2024 – Present',
    note: {
      en: 'Frontend Development<br/><a href="https://academy.pdp.uz" target="_blank" rel="noreferrer">academy.pdp.uz</a>',
      ko: 'Frontend Development<br/><a href="https://academy.pdp.uz" target="_blank" rel="noreferrer">academy.pdp.uz</a>',
      ru: 'Frontend Development<br/><a href="https://academy.pdp.uz" target="_blank" rel="noreferrer">academy.pdp.uz</a>',
      uz: 'Frontend Development<br/><a href="https://academy.pdp.uz" target="_blank" rel="noreferrer">academy.pdp.uz</a>',
    },
  },
];

export const experienceData = [
  {
    title: 'Undergraduate Intern – Data Analytics Lab (DaLab)',
    org: 'Chungbuk National University (Cheongju, South Korea)',
    date: 'Sep 2024 – Present',
    note: {
      en: 'Working on AI and Smart Manufacturing projects, focusing on web & Computer Vision (YOLO).<br/><a href="https://sites.google.com/view/data-analytics-lab/members?authuser=0" target="_blank" rel="noreferrer">dalab.cbnu.ac.kr</a>',
      ko: 'AI 및 Smart Manufacturing 프로젝트 수행, 웹 및 Computer Vision (YOLO) 집중.<br/><a href="https://sites.google.com/view/data-analytics-lab/members?authuser=0" target="_blank" rel="noreferrer">dalab.cbnu.ac.kr</a>',
      ru: 'Работа над проектами AI и Smart Manufacturing, фокус на веб и Computer Vision (YOLO).<br/><a href="https://sites.google.com/view/data-analytics-lab/members?authuser=0" target="_blank" rel="noreferrer">dalab.cbnu.ac.kr</a>',
      uz: "AI va Smart Manufacturing loyihalari ustida ishlash, web va Computer Vision (YOLO) yo'nalishida.<br/><a href=\"https://sites.google.com/view/data-analytics-lab/members?authuser=0\" target=\"_blank\" rel=\"noreferrer\">dalab.cbnu.ac.kr</a>",
    },
  },
  {
    title: 'Sales & Service Specialist',
    org: 'HUMANS.uz (Tashkent, Uzbekistan)',
    date: 'Nov 2020 – Apr 2021',
    note: {
      en: 'Assisted customers with mobile and fintech services, handled payments, and resolved service issues.<br/><a href="https://www.linkedin.com/company/humansuz/" target="_blank" rel="noreferrer">linkedin.com/company/humansuz</a>',
      ko: '모바일 및 fintech 서비스 관련 고객 지원, 결제 처리 및 서비스 문제 해결.<br/><a href="https://www.linkedin.com/company/humansuz/" target="_blank" rel="noreferrer">linkedin.com/company/humansuz</a>',
      ru: 'Консультирование клиентов по мобильным и fintech сервисам, обработка платежей и решение сервисных вопросов.<br/><a href="https://www.linkedin.com/company/humansuz/" target="_blank" rel="noreferrer">linkedin.com/company/humansuz</a>',
      uz: "Mijozlarga mobil va fintech xizmatlar bo'yicha yordam berish, to'lovlarni amalga oshirish va xizmat muammolarini hal qilish.<br/><a href=\"https://www.linkedin.com/company/humansuz/\" target=\"_blank\" rel=\"noreferrer\">linkedin.com/company/humansuz</a>",
    },
  },
];

export const activitiesData = [
  {
    title: 'TUX Club',
    role: { en: 'Member', ko: '멤버', ru: 'Участник', uz: "A'zo" },
    org: 'CBNU Department of Computer Science',
    date: 'Mar 2023 – Present',
  },
  {
    title: 'Advisor Program for Foreign Freshmen',
    role: { en: 'Advisor', ko: '어드바이저', ru: 'Советник', uz: 'Maslahatchi' },
    org: 'CBNU Office of International Affairs',
    date: 'Feb 25, 2025 – Jul 31, 2025',
  },
  {
    title: 'CBNU K-Culture Department',
    role: { en: 'SNS Manager', ko: 'SNS Manager', ru: 'SNS Manager', uz: 'SNS Manager' },
    org: 'Chungbuk National University',
    date: 'Apr 1, 2025 – Dec 31, 2025',
  },
  {
    title: 'CBNU International Office',
    role: { en: 'Influencer', ko: 'Influencer', ru: 'Influencer', uz: 'Influencer' },
    org: 'Chungbuk National University',
    date: 'Oct 1, 2025 – Present',
  },
  {
    title: 'Department Student Council',
    role: { en: 'Coordinator, Planner', ko: '조율자, 기획자', ru: 'Координатор, Планировщик', uz: 'Koordinator, Rejalashtiruvchi' },
    org: 'Chungbuk National University',
    date: 'Mar 1, 2026 – Present',
  },
  {
    title: 'Startup Club',
    role: { en: 'Founder, Team Lead, Project Manager', ko: 'Founder, Team Lead, Project Manager', ru: 'Founder, Team Lead, Project Manager', uz: 'Founder, Team Lead, Project Manager' },
    org: 'CBNU RISE 사업단',
    date: 'Apr 1, 2026 – Present',
  },
];

export const certificatesText = [
  {
    title: 'Claude Code in Action',
    org: 'Anthropic',
    date: 'Issued: March 28, 2026',
    note: {
      en: 'Successfully completed the Claude Code in Action course by Anthropic. Certificate No: hxazimw26zx5. Verify at: https://verify.skilljar.com/c/hxazimw26zx5',
      ko: 'Anthropic의 Claude Code in Action 과정을 성공적으로 이수했습니다. 수료증 번호: hxazimw26zx5. 확인: https://verify.skilljar.com/c/hxazimw26zx5',
      ru: 'Успешно прошёл курс Claude Code in Action от Anthropic. № сертификата: hxazimw26zx5. Проверить: https://verify.skilljar.com/c/hxazimw26zx5',
      uz: "Anthropic'ning Claude Code in Action kursini muvaffaqiyatli yakunladim. Sertifikat raqami: hxazimw26zx5. Tasdiqlash: https://verify.skilljar.com/c/hxazimw26zx5",
    },
  },
  {
    title: 'AI Fluency for Students',
    org: 'Anthropic (in partnership with UCC, Ringling College of Art + Design, HEA & National Forum)',
    date: 'Certificate of Completion',
    note: {
      en: 'Successfully completed the AI Fluency for Students course, covering foundational AI concepts and practical skills for academic and professional use.',
      ko: 'AI Fluency for Students 과정을 성공적으로 이수하였으며, AI의 기초 개념과 학문적·직업적 활용을 위한 실용 기술을 습득하였습니다.',
      ru: 'Успешно завершил курс AI Fluency for Students, охватывающий базовые концепции AI и практические навыки для академического и профессионального применения.',
      uz: "AI Fluency for Students kursini muvaffaqiyatli yakunladim. Kurs AI ning asosiy tushunchalari va amaliy ko'nikmalarini qamrab oldi.",
    },
  },
  {
    title: '3D Printer Capability Enhancement Training Camp',
    org: 'Korea Industry Promotion Association (KOIDA) & Chungbuk National University',
    date: 'Issued: December 19, 2025',
    note: {
      en: 'Successfully completed the 3D Printer-based Root Industry and Secondary Battery Industry Application Capability Enhancement Training Camp program.',
      ko: '3D Printer 기반 뿌리산업 및 이차전지 산업 응용 역량 강화 캠프 프로그램을 성공적으로 이수했습니다.',
      ru: 'Успешно завершил программу учебного лагеря по повышению компетенций в области применения 3D Printer в базовых отраслях и производстве аккумуляторов.',
      uz: "3D Printer asosidagi asosiy sanoat va ikkinchi darajali batareya sanoati qo'llanilishini rivojlantirish o'quv lagerini muvaffaqiyatli yakunladim.",
    },
  },
  {
    title: 'Advisor Program for Foreign Freshmen Certificate',
    org: 'Office of International Affairs, Chungbuk National University',
    date: 'Issued: August 27, 2025',
    note: {
      en: 'Successfully completed the Advisor Program for Foreign Freshmen, 1st Semester 2025, from February 25, 2025 to July 31, 2025. Certificate No. 2025-388.',
      ko: '2025학년도 1학기 외국인 신입생 Advisor Program(2025.02.25 – 2025.07.31)을 성공적으로 이수하였습니다. 수료증 번호: 2025-388.',
      ru: 'Успешно завершил Advisor Program для иностранных первокурсников, 1-й семестр 2025 года (25.02.2025 – 31.07.2025). № сертификата: 2025-388.',
      uz: "2025-yilning 1-semestri uchun xorijiy birinchi kurs talabalari uchun Advisor Program ni muvaffaqiyatli yakunladim (2025.02.25 – 2025.07.31). Sertifikat raqami: 2025-388.",
    },
  },
  {
    title: 'Global Innovators IT LAB Hackathon Certificate',
    org: '충북PRO메이커센터 (Chungbuk PRO Maker Center)',
    date: 'Issued: September 14, 2025',
    note: {
      en: "Successfully completed the Global Innovators' IT LAB Hackathon (2025.09.13 – 2025.09.14), demonstrating innovation and strong IT application skills.",
      ko: "Global Innovators IT LAB Hackathon(2025.09.13 – 2025.09.14)을 성공적으로 완수하여 혁신성과 뛰어난 IT 역량을 입증하였습니다.",
      ru: "Успешно завершил Global Innovators IT LAB Hackathon (2025.09.13 – 2025.09.14), продемонстрировав инновационный подход и сильные IT навыки.",
      uz: "Global Innovators IT LAB Hackathonini (2025.09.13 – 2025.09.14) muvaffaqiyatli yakunladim, innovatsion yondashuv va kuchli IT ko'nikmalarini namoyish etdim.",
    },
  },
  {
    title: 'TOPIK (Test of Proficiency in Korean) Level 5 Certificate',
    org: 'President of National Institute for International Education',
    date: 'Issued: November 10, 2024',
    note: {
      en: 'Advanced Korean proficiency (C1 equivalent) – academic and professional communication skills.',
      ko: '고급 한국어 능력 (C1 수준) – 학문적·직업적 의사소통 능력 보유.',
      ru: 'Продвинутый уровень корейского языка (эквивалент C1) — навыки академической и профессиональной коммуникации.',
      uz: "Koreys tilini ilg'or darajada bilish (C1 ekvivalenti) — akademik va professional muloqot ko'nikmalari.",
    },
  },
  {
    title: 'Certificate of Completion — CBNU 2024 Summer LEVEL-UP TOPIK Camp',
    org: 'Office of International Affairs, Chungbuk National University',
    date: 'Issued: July 12, 2024',
    note: {
      en: 'Program: Jun 24, 2024 – Jul 12, 2024',
      ko: '과정 기간: 2024년 6월 24일 – 7월 12일',
      ru: 'Программа: 24 июня 2024 – 12 июля 2024',
      uz: 'Dastur muddati: 2024-yil 24-iyun – 12-iyul',
    },
  },
  {
    title: 'Completion Certificate — Korean Language Program',
    org: 'CBNU International Office',
    date: 'Issued: July 19, 2024',
    note: {
      en: 'Program: Mar 25, 2021 – Feb 15, 2023',
      ko: '과정 기간: 2021년 3월 25일 – 2023년 2월 15일',
      ru: 'Программа: 25 марта 2021 – 15 февраля 2023',
      uz: 'Dastur muddati: 2021-yil 25-mart – 2023-yil 15-fevral',
    },
  },
];

export const honorsText = [
  {
    title: 'Gold Award — AI Smart Crosswalk (Team Leader)',
    org: 'SPIED 2025, Innovative Research & Education of Asia (China)',
    date: 'Aug 23, 2025',
    note: {
      en: 'Led the multinational team "One Asia" to win Gold Award at the 13th Summer Program for Innovative Engineering Design (SP!ED 2025).',
      ko: '다국적 팀 "One Asia"를 이끌어 제13회 혁신 공학 설계 여름 프로그램(SP!ED 2025)에서 Gold Award를 수상하였습니다.',
      ru: 'Руководил многонациональной командой «One Asia» и завоевал Gold Award на 13-й летней программе SP!ED 2025.',
      uz: '"One Asia" ko\'pmillatli jamoasini boshqarib, 13-SP!ED 2025 dasturida Gold Award ni qo\'lga kiritdim.',
    },
  },
  {
    title: 'Scholarship — TOPIK Level-up Camp (Attendance & Academic Excellence)',
    org: 'CBNU Office of International Affairs',
    date: 'Aug 20, 2024',
    note: {
      en: 'High attendance & outstanding performance.',
      ko: '높은 출석률 및 우수한 성적.',
      ru: 'Высокая посещаемость и отличные результаты.',
      uz: "Yuqori davomat va a'lo ko'rsatkichlar.",
    },
  },
  {
    title: 'Best Award — AI Open Source Project (English Presentation)',
    org: 'CBNU SW중심대학사업단',
    date: 'Dec 19, 2024',
    note: {
      en: 'Recognized for excellent course-based project presentation.',
      ko: '우수한 수업 기반 프로젝트 발표로 수상하였습니다.',
      ru: 'Признан за отличную презентацию учебного проекта.',
      uz: "Kurs asosidagi loyiha taqdimotidagi mukammal namoyish uchun taqdirlandi.",
    },
  },
  {
    title: 'Excellence Award — AI Open Source Specialized Project',
    org: 'CBNU SW중심대학사업단',
    date: 'Jul 3, 2024',
    note: {
      en: 'Awarded for outstanding performance in the course-based AI open source project (최우수상).',
      ko: '수업 기반 AI open source 프로젝트에서 우수한 성과로 최우수상을 수상하였습니다.',
      ru: 'Получил награду за выдающиеся результаты в рамках учебного AI open source проекта (최우수상).',
      uz: "Kurs asosidagi AI open source loyihasida a'lo natija uchun taqdirlandi (최우수상).",
    },
  },
];
