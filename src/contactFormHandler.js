// src/utils/contactFormHandler.js
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors;
};
const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      EMAIL_PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    return response;
  } catch (error) {
    console.error('Email service error:', error);
    throw new Error('Email service failed');
  }
};

export const handleFormSubmit = async (e, formData, setFormData, setIsSubmitting) => {
  e.preventDefault();
  
  // Validate form
  const errors = validateForm(formData);
  if (Object.keys(errors).length > 0) {
    const errorMessages = Object.values(errors).join(', ');
    toast.error(errorMessages);
    return;
  }

  setIsSubmitting(true);
  const loadingToast = toast.loading('Sending message...');

  try {
    await sendEmail(formData);
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    toast.dismiss(loadingToast);
    toast.success('Message sent successfully!');
  } catch (error) {
    console.error('Submission error:', error);
    toast.dismiss(loadingToast);
    toast.error('Failed to send message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};
