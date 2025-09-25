import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-900  rounded-xl shadow-2xl p-8">
        <div className="flex justify-center w-1/2">
          <img
            src="photo.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg w-72 h-72 object-cover"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold mb-6 text-gray-100 underline decoration-teal-400 underline-offset-8 text-center md:text-left">
            About Me
          </h1>
          <p className="text-lg text-gray-300 mb-4 text-center md:text-left">
            Hi Everyone, I am Dp Kale from Akluj, Maharashtra, India. I am pursuing a Bachelor's of Engineering in Electronics and Telecommunication Engineering at Sinhgad Institute. ...
          </p>
          {showMore && (
            <div className="w-full flex flex-col items-center md:items-start">
              <p className="text-md text-white rounded p-4 shadow mb-4 text-center md:text-left">
                I completed my intermediate at Akluj with an aggregate of 68.83%. I completed my schooling at Sarati with an aggregate of 92.20%. My technical skills are core Java, HTML, CSS, Javascript, Mysql, React.js, Hibernate, SpringBoot. My short-term goal is to get placed in a reputed company where I can improve my skills and knowledge. My long-term goal is to become a full stack developer.
              </p>
              <button
                className="bg-teal-500 text-white px-5 py-2 rounded shadow hover:bg-teal-600 transition"
                onClick={() => setShowMore(false)}
              >
                Show Less
              </button>
            </div>
          )}
          {!showMore && (
            <button
              className="bg-teal-500 text-white px-5 py-2 rounded shadow hover:bg-teal-600 transition mt-2"
              onClick={() => setShowMore(true)}
            >
              Know More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;