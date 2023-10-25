import { useState } from 'react';

import './App.css';

function App() {
  return (
    <div className="bg-transparent w-full h-full">
      <Navbar />
      <Profile />
      <Skills />
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
    <header className="bg-white">
      <nav className="flex flex-col md:flex-row justify-between items-center w-92 md:w-auto md:mx-auto">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="/WebsiteLogo.png"
            alt="..."
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] ${
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

function Skills() {
  return (
    <section>
      <ul>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/javascript.svg"
              alt="Javascript Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/react.svg"
              alt="React Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/redux.svg"
              alt="Redux Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/sequelize.svg"
              alt="Sequelize Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/postgresql.svg"
              alt="Postgres Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/express.svg"
              alt="Javascript Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/firebase.svg"
              alt="Javascript Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/html5.svg"
              alt="HTML Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img className="w-[60px] h-[60px]" src="/css3.svg" alt="CSS Icon" />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/tailwindcss.svg"
              alt="HTML Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/bootstrap.svg"
              alt="Bootstrap Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/python.svg"
              alt="Python Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/matlab.svg"
              alt="Matlab Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/nodejs.svg"
              alt="NodeJs Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/arduino.svg"
              alt="Arduino Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img className="w-[60px] h-[60px]" src="/git.svg" alt="Git Icon" />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/jasmine.svg"
              alt="Jasmine Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/mocha.svg"
              alt="Mocha Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/webpack.svg"
              alt="Webpack Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img className="w-[60px] h-[60px]" src="/npm.svg" alt="NPM Icon" />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/vite.svg"
              alt="vite Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/axios.svg"
              alt="Axios Icon"
            />
          </a>
        </li>
        <li>
          <a className="hover:text-[#808080] text-xl flex text-center items-center justify-center ">
            <img
              className="w-[60px] h-[60px]"
              src="/leaflet.svg"
              alt="Leaflet Icon"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

// Project Section card

// Professional Timeline

// Lets Connect Section

export default App;
