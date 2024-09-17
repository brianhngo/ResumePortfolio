'use client';
import React, { useState } from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {' '}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <div className="flex flex-col h-full justify-end">
            <a
              href="https://drive.google.com/file/d/1kjyfENJsk7jDWuc28iXqkrlpDC5n7xc9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="block py-2 p-0 m-0 text-[#ADB7BE] sm:text-xl rounded md:p-0  hover:bg-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                width="48px"
                height="48px"
                viewBox="0 0 32 32"
                data-name="Layer 1"
                id="Layer_1">
                <rect height="1" width="12" x="10" y="29" />
                <rect height="1" width="12" x="10" y="2" />
                <rect height="1" width="9" x="13" y="20" />
                <rect height="1" width="2" x="10" y="20" />
                <rect height="1" width="9" x="13" y="23" />
                <rect height="1" width="2" x="10" y="23" />
                <rect
                  height="1"
                  transform="translate(9.5 41.5) rotate(-90)"
                  width="20"
                  x="15.5"
                  y="15.5"
                />
                <path d="M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z" />
                <rect
                  height="1"
                  transform="translate(-9.5 22.5) rotate(-90)"
                  width="20"
                  x="-3.5"
                  y="15.5"
                />
                <path d="M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z" />
                <path d="M22,30V29h2a1,1,0,0,0,1-1V26h1v2a2,2,0,0,1-2,2Z" />
                <path d="M10,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z" />
                <path d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,3.8,3.8,0,0,1,.17-1.07,4,4,0,0,1,7.66,0A3.8,3.8,0,0,1,20,16.93a7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2Z" />
                <path d="M16,8a2,2,0,1,0,2,2A2,2,0,0,0,16,8Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,16,11Z" />
                <path d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,8,8,0,0,0,8,0,7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2ZM16,17a7,7,0,0,1-3.83-1.14,4,4,0,0,1,7.66,0A7,7,0,0,1,16,17Z" />
                <path d="M20.67,15.2a6,6,0,0,1-.84.66,4,4,0,0,0-7.66,0,6,6,0,0,1-.84-.66,5,5,0,0,1,9.34,0Z" />
              </svg>
            </a>
          </div>
          <a
            href="https://github.com/brianhngo/"
            target="_blank"
            rel="noreferrer"
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:bg-slate-700">
            <Image
              src="/github-icon.svg"
              alt="LinkedIn"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/brianhngo/"
            target="_blank"
            rel="noreferrer"
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:bg-slate-700">
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Howdy!!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's chat!"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
