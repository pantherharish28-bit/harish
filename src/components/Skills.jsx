import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 95, icon: '🌐' },
      { name: 'CSS3', level: 90, icon: '🎨' },
      { name: 'JavaScript', level: 85, icon: '📜' },
      { name: 'React', level: 80, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 90, icon: '🌊' },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'PHP', level: 80, icon: '🐘' },
      { name: 'Node.js', level: 75, icon: '🟢' },
      { name: 'Express.js', level: 70, icon: '🚂' },
      { name: 'REST APIs', level: 85, icon: '🔌' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 80, icon: '🐬' },
      { name: 'MongoDB', level: 70, icon: '🍃' },
      { name: 'Firebase', level: 65, icon: '🔥' },
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'OpenAI API', level: 85, icon: '🤖' },
      { name: 'Gemini API', level: 80, icon: '♊' },
      { name: 'AI Video Processing', level: 75, icon: '🎬' },
      { name: 'Automation Workflows', level: 70, icon: '⚙️' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 90, icon: '🌿' },
      { name: 'GitHub', level: 90, icon: '🐙' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Docker', level: 60, icon: '🐋' },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-6 md:px-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-4"
        >
          My <span className="text-red-500">Skills</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto"
        >
          Technologies, tools, and expertise I use to build modern applications.
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-red-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)]"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-red-500 rounded-full"></span>
              {cat.category}
            </h2>

            <div className="space-y-6">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-white/90">{skill.name}</span>
                    </div>
                    <span className="text-white/40">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
