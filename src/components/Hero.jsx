import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import profilePic from '../assets/pro pic.jpg';

function Hero() {
  return (
    <section className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center text-center p-4 gap-6">
      <div className="relative group">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white overflow-hidden transition-all duration-300 group-hover:border-blue-500">
         <img
              src={profilePic}
              alt="Profile Picture"
              className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-2 rounded-lg 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Available to work
          <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-0 h-0 
            border-t-8 border-t-transparent 
            border-r-8 border-r-blue-500 
            border-b-8 border-b-transparent">
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-5xl mb-2 opacity-0 animate-fadeInUp">
        Welcome to My Portfolio
      </h1>
      <p className="text-base md:text-lg mb-4 max-w-prose">
        Frontend Developer focusing on React and Tailwind to create user-friendly, high-performance web applications.
      </p>
      <div className="flex space-x-6">
        <a
          href="https://github.com/ZubairDev1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://instagram.com/zubair_sarki"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://x.com/ZubairOkomanyi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          <FaXTwitter className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
