import React, { useState } from 'react';
import { Linkedin, Mail, Phone, MapPin, Send, ArrowRight, Ship, ShieldCheck, Anchor, ExternalLink } from 'lucide-react';
import { useLanguage } from '/src/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In a real application, handle the subscription logic here
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer-2025">
      {/* Top Wave */}
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#1e3a8a" 
            fillOpacity="1" 
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 md:gap-x-8">
            {/* Logo and Info */}
            <div className="md:col-span-4 space-y-6">
              <Link to="/" className="inline-block">
                <img src="/img/iconlogotrans-white.png" alt="Icon Maritech" className="h-14 mb-6" />
              </Link>
              
              <p className="text-blue-100 text-sm leading-relaxed">
                Icon Maritech delivers advanced maritime technology solutions, 
                transforming operations through innovation. Our suite of digital 
                applications brings efficiency, compliance, and strategic advantage 
                to the shipping industry.
              </p>
              
              <div className="pt-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-300 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-blue-100 text-sm">
                    Suite #5956, 8 The Green,<br />
                    Dover, DE 19901, USA
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-300 w-5 h-5 flex-shrink-0" />
                  <p className="text-blue-100 text-sm">+1 (555) 123-4567</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-300 w-5 h-5 flex-shrink-0" />
                  <p className="text-blue-100 text-sm">contact@iconmaritech.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="footer-heading">{t('footer.company')}</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="footer-link">{t('nav.home')}</Link></li>
                <li><Link to="/about" className="footer-link">{t('nav.about')}</Link></li>
                <li><Link to="/contact" className="footer-link">{t('nav.contact')}</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="footer-heading">{t('nav.products')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/work-rest-hours" className="footer-link group flex items-center">
                    <Ship className="w-3.5 h-3.5 mr-2 text-blue-400 group-hover:text-white transition-colors" />
                    <span>{t('products.horado.title')}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/surveys-inspection" className="footer-link group flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-2 text-blue-400 group-hover:text-white transition-colors" />
                    <span>{t('products.argus.title')}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/ship-guard" className="footer-link group flex items-center">
                    <Anchor className="w-3.5 h-3.5 mr-2 text-blue-400 group-hover:text-white transition-colors" />
                    <span>{t('products.maris.title')}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/ship-spares-logistics" className="footer-link group flex items-center">
                    <Ship className="w-3.5 h-3.5 mr-2 text-blue-400 group-hover:text-white transition-colors" />
                    <span>{t('products.doris.title')}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="footer-heading">{t('nav.services')}</h3>
              <ul className="space-y-3">
                <li><Link to="/technology-ai" className="footer-link">{t('services.tech.title')}</Link></li>
                <li><Link to="/chartering-consultancy" className="footer-link">{t('services.chartering.title')}</Link></li>
                <li><Link to="/marketing" className="footer-link">{t('services.marketing.title')}</Link></li>
              </ul>
              
              <h3 className="footer-heading pt-4">Follow Us</h3>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/company/iconmaritech" 
                  className="social-icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="social-icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="footer-heading">{t('footer.newsletter')}</h3>
              <p className="text-sm text-blue-100 mb-4">
                {t('footer.newsletter.desc')}
              </p>
              
              {isSubscribed ? (
                <div className="bg-green-600/20 border border-green-600/30 text-green-100 rounded-lg p-3 text-sm">
                  {t('footer.newsletter.success')}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('footer.newsletter.placeholder')}
                      className="newsletter-input"
                      required
                    />
                    <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
              
              <p className="text-xs text-blue-300">
                {t('footer.newsletter.consent')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-blue-200">
                {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="text-sm text-blue-200 hover:text-white transition-colors">{t('footer.privacy')}</Link>
              <Link to="/terms" className="text-sm text-blue-200 hover:text-white transition-colors">{t('footer.terms')}</Link>
              <Link to="/cookies" className="text-sm text-blue-200 hover:text-white transition-colors">{t('footer.cookies')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;