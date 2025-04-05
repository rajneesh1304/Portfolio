import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Real-Time Chat App",
      desc: "A real-time chat application with message sync using React, Node.js, and MongoDB.",
      tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
      link: "https://github.com/BestCoder13/Chat-App"
    },
    {
      title: "Notices Project",
      desc: "A web app to display and manage college notices using a MySQL backend.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      link: "https://github.com/BestCoder13/Notices-College-Website-"
    },
    {
      title: "Netflix UI Clone",
      desc: "A Netflix-inspired front-end with Firebase authentication and video previews.",
      tags: ["React", "TailwindCSS", "Firebase"],
      link: "https://github.com/BestCoder13/Netflix-Clone"
    },
    {
      title: "Intern Project",
      desc: "Developed a complete website for a company with a modern and responsive UI.",
      tags: ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/BestCoder13/Vectrium-Ventures-Project"
    },
    {
      title: "Weather App",
      desc: "A simple and clean weather app showing live data for any city.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/BestCoder13/Weather-Mini-Project"
    },
    {
      title: "Tic Tac Toe Game",
      desc: "Classic tic-tac-toe game with interactive UI and logic built from scratch.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/BestCoder13/Tic-Tac-Toe-Game"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-16">
        My Projects
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 shadow-md rounded-2xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-lg duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{project.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-200 text-blue-900 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="text-sm text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
