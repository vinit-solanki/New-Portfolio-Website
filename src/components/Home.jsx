import React from "react";
import Lottie from "lottie-react";
import HomeAnimation from "../assets/Home-Animation.json";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-around md:flex-col lg:flex-row gap-y-10 bg-black text-white w-full h-full items-center justify-center px-5 py-10">
      <div className="flex flex-col md:flex-row gap-10 w-full h-full">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            <Lottie animationData={HomeAnimation} />
          </div>
        </div>

        <div className="h-full w-full md:w-1/2 flex justify-center items-center p-10">
          <div className="w-full h-full bg-black bg-opacity-10 backdrop-blur-xl border border-white/20 rounded-lg shadow-lg shadow-gradient px-7 py-10 flex flex-col justify-center items-start transition-transform duration-300 hover:shadow-red-700 hover:translate-y-[-4px] translate-all duration-500">
            <div className="typing-container">
              <h1 className="shrink text-3xl md:text-3xl lg:text-5xl font-bold mb-4 gradient-text">
                Hi, I'm Vinit Solanki
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              I am currently pursuing a B.E. in Artificial Intelligence and Data
              Science from VESIT, Mumbai, where I am in my 3rd year. With a keen
              interest in front-end development, I am passionate about creating
              visually appealing and user-friendly interfaces. I am adaptive,
              hard-working, and committed to my growth and the success of my
              projects.
            </p>
            <div className="mt-6 flex gap-6 flex-wrap justify-center">
              <a
                href="https://github.com/vinit-solanki"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-gray-100 py-4 px-8 rounded-lg transition-all duration-300 text-lg sm:text-xl font-bold shadow-lg hover:shadow-gray-800 tracking-wide uppercase flex items-center gap-3"
              >
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vinit-solanki-ba091127b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-gray-200 hover:bg-blue-700 hover:text-white py-4 px-8 rounded-lg transition-all duration-300 text-lg sm:text-xl font-bold shadow-lg hover:shadow-blue-900 tracking-wide uppercase flex items-center gap-3"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
