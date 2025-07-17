'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...formData,
          form_id: 'contact-form'
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
      
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField('')}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white peer"
              placeholder=" "
            />
            <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
              focusedField === 'name' || formData.name 
                ? '-top-2 text-sm text-blue-600 bg-white px-2' 
                : 'top-4 text-gray-500'
            }`}>
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white peer"
              placeholder=" "
            />
            <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
              focusedField === 'email' || formData.email 
                ? '-top-2 text-sm text-blue-600 bg-white px-2' 
                : 'top-4 text-gray-500'
            }`}>
              Email Address
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => setFocusedField('subject')}
            onBlur={() => setFocusedField('')}
            required
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white"
            placeholder=" "
          />
          <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === 'subject' || formData.subject 
              ? '-top-2 text-sm text-blue-600 bg-white px-2' 
              : 'top-4 text-gray-500'
          }`}>
            Subject
          </label>
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField('')}
            required
            maxLength={500}
            rows={6}
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white resize-none"
            placeholder=" "
          />
          <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === 'message' || formData.message 
              ? '-top-2 text-sm text-blue-600 bg-white px-2' 
              : 'top-4 text-gray-500'
          }`}>
            Message
          </label>
          <div className="absolute bottom-2 right-4 text-sm text-gray-400">
            {formData.message.length}/500
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
            isSubmitting
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <i className="ri-loader-4-line animate-spin mr-2 w-5 h-5 flex items-center justify-center"></i>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Send Message
              <i className="ri-send-plane-line ml-2 w-5 h-5 flex items-center justify-center"></i>
            </span>
          )}
        </button>

        {submitStatus && (
          <div className={`p-4 rounded-xl text-center ${
            submitStatus === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus === 'success' 
              ? 'Message sent successfully! I\'ll get back to you soon.' 
              : 'Failed to send message. Please try again.'}
          </div>
        )}
      </form>
    </div>
  );
}