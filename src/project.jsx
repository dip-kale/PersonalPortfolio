import React from 'react'

function Project() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800 text-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-teal-400 mb-8">My Projects</h2>

        {/* Project 1 */}
        <div className="bg-gray-700 rounded-lg p-6 mb-8 shadow">
          <h3 className="text-2xl font-semibold text-teal-300 mb-2">Office Track </h3>
          <p className="text-gray-200 mb-4">
GitHub link:  https://github.com/dip-kale/Office_track.git <br />
• Built an Employee Portal with login/registration and secure authentication. <br />
• Implemented CRUD operations for employee records using React.js, Spring Boot, and MySQL. <br />
• Designed responsive UI and integrated backend APIs for smooth user experience.           </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Tech Stack:  Java,React,SpringBoot,Git </li>
            <li>Role: Full Stack Developer</li>
            <li>Features: Secure login, dynamic forms, analytics dashboard</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-700 rounded-lg p-6 mb-8 shadow">
          <h3 className="text-2xl font-semibold text-teal-300 mb-2">Data2Pdf  </h3>
          <p className="text-gray-200 mb-4">
• GitHub link:  https://github.com/dip-kale/Data2Pdf.git <br />
• Implemented file upload functionality for CSV input with React.js. <br />
• Processed and validated CSV data in Spring Boot backend. <br />
• Generated customized PDF reports dynamically from processed data. <br />
• Integrated React frontend with backend REST APIs for smooth workflow.           </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Tech Stack: Java,MySQL,React,SpringBoot,Git   </li>
            <li>Role: Frontend & Backend Developer</li>
        
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project