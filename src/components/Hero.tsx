import React from 'react';
import { ArrowRight, Heart, Users, Calendar, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-red-500 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold animate-fadeInUp">
                Serving Our Community Since 2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fadeInUp">
                <span className="hover:text-yellow-300 transition-colors duration-300 cursor-default">Put The</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
                  Youth
                </span>
                <span className="block text-red-400 hover:text-red-300 transition-colors duration-300 cursor-default">First</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed animate-fadeInUp hover:text-white transition-colors duration-300">
                Uplifting the underserved youth of the Philippines.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 flex items-center justify-center group shadow-lg transform hover:scale-105 hover:shadow-2xl"
              >
                Discover Our Mission
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-400 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl"
              >
                Join Our Community
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                <Users className="w-10 h-10 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">2</div>
                <div className="text-sm text-blue-200">Schools Helped</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                <Heart className="w-10 h-10 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">600$</div>
                <div className="text-sm text-blue-200">Raised</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                <Star className="w-10 h-10 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">1</div>
                <div className="text-sm text-blue-200">Years Strong</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 group">
              <div className="aspect-square bg-gradient-to-br from-yellow-400 via-red-500 to-blue-600 rounded-3xl p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/originals/03/8c/e3/038ce36954ae191fb5543951801d7c7e.jpg"
                    alt="Filipino Community"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Additional Photo Gallery Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative group overflow-hidden rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/8926547/pexels-photo-8926547.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Community Event"
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Community Events</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Education Programs"
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Education</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Cultural Celebrations"
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Culture</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img 
              src="https://www.google.com/imgres?q=spongebob%20crying%20with%20a%20pillow&imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEaIOYg0XkAAh38L.jpg&imgrefurl=https%3A%2F%2Fx.com%2Freactjpg%2Fstatus%2F1270593861937762305&docid=kZih3iU5NUghNM&tbnid=s_7ZUNt3un8KpM&vet=12ahUKEwjo5YCSu52OAxUBRTABHRX0CTsQM3oECBUQAA..i&w=749&h=735&hcb=2&ved=2ahUKEwjo5YCSu52OAxUBRTABHRX0CTsQM3oECBUQAA"
              alt="Youth Programs"
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Youth Programs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;