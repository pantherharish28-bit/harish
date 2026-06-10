import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState({ sending: false, sent: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ sending: true, sent: false });
    // Simulate API call
    setTimeout(() => {
      setFormStatus({ sending: false, sent: true });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-6 md:px-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-4"
        >
          Contact <span className="text-red-500">Me</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto"
        >
          Have a question, project idea, or collaboration opportunity? Get in touch.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Contact Info & Cards */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4"
            >
              <div className="text-3xl">📞</div>
              <h3 className="text-xl font-bold">Phone Support</h3>
              <p className="text-white/60 font-medium">9363076177</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4"
            >
              <div className="text-3xl">📧</div>
              <h3 className="text-xl font-bold">Email Support</h3>
              <a
                href="mailto:pantherharish28@gmail.com"
                className="text-white/60 hover:text-red-500 transition-colors font-medium break-all"
              >
                pantherharish28@gmail.com
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20 backdrop-blur-xl flex items-center justify-between"
          >
            <div>
              <h3 className="text-xl font-bold">Expected Response</h3>
              <p className="text-white/60">I'll get back to you as soon as possible.</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-red-500">24h</span>
              <p className="text-xs text-white/40 uppercase tracking-widest">Usually</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-white/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Subject</label>
              <input
                required
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Message</label>
              <textarea
                required
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder-white/20 resize-none"
              />
            </div>
            <button
              disabled={formStatus.sending}
              className="w-full py-4 rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/30 disabled:bg-red-800 disabled:cursor-not-allowed"
            >
              {formStatus.sending ? 'Sending Message...' : 'Send Message'}
            </button>
            {formStatus.sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-400 font-medium"
              >
                Message sent successfully! I'll contact you soon.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
