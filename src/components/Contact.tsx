import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get involved or need assistance? We're here to help you connect with our community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Whether you're looking to support our mission, learn more about our programs, or simply connect with 
                our community, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-full w-fit mx-auto mb-6 hover:bg-blue-200 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-2">Email</div>
                  <div className="text-gray-600">info@kambataanmuna.org</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-red-100 p-6 rounded-full w-fit mx-auto mb-6 hover:bg-red-200 transition-colors duration-300">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-2">Phone</div>
                  <div className="text-gray-600">(555) 123-4567</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 p-6 rounded-full w-fit mx-auto mb-6 hover:bg-yellow-200 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl mb-2">Location</div>
                  <div className="text-gray-600">Serving Filipino communities<br />across the Philippines</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Follow Our Journey</h4>
              <div className="flex justify-center space-x-6">
                <button className="bg-blue-600 p-4 rounded-full text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="bg-pink-600 p-4 rounded-full text-white hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <Instagram className="w-6 h-6" />
                </button>
                <button className="bg-blue-400 p-4 rounded-full text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <Twitter className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-500 mt-6">
                Stay updated on our latest initiatives and see the impact we're making together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;