import React from "react";
import { TypeAnimation } from "react-type-animation";
import img from '../assets/a.jpeg';

export default function Home() {
    return (
        <div
            className="relative min-h-screen bg-gradient-to-br from-white via-slate-100 to-gray-200 text-black flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between px-4 sm:px-6 md:px-20 py-12 sm:py-16 overflow-hidden"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute top-0 -left-20 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none z-0"></div>

            <div className="z-10 w-full md:w-1/2 text-left space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                    Hello, I'm{" "}
                    <TypeAnimation
                        sequence={[
                            "Rajneesh.",
                            1000,
                            "a Coder.",
                            2000,
                            "a Web Developer.",
                            2000,
                            "a Software Developer.",
                            2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="text-indigo-600"
                    />
                </h1>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl">
                    Shaping tomorrow with technology and imagination.
                </p>
                <a
                    href="#project"
                    className="inline-block text-base sm:text-lg mt-4 sm:mt-6 bg-indigo-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg"
                >
                    Projects
                </a>
            </div>
        </div>
    );
}
