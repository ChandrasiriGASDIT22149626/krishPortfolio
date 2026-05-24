import React from 'react';
export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-navy-900/50 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} S. Kisharugan. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#home" className="hover:text-neon-cyan transition-colors">
            Home
          </a>
          <a
            href="#portfolio"
            className="hover:text-neon-purple transition-colors">
            
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-neon-magenta transition-colors">
            
            Contact
          </a>
        </div>
      </div>
    </footer>);

}