// Optional fields (leave out any you don't need; the page simply skips them):
//   status           'Live' | 'In progress'
//   role             what you personally did
//   featuresHeading  overrides the "Key features" heading
//   challenges, learned, liveUrl, repoUrl

export const projects = [
  {
    slug: 'perfectly-hooked',
    title: 'Perfectly Hooked',
    category: 'Web Development',
    status: 'Live',
    featured: true,
    shortDescription:
      'A front-end crochet storefront with a saved cart, Paystack checkout and a WhatsApp handoff for completing orders.',
    role: 'Design and development',
    overview:
      'Perfectly Hooked is the online storefront for my handmade crochet brand. Customers can browse pieces, build a cart and check out, then finish their order with me directly on WhatsApp. It is live on Netlify.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'localStorage', 'Paystack', 'Netlify'],
    image: '/images/perfectly-hooked.png',
    features: [
  'Interactive product cards with filtering, image sliders and quick-view modals',
  'A shopping cart with quantity controls, saved in the browser with localStorage',
  'Paystack checkout that generates a receipt with the order number, tested before going live',
  'After checkout, customers are sent to WhatsApp to complete their order with me',
  'Layouts tested and refined on desktop and mobile',
],
gallery: [
  // { src: '/images/perfectly-hooked-1.png', alt: 'Product cards on the shop page' },
],
    challenges:
      'The site has no backend, so the cart has to live in the browser. I used localStorage to keep it between visits, and I send finished orders through WhatsApp so I can confirm each one personally.',
    learned:
      'Taking this from code to a live site customers can actually use taught me how to work with localStorage, a payment integration and a real deployment.',
    liveUrl: 'https://perfectlyhooked.netlify.app/',
    repoUrl: '',
  },
  {
    slug: 'folia',
    title: 'Folia',
    category: 'Full-Stack & AI',
    status: 'In progress',
    featured: true,
    shortDescription:
      'A literary platform where readers read and discover stories and writers publish and connect, with AI-powered recommendations in development.',
    role: 'Design and development',
    overview:
      'Folia is a reading and writing ecosystem, and the project where I am bringing my frontend, backend and machine learning skills together. Readers will be able to upload and read books and describe stories they have enjoyed, and writers get their own space to write and a community to share it with. Folia 2.0 is a rebuild of an earlier reading tracker. The frontend is built, the backend is underway, and the machine learning features come next.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Python (planned)'],
    image: '/images/foliacover.png',
    featuresHeading: 'What I’m building',
    features: [
      'A reader space for uploading and reading books',
      'AI recommendations: readers describe a few lines about stories they have read, and the system suggests what to read next, personal to each reader',
      'A writer space with a writing section and a community feature for interacting with readers',
      'An audiobook section, with a voice system I plan to build using machine learning',
      'A backend with Node, Express and a PostgreSQL database managed through Prisma',
    ],
    challenges:
      'This is my first full-stack project, so I am learning backend development as I build: designing the database schema, setting up the API, and working out how the AI and machine learning side will plug in.',
    liveUrl: '',
    repoUrl: '',
  },
  {
    slug: 'zyra-fashion-house',
    title: 'Zyra Fashion House',
    category: 'Web Development',
    featured: true,
    shortDescription:
      'A fashion house website built with coursemates, where I sourced the imagery and reviewed the interface design.',
    role: 'Image sourcing and interface design review',
    overview:
      'Zyra Fashion House was a collaborative university web project. My coursemates handled the code, and I focused on how it looked: sourcing the pictures used across the site and reviewing the interface design as it came together.',
    technologies: ['Team project', 'Image sourcing', 'Design review'],
    image: '/images/zyra-fashion.png',
    featuresHeading: 'My contribution',
    features: [
      'Sourced and selected the images used across the site',
      'Reviewed the interface design and gave feedback as it took shape',
      'Worked with coursemates as part of a team',
    ],
    liveUrl: 'https://zyrafashionhouse.infinityfreeapp.com/?i=2',
    repoUrl: '',
  },
];