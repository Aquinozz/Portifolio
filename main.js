// ---------- TRADUÇÕES ----------
const translations = {
  pt: {
    'nav-about': 'Sobre',
    'nav-skills': 'Skills',
    'nav-projects': 'Projetos',
    'nav-education': 'Formação',
    'nav-experience': 'Experiência',
    'nav-contact': 'Contato',
    'hero-role': 'Backend Developer',
    'hero-desc':
      'Especialista em automação, APIs e infraestrutura backend. Cada projeto é uma missão vencida com foco em impacto prático e soluções escaláveis.',
    'projects-btn-text': 'Ver Projetos',
    'contact-btn-text': 'Contato',
    'section-title-about': 'Sobre',
    'about-heading': 'Quem é Aquinoz',
    'about-text-1':
      'Backend developer focado em automação, APIs e soluções escaláveis. A jornada começou com scripts simples e evoluiu para sistemas completos.',
    'about-text-2':
      'Prezo por arquitetura limpa e código bem estruturado: princípios SOLID, clean code, arquitetura em camadas (REST, microsserviços, eventos) e documentação clara. Sistemas organizados são mais fáceis de manter, testar e evoluir.',
    'about-text-3':
      'A jornada continua com novas ideias, desafios e melhorias. Sempre pronto para a próxima missão.',
    'stat-label-projects': 'Projetos',
    'stat-label-stack': 'Stack Principal',
    'stat-label-focus': 'Foco',
    'stat-label-status': 'Status',
    'stat-value-availability': 'Disponível',
    'section-title-skills': 'Habilidades',
    'section-title-projects': 'Projetos',
    'projects-footer-text': 'Ver todos no GitHub',
    'section-title-education': 'Formação',
    'section-title-experience': 'Experiência',
    'section-title-contact': 'Contato',
    'contact-heading': 'Envie um sinal para a próxima missão.',
    'contact-desc':
      'Se quiser trocar ideias, discutir projetos ou iniciar uma colaboração, os caminhos abaixo estão abertos como um chamado ao norte.',
    'contact-status-1': 'Disponível para Freelance Remoto',
    'contact-status-2': 'Aberto para Colaborações',
    'contact-status-3': 'Mensagens Diretas',
    'phone-header-title': 'Contatos',
    'phone-header-sub': 'Phantom Network',
    'project-flag': 'Destaque',
  },
  en: {
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-education': 'Education',
    'nav-experience': 'Experience',
    'nav-contact': 'Contact',
    'hero-role': 'Backend Developer',
    'hero-desc':
      'Specialist in automation, APIs and backend infrastructure. Every project is a mission accomplished with a focus on practical impact and scalable solutions.',
    'projects-btn-text': 'View Projects',
    'contact-btn-text': 'Contact',
    'section-title-about': 'About',
    'about-heading': 'Who is Aquinoz',
    'about-text-1':
      'Backend developer focused on automation, APIs and scalable solutions. The journey started with simple scripts and evolved into full systems.',
    'about-text-2':
      'I value clean architecture and healthy code: SOLID principles, clean code, layered architecture (REST, microservices, events) and clear documentation. Well-structured systems are easier to maintain, test and evolve.',
    'about-text-3':
      'The journey continues with new ideas, challenges and improvements. Always ready for the next mission.',
    'stat-label-projects': 'Projects',
    'stat-label-stack': 'Main Stack',
    'stat-label-focus': 'Focus',
    'stat-label-status': 'Status',
    'stat-value-availability': 'Available',
    'section-title-skills': 'Skills',
    'section-title-projects': 'Projects',
    'projects-footer-text': 'View all on GitHub',
    'section-title-education': 'Education',
    'section-title-experience': 'Experience',
    'section-title-contact': 'Contact',
    'contact-heading': 'Send a signal for the next mission.',
    'contact-desc':
      'If you want to exchange ideas, discuss projects or start a collaboration, the paths below are open like a call to the north.',
    'contact-status-1': 'Available for Remote Freelance',
    'contact-status-2': 'Open to Collaborations',
    'contact-status-3': 'Direct Messages',
    'phone-header-title': 'Contacts',
    'phone-header-sub': 'Phantom Network',
    'project-flag': 'Featured',
  },
};

