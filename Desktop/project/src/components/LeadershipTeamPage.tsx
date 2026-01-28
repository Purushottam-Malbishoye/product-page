import React from 'react';
import { Linkedin, Mail, Users2 } from 'lucide-react';

const LeadershipTeamPage = () => {
  const leaders = [
    {
      name: "Amiya Kumar Behera",
      role: "Founder & CEO",
      background: "Former Chief Business Officer at Payments Company",
      image: "/Amiya_edited_Colour copy.png",
      bio: "Amiya brings over 15 years of experience in technology leadership and business strategy. His vision for democratizing AI technology has been the driving force behind Firstscience AI's growth and success.",
      linkedin: "https://www.linkedin.com/in/amiya-behera-66aa8a6/"
    },
    {
      name: "Alok Kumar Behera",
      role: "Founder & Chief Strategy Officer",
      background: "Former Strategy Leader at TWT",
      image: "/alok_kumar_v4.png",
      bio: "Alok's strategic insights and deep understanding of market dynamics have positioned Firstscience AI as a leader in the AI industry. He specializes in identifying emerging opportunities and translating them into actionable strategies.",
      linkedin: "https://www.linkedin.com/in/alok-kumar-904702210/"
    },
    {
      name: "Sanjit Kumar Padhan",
      role: "Associate Vice President – Engineering",
      background: "Former Automation Architect at TWT",
      image: "/sanjit_1.png",
      bio: "Sanjit is responsible for designing and implementing sophisticated automation solutions that drive efficiency and innovation. His expertise in system architecture ensures our solutions are scalable and robust.",
      linkedin: "https://www.linkedin.com/in/sanjit-kumar-padhan-0a9b02216/"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30 mb-6">
            <Users2 className="w-4 h-4 mr-2" />
            Meet Our Team
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Leadership Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the visionaries behind Firstscience AI—experienced leaders who bring together
            deep technical expertise, strategic insight, and a passion for innovation.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 
                          hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 
                          transition-all duration-300 ease-in-out
                          ${index === 2 
                          ? "md:col-span-2 md:justify-self-center md:max-w-[600px] w-full" : ""}
                        `}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-xl object-cover border-2 border-gray-700"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-white mb-2">{leader.name}</h2>
                  <p className="text-orange-400 font-semibold mb-2">{leader.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{leader.background}</p>
                  <p className="text-gray-300 leading-relaxed mb-4">{leader.bio}</p>
                  <div className="flex gap-3">
                    {leader.linkedin ? (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    ) : (
                      <button className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200">
                        <Linkedin className="w-5 h-5" />
                      </button>
                    )}
                    <button className="p-2 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 hover:bg-orange-500/30 transition-colors duration-200">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Leadership Philosophy</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
            <p>
              Our leadership team embodies the values and vision that drive Firstscience AI forward.
              With diverse backgrounds spanning technology, business strategy, and innovation, they bring
              a wealth of experience and a shared commitment to excellence.
            </p>
            <p>
              We believe in servant leadership—empowering our teams, fostering collaboration, and creating
              an environment where innovation thrives. Our leaders are hands-on, accessible, and deeply
              invested in both the success of our clients and the growth of our team members.
            </p>
            <p>
              Together, they guide Firstscience AI with a clear vision: to be the most trusted partner
              in AI innovation, delivering solutions that transform businesses and create lasting value
              for our clients and their customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeamPage;
