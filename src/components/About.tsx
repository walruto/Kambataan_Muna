import React from 'react';
import { Heart, Target, Eye, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Every decision we make puts the Filipino community's needs and wellbeing at the center."
    },
    {
      icon: Target,
      title: "Cultural Preservation",
      description: "We are dedicated to maintaining and celebrating our rich Filipino heritage for future generations."
    },
    {
      icon: Eye,
      title: "Inclusive Growth",
      description: "Building bridges between Filipino families and the broader community while honoring our unique identity."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs, services, and community initiatives."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2013, FilipinOrg began as a small group of Filipino families who recognized the need for 
                stronger community connections and cultural preservation in our region. What started as informal 
                gatherings has grown into a vibrant organization serving thousands of Filipino-Americans.
              </p>
              <p>
                Our journey has been one of continuous growth, driven by the unwavering spirit of bayanihan – 
                the Filipino tradition of community cooperation. Through economic challenges, cultural shifts, 
                and global uncertainties, we have remained steadfast in our commitment to our community.
              </p>
              <p>
                Today, we stand as a beacon of Filipino culture and community support, offering everything from 
                educational programs and cultural events to essential services and advocacy.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h4>
                <p className="text-blue-800">
                  To empower and unite Filipino communities through cultural preservation, educational programs, 
                  and comprehensive support services.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-red-900 mb-3">Our Vision</h4>
                <p className="text-red-800">
                  A thriving Filipino-American community that proudly celebrates its heritage while contributing 
                  meaningfully to the broader American tapestry.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Filipino Community"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6">
                <div className="bg-yellow-100 rounded-full p-4 w-fit mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-900 rounded-2xl p-12 mt-20">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2,500+</div>
              <div className="text-gray-300">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">150+</div>
              <div className="text-gray-300">Programs Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Volunteers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;