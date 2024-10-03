import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandLinkedin,
  } from '@tabler/icons-react';
  import React from 'react';
  
  const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Copywrite Text */}
          <h1 className="text-lg md:text-xl font-semibold">
            © {new Date().getFullYear()} Siddhant Salve
          </h1>
  
          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/siddhant-salve"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <IconBrandLinkedin size={32} />
            </a>
            <a
              href="https://github.com/siddhantXcoder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <IconBrandGithub size={32} />
            </a>
            <a
              href="https://discordapp.com/users/siddhantsalve"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              <IconBrandDiscord size={32} />
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  