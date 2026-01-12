import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-gray-900">
      <div className="text-gray-600">
        <p>Connect with me:</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#ff0000] hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#ff0000] hover:underline">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="text-[#ff0000] hover:underline">Email</a>
        </div>
      </div>
      <p className="text-gray-600 mt-4">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;