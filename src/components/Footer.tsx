import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KM</span>
              </div>
              <span className="text-xl font-bold">Kambataan Muna</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering Filipino youth through education, community support, and cultural preservation.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for our community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Our Team', id: 'team' },
                { name: 'Our Impact', id: 'impact' },
                { name: 'About Us', id: 'about' },
                { name: 'Contact Us', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Educational Support</li>
              <li>Community Outreach</li>
              <li>Cultural Preservation</li>
              <li>Youth Development</li>
              <li>School Partnerships</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">info@kambataanmuna.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1" />
                <span className="text-gray-300">Serving Filipino communities<br />across the Philippines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400">
            © 2024 Kambataan Muna. All rights reserved. 🇵🇭
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;