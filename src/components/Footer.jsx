import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  let x = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-indigo-150 to-blue-50 text-gray-800 py-8 px-6 shadow-inner rounded-t-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-sm text-gray-600 text-center md:text-left">
          &copy; {x} <span className="font-semibold text-indigo-700">Rajneesh</span>. All rights reserved.
        </p>

        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/BestCoder13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-indigo-700 transition-transform"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajneesh-kumar-5202122ab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-indigo-700 transition-transform"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/nitinkumar97941/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="w-6 h-6"
            >
              <defs>
                <linearGradient id="leetcode-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f89f1b" />
                  <stop offset="100%" stopColor="#ffc800" />
                </linearGradient>
              </defs>
              <path
                fill="url(#leetcode-gradient)"
                d="M18.4,36.7l-7.1-7.1c-1.2-1.2-1.2-3.1,0-4.2l19.9-19.9c1.2-1.2,3.1-1.2,4.2,0l7.1,7.1c1.2,1.2,1.2,3.1,0,4.2 L22.6,36.7C21.5,37.9,19.6,37.9,18.4,36.7z"
              />
              <path
                fill="#292d3e"
                d="M39.6,44H16.5c-1.6,0-2.9-1.3-2.9-2.9v-1.5h26.3c2,0,3.6-1.6,3.6-3.6v-2.4c0-2-1.6-3.6-3.6-3.6H13.6v-2.9h26 c3.6,0,6.5,2.9,6.5,6.5v2.4C46.1,41.1,43.2,44,39.6,44z"
              />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
