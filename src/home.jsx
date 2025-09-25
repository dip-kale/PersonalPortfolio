import React from 'react';

// SVG icons for GitHub and LinkedIn
const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
  </svg>
);

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="port.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hey There,</h2>
        {/* Moving text animation */}
        <h3 className="text-2xl md:text-3xl font-semibold text-teal-400 mb-2 animate-slide">
          I'm, Java Web Developer
        </h3>
        <p className="text-lg md:text-xl text-white max-w-xl mb-8">
          A passionate software engineer looking to use my extensive knowledge
          and experience to contribute to the growth of Company.
        </p>
        <a
          href="/Resume.pdf"
          download
          className="bg-teal-400 text-gray-900 font-semibold px-6 py-2 rounded shadow hover:bg-teal-500 transition mb-6"
        >
          Download Resume
        </a>
        <div className="flex flex-col items-center">
          <span className="text-white font-medium mb-2">Reach me:</span>
          <div className="flex gap-6">
            <a
              href="https://github.com/dip-kale"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition flex items-center"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/dip-kale"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition flex items-center"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      {/* Tailwind custom animation */}
      <style>
        {`
          .animate-slide {
            animation: slideText 2s linear infinite alternate;
          }
          @keyframes slideText {
            0% { transform: translateX(-20px);}
            100% { transform: translateX(20px);}
          }
        `}
      </style>
    </div>
  );
}

export default Home;