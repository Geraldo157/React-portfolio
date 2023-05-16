"use client";

import "C:/Users/gsmec/react_portfolio/src/app/globals.css";
import { BsFillMoonStarsFill, BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import design from "C:/Users/gsmec/react_portfolio/public/design.png";
import code from "C:/Users/gsmec/react_portfolio/public/code.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl text-black dark:text-white">DEVELOPEDBY GS</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl text-black dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className={`text-5xl py-2 ${darkMode ? 'text-teal-300' : 'text-teal-600'} font-medium md:text-6xl lg:text-7xl`}>
              Geraldo Jr
            </h2>
            <h3 className={`text-2xl py-2 ${darkMode ? 'text-white' : 'text-black'}`}>Full-stack Developer</h3>
            <p className={`text-md py-5 leading-8 ${darkMode ? 'text-gray-300' : 'text-gray-800'} md:text-xl max-w-xl mx-auto`}>
              A full-stack developer with expertise in Python, Django, JavaScript, React.js, PHP, and Laravel
              who possesses an advanced skill set to handle both front-end and back-end development tasks.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="#"><BsGithub /></a>
            <a href="#"><BsLinkedin /></a>
          </div>
        </section>
        <section>
          <div>
            <h3 className={`text-3xl py-1 ${darkMode ? 'text-white' : 'text-black'}`}>Services I offer</h3>
            <p className={`text-md py-5 leading-8 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              Since the beginning of my journey, I have been learning about web development on the front-end
              as wel as the back-end, learning how to improve user experience with a fast and productive engine,
              creating a <span className="text-teal-500">Financial Manager</span> where the user can track his expenses, a <span className="text-teal-500">Personal Blog</span>
              where the user can shares his views and experiences, a <span className="text-teal-500">Hospital Management System</span> and many more projects
            </p>
          </div>
          <div className="flex gap-10 justify-center">
            <div className="text-center shadow-2xl p-10 rounded-lg my-10">
              <Image src = {design} width={100} height={100} className="mx-auto"/>
              <h3 className={`text-lg font-medium pt-8 pb-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Beautiful Websites</h3>
              <h4 className="py-4 text-teal-600">Tools I use: </h4>
              <p className={`py-1 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Photoshop</p>
              <p className={`py-1 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Tailwind CSS</p>
              <p className={`py-1 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Bootstrap</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-lg my-10">
              <Image src = {code} width={100} height={100} className="mx-auto"/>
              <h3 className={`text-lg font-medium pt-8 pb-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Fast Websites</h3>
              <h4 className="py-4 text-teal-600">Frameworks I use: </h4>
              <p className={`py-1 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Django</p>
              <p className={`py-1 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Laravel</p>
              <p className={`py-1 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>React CSS</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
          </div>
        </section>
      </main>
    </div>
  )
}
