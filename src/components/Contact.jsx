
import React from 'react';
import { MailIcon } from 'lucide-react';
import { handleFormSubmit } from '../contactFormHandler';

const Contact = ({ socialLinks, formData, setFormData, isSubmitting, setIsSubmitting }) => {
  // Contact section code here//-
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center space-x-8 mb-12">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <form 
            onSubmit={(e) => handleFormSubmit(e, formData, setFormData, setIsSubmitting)} 
            className="space-y-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md"
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-medium dark:text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all dark:text-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium dark:text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all dark:text-white"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium dark:text-gray-200">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all dark:text-white"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
