import React from "react";

export default function Skills() {
  const skills = [
    
    { name: "Java", percentage: "100%" },    
    { name: "Python", percentage: "85%" },    
    { name: "Kotlin", percentage: "70%" },
    { name: "MySQL", percentage: "100%" },
    { name: "Rust", percentage: "70%" },
    { name: "Go", percentage: "70%" },
    { name: "MongoDB", percentage: "70%" },    
    { name: "NodeJS", percentage: "85%" },      
    { name: "React", percentage: "80%" }, 
    { name: "JavaScript", percentage: "90%" },
    { name: "HTML", percentage: "100%" },
    { name: "CSS", percentage: "90%" },
    { name: "C++", percentage: "100%" },

  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">
          My Skills
        </h1>
        <ul className="space-y-6">
          {skills.map((skill, index) => (
            <li key={index} className="flex flex-col space-y-2">
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </h3>
              <div className="relative w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-ieee-blue dark:bg-[#B2A5FF]"
                  style={{ width: skill.percentage }}
                ></div>
              </div>
              <p className="text-right text-sm font-medium text-gray-600 dark:text-gray-400">
                {skill.percentage}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-center mt-10 text-lg text-gray-700 dark:text-gray-300">
          Working on Deep Learning and LLM models
        </p>
      </div>
    </section>
  );
}