// ---------- DADOS (bilíngues) ----------
const data = {
  skills: [
    { name: { pt: 'Java', en: 'Java' }, icon: 'coffee' },
    { name: { pt: 'Spring Boot', en: 'Spring Boot' }, icon: 'leaf' },
    { name: { pt: 'Spring Security', en: 'Spring Security' }, icon: 'shield' },
    { name: { pt: 'Python', en: 'Python' }, icon: 'code' },
    { name: { pt: 'Flask', en: 'Flask' }, icon: 'flask' },
    { name: { pt: 'FastAPI', en: 'FastAPI' }, icon: 'zap' },
    { name: { pt: 'JavaScript', en: 'JavaScript' }, icon: 'braces' },
    { name: { pt: 'TypeScript', en: 'TypeScript' }, icon: 'braces' },
    { name: { pt: 'REST API', en: 'REST API' }, icon: 'globe' },
    { name: { pt: 'JWT', en: 'JWT' }, icon: 'key' },
    { name: { pt: 'Spring JPA', en: 'Spring JPA' }, icon: 'database' },
    { name: { pt: 'MySQL', en: 'MySQL' }, icon: 'database' },
    { name: { pt: 'Swagger', en: 'Swagger' }, icon: 'file-json' },
    { name: { pt: 'SLF4J', en: 'SLF4J' }, icon: 'scroll' },
    { name: { pt: 'PyPDF', en: 'PyPDF' }, icon: 'file-text' },
    { name: { pt: 'IA', en: 'AI' }, icon: 'brain' },
    { name: { pt: 'Docker', en: 'Docker' }, icon: 'docker' },
    { name: { pt: 'PostgreSQL', en: 'PostgreSQL' }, icon: 'database' },
    { name: { pt: 'Kafka', en: 'Kafka' }, icon: 'kafka' },
    { name: { pt: 'Spring Cloud', en: 'Spring Cloud' }, icon: 'cloud' },
    { name: { pt: 'Git', en: 'Git' }, icon: 'git' },
    { name: { pt: 'C++', en: 'C++' }, icon: 'code' },
    { name: { pt: 'SQL', en: 'SQL' }, icon: 'database' },
  ],

  projects: [
    {
      repo: 'herald',
      name: 'Herald',
      tag: { pt: 'Stable', en: 'Stable' },
      flag: true,
      description: {
        pt: 'Webhook Delivery Engine — entrega confiável de eventos via Kafka, com retry, HMAC e Dead Letter Queue.',
        en: 'Webhook Delivery Engine — reliable event delivery via Kafka, with retry, HMAC and Dead Letter Queue.',
      },
      tech: ['Java 21', 'Spring Boot', 'Spring Cloud', 'Kafka', 'HMAC', 'Docker'],
      github: 'https://github.com/Aquinozz/herald',
      demo: null,
      image: './assets/hero-bg.jpg',
    },
    {
      repo: 'biblioteca-manager-microservices',
      name: 'Biblioteca Manager Microservices',
      tag: { pt: 'Stable', en: 'Stable' },
      flag: false,
      description: {
        pt: 'Migração de API monolítica para microsserviços com API Gateway, Eureka e mensageria assíncrona com Kafka.',
        en: 'Migration of a monolithic API to microservices with API Gateway, Eureka and async messaging with Kafka.',
      },
      tech: ['Java 21', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'JWT', 'Kafka', 'Resilience4j', 'Docker'],
      github: 'https://github.com/Aquinozz/biblioteca-manager-microservices',
      demo: null,
      image: './assets/projects-bg.jpg',
    },
    {
      repo: 'pet-link',
      name: 'Pet Link',
      tag: { pt: 'Em desenvolvimento', en: 'In development' },
      flag: false,
      description: {
        pt: 'Rede que conecta tutores e prestadores da área pet com base na localização, com agendamento e avaliações.',
        en: 'Network that connects pet tutors and service providers based on location, with scheduling and reviews.',
      },
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Spring Security', 'Swagger', 'TypeScript', 'React', 'Vite'],
      github: 'https://github.com/Aquinozz/pet-link',
      demo: null,
      image: './assets/pet-bg.jpg',
    },
    {
      repo: 'event-management',
      name: 'Event Management API',
      tag: { pt: 'Stable', en: 'Stable' },
      flag: false,
      description: {
        pt: 'API REST para gerenciamento de eventos com autenticação JWT, categorias e inscrições públicas.',
        en: 'REST API for event management with JWT authentication, categories and public registrations.',
      },
      tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Spring JPA', 'H2 Database', 'Swagger'],
      github: 'https://github.com/Aquinozz/event-management',
      demo: null,
      image: './assets/skills-bg.jpg',
    },
  ],

  education: [
    {
      title: { pt: 'Técnico em Desenvolvimento de Sistemas', en: 'Systems Development Technician' },
      institution: 'Senai Cimatec',
      period: { pt: 'Em andamento', en: 'In progress' },
      description: { pt: 'Foco na Engenharia de Software e Hardware.', en: 'Focus on Software and Hardware Engineering.' },
      icon: 'cap',
    },
  ],

  experience: [
    {
      title: { pt: 'Backend e Frontend Developer', en: 'Backend and Frontend Developer' },
      company: 'RelvoJus',
      period: { pt: 'Atual', en: 'Current' },
      description: {
        pt: 'Manutenção e criação de telas no Front-End, além de estruturar soluções de BaaS (Backend-as-a-Service) com Supabase para otimizar o fluxo de dados da aplicação.',
        en: 'Building and maintaining Front-End screens, as well as structuring BaaS (Backend-as-a-Service) solutions with Supabase to optimize the app data flow.',
      },
      icon: 'briefcase',
    },
    {
      title: { pt: 'Backend Developer', en: 'Backend Developer' },
      company: { pt: 'Projetos Independentes', en: 'Independent Projects' },
      period: { pt: 'Atual', en: 'Current' },
      description: {
        pt: 'Desenvolvimento de APIs REST, automação de processos e integração de IA em aplicações web.',
        en: 'Development of REST APIs, process automation and AI integration in web applications.',
      },
      icon: 'briefcase',
    },
  ],

  channels: [
    { label: 'EMAIL', value: 'muriloaquinotrab@gmail.com', link: 'mailto:muriloaquinotrab@gmail.com', icon: 'mail' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/aquinozz', link: 'https://linkedin.com/in/aquinozz', icon: 'linkedin' },
    { label: 'GITHUB', value: 'github.com/aquinozz', link: 'https://github.com/aquinozz', icon: 'github' },
  ],
};

// ---------- IDIOMA ----------
let lang = 'pt';

function t(key) {
  return translations[lang][key] || key;
}

function pick(obj) {
  return obj && typeof obj === 'object' && lang in obj ? obj[lang] : obj;
}

// ---------- ÍCONES SVG ----------
const icons = {
  coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  braces: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>',
  'file-json': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>',
  scroll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2"/><path d="M21 17a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2z"/></svg>',
  'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 3 3 0 0 0-2.543 5.242A3 3 0 0 0 7.5 14.5a3 3 0 0 0 4.5 0 3 3 0 0 0 4.5 0 3 3 0 0 0 2.543-4.133A3 3 0 0 0 17.997 5.125 3 3 0 0 0 12 5z"/><path d="M12 5v14"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  docker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12.61c-1.63.32-3.22-.11-4.47-.76a8.44 8.44 0 0 1-1.13 2.95"/><path d="M2.5 12.5h9.5"/><path d="M7 8.5h.01"/><path d="M10.5 8.5h.01"/><path d="M14 8.5h.01"/><path d="M17.5 9.5h.01"/><path d="M7 12.5h.01"/><path d="M10.5 12.5h.01"/><path d="M14 12.5h.01"/><path d="M21 15a5 5 0 0 1-5 5c-3.3 0-6-2.5-6-6v-1"/><path d="M16 9c0-3 2-5 5-5-1 2.5-1 5 0 8"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
  kafka: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 9V3"/><path d="M12 21v-6"/><path d="M5 12H3"/><path d="M21 12h-2"/><path d="M7.5 7.5 4 4"/><path d="M20 20l-3.5-3.5"/><path d="M16.5 7.5 20 4"/><path d="M4 20l3.5-3.5"/></svg>',
  git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8V2"/><path d="M12 22v-6"/><path d="M8 12H2"/><path d="M22 12h-6"/></svg>',
};

function getIcon(name) {
  return icons[name] || icons.code;
}

// ---------- GITHUB API (enriquecimento) ----------
const repoStats = {};

async function loadRepoStats() {
  const results = await Promise.allSettled(
    data.projects.map((p) =>
      fetch(`https://api.github.com/repos/Aquinozz/${p.repo}`, {
        headers: { Accept: 'application/vnd.github+json' },
      })
        .then((res) => (res.ok ? res.json() : null))
        .catch(() => null)
    )
  );
  results.forEach((result, i) => {
    if (result.status === 'fulfilled' && result.value) {
      const r = result.value;
      repoStats[data.projects[i].repo] = {
        stars: r.stargazers_count,
        language: r.language,
        updated: r.updated_at,
      };
    }
  });
  renderProjects();
}

function repoBadge(repo) {
  const stat = repoStats[repo];
  if (!stat) return '';
  const stars = Number.isInteger(stat.stars) && stat.stars > 0 ? `★ ${stat.stars}` : '';
  const updated = stat.updated
    ? new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
        year: 'numeric',
        month: 'short',
      }).format(new Date(stat.updated))
    : '';
  const parts = [stars, stat.language].filter(Boolean);
  return { parts, updated };
}

