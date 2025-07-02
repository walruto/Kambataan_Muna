import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Jade Ocompo",
      role: "Founder",
      image: "#",
      bio: "Leading our community initiatives with over 2 years of nonprofit experience."
    },
    {
      name: "Walid Ahmed",
      role: "Digital Presence",
      image: "#",
      bio: "Web Developer and Social Media."
    },
    {
      name: "Squid Game",
      role: "Community Outreach",
      image: "#",
      bio: "Building bridges between Filipino families and local community resources."
    },
    {
      name: "Miguel Torres",
      role: "Youth Programs Director",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Empowering the next generation through mentorship and cultural education."
    },
    {
      name: "Carmen Flores",
      role: "Cultural Events Coordinator",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Preserving Filipino traditions through festivals and cultural celebrations."
    },
    {
      name: "Roberto Cruz",
      role: "Community Relations",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Fostering partnerships with local organizations and government agencies."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-red-800 px-6 py-2 rounded-full text-sm font-bold mb-4 hover:scale-105 transition-transform duration-300">
            Meet Our Leaders
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 hover:text-yellow-300 transition-colors duration-300 cursor-default">Our Team</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mb-6"></div>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed hover:text-white transition-colors duration-300">
            Dedicated individuals working tirelessly to serve and empower our Filipino community with passion and purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-4 transform"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-yellow-400 group-hover:ring-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <span className="text-red-800 text-xs">🇵🇭</span>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 transform group-hover:scale-105">
                  {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{member.bio}</p>
                
                <div className="flex justify-center space-x-3 pt-4">
                  <button className="p-3 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110 hover:-translate-y-1">
                    <Mail size={18} />
                  </button>
                  <button className="p-3 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110 hover:-translate-y-1">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-3 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110 hover:-translate-y-1">
                    <Twitter size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Photo Gallery */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12 hover:text-yellow-300 transition-colors duration-300">Our Team in Action</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team Meeting"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">Team Meetings</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Community Outreach"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">Outreach</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Planning Sessions"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">Planning</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team Building"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">Team Building</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;