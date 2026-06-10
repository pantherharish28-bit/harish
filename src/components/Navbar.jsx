import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, login } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const handleSwitchUser = () => {
    setNewName(user?.name || '');
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      login(newName.trim());
      setShowModal(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled 
            ? 'bg-transparent py-4' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-black tracking-tight uppercase">
            {user?.name || 'Harish'}<span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            link === 'Skills' ? (
              <Link
                key={link}
                to="/skills"
                className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : link === 'Home' ? (
              <Link
                key={link}
                to="/"
                className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : link === 'About' ? (
              <Link
                key={link}
                to="/about"
                className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : link === 'Contact' ? (
              <Link
                key={link}
                to="/contact"
                className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={link}
                href={`/#${link.toLowerCase()}`}
                className="text-white/80 hover:text-white font-medium relative group transition-colors duration-300"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          ))}
        </div>

        {/* Right Side: CTA & Switch User Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={handleSwitchUser}
            className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/25 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            Switch User
          </button>
          <a
            href="/#contact"
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold hover:bg-gray-150 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            link === 'Skills' ? (
              <Link
                key={link}
                to="/skills"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {link}
              </Link>
            ) : link === 'Home' ? (
              <Link
                key={link}
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {link}
              </Link>
            ) : link === 'About' ? (
              <Link
                key={link}
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {link}
              </Link>
            ) : link === 'Contact' ? (
              <Link
                key={link}
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {link}
              </Link>
            ) : (
              <a
                key={link}
                href={`/#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {link}
              </a>
            )
          ))}
          <div className="pt-4 pb-2 flex flex-col gap-3">
             <button 
               onClick={() => { setIsOpen(false); handleSwitchUser(); }}
               className="px-6 py-3 rounded-full bg-[#111111] text-white font-black hover:bg-black transition-colors w-full text-center shadow-lg border border-white/10"
             >
               Switch User
             </button>
             <a
               href="/#contact"
               onClick={() => setIsOpen(false)}
               className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>

      {/* Sleek User Switch Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[200000] flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="bg-[#121212] border border-white/15 p-8 rounded-3xl w-full max-w-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative mx-4">
            <h3 className="text-white text-2xl font-black mb-1 tracking-tight">Switch Profile</h3>
            <p className="text-white/60 text-[10px] font-mono tracking-wider mb-6 uppercase">Enter user profile name</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Name (e.g. Harish)"
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white focus:outline-none focus:border-[#ff2a2a] focus:ring-1 focus:ring-[#ff2a2a] transition-all font-medium placeholder-white/30"
                autoFocus
              />
              <div className="flex gap-3 justify-end mt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-bold hover:bg-[#d02020] transition-all shadow-lg shadow-red-600/30 cursor-pointer"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
