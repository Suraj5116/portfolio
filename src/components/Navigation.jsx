
import React from 'react';
import { MenuIcon, XIcon, Sun, Moon } from 'lucide-react';

const Navigation = ({ theme, toggleTheme, isMenuOpen, setIsMenuOpen, activeSection, isScrolling }) => {
  // Navigation component code here//-
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolling 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            Portfolio<span className="text-blue-600 dark:text-blue-400">.</span>
          </a>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="text-yellow-500" size={24} />
              ) : (
                <Moon className="text-gray-600" size={24} />
              )}
            </button>
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg`}>
        <div className="px-6 py-4 space-y-3">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`block py-2 capitalize transition-colors ${
                activeSection === item 
                  ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
