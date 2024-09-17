'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="flex flex-row flex-wrap justify-between text-md">
        <div className="w-1/2">
          <strong>Programming Languages:</strong>
          <ul className="list-disc pl-6">
            <li>
              <div className="flex items-center space-x-2">
                <span>Matlab</span>
                <Image
                  src="/technologies/matlab.svg"
                  alt="Matlab icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Python</span>
                <Image
                  src="/technologies/python.svg"
                  alt="Python icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Arduino</span>
                <Image
                  src="/technologies/arduino.svg"
                  alt="Arduino icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Javascript</span>
                <Image
                  src="/technologies/javascript.svg"
                  alt="Javascript icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Typescript</span>
                <Image
                  src="/technologies/Typescript.svg"
                  alt="Typescript icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>HTML </span>
                <Image
                  src="/technologies/html.svg"
                  alt="HTML icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>CSS </span>
                <Image
                  src="/technologies/css.svg"
                  alt="CSS icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
          </ul>
          <strong>Databases:</strong>
          <ul className="list-disc pl-6">
            <li>
              <div className="flex items-center space-x-2">
                <span>PostgreSQL</span>
                <Image
                  src="/technologies/postgresql.svg"
                  alt="postgreSQL icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>SQL</span>
                <Image
                  src="/technologies/sql.svg"
                  alt="SQL icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Firebase</span>
                <Image
                  src="/technologies/firebase.svg"
                  alt="Firebase icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Supabase</span>
                <Image
                  src="/technologies/supabase.svg"
                  alt="Supabase icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <strong>FrontEnd:</strong>
          <ul className="list-disc pl-6">
            <li>
              <div className="flex items-center space-x-2">
                <span>Javascript</span>
                <Image
                  src="/technologies/javascript.svg"
                  alt="Javascript icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>HTML </span>
                <Image
                  src="/technologies/html.svg"
                  alt="HTML icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>CSS </span>
                <Image
                  src="/technologies/css.svg"
                  alt="CSS icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Tailwind </span>
                <Image
                  src="/technologies/tailwind.svg"
                  alt="Tailwind icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
          </ul>
          <strong>BackEnd:</strong>
          <ul className="list-disc pl-6">
            <li>
              <div className="flex items-center space-x-2">
                <span>Node.js </span>
                <Image
                  src="/technologies/nodejs.svg"
                  alt="NodeJS icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span>Express </span>
                <Image
                  src="/technologies/express.svg"
                  alt="Express icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
          </ul>
          <strong>Frameworks:</strong>
          <ul className="list-disc pl-6">
            <li>
              <div className="flex items-center space-x-2">
                <span>React</span>
                <Image
                  src="/technologies/react.svg"
                  alt="React icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              {' '}
              <div className="flex items-center space-x-2">
                <span>Next.js </span>
                <Image
                  src="/technologies/nextjs.svg"
                  alt="NextJS icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              {' '}
              <div className="flex items-center space-x-2">
                <span>Angular </span>
                <Image
                  src="/technologies/angular.svg"
                  alt="Angular icon"
                  width={24}
                  height={24}
                />
              </div>
            </li>
          </ul>
        </div>
        <strong>Libraries:</strong>
        <ul className="list-disc grid grid-cols-2 lg:grid-cols-3 w-full space-y-2 pl-6">
          <li className="">
            <div className="flex items-center space-x-2 ">
              <span>Sequelize</span>
              <Image
                src="/technologies/sequelize.svg"
                alt="Sequelize icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li className="">
            <div className="flex items-center space-x-2">
              <span>Redux</span>
              <Image
                src="/technologies/redux.svg"
                alt="Redux icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-2">
              <span>Bootstrap</span>
              <Image
                src="/technologies/bootstrap.svg"
                alt="Bootstrap icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-2">
              <span>Leaflet</span>
              <Image
                src="/technologies/leaflet.svg"
                alt="Leaflet icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>JWT</li>
          <li>
            <div className="flex items-center space-x-2">
              <span>React Native</span>
              <Image
                src="/technologies/react.svg"
                alt="React icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>Axios</li>
          <li>
            <div className="flex items-center space-x-2">
              <span>Websocket</span>
              <Image
                src="/technologies/websocket.svg"
                alt="Websocket icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-2">
              <span>Webpack</span>
              <Image
                src="/technologies/webpack.svg"
                alt="Webpack icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-2">
              <span>Vite</span>
              <Image
                src="/technologies/vite.svg"
                alt="Vite icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-2">
              <span>Tailwind</span>
              <Image
                src="/technologies/tailwind.svg"
                alt="Tailwind icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>Metro Builder</li>
          <li>
            <div className="flex items-center space-x-2">
              <span>Expo Go</span>
              <Image
                src="/technologies/expo.svg"
                alt="Expo icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-2">
              <span>Chart.js</span>
              <Image
                src="/technologies/chartjs.svg"
                alt="ChartJs icon"
                width={24}
                height={24}
              />
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-2">
              <span>Postman</span>
              <Image
                src="/technologies/postman.svg"
                alt="Postman icon"
                width={24}
                height={24}
              />
            </div>
          </li>
        </ul>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>
          Software Engineering & Web Development Bootcamp Certificate @
          FullStack Academy
        </li>
        <li>B.S in Bioengineering @ University of California, San Diego</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Udemy - The Complete SQL Bootcamp : Go from Zero to Hero</li>
        <li> PCEP – Certified Entry Level Python Programmer </li>
        <li> Lean Six Sigma White Belt Certification</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col">
          <Image
            className="h-[600px] w-[500px] object-cover "
            style={{ alignItems: 'normal' }}
            src="/images/about-image.png"
            alt="aboutimage"
            width={500}
            height={1000}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I’m a former R&D Engineer turned Software Developer with a passion
            for building impactful solutions. My transition from biotech to tech
            allowed me to apply the problem-solving and process-optimization
            skills I honed in R&D to software engineering. I’ve developed
            full-stack applications using technologies like React, Next.js,
            Node.js, PostgreSQL, and Firebase, among others. I’ve built
            everything from live-streaming platforms with real-time chat to
            financial management tools with dynamic data visualization. My
            diverse background gives me a unique perspective when approaching
            complex technical challenges, enabling me to create efficient and
            scalable solutions.
          </p>
          <p className="text-base lg:text-lg mt-3">
            Outside of work, I’m an avid golfer, pickleball enthusiast, and
            snorkeler, always looking for new ways to stay active and explore
            the outdoors. I also have an addiction to solving escape
            rooms—whether it’s figuring out intricate puzzles or beating the
            clock, I love the thrill of working through challenges. These
            hobbies keep me sharp and energized, allowing me to approach coding
            with a fresh and focused mindset.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}>
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}>
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
