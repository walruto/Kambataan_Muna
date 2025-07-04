import React from 'react';
import { Award, BookOpen, Home, Heart, Users, Globe, TrendingUp, Star } from 'lucide-react';

const Impact = () => {
  const impactStats = [
    { icon: Users, number: "2,500+", label: "Families Served", color: "text-yellow-400", bg: "bg-yellow-400/20" },
    { icon: BookOpen, number: "150+", label: "Educational Programs", color: "text-blue-400", bg: "bg-blue-400/20" },
    { icon: Home, number: "75+", label: "Housing Assistance", color: "text-red-400", bg: "bg-red-400/20" },
    { icon: Heart, number: "$500K+", label: "Community Investment", color: "text-yellow-400", bg: "bg-yellow-400/20" }
  ];

  const achievements = [
    {
      title: "Community Center Opening",
      description: "Established our flagship community center serving 500+ families monthly with comprehensive programs and services.",
      image: "https://images.pexels.com/photos/8926547/pexels-photo-8926547.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023",
      impact: "500+ families served monthly"
    },
    {
      title: "Youth Scholarship Program",
      description: "Awarded 50 scholarships to Filipino-American students pursuing higher education and professional development.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023",
      impact: "50 scholarships awarded"
    },
    {
      title: "Cultural Festival Success",
      description: "Hosted the largest Filipino cultural festival in the region with 10,000+ attendees celebrating our heritage.",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2022",
      impact: "10,000+ attendees"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold mb-4 hover:scale-105 transition-transform duration-300">
            Making a Difference
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 hover:text-yellow-300 transition-colors duration-300 cursor-default">Our Impact</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed hover:text-white transition-colors duration-300">
            Measuring our success through the positive changes we've brought to Filipino communities across the region.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 transform hover:scale-105 hover:-translate-y-2 group">
                <div className={`${stat.bg} rounded-2xl p-4 w-fit mx-auto mb-6 group-hover:scale-125 transition-transform duration-300`}>
                  <stat.icon className={`w-12 h-12 ${stat.color} group-hover:animate-bounce`} />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">{stat.number}</div>
                <div className="text-blue-200 font-semibold group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12 hover:text-yellow-300 transition-colors duration-300">Recent Achievements</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-4 transform">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {achievement.year}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:scale-110 transition-transform duration-300">
                    {achievement.impact}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{achievement.title}</h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 hover:text-yellow-300 transition-colors duration-300">Our Work at Teresa Elementary School</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-2xl lg:col-span-2">
              <img 
                src="/IMG_5242.jpeg"
                alt="Certificate of Appreciation from Teresa Elementary School"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-lg font-semibold">Certificate of Appreciation</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="/IMG_5214.JPEG"
                alt="Joy of Giving Event Setup"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">Joy of Giving Event</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="/IMG_5192.jpeg"
                alt="Students receiving slippers and supplies"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">Distributing Supplies</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl lg:col-span-2">
              <img 
                src="/IMG_2540.JPG"
                alt="Colorful slippers arranged for distribution"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-lg font-semibold">Slippers for Students</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Our recent "Joy of Giving" event at Teresa Elementary School provided essential supplies including slippers, 
              school materials, and meals to students in need. This initiative demonstrates our commitment to directly 
              supporting Filipino youth education and wellbeing.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-12 text-center text-white shadow-2xl border border-red-500/30 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
          <div className="bg-yellow-400/20 rounded-full p-6 w-fit mx-auto mb-8 hover:bg-yellow-400/30 transition-colors duration-300">
            <Award className="w-16 h-16 text-yellow-400 hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-4xl font-bold mb-6 hover:text-yellow-300 transition-colors duration-300">Join Our Impact Story</h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed hover:text-white transition-colors duration-300">
            Every contribution, volunteer hour, and community connection helps us create lasting positive change for Filipino families.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl">
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;