import React, { useState } from 'react';

const technicalSkills = [
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'React.js',
  'hibernate',
  'SpringBoot',
  'MySQL',
  'Git',
];

const developerTools = [
  'Postman',
  'Windows VS Code',
  'Eclipse',
  'MySQL Workbench',
  'Git',
];

const communicationSkills = [
  { language: 'English' },
  { language: 'Marathi' },
  { language: 'Hindi' },
];

const skillTypes = ['All', 'Technical', 'Developer Tools', 'Communication'];

const Skills = () => {
  const [filter, setFilter] = useState('All');

  return (
    <div className="h-screen overflow-hidden bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800 text-white rounded-xl shadow-lg p-8">
        <h2 className="mb-6 font-bold text-3xl text-teal-400">My Skills</h2>
        <div className="mb-8 flex flex-wrap gap-3">
          {skillTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-md font-semibold transition-colors
                ${filter === type
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-teal-600 hover:text-white'}`}
            >
              {type}
            </button>
          ))}
        </div>

        <div>
          {(filter === 'All' || filter === 'Technical') && (
            <>
              <h3 className="mb-2 text-teal-300 text-xl font-semibold">Technical Skills</h3>
              <ul className="flex flex-wrap gap-3 mb-6">
                {technicalSkills.map(skill => (
                  <li
                    key={skill}
                    className="bg-gray-700 hover:bg-teal-500 transition-colors px-4 py-2 rounded-full shadow text-base font-medium cursor-pointer"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </>
          )}

          {(filter === 'All' || filter === 'Developer Tools') && (
            <>
              <h3 className="mb-2 text-teal-300 text-xl font-semibold">Developer Tools</h3>
              <ul className="flex flex-wrap gap-3 mb-6">
                {developerTools.map(tool => (
                  <li
                    key={tool}
                    className="bg-gray-700 hover:bg-teal-500 transition-colors px-4 py-2 rounded-full shadow text-base font-medium cursor-pointer"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </>
          )}

          {(filter === 'All' || filter === 'Communication') && (
            <>
              <h3 className="mb-2 text-teal-300 text-xl font-semibold">Communication Skills</h3>
              <ul className="space-y-2  align-middle">
                {communicationSkills.map(({ language, level }) => (
                  <li
                    key={language}
                    className="bg-gray-700 hover:bg-green-600 transition-colors px-4 py-2 rounded-lg shadow text-base font-medium cursor-pointer flex justify-between"
                  >
                    <span>{language}</span>
                    <span className="text-gray-300">{level}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;