'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Potography Portfolio Website',
    description: 'Project 2 description',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description: 'Project 3 description',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Food Ordering Application',
    description: 'Project 4 description',
    image: '/images/projects/4.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD operations',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Full-stack Roadmap',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const data = [
  {
    title: 'Chatterbox',
    previewUrl: null,
    image: '/images/projects/chatterbox.png',

    gitUrl: 'https://github.com/brianhngo/ChatterBox',
    date: 'July 2024',
    summary:
      'Developed a full-stack Twitch clone with live streaming, real-time chat, and viewer tracking using React and Node.js.',
    description: [
      'Developed a live streaming platform with Next.js/React frontend and Node.js/Express backend, featuring real-time chat, dynamic notifications, and viewer tracking.',
      'Engineered real-time features and scalable chat systems using WebSocket (Socket.IO) for live chat and viewer count updates, supporting multiple chat rooms with real-time message delivery and moderation.',
      'Integrated live push notifications and QR-based 2FA authentication using Google Firebase Authentication for enhanced security.',
      'Applied best practices in code quality and responsive design with React and Tailwind CSS, including code reviews, testing, and debugging.',
      'Developed a Java-based API to handle real-time data synchronization and enhance performance of live chat functionalities.',
    ],
    technologies: [
      'supabase',
      'axios',
      'bcryptjs',
      'body-parser',
      'cors',
      'dotenv',
      'express',
      'express-session',
      'firebase',
      'googleapis',
      'hi-base32',
      'jsonwebtoken',
      'morgan',
      'next',
      'nodemailer',
      'otpauth',
      'qrcode',
      'react',
      'tailwindcss',
      'typescript',
    ],
  },
  {
    title: 'FinanceMe',
    image: '/images/projects/FinanceMeLogo.png',
    previewUrl: null,
    gitUrl: 'https://github.com/brianhngo/FinanceMe',
    date: 'March 2024',
    summary:
      'Created a financial management platform with budgeting, expense tracking, and dynamic chart features using the PERNSF stack.',
    description: [
      'Developed a comprehensive financial management platform using the PERNSF stack (PostgreSQL, Express.js, React, Node.js, Sequelize, Firebase) with Tailwind, Vite, and ChartJS.',
      'Implemented user authentication features including third-party sign-in, password recovery, and user creation using Firebase Authentication.',
      'Executed efficient database queries and created dynamic chart features with ChartJS for visualizing financial data.',
      'Designed and integrated features for real-time customizations of Bar Graphs, Donut Charts, Line Graphs, and Pie Charts.',
      'Developed backend services in Java to support complex financial calculations and improve data processing efficiency.',
    ],
    technologies: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Axios',
      'Vite',
      'Tailwind',
      'ChartJs',
      'Node.js',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Sequelize',
    ],
  },
  {
    image: '/images/projects/WeatherHere.png',
    title: 'WeatherHere',
    previewUrl: null,
    gitUrl: 'https://github.com/brianhngo/WeatherHere',
    date: 'Jan 2024',
    summary:
      'Built a mobile weather app that provides real-time location-based weather forecasts and detailed hourly breakdowns.',
    description: [
      'Created a mobile weather app using Weather API, React Native, Metro Builder, and Expo.',
      'Designed and executed the app’s home page, featuring real-time tracking of the user’s location and presenting a comprehensive 7-day forecast with detailed hour-by-hour breakdowns of weather metrics.',
    ],
    technologies: ['React Native', 'CSS', 'JavaScript', 'HTML', 'Expo'],
  },
  {
    title: 'TradeM',
    image: '/images/projects/TradeM.png',
    previewUrl: 'tradem-6faae.web.app',
    gitUrl: 'https://github.com/brianhngo/TradeM2',
    date: 'Oct 2023',
    summary:
      'Developed a platform for listing and selling used items with chat functionality and location-based product display.',
    description: [
      'Developed a full-stack application using Firebase, React, Node.js, and Bootstrap, serving as a Yelp-like platform for reselling used items.',
      'Designed and implemented a chat messaging system for communication between buyers and sellers.',
      'Created a User Profile component for input and storage of user information in the database.',
      'Implemented user authentication features including third-party sign-in, password recovery, and user creation using Firebase Authentication.',
      'Enhanced backend logic with Java for scalable user data management and system performance optimization.',
      'Designed and integrated features for editing user information and managing products, and established a Leaflet map to display products within proximity.',
    ],
    technologies: [
      'React',
      'React Bootstrap',
      'Leaflet',
      'JavaScript',
      'HTML',
      'CSS',
      'Axios',
      'Webpack',
      'Node.js',
      'Firebase',
    ],
  },
  {
    image: '/images/projects/ChipCorner.png',
    title: 'ChipCorner',
    gitUrl: 'https://github.com/brianhngo/ChipCorner',
    previewUrl: null,
    date: 'Aug 2023',
    summary:
      'Developed an e-commerce platform with product listings, a shopping cart, and secure payment processing.',
    description: [
      'Developed a dynamic web application using the PERNS stack (PostgreSQL, Express.js, React, Redux, Node.js, Sequelize) with a well-structured database and seamless user experience.',
      'Crafted an engaging landing page as the initial interaction with the platform.',
      'Engineered an efficient cart system utilizing local storage to store and dynamically update cart information.',
      'Implemented Java-based microservices for backend functionality including order processing and payment integration, enhancing system scalability and reliability.',
      'Applied robust user authentication with error handling mechanisms using JSON Web Tokens (JWT).',
    ],
    technologies: [
      'React',
      'Redux',
      'React Router',
      'HTML',
      'CSS',
      'JavaScript',
      'Webpack',
      'Axios',
      'Node.js',
      'Stripe',
      'Express.js',
      'PostgreSQL',
      'Sequelize',
      'JSON Web Token',
    ],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-15">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {data.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              summary={project.summary}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
