
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, MailIcon, ExternalLinkIcon, Moon, Sun } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { handleFormSubmit } from './contactFormHandler';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Add these state variables
// const [error, setError] = useState('');
// const [success, setSuccess] = useState('');
const App = () => {
  // Theme and UI state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  // State variables and useEffect hooks remain here

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      setIsScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme effect
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);



  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application using OpenWeather API",
      tech: ["React", "API Integration", "Tailwind CSS"],
      link: "#",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Task Management System",
      description: "Collaborative task manager with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      link: "#",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <span className="text-xl">⌘</span>
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <span className="text-xl">in</span>
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <MailIcon size={24} />
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      

      {/* Hero Section */}
      
{/* About Section */}


      {/* Projects Section */}
      
      {/* Contact Section */}
      
      <Navigation 
        theme={theme} 
        toggleTheme={toggleTheme} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
        isScrolling={isScrolling}
      />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact 
        socialLinks={socialLinks} 
        formData={formData} 
        setFormData={setFormData} 
        isSubmitting={isSubmitting} 
        setIsSubmitting={setIsSubmitting}
      />
      <Footer />
      <Toaster position="bottom-right" />
          
          
        
      {/* Footer */}
      
    </div>
  );
};


export default App;
