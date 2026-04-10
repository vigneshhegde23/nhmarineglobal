import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactDetails } from '../data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-5">
              <img
                src="/footerlogo.png"
                alt="NH Marine Logo"
                className="h-auto w-full max-w-[280px] object-contain"
              />
            </div>
            <p className="text-sm mb-4 max-w-xs leading-6">
              Leading provider of professional marine surveying and consultancy services worldwide.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/p-and-i-services" className="hover:text-blue-400 transition-colors">
                  P&I Services
                </Link>
              </li>
              <li>
                <Link to="/services/condition-survey" className="hover:text-blue-400 transition-colors">
                  Condition Survey
                </Link>
              </li>
              <li>
                <Link to="/services/marine-consultancy" className="hover:text-blue-400 transition-colors">
                  Marine Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services/on-off-hire-survey" className="hover:text-blue-400 transition-colors">
                  On/Off Hire Survey
                </Link>
              </li>
              <li>
                <Link to="/services/compass-adjustment" className="hover:text-blue-400 transition-colors">
                  Compass Adjustment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{contactDetails.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{contactDetails.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{contactDetails.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {currentYear} NH Marine Services Pvt Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
