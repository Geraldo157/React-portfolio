import "C:/Users/gsmec/react_portfolio/src/app/globals.css"
import {BsFillMoonStarsFill, BsGithub, BsLinkedin} from "react-icons/bs"

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-2xl">DEVELOPEDBY GS</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Geraldo Jr</h2>
          <h3 className="text-2xl py-2">Full-stack Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
          A full-stack developer with expertise in Python, Django, JavaScript, React.js, PHP, and Laravel
          who possesses a advanced skill set to handle both front-end and back-end development tasks.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="#"><BsGithub /></a>
            <a href="#"><BsLinkedin /></a>
        </div>
      </section>
    </main>
  )
}
