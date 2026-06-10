import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const interests = [
    'Web Development', 'AI Applications', 'Video Automation',
    'Content Creation', 'API Development', 'SaaS Platforms'
  ];

  const skillSets = [
    { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { category: 'Backend', skills: ['PHP', 'Node.js', 'APIs'] },
    { category: 'AI & Automation', skills: ['OpenAI', 'Gemini AI', 'Video Processing', 'AI Workflows'] },
  ];

  const reasons = [
    { title: 'Professional Development', desc: 'Clean, maintainable, and industry-standard code.' },
    { title: 'Modern UI/UX', desc: 'User-centric designs that are beautiful and intuitive.' },
    { title: 'Fast Performance', desc: 'Optimized for speed and seamless user experiences.' },
    { title: 'Scalable Solutions', desc: 'Built to grow as your business and user base expand.' },
    { title: 'AI Integration', desc: 'Leveraging cutting-edge AI to solve complex problems.' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-6 md:px-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-4"
        >
          About <span className="text-red-500">Me</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto"
        >
          Passionate Developer, AI Enthusiast, and Digital Creator focused on building innovative web applications, automation tools, and AI-powered solutions.
        </motion.p>
      </div>

      {/* Bio Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Hi, I'm Harish.</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              I am a passionate web developer and AI enthusiast who enjoys creating modern websites,
              intelligent applications, and automation systems. I thrive at the intersection of
              design and logic, turning complex ideas into functional digital products.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              I continuously learn new technologies and build projects that solve real-world problems,
              always striving for excellence in performance and aesthetics.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((item, idx) => (
              <div key={item} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-red-500/50 transition-colors text-center font-medium text-white/80">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="max-w-6xl mx-auto mb-24">
        <h3 className="text-center text-3xl font-bold mb-12">Core <span className="text-red-500">Expertise</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillSets.map((set, idx) => (
            <motion.div
              key={set.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
                {set.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {set.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-white/70 border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Me */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Why <span className="text-red-500">Choose Me?</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left"
            >
              <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
              <p className="text-white/60">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
