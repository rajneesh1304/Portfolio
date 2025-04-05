import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiTypescript,
    SiC,
    SiCplusplus,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPython,
} from 'react-icons/si';

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'C', icon: <SiC className="text-blue-700" /> },
    { name: 'C++', icon: <SiCplusplus className="text-indigo-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-700" /> },
    { name: 'React', icon: <FaReact className="text-cyan-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Python', icon: <SiPython className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black" /> },
];

export default function Skills() {
    return (
        <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-blue-100 to-blue-50 text-gray-800">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-700">My Skills</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white hover:bg-blue-100 border border-blue-200 p-6 rounded-2xl shadow-lg flex items-center gap-4 text-lg transition-all duration-300"
                    >
                        <div className="text-3xl">{skill.icon}</div>
                        <span className="font-semibold">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
