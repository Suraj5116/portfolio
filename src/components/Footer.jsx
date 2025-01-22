
import React from 'react';

const Footer = () => {
  // Footer code here//-
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Suraj Chipade. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
