import { useState, useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-scroll';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function App() {
  return (
    <div className="bg-transparent w-full h-full">
      <Navbar />
      <Profile2 />
      <AboutMe />
      <Skills />
      <Projects2 />
      <Timeline />
      <LetsConnect2 />
      <Footer />
    </div>
  );
}

// ** need to add functionality to Navbar once its set up.
// NavBar Section
function Navbar() {
  const [menuState, setMenuState] = useState('menu');

  const navBarHandler = (event) => {
    event.preventDefault();
    setMenuState(menuState === 'menu' ? 'close' : 'menu');
  };

  return (
    <header>
      <nav className="flex flex-col md:flex-row justify-around items-center  md:w-auto md:mx-auto">
        <div>
          <img
            className="w-90  cursor-pointer"
            src="/WebsiteLogo.png"
            alt="..."
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute justify-evenly md:min-h-fit min-h-[60vh] ${
            menuState === 'menu' ? 'top-[-100%]' : ''
          } md:w-auto w-full flex items-center px-5 justify-center md:bg-transparent bg-white md:justify-start `}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-center">
            <li>
              <Link
                activeClass="active"
                to="Intro"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // Adjust the offset to match your design
                className="hover:text-[#808080] text-xl">
                Intro
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about-me"
                spy={true}
                onClick={navBarHandler}
                smooth={true}
                duration={500}
                offset={-70} // Adjust the offset to match your design
                className="hover:text-[#808080] text-xl">
                About Me
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                onClick={navBarHandler}
                smooth={true}
                duration={500}
                offset={-70} // Adjust the offset to match your design
                className="hover:text-[#808080] text-xl">
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                onClick={navBarHandler}
                smooth={true}
                duration={500}
                offset={-70} // Adjust the offset to match your design
                className="hover:text-[#808080] text-xl">
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="professional-timeline"
                spy={true}
                onClick={navBarHandler}
                smooth={true}
                duration={500}
                offset={-70} // Adjust the offset to match your design
                className="hover:text-[#808080] text-xl">
                Professional Timeline
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="lets-connect"
                spy={true}
                onClick={navBarHandler}
                smooth={true}
                duration={500}
                offset={-70} // Adjust the offset to match your design
                className="hover:text-[#808080] text-xl">
                Lets Connect
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 md: absolute top-1 right-2 pr-10 pb-10">
          <ion-icon
            onClick={navBarHandler}
            name={menuState}
            class="text-3xl cursor-pointer md:hidden"></ion-icon>
        </div>
      </nav>
    </header>
  );
}

function Profile2() {
  return (
    <section id="Intro" className="flex justify-center w-min-screen  mb-[15%]">
      <div className="flex flex-col md:flex-row w-[50%] h-[50%] mx-auto my-0 items-center">
        <img
          className="rounded-full md:h-80 md:w-80 h-[200px] w-[200px] flex mx-auto items-center mr-[2.5rem]"
          src="/Circular.jpg"
          alt=""
        />
        <div className="w-full h-full flex-1 self-center text-center">
          <p className="mt-4 mb-4  md:text-[1.75rem] text-[2rem] font-normal text-neutral-950">
            {' '}
            Hello, I'm{' '}
          </p>
          <h1 className="mt-4 mb-4  md:text-[4rem] text-[2.5rem] font-bold leading-none tracking-tight text-neutral-950 ">
            {' '}
            Brian Ngo{' '}
          </h1>
          <p className="mt-4 mb-4 md:text-[1.75rem] text-[2rem] font-courier-new text-neutral-950">
            {' '}
            Software Developer{' '}
          </p>
          <div className="flex justify-center gap-4 space-x-4">
            <a
              href="https://drive.google.com/file/d/19980rgl2NNQwR4N4tmAWUlEZo2cjCsCQ/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="font-semibold transition-all duration-300 flex items-center p-4 w-32 rounded-full border-2 border-gray-300 hover:border-white hover-bg-white hover-text-gray-800 cursor-pointer">
              <ion-icon
                name="document"
                style={{ fontSize: '48px' }}
                className="mr-2"></ion-icon>
              Open CV
            </a>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <ion-icon
              href="https://github.com/brianhngo/"
              rel="noreferrer"
              target="_blank"
              name="logo-github"
              style={{ fontSize: '48px' }}></ion-icon>
            <ion-icon
              href="https://www.linkedin.com/in/brianhngo/"
              rel="noreferrer"
              target="_blank"
              name="logo-linkedin"
              style={{ fontSize: '48px' }}
              className="cursor-pointer h-8"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
}

const AboutMe = () => {
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
    hidden: { opacity: 0, scale: 1, x: -200 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <section id="about-me" className="relative w-min-screen">
      <motion.p
        className="mt-4 mb-4 md:text-[1rem] text-[1rem] font-normal text-neutral-950 text-center"
        ref={ref}
        initial="hidden"
        animate={control}
        variants={boxVariant}>
        Get To Know More
      </motion.p>
      <motion.h1
        className="mt-4 mb-4 text-center md:text-[3.75rem] text-[2.5rem] font-bold leading-none tracking-tight text-neutral-950"
        ref={ref}
        initial="hidden"
        animate={control}
        variants={boxVariant}>
        About Me
      </motion.h1>
      <div className="h-[80%] space-y-16">
        <div className="justify-center flex flex-col">
          <motion.div
            className="w-[80vw] pt-[10px] pb-[10px] gap-[15px] flex md:flex-row flex-col justify-center mx-auto"
            ref={ref}
            initial="hidden"
            animate={control}
            variants={boxVariant}>
            <motion.div
              className="p-6 flex-1 bg-white rounded-full border-2 border-gray-400 text-center"
              ref={ref}
              initial="hidden"
              animate={control}
              variants={boxVariant}>
              <img />
              <h3 className="text-center text-[24px]">Experience</h3>
              <p className="text-center text-[24px]">0-1 Years</p>
            </motion.div>
            <motion.div
              className="p-6 flex-1 bg-white rounded-full border-2 border-gray-400 text-center"
              ref={ref}
              initial="hidden"
              animate={control}
              variants={boxVariant}>
              <img />
              <h3 className="text-center text-[24px]">Education</h3>
              <p className="text-center text-[24px]">
                Full Stack Academy Web Development & Software Engineering
                Certificate
                <br />
                B.S in Bioengineering: Biotechnology
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="text-center"
            ref={ref}
            initial="hidden"
            animate={control}
            variants={boxVariant}>
            <p className="w-[80%] text-center mx-auto text-[20px] ">
              As a versatile software developer with a diverse background as a
              former R&D engineer in biotech, my journey has been a fusion of
              technology, innovation, and a strong passion for creating
              applications that make a meaningful impact on people's lives.
              Beyond the lines of code, I find inspiration in design and the art
              of user-friendly interfaces. When I'm not immersed in the digital
              realm, I thrive in the real world, where I can often be found at
              concerts, enjoying the thrill of live music, or savoring the great
              outdoors. And lately, my newest addiction is the exhilarating
              sport of pickleball.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
//
function Skills() {
  const containerVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2 },
    },
    hidden: { opacity: 0, scale: 0.9 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  return (
    <section id="skills">
      <motion.div
        ref={ref}
        variants={containerVariant}
        initial="hidden"
        animate={control}>
        <p className="mt-4 mb-4  md:text-[1rem] text-[1rem] font-normal text-neutral-950 text-center">
          What I can Do
        </p>
        <h1 className="mt-4 mb-4 text-center md:text-[3.75rem] text-[2.5rem] font-bold leading-none tracking-tight text-neutral-950">
          {' '}
          Skills
        </h1>
        <div className="grid grid-cols-auto">
          <div className="p-6 flex-1 bg-white rounded-xl border-2 border-gray-400 text-center m-[10%]">
            <h1 className="text-center text-[42px] underline">
              {' '}
              Programming Languages{' '}
            </h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center items-center">
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://developer.mozilla.org/en/JavaScript"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/javascript.svg"
                      alt="Javascript Icon"
                    />
                    <h3 className="text-center text-white">Javascript</h3>
                  </div>
                </li>
              </a>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://www.python.org/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/python.svg"
                      alt="Python Icon"
                    />
                    <h3 className="text-center text-white">Python</h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://www.mathworks.com/products/matlab.html"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/matlab.svg"
                      alt="Matlab Icon"
                    />
                    <h3 className="text-center text-white">Matlab</h3>
                  </div>
                </li>
              </a>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://www.arduino.cc/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/arduino.svg"
                      alt="Arduino Icon"
                    />
                    <h3 className="text-center text-white">Arduino</h3>
                  </div>
                </li>
              </a>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://www.typescriptlang.org/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/typescript-original.svg"
                      alt="Arduino Icon"
                    />
                    <h3 className="text-center text-white">Typescript</h3>
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div className="p-6 flex-1 bg-white rounded-xl border-2 border-gray-400 text-center m-[10%] ">
            <h1 className="text-center text-[42px] underline">
              {' '}
              Frontend Technologies
            </h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center items-center ">
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://react.dev/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/react.svg"
                      alt="React Icon"
                    />
                    <h3 className="text-center text-white">React</h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://html.spec.whatwg.org/multipage/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/html5.svg"
                      alt="HTML Icon"
                    />
                    <h3 className="text-center text-white">HTML</h3>
                  </div>
                </li>
              </a>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/css3.svg"
                      alt="CSS Icon"
                    />
                    <h3 className="text-center text-white">CSS</h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://tailwindcss.com/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/tailwindcss.svg"
                      alt="Tailwind Icon"
                    />
                    <h3 className="text-center text-white">Tailwind</h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://getbootstrap.com/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/bootstrap.svg"
                      alt="Bootstrap Icon"
                    />
                    <h3 className="text-center text-white">Bootstrap</h3>
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div className="p-6 flex-1 bg-white rounded-xl border-2 border-gray-400 text-center m-[10%]">
            <h1 className="text-center text-[42px] underline">
              {' '}
              Backend Technologies{' '}
            </h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center items-center">
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://expressjs.com/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/express.svg"
                      alt="Express Icon"
                    />
                    <h3 className="text-center text-white">Express.js</h3>
                  </div>
                </li>
              </a>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://nodejs.org/en"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/nodejs.svg"
                      alt="NodeJs Icon"
                    />
                    <h3 className="text-center text-white">Node.js</h3>
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div className="p-6 flex-1 bg-white rounded-xl border-2 border-gray-400 text-center m-[10%]">
            <h1 className="text-center text-[42px] underline"> Databases </h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center items-center">
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://www.postgresql.org/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/postgresql.svg"
                      alt="Postgres Icon"
                    />
                    <h3 className="text-center text-white">PostgreSQL</h3>
                  </div>
                </li>
              </a>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://firebase.google.com/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/firebase.svg"
                      alt="Firebase Icon"
                    />
                    <h3 className="text-center text-white">Firebase</h3>
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div className="p-6 flex-1 bg-white rounded-xl border-2 border-gray-400 text-center m-[10%]">
            <h1 className="text-center text-[42px] underline"> Tools </h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center items-center">
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://sequelize.org/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/sequelize.svg"
                      alt="Sequelize Icon"
                    />
                    <h3 className="text-center text-white">Sequelize</h3>
                  </div>
                </li>
              </a>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://redux.js.org/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/redux.svg"
                      alt="Redux Icon"
                    />
                    <h3 className="text-center text-white">Redux</h3>
                  </div>
                </li>
              </a>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://git-scm.com/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/git.svg"
                      alt="Git Icon"
                    />
                    <h3 className="text-center text-white">Git</h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://jasmine.github.io/index.html"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/jasmine.svg"
                      alt="Jasmine Icon"
                    />
                    <h3 className="text-center text-white">Jasmine</h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://mochajs.org/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/mocha.svg"
                      alt="Mocha Icon"
                    />
                    <h3 className="text-center text-white">Mocha</h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://mochajs.org/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/chartjs-logo.svg"
                      alt="Mocha Icon"
                    />
                    <h3 className="text-center text-white">ChartJS</h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://webpack.js.org/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/webpack.svg"
                      alt="Webpack Icon"
                    />
                    <h3 className="text-center text-white">Webpack</h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://www.npmjs.com/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/npm.svg"
                      alt="NPM Icon"
                    />
                    <h3 className="text-center text-white">NPM </h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://vitejs.dev/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/vite.svg"
                      alt="vite Icon"
                    />
                    <h3 className="text-center text-white"> Vite </h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://axios-http.com/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/axios.svg"
                      alt="Axios Icon"
                    />
                    <h3 className="text-center text-white"> Axios </h3>
                  </div>
                </li>
              </a>

              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center pt-[12px]"
                href="https://leafletjs.com/"
                rel="noreferrer"
                target="_blank">
                <li className="h-[130px] w-[130px] rounded-lg border-2 border-opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mx-auto transform translate-y-1 hover:translate-y-0 hover:scale-105 transition-transform">
                  <div className="h-full w-full justify-center bg-gray-800 back mx-auto flex flex-col items-center">
                    <img
                      className="w-[70px] h-[70px]"
                      src="/leaflet.svg"
                      alt="Leaflet Icon"
                    />
                    <h3 className="text-center text-white"> Leaflet </h3>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Projects2() {
  const containerVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2 },
    },
    hidden: { opacity: 0, scale: 0.9 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={containerVariant}>
      <div id="projects" className="w-full  p-6 items-center justify-center">
        <p className="mt-4 mb-4  md:text-[1rem] text-[1rem] font-normal text-neutral-950 text-center">
          What I can Do
        </p>
        <h1 className="mt-4 mb-4 text-center md:text-[3.75rem] text-[2.5rem] font-bold leading-none tracking-tight text-neutral-950">
          {' '}
          Projects
        </h1>
        <div className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[90%] w-[80%] gap-[30px]">
            <div className="flex flex-col justify-center bg-white rounded-lg shadow-md w-full overflow-hidden lg:m-[15px]">
              <img
                className=" w-[80%] h-[100%]  rounded-lg border  mx-auto my-[25px] "
                src="/TradeM.png"
                alt=""
              />

              <div className="flex justify-between items-center mx-auto">
                <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black px-[20px] my-[10px] ">
                  TradeM
                </h5>

                <div className="flex gap-[15px] justify-center align-middle">
                  <a
                    href="https://tradem-6faae.web.app/"
                    title="new window icons"
                    className="">
                    {' '}
                    <img
                      className="w-[38px] h-[38px]"
                      src="/LinkImage.png"
                      alt="Link Icon"
                    />
                  </a>
                  <a
                    className="inline-block text-xl items-center justify-center  hover:bg-slate-300 rounded-2xl mr-[10px]"
                    href="https://github.com/brianhngo/TradeM2"
                    rel="noreferrer"
                    target="_blank">
                    <img
                      className="w-[40px] h-[40px]"
                      src="/github.svg"
                      alt="GitHub Icon"
                    />
                  </a>
                </div>
              </div>

              <p className="mb-3 font-normal text-[#AAA6C3]  px-[20px] mb-[10px] text-center">
                TradeM is a versatile online platform that seamlessly combines
                the best features of popular marketplaces like Facebook
                Marketplace and Craigslist with the user-friendliness of Yelp.
                This powerful platform empowers users to easily resell items
                they no longer need while discovering great deals within their
                local communities.
              </p>

              <ul className="list-disc ml-6 space-y-2 px-[22px] mx-[15px] my-[10px] text-center">
                <li>
                  Designed and developed an intuitive and modern user interface
                  for a local buying and selling platform, ensuring a
                  user-friendly experience.
                </li>
                <li>
                  Implemented advanced search and filtering features, enhancing
                  the platform's usability and enabling users to quickly locate
                  desired products.
                </li>
                <li>
                  Created a secure messaging system with real-time
                  notifications, enabling effective buyer-seller communication,
                  negotiation, and transaction coordination while maintaining
                  user privacy.
                </li>
                <li>
                  Incorporated user verification features to establish trust and
                  authenticity within the platform, leading to a secure and
                  reliable marketplace.
                </li>
                <li>
                  Designed and implemented the database schema using Firebase
                  for various platform features, including the messaging system
                  and database, ensuring efficient data storage and retrieval.
                </li>
                <li>
                  Integrated a Leaflet map feature into the platform, allowing
                  users to visualize and interact with geographical data,
                  enhancing the overall user experience and making it easier to
                  discover local deals, plan meetups, and locate items for sale.
                </li>
              </ul>
              <div className="flex flex-wrap px-[15px] py-[10px] gap-[10px]">
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  React
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Bootstrap
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Leaflet
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Javascript
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  HTML
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  CSS
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Axios
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Webpack
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Node.js
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Firebase
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-white rounded-lg shadow-md w-full overflow-hidden lg:m-[15px]">
              <img
                className="w-[80%] h-[100%] rounded-lg border  mx-auto my-[25px]"
                src="/ChipCorner.png"
                alt=""
              />

              <div className="flex justify-between items-center mx-auto">
                <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black px-[20px] my-[10px]">
                  The Chip Corner
                </h5>

                <div className="flex gap-[15px] justify-center align-middle">
                  {/* Need to find a deploying website. Render Link broke */}
                  {/* <a
                    href="https://tradem-6faae.web.app/"
                    title="new window icons"
                    className="">
                    {' '}
                    <img
                      className="w-[38px] h-[38px]"
                      src="/LinkImage.png"
                      alt="Link Icon"
                    />
                  </a> */}
                  <a
                    className="inline-block text-xl items-center justify-center  hover:bg-slate-300 rounded-2xl mr-[10px]"
                    href="https://github.com/brianhngo/ChipCorner"
                    rel="noreferrer"
                    target="_blank">
                    <img
                      className="w-[40px] h-[40px]"
                      src="/github.svg"
                      alt="GitHub Icon"
                    />
                  </a>
                </div>
              </div>

              <p className="mb-3 font-normal text-[#AAA6C3]  px-[20px] mb-[10px] text-center">
                The Chip Corneris an e-commerce website that specializes in
                selling a wide variety of chips, from classic potato chips to
                exotic and unique flavors.
              </p>

              <ul className="list-disc ml-6 space-y-2 px-[22px] my-[10px] mx-[15px] text-center">
                <li>
                  Explore a wide variety of chips from different brands,
                  flavors, price ranges, and types, enhancing the user's ability
                  to find their preferred products.
                </li>
                <li>
                  Access comprehensive product details, such as images,
                  descriptions, and pricing, ensuring users have the necessary
                  information to make informed choices.
                </li>
                <li>
                  Simplify the shopping experience with efficient cart
                  management, leveraging local storage support to facilitate
                  item selection and purchase.
                </li>
                <li>
                  Prioritize security and user trust with Stripe-powered online
                  payments, ensuring that transactions are worry-free and
                  safeguarded.
                </li>
                <li>
                  Implement user authentication and account management through
                  JSON web tokens, enabling both users and administrators to log
                  in securely and manage their profiles.
                </li>
                <li>
                  Enhance user engagement by offering order history and delivery
                  status tracking, providing transparency and convenience
                  throughout the shopping process.
                </li>
              </ul>
              <div className="flex flex-wrap px-[15px] py-[10px] gap-[10px]">
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  React
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Javascript
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Redux
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  CSS
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  HTML
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Stripe
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Axios
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Webpack
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Node.js
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Sequelize
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Express
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  PosgreSQL
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  JSON Web Token
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white rounded-lg shadow-md w-full overflow-hidden lg:m-[15px]">
              <img
                className="w-[80%]  h-[40%] rounded-lg border  mx-auto my-[25px]"
                src="/FinanceMeLogo.png"
                alt=""
              />

              <div className="flex justify-between items-center mx-auto">
                <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black px-[20px] my-[10px]">
                  FinanceMe
                </h5>

                <div className="flex gap-[15px] justify-center align-middle">
                  {/* Need to find a deploying website. Render Link broke */}
                  {/* <a
                    href="https://tradem-6faae.web.app/"
                    title="new window icons"
                    className="">
                    {' '}
                    <img
                      className="w-[38px] h-[38px]"
                      src="/LinkImage.png"
                      alt="Link Icon"
                    />
                  </a> */}

                  <a
                    className="inline-block text-xl items-center justify-center  hover:bg-slate-300 rounded-2xl mr-[10px]"
                    href="https://github.com/brianhngo/FinanceMe"
                    rel="noreferrer"
                    target="_blank">
                    <imgxs
                      className="w-[40px] h-[40px]"
                      src="/github.svg"
                      alt="GitHub Icon"
                    />
                  </a>
                </div>
              </div>

              <p className="mb-3 font-normal text-[#AAA6C3]  px-[20px] mb-[10px] text-center">
                FinanceMe is your all-in-one financial companion, offering a
                seamless blend of budgeting, bill management, and insightful
                transaction tracking. With an intuitive interface, FinanceMe
                empowers users to effortlessly stay on top of their budgets,
                savings plans, and monthly spending trends.
              </p>

              <ul className="list-disc ml-6 space-y-2 px-[22px] my-[10px] mx-[15px] text-center">
                <li>
                  Effortlessly create and manage budgets tailored to your
                  financial goals, with easy-to-use tools for income tracking,
                  expense categorization, and personalized budget adjustments.
                </li>
                <li>
                  Plan for the future by setting up savings goals and tracking
                  your progress. FinanceMe helps you visualize your savings
                  journey, making it easy to stay motivated and achieve your
                  financial objectives.
                </li>
                <li>
                  Gain valuable insights into your spending habits with
                  intuitive visualizations of your monthly transaction trends.
                  Identify patterns, discover potential areas for savings, and
                  make informed decisions for a more financially savvy
                  lifestyle.
                </li>
                <li>
                  Whether you're a seasoned budgeting pro or just starting your
                  financial journey, FinanceMe adapts to your unique needs. It's
                  a versatile financial ally that grows with you, providing the
                  tools you need at every stage of your financial life.
                </li>

                <li>
                  With FinanceMe's user-friendly design, navigating through your
                  financial data is a breeze. The app is designed for
                  simplicity, ensuring that users of all levels can easily
                  harness the power of financial management.
                </li>
              </ul>
              <div className="flex flex-wrap px-[15px] py-[10px] gap-[10px]">
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  React
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Javascript
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Typescript
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  ChartJS
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Redux
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  CSS
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  HTML
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Axios
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Vite
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Node.js
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Sequelize
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Express
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  PosgreSQL
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Tailwind
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Firebase
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white rounded-lg shadow-md w-full overflow-hidden lg:m-[15px]">
              <img
                className="w-[50%] h-[50%] rounded-lg border  mx-auto my-[25px]"
                src="/WeatherHere.png"
                alt=""
              />

              <div className="flex justify-between items-center mx-auto">
                <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black px-[20px] my-[10px]">
                  WeatherHere
                </h5>

                <div className="flex gap-[15px] justify-center align-middle">
                  {/* Need to find a deploying website. Render Link broke */}
                  {/* <a
                    href="https://tradem-6faae.web.app/"
                    title="new window icons"
                    className="">
                    {' '}
                    <img
                      className="w-[38px] h-[38px]"
                      src="/LinkImage.png"
                      alt="Link Icon"
                    />
                  </a> */}

                  <a
                    className="inline-block text-xl items-center justify-center  hover:bg-slate-300 rounded-2xl mr-[10px]"
                    href="https://github.com/brianhngo/WeatherHere"
                    rel="noreferrer"
                    target="_blank">
                    <img
                      className="w-[40px] h-[40px]"
                      src="/github.svg"
                      alt="GitHub Icon"
                    />
                  </a>
                </div>
              </div>

              <p className="mb-3 font-normal text-[#AAA6C3]  px-[20px] mb-[10px] text-center">
                WeatherHere is your go-to solution for all things
                weather-related, offering you real-time weather information at
                your fingertips. With WeatherHere, you can easily stay informed
                about current conditions, forecasts, and more. It's the perfect
                companion for planning your day or your upcoming adventures.
              </p>

              <ul className="list-disc ml-6 space-y-2 px-[22px] my-[10px] mx-[15px] text-center">
                <li>
                  Stay ahead of the weather by receiving forecasts for any
                  location. Know what the sky has in store for you in the coming
                  days.
                </li>
                <li>
                  Get real-time updates on weather conditions. Access
                  information like precipitation levels, UV index, temperature,
                  and more.
                </li>
                <li>
                  Stay prepared for the week ahead with our comprehensive 7-day
                  forecast. You can make long-term plans with confidence,
                  whether it's a weekend adventure or your workweek schedule.
                </li>
                <li>
                  Our app features an intuitive and user-friendly interface.
                  It's designed for easy navigation and a seamless user
                  experience, making it accessible to all.
                </li>
              </ul>
              <div className="flex flex-wrap px-[15px] py-[10px] gap-[10px]">
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  React
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Javascript
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  React Native
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  HTML
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  CSS
                </a>

                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Axios
                </a>

                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  XCode Simulator
                </a>
                <a className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">
                  Expo
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white rounded-lg shadow-md w-full overflow-hidden lg:m-[15px]">
              <img
                className=" w-[80%] h-[100%] rounded-lg border  mx-auto my-[25px]"
                src="/WebsiteLogo.png"
                alt=""
              />

              <div className="flex justify-between items-center mx-auto ">
                <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black  px-[20px] my-[10px]">
                  Resume Portfolio
                </h5>
                {/* Need To CHange to Deployed Website */}
                <div className="flex gap-[15px] justify-center align-middle">
                  <a
                    href="https://tradem-6faae.web.app/"
                    title="new window icons"
                    className="">
                    {' '}
                    <img
                      className="w-[38px] h-[38px]"
                      src="/LinkImage.png"
                      alt="Link Icon"
                    />
                  </a>
                  <a
                    className="inline-block text-xl items-center justify-center  hover:bg-slate-300 rounded-2xl mr-[10px]"
                    href="https://github.com/brianhngo/ResumePortfolio"
                    rel="noreferrer"
                    target="_blank">
                    <img
                      className="w-[40px] h-[40px]"
                      src="/github.svg"
                      alt="GitHub Icon"
                    />
                  </a>
                </div>
              </div>

              <p className="mb-3 font-normal text-[#AAA6C3]  px-[20px] mb-[10px] text-center">
                Developed a dynamic and responsive web portfolio using React,
                delivering a modern and visually appealing showcase of my work,
                skills, and projects.
              </p>

              <ul className="list-disc ml-6 space-y-2 px-[22px] mx-[15px]  my-[10px] text-center">
                <li>
                  Developed a dynamic and responsive web portfolio using React,
                  delivering a modern and visually appealing showcase of my
                  work, skills, and projects.
                </li>
                <li>
                  Utilized Tailwind CSS to enhance the design and styling of the
                  web portfolio.
                </li>
                <li>
                  Developed a responsive portfolio website that can be used on
                  various screen sizes and devices
                </li>
                <li>
                  Utilized Vite.js to enhance the build procedure and boost
                  website's loading speed
                </li>
              </ul>
              <div className="flex flex-wrap px-[15px] py-[10px] gap-[10px]">
                <a className="bg-blue-600 text-white px-[3px] py-[1px] mr-1 text-sm rounded">
                  React
                </a>
                <a className="bg-blue-600 text-white px-[3px] py-[1px] mr-1 text-sm rounded">
                  Javascript
                </a>
                <a className="bg-blue-600 text-white px-[3px] py-[1px] mr-1 text-sm rounded">
                  HTML
                </a>
                <a className="bg-blue-600 text-white px-[3px] py-[1px] mr-1 text-sm rounded">
                  CSS
                </a>
                <a className="bg-blue-600 text-white px-[3px] py-[1px] mr-1 text-sm rounded">
                  Vite
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Professional Timeline

function Timeline() {
  return (
    <section id="professional-timeline">
      <h1 className="mt-4 mb-4 text-center md:text-[3.75rem] text-[2.5rem] font-bold leading-none tracking-tight text-neutral-950">
        {' '}
        My Professional Timeline{' '}
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // Colors the box
          // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Apr 2023 - Aug 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Image1 />}>
          <h3 className="vertical-timeline-element-title ">
            Software Engineering & Web Development Bootcamp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {' '}
            Fullstack Academy{' '}
          </h4>
          <p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="mb-2">
                Successfully completed rigorous 17-week immersive program
                tailored acquiring acomprehensive understanding of the PERN
                stack ( PostgreSQL, Express, React, Node.js)
              </li>
              <li className="mb-2">
                Employed JavaScript to craft dynamic user interfaces, manipulate
                the DOM, and implement various front-end frameworks and
                libraries like React and Redux Toolkit.
              </li>
              <li className="mb-2">
                Successfully executed projects involving back-end development
                utilizing Node.js and Express.js, seamlessly integrating with
                PostgreSQL databases to construct scalable, efficient, and
                secure web applications.
              </li>
              <li className="mb-2">
                Effectively harnessed Git and GitHub for version control,
                collaborating with fellow developers on team projects.
                Demonstrated expertise in code change management, branching,
                merging, and facilitating code reviews.
              </li>
              <li className="mb-2">
                Proficiently applied Agile project management methodologies to
                efficiently plan, execute, and deliver projects, fostering
                collaboration, adaptability, and a continuous improvement
                approach within cross-functional teams.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2022 - Jan 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Image2 />}>
          <h3 className="vertical-timeline-element-title">
            Associate R&D Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Biocept <br /> San Diego, CA
          </h4>
          <p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="mb-2">
                Collaborated as a lead member of the team that spearheaded the
                successful development of a cutting-edge microfluidic device,
                contributing to its journey from concept to market launch for
                liquid biopsy.
              </li>
              <li className="mb-2">
                Designed and executed a cell-based assay tailored for commercial
                use, focusing on tumor cell enrichment and FISH analysis,
                elevating the company's product offerings and research
                capabilities.
              </li>
              <li className="mb-2">
                Played an integral role in optimizing manufacturing processes
                and enhancing quality control procedures, resulting in
                streamlined production and improved overall product quality.
              </li>
              <li className="mb-2">
                Achieved a significant 30% reduction in both processing time and
                costs for clinical commercial operations through process
                optimization and efficiency enhancements.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2021 - Feb 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Image2 />}>
          <h3 className="vertical-timeline-element-title">
            Research Associate I, Technology Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Biocept <br /> San Diego, CA
          </h4>
          <p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="mb-2">
                Partnered closely with external third-party companies to revamp
                and standardize company software contracts, resulting in
                optimized tumor cell detection capabilities and improved
                business partnerships.
              </li>
              <li className="mb-2">
                Facilitated seamless collaboration with department leaders,
                contributing to the successful execution of concurrent projects
                within the R&D domain.
              </li>
              <li className="mb-2">
                Orchestrated the creation of validation documentation tailored
                for Clinical Laboratory Improvement Amendments (CLIA) laboratory
                use, ensuring compliance with stringent quality and regulatory
                standards.
              </li>
              <li className="mb-2">
                Spearheaded maintenance, calibration, and inspection efforts
                across all laboratory machinery, ensuring optimal functionality
                and adherence to quality assurance protocols.
              </li>
              <li className="mb-2">
                Cultured cell lines for use in R&D activities, meticulously
                adhering to facility protocols and fostering the availability of
                critical resources for ongoing research initiatives.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2019 - Aug 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Image3 />}>
          <h3 className="vertical-timeline-element-title">
            Manufacturing Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Biofluidica <br /> San Diego, CA
          </h4>
          <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
          <p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="mb-2">
                Played a pivotal role in improving product quality by
                introducing a sterilization step into the manufacturing process,
                resulting in a notable 20% reduction in quality control
                rejection rates.
              </li>
              <li className="mb-2">
                Efficiently prepared and produced essential wash buffers and
                reagents for experimental procedures, contributing to the
                seamless execution of research activities.
              </li>
              <li className="mb-2">
                Demonstrated meticulous attention to detail by packaging,
                inventorying, and labeling crucial components such as
                microfluidic chips, blood sample kits, and plates.
              </li>
              <li className="mb-2">
                Met production goals by consistently manufacturing the required
                daily quota of microfluidic chips essential for Clinical
                Laboratory Improvement Amendments (CLIA) testing, ensuring the
                smooth flow of critical testing processes.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sept 2017 - June 2020"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<Image4 />}>
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Bioengineering:Biotechnology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {' '}
            University of California, San Diego{' '}
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

// FSA Image
function Image1() {
  return (
    <div className=" rounded-full overflow-hidden flex items-center justify-center">
      <img
        src="/fsa.png"
        alt="My Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Biocept Image
function Image2() {
  return (
    <div className=" rounded-full overflow-hidden flex items-center justify-center">
      <img
        src="/BioceptLogo.png"
        alt="My Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Biofluidica Image
function Image3() {
  return (
    <div className=" rounded-full overflow-hidden flex items-center justify-center">
      <img
        src="/Biofluidica.png"
        alt="My Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// School Image
function Image4() {
  return (
    <div className=" rounded-full overflow-hidden flex items-center justify-center">
      <img
        src="/UCSD.png"
        alt="My Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function LetsConnect2() {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbxVsWL5pCD_R0_GOlbMAzhmuw5T9q4UVS4Lj7lseMUdq7pXNQYMAvRt7jd-knsrQGu0/exec';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const containerVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2 },
    },
    hidden: { opacity: 0, scale: 0.9 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
    toast.success('Success!');
    setName('');
    setEmail('');
    setMessage('');
  };

  const onChangeNameHandler = (event) => {
    setName(event.value);
  };
  const onChangeEmailHandler = (event) => {
    setEmail(event.value);
  };
  const onChangeMessageHandler = (event) => {
    setMessage(event.value);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={containerVariant}>
      <section id="lets-connect" className="antialiased m-[10%]">
        <div className="flex min-h-screen justify-center items-center">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-red-300 sm:p-12 max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">
                  {' '}
                  Contact Me{' '}
                </h1>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center"></div>
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon style={{ fontSize: '28px' }} name="mail"></ion-icon>
                  <span> brianhngo@gmail.com </span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon style={{ fontSize: '28px' }} name="pin"></ion-icon>

                  <span> Orange County, CA </span>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/19980rgl2NNQwR4N4tmAWUlEZo2cjCsCQ/view?usp=sharing" // Replace with the actual path to your resume file
                rel="noreferrer"
                target="_blank" // Open in a new tab or window
                className="font-semibold transition-all duration-300 flex items-center p-4 w-48 rounded-full border-2 border-gray-300 hover:border-white hover-bg-white hover-text-gray-800 cursor-pointer">
                <ion-icon
                  name="document"
                  style={{ fontSize: '48px' }}></ion-icon>
                Open CV
              </a>
              <div className="flex space-x-4 text-lg justify-center align-middle">
                <a
                  href="https://github.com/brianhngo/"
                  rel="noreferrer"
                  target="_blank">
                  <ion-icon
                    name="logo-github"
                    style={{ fontSize: '48px' }}></ion-icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/brianhngo/"
                  rel="noreferrer"
                  target="_blank">
                  <ion-icon
                    name="logo-linkedin"
                    style={{ fontSize: '48px' }}></ion-icon>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-0 w-40 h-40 bg-black-100 rounded-full -right-28 -top-28"></div>
              <div className="absolute z-0 w-40 h-40 bg-black-100 rounded-full -right-28 -bottom-16"></div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                <form
                  name="submit-to-google-sheet"
                  className="flex flex-col space-y-4"
                  onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="" className="text-sm">
                      {' '}
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      value={name}
                      placeholder="Your name"
                      onChange={onChangeNameHandler}
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm">
                      {' '}
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      value={email}
                      onChange={onChangeEmailHandler}
                      placeholder="Email Address"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm">
                      {' '}
                      Your Message
                    </label>
                    <textarea
                      type="text"
                      placeholder="Your message"
                      name="Message"
                      value={message}
                      onChange={onChangeMessageHandler}
                      required
                      rows="4"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block self-end bg-red-300 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                    {' '}
                    Submit{' '}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

// I want Logos of my Resume, Linkedin, Github  Footer

function Footer() {
  return (
    <footer className="bg-white  min-w-screen shadow  dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-auto">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Brian Ngo
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default App;
