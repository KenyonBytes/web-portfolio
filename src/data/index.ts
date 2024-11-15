import { fasHouseMedical, fasCode } from '@quasar/extras/fontawesome-v6';
import { fasProjectDiagram } from '@quasar/extras/fontawesome-v5';
import { roundMobileScreenShare } from '@quasar/extras/material-icons-round'

import ProjectImg1 from '/images/myProject1.png';
import ProjectImg2 from '/images/myProject2.png';
import ProjectImg3 from '/images/myProject3.png';
import Avatar1 from '/images/avatar1.png';
import Avatar2 from '/images/avatar2.png';
import Avatar3 from '/images/avatar3.png';
import Avatar4 from '/images/avatar4.png';
import Go from '/svg/go.svg';
import Angular from '/images/angular_gradient.png';
import Vue from '/svg/vue-9.svg';
import ViteJS from '/svg/vitejs.svg';
import Python from '/svg/python.svg';
import Node from '/svg/node.svg';

export const navItems = [
  {
    name: 'Home',
    href: '#home',
    icon: fasHouseMedical,
  },
  {
    name: 'Skills',
    href: '#skills',
    icon: fasHouseMedical,
  },
  {
    name: 'Services',
    href: '#services',
    icon: fasHouseMedical,
  },
  {
    name: 'Projects',
    href: '#projects',
    icon: fasHouseMedical,
  },
  {
    name: 'Contact',
    href: '#contact',
    icon: fasHouseMedical,
  },
];

export const projectsItems = [
  {
    title: 'Fundaxi',
    image: ProjectImg1,
  },
  {
    title: 'Grublr',
    image: ProjectImg2,
  },
  {
    title: 'Admin Panel Website',
    image: ProjectImg3,
  },
];

export const skillsItems = [
  {
    name: 'Vue',
    description:
      'With Vue 3, I specialize in both the Composition API and Options API, leveraging the full flexibility of Vue\'s modern features to build dynamic, maintainable web applications. I integrate Vue Router for seamless navigation and manage application state using Vuex or Pinia, depending on the project\'s needs.By combining these tools, I create scalable and efficient applications with clean code and optimal performance, ensuring a smooth user experience and maintainable architecture.',
    logo: Vue,
  },
  {
    name: 'ViteJS',
    description:
      'I specialize in using Vite for fast, modern web development. Vite\'s lightning-fast build times and native support for ES modules allow me to create highly optimized development environments that enhance both productivity and performance. By leveraging Vite\'s powerful features such as hot module replacement (HMR), automatic code splitting, and seamless integration with modern frameworks like Vue 3 and React, I deliver rapid, scalable applications with minimal overhead and maximum efficiency.',
    logo: ViteJS,
  },
  {
    name: 'Node',
    description:
      'With Node.js, I build fast, scalable server-side applications that handle high traffic and complex business logic with ease. Leveraging the non-blocking, event-driven architecture of Node.js, I create high-performance APIs, real-time applications, and microservices that scale efficiently. I integrate a wide range of libraries and frameworks, such as Express, to streamline development and ensure optimal performance. Whether you\’re building RESTful APIs, handling data processing, or integrating with third-party services, I use Node.js to create reliable and robust backend solutions.',
    logo: Node,
  },
  {
    name: 'Python',
    description:
      'With Python, I develop efficient, maintainable applications across a variety of domains, including data analysis, web development, automation, and machine learning. Python\’s versatility and vast ecosystem of libraries enable me to quickly prototype solutions and build scalable applications. Whether it\’s developing RESTful APIs with frameworks like Flask or Django, processing large datasets with Pandas, or implementing machine learning models using TensorFlow or Scikit-learn, I leverage Python\’s strengths to deliver powerful, flexible solutions.',
    logo: Python,
  },
  {
    name: 'Go',
    description:
      'With Go (Golang), I build high-performance, concurrent applications designed for scalability and efficiency. Go\’s simplicity, speed, and robust concurrency model make it ideal for developing microservices, APIs, and systems that require high throughput and low latency. Whether it\’s building fast, reliable backends or handling distributed systems, I use Go\’s lightweight goroutines and channels to manage concurrent processes effectively. I focus on writing clean, maintainable code that can easily scale to handle increasing demands.',
    logo: Go,
  },
  {
    name: 'Angular',
    description:
      'With Angular, I build dynamic, high-performance web applications that are scalable and maintainable. Angular\’s powerful framework, with its two-way data binding, dependency injection, and modular architecture, allows me to create robust solutions for complex business logic. I utilize RxJS for reactive programming, Angular CLI for efficient project setup, and NgRx for state management, ensuring seamless integration and a smooth user experience. Whether it\’s building enterprise-level applications or complex SPAs, I leverage Angular\’s full capabilities to deliver top-tier, performant applications.',
    logo: Angular,
  },
];

export const servicesItems = [
  {
    title: 'Web Development',
    description:
      'Whether you\'re looking to build a Single Page Application (SPA), Progressive Web App (PWA), sophisticated Admin Dashboard, or a custom solution with complex business logic and seamless API integrations, I specialize in creating high-performance, scalable web applications tailored to your needs. From intuitive user interfaces to robust backend architectures, I leverage modern web technologies to deliver seamless, responsive, and user-centric experiences that drive business success.',
    logo: fasCode,
  },
  {
    title: 'Mobile Development',
    description:
      'Using Capacitor, I build high-performance, cross-platform mobile apps that deliver native-like experiences on iOS, Android, and the web. By combining modern web technologies with native functionality, I create scalable, responsive mobile solutions tailored to your needs, whether you\'re building a new app or extending an existing web app to mobile platforms.',
    logo: roundMobileScreenShare,
  },
  {
    title: 'Technical Project Management',
    description:
      'As a Technical Project Manager, I leverage Agile methodologies and tools like Jira to deliver projects on time and within scope. I focus on effective collaboration, clear task prioritization, and maintaining schedules to ensure smooth execution across teams. With a keen eye on quality and efficiency, I drive projects forward while minimizing risks and optimizing workflows.',
    logo: fasProjectDiagram,
  },
];

export const testimonialsItems = [
  {
    name: 'Tony',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: Avatar1,
  },
  {
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: Avatar2,
  },
  {
    name: 'Roddin',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: Avatar3,
  },
  {
    name: 'Jane',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: Avatar4,
  },
];
