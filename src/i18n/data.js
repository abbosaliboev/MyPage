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
      en: 'Accessibility-first Android shopping app for visually impaired users, built with Python and Kivy and packaged as a desktop app. Designed all screens around large buttons, high-contrast colors, and a QR-based payment flow so users can complete purchases independently. Trained a YOLOv5-based product detection model from scratch and built a pipeline that queries a database for detected items and announces them via TTS. Won the Excellence Award (최우수상) at the CBNU SW Open Source AI Competition.',
      ko: '시각 장애인을 위한 Accessibility 중심 쇼핑 앱. Python과 Kivy로 구현해 데스크톱 앱으로 패키징. 큰 버튼, 고대비 색상, QR 결제 방식으로 혼자서도 구매 완료 가능하도록 설계. YOLOv5 기반 상품 탐지 모델을 직접 학습하고, DB 조회 후 TTS로 상품 정보를 음성 안내하는 핵심 기능 구현. CBNU SW중심대학사업단 AI 오픈소스 경진대회 최우수상 수상.',
      ru: 'Android-приложение для покупок для людей с нарушениями зрения с упором на Accessibility, реализованное на Python и Kivy. Все экраны спроектированы с крупными кнопками, высококонтрастными цветами и QR-оплатой. Самостоятельно обучил модель обнаружения товаров на YOLOv5, реализовал голосовое озвучивание информации через TTS. Занял первое место (최우수상) на AI Open Source конкурсе CBNU.',
      uz: "Ko'zi ojizlar uchun Accessibility-first xarid ilovasi, Python va Kivy bilan yaratilgan. Katta tugmalar, yuqori kontrast va QR to'lov tizimi orqali foydalanuvchilar mustaqil xarid qilishi mumkin. YOLOv5 asosidagi mahsulot aniqlash modelini o'qitdim va TTS orqali ovozli yo'naltirish funksiyasini yaratdim. CBNU SW Open Source AI tanlovida birinchi o'rin (최우수상) egasi.",
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
      en: 'Plant information and community platform built with React (Frontend) connected to a Spring Boot + MySQL backend. Implemented main page, plant encyclopedia, community, shopping, and account pages entirely in React. Key features include a virtual garden where users can display plants they grow, a point reward system with avatar customization, and tag-based search by plant type, season, and difficulty. Presented the project in English and won the Best Award at the CBNU SW Open Source Competition.',
      ko: 'React로 전체 Frontend를 구현하고 Spring Boot + MySQL 기반 Backend와 연동한 식물 정보 및 커뮤니티 플랫폼. 메인 페이지, 식물 소개, 커뮤니티, 쇼핑, 계정 등 전체 UI 직접 구현. 사용자가 키운 식물을 가상 정원에서 볼 수 있는 기능, 포인트 보상 시스템, 식물 종류·계절·난이도 Tag 기반 검색 화면 포함. 영어로 최종 발표해 CBNU SW중심대학사업단 경진대회 Best Award 수상.',
      ru: 'Платформа для информации о растениях и сообщества на React (Frontend) с подключением к Spring Boot + MySQL Backend. Реализовал главную страницу, энциклопедию растений, сообщество, магазин и страницы аккаунта. Ключевые функции: виртуальный сад, система наград с кастомизацией аватара, поиск по тегам. Представил проект на английском языке и выиграл Best Award на конкурсе CBNU.',
      uz: "React asosida to'liq Frontend yaratilgan, Spring Boot + MySQL Backend bilan ulangan o'simliklar ma'lumotlari va jamiyat platformasi. Asosiy sahifa, o'simlik ensiklopediyasi, jamiyat, xarid va hisob sahifalari to'liq React bilan yaratildi. Virtual bog', ball mukofot tizimi va tag asosidagi qidiruv kabi asosiy funksiyalar mavjud. Loyihani ingliz tilida taqdim etib, CBNU SW tanlovida Best Award qo'lga kiritildi.",
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
      en: 'Android shopping app for visually impaired users built with Kotlin and Jetpack Compose. Designed all 20+ screens in Figma and implemented them with large buttons, high-contrast themes, voice search, and screen zoom. Integrated a Vision-Language Model (Qwen2.5-VL) to convert product images into descriptive text. Connected to a Django REST Framework backend, with a payment flow designed for fully independent use. Collaborated using Jira-based Scrum within a Korean-speaking team.',
      ko: 'Kotlin과 Jetpack Compose로 개발한 시각 장애인용 Android 쇼핑 앱. Figma로 20개 이상의 전체 화면을 설계하고 큰 버튼, 고대비 테마, 음성 검색, 화면 확대 기능을 직접 구현. Vision-Language Model(Qwen2.5-VL)로 상품 이미지를 텍스트로 변환하는 AI 기능 통합. Django REST Framework 기반 Backend API 연동, 혼자서 결제까지 완료할 수 있는 화면 설계. Jira 기반 Scrum으로 한국인 팀원들과 한국어로 협업.',
      ru: 'Android-приложение для покупок для людей с нарушениями зрения на Kotlin + Jetpack Compose. Спроектировал 20+ экранов в Figma и реализовал крупные кнопки, высококонтрастные темы, голосовой поиск и увеличение экрана. Интегрировал Vision-Language Model (Qwen2.5-VL) для преобразования изображений товаров в текст. Подключение к Django REST Framework Backend, полностью самостоятельный процесс оплаты. Командная работа через Jira Scrum.',
      uz: "Kotlin va Jetpack Compose yordamida yaratilgan ko'zi ojizlar uchun Android xarid ilovasi. Figma'da 20+ ekran loyihalandim, katta tugmalar, yuqori kontrast, ovozli qidiruv va ekran kattalashtirish funksiyalari amalga oshirildi. Vision-Language Model (Qwen2.5-VL) orqali mahsulot tasvirlarini matn ko'rinishiga o'tkazish AI funksiyasi integratsiya qilindi. Django REST Framework Backend API bilan ulandi. Jira asosidagi Scrum orqali koreyscha jamoada hamkorlik.",
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
      en: 'Real-time multi-camera AI safety monitoring system for industrial environments, built with Python, React 19, Django REST Framework, YOLOv8/YOLOv11, TensorRT, and CUDA. Trained models to detect helmet, vest, head, fire, and smoke violations. Resolved 7 concurrent bottlenecks (GPU blocking, thread leaks, DB overload) to achieve a 38.5% FPS improvement across 4+ simultaneous RTSP cameras. Applied a Shared Backbone architecture to unify PPE and Pose Estimation models, reducing model size from 42 MB to 7.8 MB and boosting system FPS by 92%. Integrated a Fall Detection pipeline (Pose + TCN + BotSort) and deployed to Embedded Devices (Jetson Orin Nano, Jetson Developer Kit).',
      ko: 'Python, React 19, Django REST Framework, YOLOv8/YOLOv11, TensorRT, CUDA로 구축한 다중 카메라 실시간 산업 안전 AI 모니터링 시스템. helmet, vest, head, fire, smoke 위반 감지 모델 직접 학습. RTSP 카메라 4대 이상 동시 운영 시 GPU 블로킹, 스레드 누수, DB 과부하 등 7가지 문제 해결 → FPS 38.5% 향상. PPE 탐지 + Pose Estimation 모델을 Shared Backbone으로 통합해 모델 42MB→7.8MB, 시스템 FPS 92% 향상. Fall Detection 파이프라인(Pose+TCN+BotSort) 통합 및 Embedded Device(Jetson Orin Nano) 배포.',
      ru: 'Real-time многокамерная AI система мониторинга безопасности для промышленных сред на Python, React 19, Django REST Framework, YOLOv8/YOLOv11, TensorRT и CUDA. Обучены модели для обнаружения нарушений (шлем, жилет, голова, огонь, дым). Устранено 7 узких мест (GPU блокировки, утечки потоков, перегрузка БД) → FPS вырос на 38,5% при 4+ одновременных RTSP камерах. Shared Backbone объединил PPE и Pose Estimation модели: размер 42 МБ→7,8 МБ, FPS системы +92%. Интегрирован Fall Detection пайплайн и развёртывание на Embedded устройствах (Jetson Orin Nano).',
      uz: "Python, React 19, Django REST Framework, YOLOv8/YOLOv11, TensorRT va CUDA yordamida qurilgan sanoat muhiti uchun real-time ko'p kamerali AI xavfsizlik monitoring tizimi. Helmet, vest, bosh, olov va tutun buzilishlarini aniqlash modellari o'qitildi. 4+ bir vaqtdagi RTSP kameralarda GPU blokirovkasi, thread sizib chiqishi, DB ortiqcha yuklanish kabi 7 ta muammo hal qilindi → FPS 38,5% oshdi. Shared Backbone orqali PPE va Pose Estimation modellari birlashtirildi: model hajmi 42 MB→7,8 MB, tizim FPS +92%. Fall Detection pipeline (Pose+TCN+BotSort) integratsiyasi va Embedded qurilmalarga (Jetson Orin Nano) joylashtirish.",
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
      en: 'AI-powered Smart Crosswalk system developed as Team Leader of the multinational team "One Asia" at SP!ED 2025 (South Korea–China–Japan international engineering design program) in Zhenjiang, China. Trained a YOLOv8 model to detect wheelchairs and crutches, enhanced accuracy using custom Pose Estimation keypoint logic, and achieved mAP@0.5 of 0.941 overall and 0.971 for wheelchair class. Applied Data Augmentation for night and rainy conditions. Achieved 4.5 FPS real-time inference without GPU. Collected real-world data on-site in Zhenjiang, performed additional training, and completed field deployment. Won Gold Award.',
      ko: '중국 전장(Zhenjiang)에서 열린 SP!ED 2025(한·중·일 국제 공학 설계 프로그램)에서 다국적 팀 "One Asia"의 Team Leader로 개발한 AI Smart Crosswalk 시스템. YOLOv8 기반 휠체어·목발 탐지 모델 학습, Pose Estimation keypoint 기반 커스텀 Logic으로 정확도 향상. mAP@0.5: 전체 0.941, 휠체어 클래스 0.971 달성. 야간·우천 환경을 위한 Data Augmentation 적용. GPU 없이 4.5 FPS 실시간 구현. 전장 현지에서 실환경 데이터 수집 후 추가 학습·현장 배포 완료. 금상 수상.',
      ru: 'AI Smart Crosswalk система, разработанная в роли Team Leader многонациональной команды «One Asia» на SP!ED 2025 (международная программа проектирования Корея–Китай–Япония) в Чжэньцзяне, Китай. Обучена YOLOv8 модель для обнаружения инвалидных колясок и костылей с улучшением точности через Pose Estimation keypoints. mAP@0.5: 0,941 общий, 0,971 для класса "коляска". Data Augmentation для ночных и дождливых условий. 4,5 FPS в реальном времени без GPU. Сбор данных в реальных условиях в Чжэньцзяне, дополнительное обучение и развёртывание на месте. Золотая награда.',
      uz: '"One Asia" ko\'pmillatli jamoasining Team Leader sifatida Xitoyning Chjenszyan (Zhenjiang) shahrida o\'tkazilgan SP!ED 2025 (Koreya–Xitoy–Yaponiya xalqaro muhandislik dizayn dasturi)da ishlab chiqilgan AI Smart Crosswalk tizimi. YOLOv8 asosidagi nogironlar aravachasi va tayoqcha aniqlash modeli o\'qitildi, Pose Estimation keypoint mantiqiy tizimi orqali aniqlik oshirildi. mAP@0.5: umumiy 0.941, nogironlar aravachasi klassi 0.971. Tungi va yomg\'irli sharoitlar uchun Data Augmentation. GPU siz 4.5 FPS real-time ishlash. Chjenszyanda haqiqiy ma\'lumot to\'plash, qo\'shimcha o\'qitish va joylashtirish yakunlandi. Oltin mukofot.',
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
  {
    id: 9,
    title: {
      en: 'IDCool — Smart Customer Care & Integrated Monitoring Platform (Capstone Design)',
      ko: 'IDCool — 스마트 고객 케어 및 통합 모니터링 플랫폼 (졸업 프로젝트)',
      ru: 'IDCool — Платформа умного клиентского сервиса и интегрированного мониторинга (дипломный проект)',
      uz: 'IDCool — Aqlli Mijozlarga Xizmat va Integratsiyalashgan Monitoring Platformasi (Bitiruv Loyihasi)',
    },
    description: {
      en: 'Ongoing graduation capstone project building a monitoring and customer-care platform for industrial refrigeration systems (cold storage, cold chains, chemical plants), replacing manual phone/KakaoTalk/Excel-based supervision with a centralized system. Consists of a FastAPI backend (real-time sensor ingestion, stats aggregation, REST API, web dashboard) and a Flutter mobile app with real-time unit monitoring, alarms, remote control toggles, a troubleshooting chatbot, and dark mode. Working as Mobile Developer on the Flutter app. Started in May 2026 and still in progress.',
      ko: '산업용 냉동/냉장 시스템(냉동 창고, 콜드체인, 화학 공장)을 위한 모니터링·고객 케어 플랫폼을 구축하는 진행 중인 졸업 프로젝트로, 전화·카카오톡·엑셀 기반의 수기 관리 방식을 중앙화된 시스템으로 대체합니다. 실시간 센서 수집, 통계 집계, REST API, 웹 대시보드를 제공하는 FastAPI 백엔드와, 실시간 유닛 모니터링·알람·원격 제어·트러블슈팅 챗봇·다크 모드를 갖춘 Flutter 모바일 앱으로 구성됩니다. Flutter 앱 개발을 Mobile Developer로 담당하고 있습니다. 2026년 5월에 시작해 현재도 진행 중입니다.',
      ru: 'Продолжающийся дипломный проект по созданию платформы мониторинга и клиентского сервиса для промышленных холодильных систем (холодильные склады, холодильные цепи, химические заводы), заменяющей ручное управление по телефону/KakaoTalk/Excel централизованной системой. Состоит из backend на FastAPI (сбор данных с датчиков в реальном времени, агрегация статистики, REST API, веб-панель) и мобильного приложения на Flutter с мониторингом в реальном времени, алармами, удалённым управлением, чат-ботом для диагностики и тёмной темой. В команде отвечаю за мобильное приложение на Flutter в роли Mobile Developer. Начат в мае 2026 года, всё ещё в разработке.',
      uz: "Sanoat sovutish tizimlari (sovutgich omborlar, cold chain, kimyo zavodlari) uchun monitoring va mijozlarga xizmat ko'rsatish platformasini yaratishga qaratilgan, hozirda davom etayotgan bitiruv loyihasi. Telefon/KakaoTalk/Excel orqali qo'lda kuzatish o'rniga markazlashtirilgan tizim taklif etadi. Real-time sensor ma'lumotlarini qabul qilish, statistikani jamlash, REST API va web dashboardni ta'minlovchi FastAPI backend, hamda real-time monitoring, ogohlantirishlar, masofaviy boshqaruv, diagnostika chatboti va dark mode bilan jihozlangan Flutter mobil ilovasidan iborat. Flutter ilovasi ustida Mobile Developer sifatida ishlayapman. 2026-yil may oyida boshlangan va hozirgacha davom etmoqda.",
    },
    status: 'In Progress',
    role: 'Mobile Developer',
    date: '2026-05 ~ Present',
    link: 'https://github.com/abbosaliboev/Capstone_Design',
    extraLink: {
      url: 'https://github.com/shavrindas/idcool-software/tree/feature/mobile-app',
      label: {
        en: 'Old Repo (Mobile Branch)',
        ko: '이전 저장소 (Mobile 브랜치)',
        ru: 'Старый репозиторий (ветка Mobile)',
        uz: "Eski repozitoriy (Mobile branch)",
      },
    },
  },
  {
    id: 10,
    title: {
      en: 'Smart Safety Guard — IoT & AI Industrial Safety Monitoring',
      ko: 'Smart Safety Guard — IoT & AI 산업 안전 모니터링',
      ru: 'Smart Safety Guard — IoT и AI мониторинг промышленной безопасности',
      uz: 'Smart Safety Guard — IoT va AI Sanoat Xavfsizligi Monitoringi',
    },
    description: {
      en: 'A two-node edge computing system for real-time industrial safety monitoring, built as a two-person team project for the Embedded Systems course. Combined IoT sensor fusion on a Raspberry Pi 3 (gas/smoke, temperature/humidity, ultrasonic distance, motion) with YOLOv5n person detection and danger-zone logic on a Jetson Nano, streaming to a Flask backend that serves a live 3-column web dashboard, stores history in SQLite, and pushes instant Telegram alerts. Integrated the Groq Vision API to auto-analyze camera frames for fire, smoke, and PPE compliance whenever an alert triggers. Responsible for the AI analyzer, frontend dashboard, and Telegram bot integration.',
      ko: 'Embedded Systems 수업의 2인 팀 프로젝트로 개발한 실시간 산업 안전 모니터링용 2노드 엣지 컴퓨팅 시스템입니다. Raspberry Pi 3의 IoT 센서 퓨전(가스/연기, 온습도, 초음파 거리, 모션)과 Jetson Nano의 YOLOv5n 사람 탐지·위험구역 로직을 결합해, Flask 백엔드가 3열 실시간 웹 대시보드를 제공하고 SQLite에 이력을 저장하며 Telegram으로 즉시 알림을 전송하도록 구현했습니다. 경보 발생 시마다 Groq Vision API로 카메라 프레임을 분석해 화재·연기·PPE 착용 여부를 자동 판단하는 기능도 통합했습니다. AI 분석기, 프론트엔드 대시보드, Telegram 봇 연동을 담당했습니다.',
      ru: 'Двухузловая edge-система для мониторинга промышленной безопасности в реальном времени, разработанная как командный проект (2 человека) для курса Embedded Systems. Объединены IoT-датчики на Raspberry Pi 3 (газ/дым, температура/влажность, ультразвуковое расстояние, движение) с обнаружением людей YOLOv5n и логикой опасных зон на Jetson Nano; данные передаются на Flask-бэкенд, который выводит живую 3-колоночную веб-панель, хранит историю в SQLite и мгновенно уведомляет через Telegram. Интегрирован Groq Vision API для автоматического анализа кадров камеры на предмет огня, дыма и соблюдения PPE при каждом срабатывании тревоги. Отвечал за AI-анализатор, frontend-панель и интеграцию Telegram-бота.',
      uz: "Embedded Systems fanidan ikki kishilik jamoa loyihasi sifatida yaratilgan real-time sanoat xavfsizligi monitoringi uchun ikki tugunli edge computing tizimi. Raspberry Pi 3'dagi IoT sensorlar (gaz/tutun, harorat/namlik, ultratovush masofa, harakat) Jetson Nano'dagi YOLOv5n odam aniqlash va xavfli zona mantig'i bilan birlashtirilib, Flask backend orqali jonli 3 ustunli web dashboard, SQLite'da tarix saqlash va Telegram orqali tezkor xabarnoma yuboriladi. Har bir ogohlantirishda Groq Vision API kamera kadrini avtomatik tahlil qilib, yong'in, tutun va PPE talablariga rioya qilinishini tekshiradi. AI analizator, frontend dashboard va Telegram bot integratsiyasi uchun javobgar bo'ldim.",
    },
    status: 'Completed',
    role: 'AI Analyzer, Frontend Developer, Telegram Bot Integration',
    date: '2026-05-05 ~ 2026-06-09',
    link: 'https://github.com/abbosaliboev/Embedded_Systems',
  },
  {
    id: 11,
    title: {
      en: 'MobiCare — Edge AI-Based Real-Time Fall Detection & Alert System (ICCAS/EKC 2026)',
      ko: 'MobiCare — 엣지 AI 기반 실시간 낙상 감지 및 알림 시스템 (ICCAS/EKC 2026)',
      ru: 'MobiCare — Система обнаружения падений и оповещения на Edge AI в реальном времени (ICCAS/EKC 2026)',
      uz: 'MobiCare — Edge AI Asosidagi Real-Time Yiqilishni Aniqlash va Ogohlantirish Tizimi (ICCAS/EKC 2026)',
    },
    description: {
      en: "Edge AI-based real-time fall detection and alert system for elderly people living alone, built as Team Leader and AI Engineer of a 4-person team for an international program spanning Chungbuk National University and Toulouse, France (EKC 2026 & ICCAS 2026, July 6–26, 2026). Combined a Deep Learning fall classifier (YOLO11n-pose + ST-GCN) with a Kinematics-based verification filter (Butterworth-filtered hip velocity/acceleration) to resolve gray-zone cases, reaching 99.2% accuracy (Fall F1 0.972) on the full Up-Fall dataset and 98.0% accuracy (Fall F1 0.932) on a 6x-smaller dataset — showing the kinematic filter helps most exactly where elderly fall data is scarcest. On a detected fall, a Whisper Response Service (TTS/STT) asks the person to confirm by voice ('Contact' / 'No'), auto-alerting a guardian via SMS/app within 15 seconds if there's no response. Deployed on a Jetson Orin NX edge device with a FastAPI backend and the MobiCare mobile app (live status, fall history/reports, event clips, Safe Zone marking). Presented a paper at ICCAS 2026 and a poster at EKC 2026, and won the Silver Award at the 5th International Collegiate Challenge for AI-Assisted Society (ICCAS 2026).",
      ko: '독거 노인을 위한 엣지 AI 기반 실시간 낙상 감지 및 알림 시스템으로, 충북대학교와 프랑스 툴루즈(EKC 2026 & ICCAS 2026, 2026년 7월 6일~26일)를 아우르는 국제 프로그램에서 4인 팀의 Team Leader이자 AI Engineer로 개발했습니다. Deep Learning 낙상 분류 모델(YOLO11n-pose + ST-GCN)과 Kinematics 기반 검증 필터(Butterworth 필터링된 골반 속도·가속도)를 결합해 Gray-zone 케이스를 판별했으며, Up-Fall 전체 데이터셋에서 99.2% 정확도(Fall F1 0.972), 6배 작은 데이터셋에서도 98.0% 정확도(Fall F1 0.932)를 달성해 Kinematic Filter가 노인 낙상 데이터가 가장 부족한 상황에서 가장 큰 효과를 낸다는 것을 확인했습니다. 낙상이 감지되면 Whisper Response Service(TTS/STT)가 음성으로 확인("Contact"/"No")을 요청하고, 15초 내 응답이 없으면 SMS·앱으로 보호자에게 자동 알림을 보냅니다. Jetson Orin NX 엣지 디바이스, FastAPI 백엔드, MobiCare 모바일 앱(실시간 상태, 낙상 이력·리포트, 이벤트 클립, Safe Zone 설정)으로 구성했습니다. ICCAS 2026에서 논문을, EKC 2026에서 포스터를 발표했으며 제5회 International Collegiate Challenge for AI-Assisted Society(ICCAS 2026)에서 Silver Award를 수상했습니다.',
      ru: 'Система обнаружения падений и оповещения на основе Edge AI в реальном времени для пожилых людей, живущих одни, разработанная в роли Team Leader и AI Engineer 4-человек команды для международной программы между Университетом Чхунбук и Тулузой, Франция (EKC 2026 и ICCAS 2026, 6–26 июля 2026). Объединил классификатор падений на Deep Learning (YOLO11n-pose + ST-GCN) с фильтром верификации на основе кинематики (скорость/ускорение бедра с фильтром Баттерворта) для разрешения пограничных случаев (gray-zone), достигнув точности 99,2% (Fall F1 0,972) на полном датасете Up-Fall и 98,0% (Fall F1 0,932) на датасете в 6 раз меньше — это показывает, что кинематический фильтр даёт наибольшую пользу именно там, где данных о падениях пожилых людей меньше всего. При обнаружении падения Whisper Response Service (TTS/STT) голосом просит подтверждения («Contact» / «No»), автоматически оповещая опекуна по SMS/приложению в течение 15 секунд при отсутствии ответа. Развёрнуто на Edge-устройстве Jetson Orin NX с backend на FastAPI и мобильным приложением MobiCare (статус в реальном времени, история падений/отчёты, видеоклипы событий, зоны безопасности). Представлен доклад на ICCAS 2026 и постер на EKC 2026, команда получила Silver Award на 5-м International Collegiate Challenge for AI-Assisted Society (ICCAS 2026).',
      uz: "Yolg'iz yashovchi keksa insonlar uchun Edge AI asosidagi real-time yiqilishni aniqlash va ogohlantirish tizimi, Chungbuk Milliy Universiteti va Fransiyaning Tuluza shahrini (EKC 2026 & ICCAS 2026, 2026-yil 6–26-iyul) qamrab olgan xalqaro dastur doirasida 4 kishilik jamoaning Team Leader va AI Engineer sifatida ishlab chiqildi. Deep Learning yiqilish klassifikatori (YOLO11n-pose + ST-GCN) Kinematika asosidagi tekshiruv filtri (Butterworth filtrlangan son bo'g'imi tezligi/tezlanishi) bilan birlashtirilib, gray-zone holatlarni aniqlashda ishlatildi; Up-Fall to'liq datasetida 99.2% aniqlik (Fall F1 0.972), 6 marta kichikroq datasetda esa 98.0% aniqlik (Fall F1 0.932)ga erishildi — bu Kinematic Filter aynan keksalar yiqilishi ma'lumotlari eng kam bo'lgan holatlarda eng katta foyda berishini ko'rsatadi. Yiqilish aniqlanganda Whisper Response Service (TTS/STT) ovoz orqali tasdiqlashni so'raydi (\"Contact\"/\"No\"), 15 soniya ichida javob bo'lmasa SMS/ilova orqali qarindoshga avtomatik xabar yuboradi. Jetson Orin NX edge qurilmasi, FastAPI backend va MobiCare mobil ilovasi (real-time holat, yiqilish tarixi/hisobotlar, hodisa videoklipi, Safe Zone belgilash) orqali joylashtirildi. ICCAS 2026'da maqola, EKC 2026'da poster taqdim etildi va 5-International Collegiate Challenge for AI-Assisted Society (ICCAS 2026)da Silver Award qo'lga kiritildi.",
    },
    status: 'Completed',
    role: 'Team Leader, AI Engineer',
    date: '2026-07-06 ~ 2026-07-26',
    link: 'https://github.com/abbosaliboev/ICCAS_2026',
  },
];

