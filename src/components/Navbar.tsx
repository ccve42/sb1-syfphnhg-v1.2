import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Globe, Languages } from 'lucide-react';
import { useLanguage } from '/src/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 nav-2025 ${
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-nav' 
          : 'py-5 bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <img src="/img/iconlogotrans.png" alt="Icon Maritech" className="h-9 md:h-10" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 ml-auto">
            <Link to="/" className="nav-link-2025">{t('nav.home')}</Link>
            <Link to="/about" className="nav-link-2025">{t('nav.about')}</Link>
            
            {/* Products Dropdown */}
            <div className="nav-dropdown-2025">
              <button 
                onClick={() => handleDropdownToggle('products')}
                className="nav-link-2025 group"
              >
                <span>{t('nav.products')}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`dropdown-menu-2025 ${activeDropdown === 'products' ? 'dropdown-active' : ''}`}>
                <div className="dropdown-wrapper">
                  <Link to="/work-rest-hours" className="dropdown-item-2025">
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">{t('products.horado.title')}</span>
                      <span className="dropdown-item-desc">{t('products.horado.desc')}</span>
                    </div>
                  </Link>
                  
                  <Link to="/surveys-inspection" className="dropdown-item-2025">
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Icon Argus</span>
                      <span className="dropdown-item-desc">Surveys & Inspections</span>
                    </div>
                  </Link>
                  
                  <Link to="/ship-guard" className="dropdown-item-2025">
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Icon Maris</span>
                      <span className="dropdown-item-desc">Ship Guard</span>
                    </div>
                  </Link>
                  
                  <Link to="/ship-spares-logistics" className="dropdown-item-2025">
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Icon Doris</span>
                      <span className="dropdown-item-desc">Ship Spares Logistics</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Services Dropdown */}
            <div className="nav-dropdown-2025">
              <button 
                onClick={() => handleDropdownToggle('services')}
                className="nav-link-2025 group"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`dropdown-menu-2025 ${activeDropdown === 'services' ? 'dropdown-active' : ''}`}>
                <div className="dropdown-wrapper">
                  <Link to="/technology-and-ai" className="dropdown-item-2025">
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Technology & AI</span>
                      <span className="dropdown-item-desc">Smart solutions for maritime</span>
                    </div>
                  </Link>
                  
                  <Link to="/chartering-consultancy" className="dropdown-item-2025">
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Chartering Consultancy</span>
                      <span className="dropdown-item-desc">Expert maritime guidance</span>
                    </div>
                  </Link>
                  
                  <Link to="/marketing" className="dropdown-item-2025">
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Marketing</span>
                      <span className="dropdown-item-desc">Strategic maritime marketing</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="nav-link-2025">Contact</Link>
          </div>
          
          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4 ml-4">
            <div className="relative">
              <button 
                className="nav-icon-btn flex items-center gap-2"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <Languages className="w-5 h-5" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <button
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${language === 'en' ? 'text-blue-600' : 'text-gray-700'}`}
                    onClick={() => {
                      setLanguage('en');
                      setIsLangMenuOpen(false);
                    }}
                  >
                    English
                  </button>
                  <button
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${language === 'ja' ? 'text-blue-600' : 'text-gray-700'}`}
                    onClick={() => {
                      setLanguage('ja');
                      setIsLangMenuOpen(false);
                    }}
                  >
                    日本語
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden nav-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden mobile-menu-2025 ${isMenuOpen ? 'open' : ''}`}
      >
        <div className="px-4 py-4 space-y-2">
          <a href="/" className="mobile-menu-link">{t('nav.home')}</a>
          <a href="/about" className="mobile-menu-link">{t('nav.about')}</a>
          
          {/* Mobile Products Accordion */}
          <div className="mobile-accordion">
            <button 
              onClick={() => handleDropdownToggle('mobile-products')}
              className="mobile-accordion-btn"
            >
              <span>{t('nav.products')}</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === 'mobile-products' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`mobile-accordion-content ${activeDropdown === 'mobile-products' ? 'open' : ''}`}>
              <a href="/work-rest-hours" className="mobile-submenu-link">
                <span className="font-medium">{t('products.horado.title')}</span>
                <span className="text-sm text-gray-500">{t('products.horado.desc')}</span>
              </a>
              <a href="/surveys-inspection" className="mobile-submenu-link">
                <span className="font-medium">{t('products.argus.title')}</span>
                <span className="text-sm text-gray-500">{t('products.argus.desc')}</span>
              </a>
              <a href="/ship-guard" className="mobile-submenu-link">
                <span className="font-medium">{t('products.maris.title')}</span>
                <span className="text-sm text-gray-500">{t('products.maris.desc')}</span>
              </a>
              <a href="/ship-spares-logistics" className="mobile-submenu-link">
                <span className="font-medium">{t('products.doris.title')}</span>
                <span className="text-sm text-gray-500">{t('products.doris.desc')}</span>
              </a>
            </div>
          </div>
          
          {/* Mobile Services Accordion */}
          <div className="mobile-accordion">
            <button 
              onClick={() => handleDropdownToggle('mobile-services')}
              className="mobile-accordion-btn"
            >
              <span>{t('nav.services')}</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`mobile-accordion-content ${activeDropdown === 'mobile-services' ? 'open' : ''}`}>
              <a href="/technology-and-ai" className="mobile-submenu-link">{t('services.tech.title')}</a>
              <a href="/chartering-consultancy" className="mobile-submenu-link">{t('services.chartering.title')}</a>
              <a href="/marketing" className="mobile-submenu-link">{t('services.marketing.title')}</a>
            </div>
          </div>
          
          <a href="/contact" className="mobile-menu-link">{t('nav.contact')}</a>
          
          {/* Mobile Language Switcher */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex gap-2">
              <button
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  language === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  language === 'ja' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setLanguage('ja')}
              >
                日本語
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;