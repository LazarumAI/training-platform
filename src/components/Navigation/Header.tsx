import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, User } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../UI/Button';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-primary/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-800/60 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800/60 transition-colors">
            <User className="w-5 h-5 text-gray-300" />
          </button>
          <Button size="sm">Connect</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 
            <X className="w-6 h-6 text-white" /> : 
            <Menu className="w-6 h-6 text-white" />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism mx-4 mt-2 border-t border-gray-800">
          <nav className="flex flex-col space-y-4 p-4">
            <NavLinks />
            <div className="pt-4 border-t border-gray-800 flex justify-between">
              <button className="p-2 rounded-full hover:bg-gray-800/60 transition-colors">
                <Bell className="w-5 h-5 text-gray-300" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800/60 transition-colors">
                <User className="w-5 h-5 text-gray-300" />
              </button>
              <Button size="sm">Connect</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks: React.FC = () => {
  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Models', href: '/models' },
    { name: 'Datasets', href: '/datasets' },
    { name: 'Train', href: '/train' },
    { name: 'Playground', href: '/playground' },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink 
          key={link.name} 
          to={link.href}
          className={({ isActive }) => 
            `text-gray-300 hover:text-white transition-colors text-sm font-medium ${
              isActive ? 'text-primary' : 'hover:text-primary'
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default Header;