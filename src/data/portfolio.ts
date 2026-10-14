export type ProjectCategory =
  | 'Websites'
  | 'Applications'
  | 'UI Projects';

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  demoUrl: string;
  sourceUrl: string;
  number: string;
  visual: 'shop' | 'weather' | 'portfolio' | 'social';
  image: string;
};

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    category: 'Websites',
    description:
      'A cinematic portfolio website for a videographer, showcasing creative work and services through a polished, immersive experience.',
    tech: ['React', 'Tailwind CSS', 'Responsive design'],
    demoUrl: 'https://visualsbydmlportfolio.netlify.app/',
    sourceUrl: '',
    number: '01',
    visual: 'portfolio',
    image: '/images/projects/visualsbydml.png',
  },
  {
    title: 'E-Commerce Website',
    category: 'Applications',
    description:
      'A responsive shopping experience with product discovery, product details, cart, wishlist and checkout flows.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    demoUrl: 'https://stylishshoper.netlify.app/',
    sourceUrl: '',
    number: '02',
    visual: 'shop',
    image: '/images/projects/stylish-shoper.png',
  },
  {
    title: 'Client Portfolio Website',
    category: 'Websites',
    description:
      'A professional portfolio for a creative client, presenting their work, services and contact information.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://ayomofeportfolio.netlify.app/',
    sourceUrl: '',
    number: '03',
    visual: 'portfolio',
    image: '/images/projects/ayomofe-portfolio.png',
  },
  {
    title: 'Weather Application',
    category: 'Applications',
    description:
      'A weather application featuring location search, current conditions, forecasts and useful weather statistics.',
    tech: ['React', 'Tailwind CSS', 'API integration'],
    demoUrl: 'https://weather-mini-ap.netlify.app/',
    sourceUrl: '',
    number: '04',
    visual: 'weather',
    image: '/images/projects/weather-app.png',
  },
];

export const skills = [
  {
    title: 'Frontend',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Tools & workflow',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Vite',
      'npm',
    ],
  },
  {
    title: 'What I build',
    items: [
      'Responsive design',
      'REST API integration',
      'React Router',
      'UI implementation',
      'Debugging & optimization',
    ],
  },
];

export const contact = {
  github: 'https://github.com/AdrFoladara95',
  whatsapp: 'https://wa.me/2348103230979',
  linkedin: 'https://www.linkedin.com/in/damilola-racheal-awe-567743400/',
  email: 'damilolaawe865@gmail.com',
}

export const availableForWork = true;