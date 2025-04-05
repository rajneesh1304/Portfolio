import React from "react";
import { FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import a from '../assets/c.webp';

export default function AboutMe() {
  return (
    <div
      id="about"
      className="min-h-screen px-6 md:px-20 py-10 bg-gradient-to-br from-blue-100 to-blue-50 text-gray-800 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-blue-700">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
        <div className="w-full md:w-1/2">
          <img
            src={a}
            alt="Rajneesh"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-lg leading-relaxed">
            I'm Rajneesh, a passionate developer dedicated to building modern, responsive web applications. I blend creativity with code to craft seamless digital experiences that solve real-world problems.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <FaCode className="text-blue-600 text-xl" />
              <span>Skilled in React, Tailwind, Javascript, C++, Node.js, MongoDB</span>
            </li>
            <li className="flex items-center gap-4">
              <FaLaptopCode className="text-blue-600 text-xl" />
              <span>Love creating clean, accessible user interfaces</span>
            </li>
            <li className="flex items-center gap-4">
              <FaUserGraduate className="text-blue-600 text-xl" />
              <span>Pre-Final year Computer Science student</span>
            </li>
          </ul>

          <a
            href="https://www.linkedin.com/in/rajneesh-kumar-5202122ab/"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}