export const personalProjects = [
  {
    id: 5,
    title: {
      en: 'Worker Abnormal Behavior Detection — Rule-Based Safety AI',
      ko: 'Worker Abnormal Behavior Detection — 규칙 기반 안전 AI',
      ru: 'Worker Abnormal Behavior Detection — AI на основе правил безопасности',
      uz: 'Worker Abnormal Behavior Detection — Qoidaga asoslangan xavfsizlik AI',
    },
    description: {
      en: 'A rule-based real-time system built for a company to detect three types of abnormal worker behavior — Fall (92.4%), Unsafe Running (90.99%), and Long-time Inactivity (95.8%) — using YOLO11s-pose keypoints and ByteTracker, with no model training required. Applied pure biomechanical rules: body-tilt angle and tilt speed for falls, horizontal center-of-mass speed for running, and stillness duration plus posture stability for inactivity. Evaluated with Leave-One-Out Cross-Validation on the UP-Fall and KTH Action datasets, reaching a 93.07% average accuracy.',
      ko: '회사를 위해 개발한 규칙 기반 실시간 시스템으로, YOLO11s-pose 키포인트와 ByteTracker만으로 모델 학습 없이 세 가지 이상 행동 — Fall(92.4%), Unsafe Running(90.99%), Long-time Inactivity(95.8%) — 를 감지합니다. 낙상은 체간 기울기 각도와 기울기 속도, 뛰기는 무게중심의 수평 이동 속도, 장시간 정지는 정지 프레임 비율과 자세 안정성이라는 순수 생체역학 규칙을 적용했습니다. UP-Fall 및 KTH Action 데이터셋에서 Leave-One-Out Cross-Validation으로 평가해 평균 93.07%의 정확도를 달성했습니다.',
      ru: 'Система на основе правил в реальном времени, разработанная для компании для обнаружения трёх типов аномального поведения рабочих — Fall (92,4%), Unsafe Running (90,99%) и Long-time Inactivity (95,8%) — с использованием ключевых точек YOLO11s-pose и ByteTracker, без обучения модели. Применены чисто биомеханические правила: угол наклона тела и скорость наклона для падений, скорость горизонтального движения центра масс для бега, длительность неподвижности и стабильность позы для бездействия. Оценка проведена методом Leave-One-Out Cross-Validation на датасетах UP-Fall и KTH Action, средняя точность — 93,07%.',
      uz: "Kompaniya uchun yaratilgan qoidaga asoslangan real-time tizim, YOLO11s-pose keypoint'lari va ByteTracker yordamida hech qanday model o'qitmasdan uch xil g'ayritabiiy xatti-harakatni aniqlaydi — Yiqilish (92.4%), Xavfli yugurish (90.99%) va Uzoq vaqt harakatsizlik (95.8%). Yiqilish uchun tana og'ish burchagi va og'ish tezligi, yugurish uchun og'irlik markazining gorizontal tezligi, harakatsizlik uchun esa qimirlamaslik davomiyligi va tana holati barqarorligi kabi sof biomexanik qoidalar qo'llanildi. UP-Fall va KTH Action datasetlarida Leave-One-Out Cross-Validation orqali baholanib, o'rtacha 93.07% aniqlikka erishildi.",
    },
    status: 'Completed',
    date: '2026-06-12 ~ 2026-07-02',
    link: 'https://github.com/abbosaliboev/worker-abnormal-behavior-detection',
  },
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
      en: 'Developing industrial AI safety systems using Deep Learning, Computer Vision, and Smart Manufacturing pipelines. Responsible for Frontend development, AI model training (YOLOv8/YOLOv11), data collection &amp; preprocessing, GPU server setup (NVIDIA TITAN RTX), and system integration. Conducted Fall Detection research — designed a Pose Estimation + TCN + BotSort pipeline, reduced keypoints from 17 to 10 (33% speed gain), and applied a Shared Backbone structure to compress models from 42 MB to 7.8 MB. Handled TensorRT optimization and deployment to Embedded Devices (Jetson Orin Nano, Jetson Developer Kit). Selected as an Undergraduate Lab Intern Scholarship recipient (학부생 실험실 인턴 장학생) for three consecutive semesters, Mar 2025 – Aug 2026.<br/><a href="https://sites.google.com/view/data-analytics-lab/members?authuser=0" target="_blank" rel="noreferrer">dalab.cbnu.ac.kr</a>',
      ko: 'Deep Learning, Computer Vision, Smart Manufacturing 파이프라인을 활용한 산업 현장 AI 안전 시스템 개발. Frontend 개발, AI 모델 학습(YOLOv8/YOLOv11), 데이터 수집·전처리, GPU 서버(NVIDIA TITAN RTX) 구축 및 시스템 통합 담당. Fall Detection 연구에서 Pose Estimation + TCN + BotSort 파이프라인을 설계하고 keypoint를 17개→10개로 줄여 추론 속도 33% 향상, Shared Backbone 구조로 모델 크기를 42MB→7.8MB로 압축. TensorRT 최적화 및 Embedded Device(Jetson Orin Nano, Jetson Developer Kit) 배포까지 담당. 2025년 3월부터 2026년 8월까지 3개 학기 연속 학부생 실험실 인턴 장학생으로 선발되었습니다.<br/><a href="https://sites.google.com/view/data-analytics-lab/members?authuser=0" target="_blank" rel="noreferrer">dalab.cbnu.ac.kr</a>',
      ru: 'Разработка промышленных AI систем безопасности с использованием Deep Learning, Computer Vision и Smart Manufacturing пайплайнов. Отвечал за Frontend разработку, обучение AI моделей (YOLOv8/YOLOv11), сбор и предобработку данных, настройку GPU сервера (NVIDIA TITAN RTX) и системную интеграцию. В рамках Fall Detection исследования спроектировал Pose Estimation + TCN + BotSort пайплайн, сократил keypoints с 17 до 10 (прирост скорости 33%), применил Shared Backbone для сжатия модели с 42 МБ до 7,8 МБ. Выполнял TensorRT оптимизацию и развёртывание на Embedded устройствах (Jetson Orin Nano, Jetson Developer Kit). Отобран стипендиатом программы стажировки в лаборатории для студентов (학부생 실험실 인턴 장학생) на три семестра подряд, с марта 2025 по август 2026.<br/><a href="https://sites.google.com/view/data-analytics-lab/members?authuser=0" target="_blank" rel="noreferrer">dalab.cbnu.ac.kr</a>',
      uz: "Deep Learning, Computer Vision va Smart Manufacturing pipeline'laridan foydalangan holda sanoat AI xavfsizlik tizimlarini ishlab chiqish. Frontend dasturlash, AI model o'qitish (YOLOv8/YOLOv11), ma'lumot to'plash va oldindan qayta ishlash, GPU server (NVIDIA TITAN RTX) sozlash va tizim integratsiyasini amalga oshirish. Fall Detection tadqiqotida Pose Estimation + TCN + BotSort pipeline'ini loyihaladim, keypoint'larni 17 tadan 10 taga kamaytirdim (33% tezlik oshishi), Shared Backbone tuzilmasi orqali model hajmini 42 MB dan 7.8 MB ga siqtirdim. TensorRT optimizatsiyasi va Embedded qurilmalarga (Jetson Orin Nano, Jetson Developer Kit) joylashtirish. 2025-yil mart oyidan 2026-yil avgustigacha, ketma-ket 3 semestr davomida talaba laboratoriya intern stipendiati (학부생 실험실 인턴 장학생) sifatida tanlab olindim.<br/><a href=\"https://sites.google.com/view/data-analytics-lab/members?authuser=0\" target=\"_blank\" rel=\"noreferrer\">dalab.cbnu.ac.kr</a>",
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

export const globalProgramsText = [
  {
    title: {
      en: 'ICCAS/EKC 2026 — International AI & Engineering Program',
      ko: 'ICCAS/EKC 2026 — 국제 AI 및 공학 프로그램',
      ru: 'ICCAS/EKC 2026 — Международная программа по AI и инженерии',
      uz: 'ICCAS/EKC 2026 — Xalqaro AI va muhandislik dasturi',
    },
    location: 'Toulouse, France',
    date: 'Jul 6 – 26, 2026',
    role: 'Team Leader, AI Engineer',
    award: 'Silver Award',
    description: {
      en: "Represented Chungbuk National University in a three-week international program (CBNU, South Korea → Toulouse, France) combining conference, team project, research, and poster presentation tracks. Served as Team Leader — a role that fit naturally since the project topic closely overlapped with my own fall-detection research — on a 4-person team that built MobiCare, an Edge AI real-time fall-detection and alert system combining Deep Learning (YOLO11n-pose + ST-GCN) with a kinematics-based verification filter. The team presented a paper at ICCAS 2026 and a poster at EKC 2026, and won the Silver Award at the 5th International Collegiate Challenge for AI-Assisted Society (ICCAS 2026).",
      ko: '3주간의 국제 프로그램(충북대학교, 한국 → 프랑스 툴루즈)에 충북대학교 대표로 참가하여 학회, 팀 프로젝트, 연구, 포스터 발표 트랙을 모두 수행했습니다. 프로젝트 주제가 제 낙상 감지 연구와 밀접하게 맞닿아 있어 자연스럽게 4인 팀의 Team Leader를 맡았고, 팀은 Deep Learning(YOLO11n-pose + ST-GCN)과 Kinematics 기반 검증 필터를 결합한 엣지 AI 실시간 낙상 감지·알림 시스템 MobiCare를 개발했습니다. 팀은 ICCAS 2026에서 논문을, EKC 2026에서 포스터를 발표했으며 제5회 International Collegiate Challenge for AI-Assisted Society(ICCAS 2026)에서 Silver Award를 수상했습니다.',
      ru: 'Представлял Чхунбукский национальный университет в трёхнедельной международной программе (CBNU, Южная Корея → Тулуза, Франция), включающей конференцию, командный проект, исследование и постерную презентацию. Стал Team Leader команды из 4 человек — эта роль естественно возникла благодаря тесной связи темы проекта с моими собственными исследованиями по обнаружению падений; команда разработала MobiCare — систему обнаружения падений и оповещения на Edge AI в реальном времени, сочетающую Deep Learning (YOLO11n-pose + ST-GCN) с фильтром верификации на основе кинематики. Команда представила доклад на ICCAS 2026 и постер на EKC 2026 и получила Silver Award на 5-м International Collegiate Challenge for AI-Assisted Society (ICCAS 2026).',
      uz: "Uch haftalik xalqaro dastur (CBNU, Janubiy Koreya → Tuluza, Fransiya) doirasida Chungbuk Milliy Universitetini vakillik qildim; dastur konferensiya, jamoaviy loyiha, tadqiqot va poster taqdimoti bosqichlarini o'z ichiga oldi. Loyiha mavzusi mening yiqilishni aniqlash bo'yicha tadqiqotimga yaqin bo'lgani uchun tabiiy ravishda 4 kishilik jamoaning Team Leaderi bo'ldim; jamoa Deep Learning (YOLO11n-pose + ST-GCN) va kinematika asosidagi tekshiruv filtrini birlashtirgan Edge AI real-time yiqilishni aniqlash va ogohlantirish tizimi MobiCare'ni yaratdi. Jamoa ICCAS 2026'da maqola va EKC 2026'da poster taqdim etdi va 5-International Collegiate Challenge for AI-Assisted Society (ICCAS 2026)da Silver Award qo'lga kiritdi.",
    },
    link: 'https://github.com/abbosaliboev/ICCAS_2026',
  },
  {
    title: {
      en: 'SP!ED 2025 — Summer Program for Innovative Engineering Design',
      ko: 'SP!ED 2025 — 혁신 공학 설계 여름 프로그램',
      ru: 'SP!ED 2025 — Летняя программа инновационного инженерного проектирования',
      uz: 'SP!ED 2025 — Innovatsion muhandislik dizayni yozgi dasturi',
    },
    location: 'Zhenjiang, China (multinational program)',
    date: 'Jul 23 – Aug 23, 2025',
    role: 'Team Leader, AI Developer',
    award: 'Gold Award',
    description: {
      en: 'Selected for the 13th Summer Program for Innovative Engineering Design (SP!ED 2025), a multinational South Korea–China–Japan engineering design program held in Zhenjiang, China. Served as Team Leader of the multinational team "One Asia", which designed an AI Smart Crosswalk system, collected real-world data on-site, and won the Gold Award.',
      ko: '중국 전장(Zhenjiang)에서 열린 한·중·일 다국적 공학 설계 프로그램인 제13회 SP!ED 2025에 선발되었습니다. 다국적 팀 "One Asia"의 Team Leader를 맡았으며, 팀은 AI Smart Crosswalk 시스템을 설계하고 현지에서 실환경 데이터를 수집해 Gold Award를 수상하였습니다.',
      ru: 'Отобран для участия в 13-й летней программе инновационного инженерного проектирования (SP!ED 2025) — многонациональной программе Корея–Китай–Япония, прошедшей в Чжэньцзяне, Китай. Был Team Leader многонациональной команды "One Asia", которая разработала систему AI Smart Crosswalk, собрала данные в реальных условиях на месте и завоевала Gold Award.',
      uz: "Xitoyning Chjenszyan (Zhenjiang) shahrida o'tkazilgan Koreya–Xitoy–Yaponiya ko'pmillatli muhandislik dizayni dasturi bo'lgan 13-SP!ED 2025 yozgi dasturiga tanlab olindim. Ko'pmillatli \"One Asia\" jamoasining Team Leaderi bo'ldim; jamoa AI Smart Crosswalk tizimini loyihalashtirdi, joyida haqiqiy ma'lumot to'pladi va Gold Award'ni qo'lga kiritdi.",
    },
    link: 'https://github.com/abbosaliboev/AI_Smart_Crosswalk.git',
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
    title: 'Certificate of Completion — Job-Specific Training (Seoul Global Center)',
    org: 'Seoul Global Center',
    date: 'Aug 19–20, 2026',
    note: {
      en: 'Completed the 2nd cohort of Job-Specific Training (직무역량강화교육 2기) organized by Seoul Global Center, Aug 19–20, 2026. Certificate No. SGC26-수317호.',
      ko: '서울글로벌센터가 주관하는 2026년 직무역량강화교육 2기(2026.08.19~08.20)를 수료하였습니다. 수료증 번호: SGC26-수317호.',
      ru: 'Завершил 2-й поток программы Job-Specific Training, организованной Seoul Global Center, 19–20 августа 2026 года. № сертификата: SGC26-수317호.',
      uz: "Seoul Global Center tashkil qilgan Job-Specific Training (직무역량강화교육) 2-guruhini 2026-yil 19–20 avgust kunlarida muvaffaqiyatli yakunladim. Sertifikat raqami: SGC26-수317호.",
    },
  },
  {
    title: 'Certificate of Appreciation — EKC 2026 Volunteer',
    org: 'Europe-Korea Conference on Science and Technology (Association des Scientifiques Coréens en France)',
    date: 'Toulouse, France · Jul 20–23, 2026',
    note: {
      en: 'Received a Certificate of Appreciation for outstanding work and effort as a volunteer at EKC 2026 — "AI-Driven Future of Science and Technology", held in Toulouse, France.',
      ko: '프랑스 툴루즈에서 열린 EKC 2026 — "AI-Driven Future of Science and Technology"에서 자원봉사자로서 헌신적으로 기여한 공로를 인정받아 감사장(Certificate of Appreciation)을 수여받았습니다.',
      ru: 'Получил Certificate of Appreciation за выдающуюся работу и вклад в качестве волонтёра на EKC 2026 — "AI-Driven Future of Science and Technology", проходившей в Тулузе, Франция.',
      uz: "Fransiyaning Tuluza shahrida o'tkazilgan EKC 2026 — \"AI-Driven Future of Science and Technology\" konferensiyasida volontyor sifatida ko'rsatgan sidqidildan xizmatim uchun Certificate of Appreciation (minnatdorchilik sertifikati) bilan taqdirlandim.",
    },
  },
  {
    title: 'Certificate of Presentation — EKC 2026',
    org: 'Europe-Korea Conference on Science and Technology (Association des Scientifiques Coréens en France)',
    date: 'Toulouse, France · Jul 20–23, 2026',
    note: {
      en: 'Successfully presented "Edge AI-Based Real-Time Fall Detection and Alert System for Elderly People Living Alone" (MobiCare, Team 4) with Damin Kim, Jonghyuk Park, and Seongwoo Cho at EKC 2026 — "AI-Driven Future of Science and Technology".',
      ko: 'EKC 2026 — "AI-Driven Future of Science and Technology"에서 Damin Kim, Jonghyuk Park, Seongwoo Cho와 함께 "Edge AI-Based Real-Time Fall Detection and Alert System for Elderly People Living Alone"(MobiCare, Team 4)를 성공적으로 발표하였습니다.',
      ru: 'Успешно представил доклад "Edge AI-Based Real-Time Fall Detection and Alert System for Elderly People Living Alone" (MobiCare, Team 4) вместе с Damin Kim, Jonghyuk Park и Seongwoo Cho на EKC 2026 — "AI-Driven Future of Science and Technology".',
      uz: "EKC 2026 — \"AI-Driven Future of Science and Technology\" konferensiyasida Damin Kim, Jonghyuk Park va Seongwoo Cho bilan birgalikda \"Edge AI-Based Real-Time Fall Detection and Alert System for Elderly People Living Alone\" (MobiCare, Team 4) mavzusidagi taqdimotni muvaffaqiyatli o'tkazdim.",
    },
  },
  {
    title: 'Certificate of Attendance — EKC 2026',
    org: 'Europe-Korea Conference on Science and Technology (Association des Scientifiques Coréens en France)',
    date: 'Toulouse, France · Jul 20–23, 2026',
    note: {
      en: 'Contributed to and participated in EKC 2026 — "AI-Driven Future of Science and Technology", held in Toulouse, France, as part of the ICCAS/EKC 2026 international program.',
      ko: '프랑스 툴루즈에서 개최된 EKC 2026 — "AI-Driven Future of Science and Technology"에 ICCAS/EKC 2026 국제 프로그램의 일환으로 참가 및 기여하였습니다.',
      ru: 'Внёс вклад и принял участие в EKC 2026 — "AI-Driven Future of Science and Technology", прошедшей в Тулузе, Франция, в рамках международной программы ICCAS/EKC 2026.',
      uz: "Fransiyaning Tuluza shahrida o'tkazilgan EKC 2026 — \"AI-Driven Future of Science and Technology\" konferensiyasida ICCAS/EKC 2026 xalqaro dasturi doirasida ishtirok etdim va hissa qo'shdim.",
    },
  },
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
    title: 'Silver Award — MobiCare (ICCAS 2026)',
    org: 'International Collegiate Challenge for AI-Assisted Society (ICCAS 2026), Euro-Korean Women Scientists and Engineers Association',
    date: 'Jul 25, 2026',
    note: {
      en: 'Won the Silver Award at ICCAS 2026 in Toulouse, France, for the paper "Edge AI-Based Real-Time Fall Detection and Alert System for Elderly People Living Alone," co-authored with Damin Kim, Jonghyuk Park, and Seongwoo Cho.',
      ko: '프랑스 툴루즈에서 열린 ICCAS 2026에서 "Edge AI-Based Real-Time Fall Detection and Alert System for Elderly People Living Alone" 논문으로 Silver Award를 수상하였습니다. (공동 저자: Damin Kim, Jonghyuk Park, Seongwoo Cho)',
      ru: 'Получил Silver Award на ICCAS 2026 в Тулузе, Франция, за статью "Edge AI-Based Real-Time Fall Detection and Alert System for Elderly People Living Alone", написанную в соавторстве с Damin Kim, Jonghyuk Park и Seongwoo Cho.',
      uz: 'Fransiyaning Tuluza shahrida o\'tkazilgan ICCAS 2026\'da "Edge AI-Based Real-Time Fall Detection and Alert System for Elderly People Living Alone" maqolasi uchun Silver Award qo\'lga kiritdim (hammuallif: Damin Kim, Jonghyuk Park, Seongwoo Cho).',
    },
  },
  {
    title: 'Chungbuk-type K-International Student Scholarship',
    org: 'Chungbuk National University RISE(앵커) Project, K-International Student Center',
    date: 'Fall 2025 & Spring 2026',
    note: {
      en: 'Selected for the Chungbuk-type K-International Student Scholarship (충북형 K-유학생 장학금) for two consecutive semesters — 2025 Fall and 2026 Spring.',
      ko: '충북형 K-유학생 장학금에 2025학년도 2학기와 2026학년도 1학기, 두 학기 연속 최종 선발되었습니다.',
      ru: 'Отобран на стипендию для иностранных студентов провинции Чхунбук (충북형 K-유학생 장학금) два семестра подряд — осенью 2025 и весной 2026.',
      uz: "Chungbuk-turi xorijiy talabalar uchun K-stipendiyasiga (충북형 K-유학생 장학금) ketma-ket ikki semestr — 2025-yil kuz va 2026-yil bahor — uchun tanlab olindim.",
    },
  },
  {
    title: 'Gold Award — AI Smart Crosswalk (Team Leader)',
    org: 'SPIED 2025, Innovative Research & Education of Asia (China)',
    date: 'Aug 23, 2025',
    note: {
      en: 'Served as Team Leader of the multinational team "One Asia", which won Gold Award at the 13th Summer Program for Innovative Engineering Design (SP!ED 2025).',
      ko: '다국적 팀 "One Asia"의 Team Leader를 맡았으며, 팀은 제13회 혁신 공학 설계 여름 프로그램(SP!ED 2025)에서 Gold Award를 수상하였습니다.',
      ru: 'Был Team Leader многонациональной команды «One Asia», которая завоевала Gold Award на 13-й летней программе SP!ED 2025.',
      uz: '"One Asia" ko\'pmillatli jamoasining Team Leaderi bo\'ldim; jamoa 13-SP!ED 2025 dasturida Gold Award ni qo\'lga kiritdi.',
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
