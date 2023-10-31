import { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';

function App() {
  return (
    <div className="bg-transparent w-full h-full">
      <Navbar />
      <Profile />
      <Skills />
      <Projects2 />
      <Timeline />
      <LetsConnect />
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
      <nav className="flex flex-col md:flex-row justify-between items-center w-92 md:w-auto md:mx-auto">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="/WebsiteLogo.png"
            alt="..."
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] ${
            menuState === 'menu' ? 'top-[-100%]' : ''
          } md:w-auto w-full flex items-center px-5 justify-center md:justify-start `}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-[#808080] text-xl" href="#">
                About Me
              </a>
            </li>
            <li>
              <a className="hover:text-[#808080] text-xl" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="hover:text-[#808080] text-xl" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-[#808080] text-xl" href="#">
                Professional timeline
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center"
                href="https://github.com/brianhngo"
                rel="noreferrer"
                target="_blank">
                <img
                  className="w-[60px] h-[60px]"
                  src="/github.svg"
                  alt="GitHub Icon"
                />
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center"
                href="https://www.linkedin.com/in/brianhngo"
                rel="noreferrer"
                target="_blank">
                <img
                  className="w-[60px] h-[60px]"
                  src="/linkedin.svg"
                  alt="Linkedin Icon"
                />
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#808080] text-xl flex text-center items-center justify-center "
                href="#">
                <img
                  className="w-[60px] h-[60px]"
                  src="/Resume.svg"
                  alt="Linkedin Icon"
                />{' '}
                Resume
              </a>
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

// Profile section. Contains Profile Image and About Me
function Profile() {
  return (
    <>
      <img
        className="w-[18rem] h-[18rem] rounded-full flex mx-auto items-center m-[15px]"
        src="/ProfilePicture.jpg"
        alt=""
      />
      <section className="max-w-custom w-full h-[600px] flex justify-center mx-auto text-center items-center pt-[50px] md:w-auto">
        <div>
          <p className="text-center text-4xl m-2">
            Hi, My name is Brian Ngo. And I am a Fullstack software developer in
            Southern California.
          </p>
          <br />
          <br />
          <p className="text-center text-2xl m-2">
            I have always been fascinated by the profound impact that
            well-designed products can have on improving the quality of peoples
            lives. The power of simplicity for the better has been a guiding
            principle for me. This profound appreciation for design played a
            pivotal role in my decision to major in Bioengineering. My ultimate
            goal is to create products dedicated to enhancing the quality of
            life through innovative healthcare apps.
          </p>
          <br />
          <br />
          <p className="text-center text-2xl m-2">
            Beyond the realm of coding, I find immense joy in immersing myself
            in the world of live music and exploring new hobbies. Currently, Im
            on the path to mastering pickleball—a sport that adds an exciting
            chapter to my lifes adventures!
          </p>
        </div>
      </section>
    </>
  );
}

// Skills Section
//
function Skills() {
  return (
    <section>
      <h1 className="text-center text-[64px] underline"> Skills</h1>
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
              <h3 className="text-center text-white">Tailwind</h3>
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
    </section>
  );
}

function Projects2() {
  return (
    <div className="w-full min-h-screen  p-6">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl underline pb-[20px]">
        {' '}
        Projects
      </h1>

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col justify-center bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 py-40 px-24 m-[15px]">
          <img
            className=" w-[80%] h-[100%] rounded-lg border  mx-auto my-[25px] "
            src="/TradeM.png"
            alt=""
          />

          <div className="flex justify-between items-center">
            <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black px-[20px] my-[10px]">
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

          <p className="mb-3 font-normal text-[#AAA6C3]  px-[20px] mb-[10px]">
            TradeM is a versatile online platform that seamlessly combines the
            best features of popular marketplaces like Facebook Marketplace and
            Craigslist with the user-friendliness of Yelp. This powerful
            platform empowers users to easily resell items they no longer need
            while discovering great deals within their local communities.
          </p>

          <ul className="list-disc ml-6 space-y-2 px-[22px] mx-[15px] my-[10px]">
            <li>
              Designed and developed an intuitive and modern user interface for
              a local buying and selling platform, ensuring a user-friendly
              experience.
            </li>
            <li>
              Implemented advanced search and filtering features, enhancing the
              platform's usability and enabling users to quickly locate desired
              products.
            </li>
            <li>
              Created a secure messaging system with real-time notifications,
              enabling effective buyer-seller communication, negotiation, and
              transaction coordination while maintaining user privacy.
            </li>
            <li>
              Incorporated user verification features to establish trust and
              authenticity within the platform, leading to a secure and reliable
              marketplace.
            </li>
            <li>
              Designed and implemented the database schema using Firebase for
              various platform features, including the messaging system and
              database, ensuring efficient data storage and retrieval.
            </li>
            <li>
              Integrated a Leaflet map feature into the platform, allowing users
              to visualize and interact with geographical data, enhancing the
              overall user experience and making it easier to discover local
              deals, plan meetups, and locate items for sale.
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
        <div className="flex flex-col justify-center bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 py-40 px-24 m-[15px]">
          <img
            className="w-[80%] h-[100%] rounded-lg border  mx-auto my-[25px]"
            src="/TradeM.png"
            alt=""
          />

          <div className="flex justify-between items-center mx-auto">
            <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black px-[20px] my-[10px]">
              The Chip Corner
            </h5>

            <div className="flex gap-[15px] justify-center align-middle">
              {/* Need to find a deploying website. Render Link broke */}
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
            The Chip Corneris an e-commerce website that specializes in selling
            a wide variety of chips, from classic potato chips to exotic and
            unique flavors.
          </p>

          <ul className="list-disc ml-6 space-y-2 px-[22px] my-[10px] mx-[15px] text-center">
            <li>
              Explore a wide variety of chips from different brands, flavors,
              price ranges, and types, enhancing the user's ability to find
              their preferred products.
            </li>
            <li>
              Access comprehensive product details, such as images,
              descriptions, and pricing, ensuring users have the necessary
              information to make informed choices.
            </li>
            <li>
              Simplify the shopping experience with efficient cart management,
              leveraging local storage support to facilitate item selection and
              purchase.
            </li>
            <li>
              Prioritize security and user trust with Stripe-powered online
              payments, ensuring that transactions are worry-free and
              safeguarded.
            </li>
            <li>
              Implement user authentication and account management through JSON
              web tokens, enabling both users and administrators to log in
              securely and manage their profiles.
            </li>
            <li>
              Enhance user engagement by offering order history and delivery
              status tracking, providing transparency and convenience throughout
              the shopping process.
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

        <div className="flex flex-col justify-center bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 py-40 px-24 m-[15px]">
          <img
            className=" w-[80%] h-[100%] rounded-lg border  mx-auto my-[25px]"
            src="/TradeM.png"
            alt=""
          />

          <div className="flex justify-between items-center ">
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

          <p className="mb-3 font-normal text-[#AAA6C3]  px-[20px] mb-[10px]">
            Developed a dynamic and responsive web portfolio using React,
            delivering a modern and visually appealing showcase of my work,
            skills, and projects.
          </p>

          <ul className="list-disc ml-6 space-y-2 px-[22px] mx-[15px] my-[10px]">
            <li>
              Developed a dynamic and responsive web portfolio using React,
              delivering a modern and visually appealing showcase of my work,
              skills, and projects.
            </li>
            <li>
              Utilized Tailwind CSS to enhance the design and styling of the web
              portfolio.
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
  );
}

// Professional Timeline

function Timeline() {
  return (
    <section>
      <h1 className="text-center text-[64px] underline"> Skills</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
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
    <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
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
    <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
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
    <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
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
    <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
      <img
        src="/UCSD.png"
        alt="My Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Lets Connect Section
function LetsConnect() {
  return (
    <section>
      <h1> Lets Connect</h1>
    </section>
  );
}

export default App;
