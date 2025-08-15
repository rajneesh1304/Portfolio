import React from 'react';
import resume from '../assets/resume.pdf';

const Resume = () => {
    return (
        <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-blue-100 to-blue-50 text-gray-800 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-700">My Resume</h1>

            <p className="text-lg mb-6 text-center max-w-xl">
                Feel free to view or download my resume for more information about my background, education, skills, and projects.
            </p>

            <div className="flex gap-6">
                <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
                >
                    View Resume
                </a>

                <a
                    href={resume}
                    download
                    className="bg-transparent border border-blue-500 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default Resume;
