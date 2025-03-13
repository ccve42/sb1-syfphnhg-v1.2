import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Linkedin, Send, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: {
      workRestHours: false,
      surveysInspections: false,
      shipGuard: false,
      shipSparesLogistics: false,
      technologyAI: false,
      charteringConsultancy: false,
      marketing: false
    }
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: false
  });
  
  const [activeSection, setActiveSection] = useState(0);
  const [hoverService, setHoverService] = useState<string | null>(null);
  
  // Simulate sections loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeSection < 3) {
        setActiveSection(prev => prev + 1);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: false
      });
      console.log(formData);
    }, 1500);
  };

  const handleCheckboxChange = (service: keyof typeof formData.services) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service]
      }
    }));
  };

  return (
    <main className="contact-page min-h-screen">
      {/* Background elements */}
      <div className="contact-bg-elements">
        <div className="contact-blob-1"></div>
        <div className="contact-blob-2"></div>
        <div className="contact-grid-lines"></div>
      </div>
      
      {/* Main content */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 fade-in-up ${activeSection >= 0 ? 'is-visible' : ''}`}
          >
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
              Get in Touch
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-blue-500 rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're ready to help you transform your maritime operations with our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form */}
            <div 
              className={`lg:col-span-7 fade-in-up ${activeSection >= 1 ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="contact-glass-card">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-t-2xl py-6 px-8">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Send className="w-6 h-6" />
                    Send Us a Message
                  </h3>
                </div>
                
                {formStatus.success ? (
                  <div className="p-12 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h4>
                    <p className="text-lg text-gray-600 mb-8">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setFormStatus({submitted: false, submitting: false, success: false, error: false})}
                      className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8">
                    <div className="space-y-6">
                      {/* Name Input */}
                      <div className="form-floating-group">
                        <input
                          type="text"
                          id="name"
                          placeholder=" "
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="form-floating-input"
                          required
                        />
                        <label htmlFor="name" className="form-floating-label">Full Name</label>
                      </div>

                      {/* Email Input */}
                      <div className="form-floating-group">
                        <input
                          type="email"
                          id="email"
                          placeholder=" "
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-floating-input"
                          required
                        />
                        <label htmlFor="email" className="form-floating-label">Email Address</label>
                      </div>

                      {/* Services Selection */}
                      <div>
                        <h4 className="text-lg font-medium text-gray-700 mb-3">Interested Services</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            {id: 'workRestHours', label: 'Work-Rest Hours'},
                            {id: 'surveysInspections', label: 'Surveys & Inspections'},
                            {id: 'shipGuard', label: 'Ship Guard'},
                            {id: 'shipSparesLogistics', label: 'Ship Spares Logistics'},
                            {id: 'technologyAI', label: 'Technology & AI'},
                            {id: 'charteringConsultancy', label: 'Chartering Consultancy'},
                            {id: 'marketing', label: 'Marketing'}
                          ].map(service => (
                            <div 
                              key={service.id}
                              className={`service-checkbox-card ${formData.services[service.id as keyof typeof formData.services] ? 'is-checked' : ''} ${hoverService === service.id ? 'is-hovered' : ''}`}
                              onMouseEnter={() => setHoverService(service.id)}
                              onMouseLeave={() => setHoverService(null)}
                              onClick={() => handleCheckboxChange(service.id as keyof typeof formData.services)}
                            >
                              <input
                                type="checkbox"
                                id={service.id}
                                checked={formData.services[service.id as keyof typeof formData.services]}
                                onChange={() => handleCheckboxChange(service.id as keyof typeof formData.services)}
                                className="sr-only"
                              />
                              <span className="service-checkbox-mark"></span>
                              <label htmlFor={service.id} className="cursor-pointer">
                                {service.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Message Input */}
                      <div className="form-floating-group">
                        <textarea
                          id="message"
                          placeholder=" "
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="form-floating-input"
                          required
                        ></textarea>
                        <label htmlFor="message" className="form-floating-label">Your Message</label>
                      </div>

                      {/* Submit Button */}
                      <div className="text-right">
                        <button
                          type="submit"
                          disabled={formStatus.submitting}
                          className="contact-submit-btn"
                        >
                          {formStatus.submitting ? (
                            <span className="flex items-center">
                              <Clock className="w-5 h-5 animate-spin mr-2" />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              Send Message
                              <ArrowRight className="w-5 h-5 ml-2 contact-btn-arrow" />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div 
              className={`lg:col-span-5 fade-in-up ${activeSection >= 2 ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="contact-info-card">
                <div className="contact-info-card-bg"></div>
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-8">Connect With Us</h3>
                  
                  <div className="space-y-8">
                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">Head Office</h4>
                        <p className="text-blue-100 leading-relaxed">
                          Icon Maritime Technology & Consulting LLC<br />
                          Suite #5956, 8 The Green,<br />
                          Dover, DE 19901<br />
                          USA
                        </p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">Call Us</h4>
                        <p className="text-blue-100 flex items-center">
                          +1-617-756-1001
                        </p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-info-icon">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                        <p className="text-blue-100">
                          contact@iconmaritech.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
                    <a
                      href="https://www.linkedin.com/company/iconmaritech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-btn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block mt-8 contact-info-features">
                <div className="contact-feature-item">
                  <div className="contact-feature-icon">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Fast Response</h4>
                    <p className="text-gray-600">We prioritize responding within 24 hours</p>
                  </div>
                </div>
                
                <div className="contact-feature-item">
                  <div className="contact-feature-icon">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Expert Consultation</h4>
                    <p className="text-gray-600">Tailored maritime expertise for your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;