// ---------- RENDER: SKILLS ----------
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = data.skills
    .map(
      (skill, i) => `
    <div class="skill-card reveal-zoom" style="transition-delay: ${i * 0.02}s">
      <div class="skill-icon-wrap">${getIcon(skill.icon)}</div>
      <span class="skill-name">${pick(skill.name)}</span>
    </div>
  `
    )
    .join('');
  observeReveals();
}

// ---------- RENDER: PROJECTS ----------
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const html = data.projects
    .map((project, i) => {
      const badge = repoBadge(project.repo);
      const statsHtml = badge
        ? `<div class="project-meta">
             ${badge.parts
               .map(
                 (p) =>
                   `<span class="project-meta-tag">${
                     p.startsWith('★') ? `${getIcon('star')}${p.replace('★ ', '')}` : p
                   }</span>`
               )
               .join('')}
             ${badge.updated ? `<span class="project-meta-updated">${badge.updated}</span>` : ''}
           </div>`
        : '';
      const flagHtml = project.flag
        ? `<div class="project-flag">${getIcon('star')}<span>${t('project-flag')}</span></div>`
        : '';
      return `
    <div class="project-card reveal-zoom" style="transition-delay: ${i * 0.05}s">
      <div class="project-image">
        <img src="${project.image}" alt="${project.name}" loading="lazy" />
        <div class="project-image-overlay"></div>
        <div class="project-tag">${pick(project.tag)}</div>
        ${flagHtml}
      </div>
      <div class="project-body">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-desc">${pick(project.description)}</p>
        ${statsHtml}
        <div class="project-tech">
          ${project.tech.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            ${getIcon('github')}
            <span>GitHub</span>
          </a>
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">${getIcon('external')}<span>Demo</span></a>` : ''}
        </div>
      </div>
    </div>
  `;
    })
    .join('')
    .trim();
  grid.innerHTML = html;
  observeReveals();
}

// ---------- RENDER: TIMELINE ----------
function renderTimeline(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item, i) => `
    <div class="timeline-item reveal-${i % 2 === 0 ? 'left' : 'right'}">
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <span class="timeline-icon">${getIcon(item.icon)}</span>
          <span class="timeline-period">${pick(item.period)}</span>
        </div>
        <h3 class="timeline-title">${pick(item.title)}</h3>
        <p class="timeline-sub">${pick(item.institution || item.company)}</p>
        <p class="timeline-text">${pick(item.description)}</p>
      </div>
    </div>
  `
    )
    .join('');
  observeReveals();
}

// ---------- RENDER: PHONE CHANNELS ----------
function renderChannels() {
  const container = document.getElementById('phone-channels');
  if (!container) return;

  container.innerHTML = data.channels
    .map(
      (channel) => `
    <a href="${channel.link}" target="_blank" rel="noopener noreferrer" class="phone-channel">
      <div class="phone-channel-icon">${getIcon(channel.icon)}</div>
      <div class="phone-channel-body">
        <div class="phone-channel-label">${channel.label}</div>
        <div class="phone-channel-value">${channel.value}</div>
      </div>
      <span class="phone-channel-arrow">${getIcon('send')}</span>
    </a>
  `
    )
    .join('');
}

// ---------- APLICAR TRADUÇÃO ESTÁTICA ----------
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
}

// ---------- IDIOMA ----------
function applyLang(next) {
  lang = next === 'en' ? 'en' : 'pt';
  document.documentElement.lang = lang;
  localStorage.setItem('aq-lang', lang);
  applyStaticTranslations();
  renderSkills();
  renderProjects();
  renderTimeline('education-timeline', data.education);
  renderTimeline('experience-timeline', data.experience);
  renderChannels();
  updateLangToggle();
}

function initLangToggle() {
  const saved = localStorage.getItem('aq-lang');
  if (saved === 'en') lang = 'en';

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => applyLang(lang === 'pt' ? 'en' : 'pt'));
  }
  applyLang(lang);
}

function updateLangToggle() {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    const sense = lang === 'pt' ? 'EN' : 'PT';
    toggle.setAttribute('aria-label', sense);
    const span = toggle.querySelector('.lang-current');
    if (span) span.textContent = sense;
  }
}

// ---------- SCROLL SPY ----------
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  function updateActive() {
    const scrollY = window.scrollY;

    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

// ---------- REVEAL ON SCROLL ----------
let revealObserver = null;

function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
  }

  document
    .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom')
    .forEach((el) => {
      if (!el.classList.contains('visible')) revealObserver.observe(el);
    });
}

// ---------- MENU MOBILE ----------
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

// ---------- BACK TO TOP ----------
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  function update() {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', update, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- SMOOTH SCROLL ----------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ---------- ANO NO FOOTER ----------
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- STATS ----------
function renderStats() {
  const el = document.getElementById('stat-number-projects');
  if (el) el.textContent = data.projects.length;
}

// ---------- INIT ----------
function init() {
  initLangToggle();
  renderSkills();
  renderProjects();
  renderTimeline('education-timeline', data.education);
  renderTimeline('experience-timeline', data.experience);
  renderChannels();
  renderStats();
  initScrollSpy();
  observeReveals();
  initMobileMenu();
  initBackToTop();
  initSmoothScroll();
  setYear();
  loadRepoStats();
}

document.addEventListener('DOMContentLoaded', init);