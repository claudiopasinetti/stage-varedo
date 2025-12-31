import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Programma', href: '#programma' },
    { name: 'Istruttori', href: '#istruttori' },
    { name: 'Info Pratiche', href: '#info-pratiche' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Altezza della navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToForm = (e) => {
    e.preventDefault();
    const element = document.querySelector('#iscrizione');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? 'shadow-lg py-3'
          : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img
                src={`${import.meta.env.BASE_URL}images/lido-azzurro-logo.png`}
                alt="Lido Azzurro"
                className="h-10 md:h-12 w-auto transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200 text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToForm}
              className="bg-ocean-600 hover:bg-ocean-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Iscriviti Ora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-ocean-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-white border-t border-gray-100">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block text-gray-700 hover:text-ocean-600 font-medium py-2 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={scrollToForm}
            className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 mt-4"
          >
            Iscriviti Ora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
