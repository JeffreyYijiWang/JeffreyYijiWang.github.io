export const interests = [
  'Machine Learning & Reinforcement Learning',
  'Backend & Distributed Systems',
  'Mobile & Web Development',
  'Computer Graphics',
  'Systems Programming',
];

export const skills = [
  'Python',
  'C++',
  'Java',
  'C#',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'PyTorch',
  'TensorFlow',
  'PostgreSQL',
  'Dart',
  'Git',
  'GitHub',
  'Docker',
];

export type Experience = {
  organization: string;
  role: string;
  dates: string;
  location: string;
  logo: string;
  logoAlt: string;
  current?: boolean;
  bullets: Array<string | { before: string; label: string; href: string; after: string }>;
};

export const experiences: Experience[] = [
  {
    organization: 'ScottyLabs @ Carnegie Mellon University',
    role: 'Software Developer',
    dates: 'Sept 2024 – Present',
    location: 'Pittsburgh, PA',
    logo: '/assets/img/scottylabs.png',
    logoAlt: 'ScottyLabs logo',
    current: true,
    bullets: [
      {
        before: 'Built and maintained a Rust + Postgres backend for a scavenger hunt (',
        label: 'O-Quest',
        href: 'https://play.google.com/store/apps/details?id=quest.cmu.twa&hl=en-US',
        after:
          '), implementing a modular handlers/services architecture and operational tooling for CSV-based challenge import and QR export.',
      },
      {
        before:
          'Developed indoor and outdoor navigation features and authentication workflows for ',
        label: 'CMU Maps',
        href: 'https://maps.scottylabs.org/',
        after: ' using Node.js and MongoDB.',
      },
    ],
  },
  {
    organization: 'Carnegie Mellon University Unity Student Course',
    role: 'Teaching Instructor',
    dates: 'Sept 2025 – Present',
    location: 'Pittsburgh, PA',
    logo: '/assets/img/cmu-wordmark.png',
    logoAlt: 'Carnegie Mellon University wordmark',
    bullets: [
      "Co-developed and taught a Unity game-development course covering C# programming, Unity's entity-component system, 2D/3D asset pipelines, shaders, VFX, animation, audio, AI, networking, and programming patterns.",
      'Led weekly recitations, office hours, and code reviews for graduate and undergraduate students.',
    ],
  },
  {
    organization: 'Carnegie Mellon University Center for Transformational Play',
    role: 'Software Engineer Intern',
    dates: 'May 2025 – Nov 2025',
    location: 'Pittsburgh, PA',
    logo: '/assets/img/Center-For-Transformational-Play.png',
    logoAlt: 'Center for Transformational Play logo',
    bullets: [
      {
        before: 'Developed the Unity/C# application ',
        label: 'Chill Rooms',
        href: 'https://ctp.cs.cmu.edu/ahn',
        after: ' for Allegheny Health Network.',
      },
      'Reduced content-integration time by 90% (about 10 minutes to 1 minute) with a Python CSV import and validation pipeline for dialogue, triggers, events, and item attributes.',
    ],
  },
  {
    organization: 'Carnegie Mellon University Software Engineering Institute',
    role: 'Software Engineering Intern',
    dates: 'Sept 2024 – May 2025',
    location: 'Pittsburgh, PA',
    logo: '/assets/img/Software-Engineering-Institute-logo.png',
    logoAlt: 'Software Engineering Institute logo',
    bullets: [
      'Rapidly prototyped a modular interactive Unity assessment for the U.S. Department of Defense to evaluate AI and data-literacy competencies.',
      'Collaborated with stakeholders in Agile sprints to refine requirements, prioritize scope, and deliver iterative builds aligned with knowledge, skills, abilities, and tasks.',
    ],
  },
  {
    organization: 'Tindoori Labs',
    role: 'Research Intern',
    dates: 'Aug 2023 – Aug 2024',
    location: 'Pittsburgh, PA',
    logo: '/assets/img/Tindoori-Labs.png',
    logoAlt: 'Tindoori Labs logo',
    bullets: [
      'Engineered a full-stack language-learning application with authentication, profiles, progress tracking, real-time messaging, and community events.',
      'Implemented frontend and backend features for gamification and social interaction while collaborating with the founder on product architecture and planning.',
    ],
  },
];

export type Course = { code: string; name: string; description: string };

export const courses: Course[] = [
  {
    code: '15-122',
    name: 'Principles of Imperative Computation',
    description:
      'Data structures and algorithms in C, with contracts, invariants, and algorithmic reasoning.',
  },
  {
    code: '15-150',
    name: 'Functional Programming',
    description:
      'Functional programming in Standard ML, recursion, higher-order functions, inductive reasoning, correctness, and complexity.',
  },
  {
    code: '15-213',
    name: 'Introduction to Computer Systems',
    description:
      'Machine-level code, memory and caching, linking, virtual memory, concurrency, and networking in C.',
  },
  {
    code: '15-151',
    name: 'Mathematical Foundations for Computer Science',
    description:
      'Proof and discrete structures, including logic, sets, functions, relations, induction, and number theory.',
  },
  {
    code: '15-251',
    name: 'Great Ideas in Theoretical Computer Science',
    description:
      'Computability, complexity, automata, probability, cryptography, and fundamental limits of computation.',
  },
  {
    code: '16-385',
    name: 'Computer Vision',
    description:
      'Image formation, filtering, feature detection, geometry, recognition, reconstruction, and tracking.',
  },
  {
    code: '15-210',
    name: 'Parallel and Sequential Data Structures and Algorithms',
    description:
      'Sequential and parallel algorithms, dynamic programming, balanced trees, complexity, and parallel techniques.',
  },
  {
    code: '15-472',
    name: 'Real-Time Computer Graphics',
    description:
      'Real-time rendering in C++ and Vulkan, including GPU programming, lighting, shadows, post-processing, profiling, and multithreading.',
  },
  {
    code: '15-468',
    name: 'Physics-Based Rendering',
    description:
      'Monte Carlo ray tracing, global illumination, light transport, physically based materials, volumes, and advanced rendering algorithms.',
  },
];
