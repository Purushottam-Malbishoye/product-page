import React from 'react';
import { Briefcase, Newspaper, Handshake, Mail, MapPin, Phone, Users, Globe } from 'lucide-react';
import ContactForm from './ContactForm';
import JobApplicationForm from './JobApplicationForm';

const Company = () => {
  const [selectedJob, setSelectedJob] = React.useState<string | null>(null);

  const jobOpenings = [
    {
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time"
    },
    {
      title: "Technology Research Scientist",
      department: "Research",
      location: "Boston, MA / Remote",
      type: "Full-time"
    },
    {
      title: "Product Manager - Tech Solutions",
      department: "Product",
      location: "New York, NY / Remote",
      type: "Full-time"
    },
    {
      title: "Data Engineer",
      department: "Engineering",
      location: "Austin, TX / Remote",
      type: "Full-time"
    }
  ];

  const newsItems = [
    {
      title: "Partnership with Global Healthcare Leader Announced",
      date: "November 28, 2024",
      category: "Partnership",
      excerpt: "Strategic collaboration to develop technology-powered diagnostic tools for early disease detection."
    }
  ];

  const partners = [
    {
      name: "Google Cloud",
      type: "Technology Partner",
      description: "Strategic cloud infrastructure and AI platform partnership"
    },
    {
      name: "NVIDIA",
      type: "Hardware Partner",
      description: "Advanced GPU computing for deep learning workloads"
    },
    {
      name: "Microsoft",
      type: "Technology Partner",
      description: "Azure AI services and enterprise integration"
    },
    {
      name: "AWS",
      type: "Cloud Partner",
      description: "Scalable cloud infrastructure and machine learning services"
    }
  ];

  return (
    <section id="company" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Company</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our team, partnerships, and the latest company news
          </p>
        </div>

        {/* Careers Section */}
        <div id="careers" className="mb-20">
          <div className="text-center mb-12">
            <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're looking for passionate individuals who want to shape the future of technology. 
              Join us in building tomorrow's intelligent systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                <a
                  onClick={() => setSelectedJob(job.title)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#careers"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              View All Openings
            </a>
          </div>
        </div>

        {/* News & Press */}
        <div id="news" className="mb-20">
          <div className="text-center mb-12">
            <Newspaper className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">News & Press</h3>
            <p className="text-lg text-gray-600">Stay updated with our latest announcements and milestones</p>
          </div>

          <div className="space-y-6 mb-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a
                  href="#read-more"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#press"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold"
            >
              View Press Kit
            </a>
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Handshake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Strategic Partnerships</h3>
            <p className="text-lg text-gray-600">Collaborating with industry leaders to deliver exceptional AI solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">{partner.name}</h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {partner.type}
                  </span>
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div id="contact">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-center lg:text-left mb-12">
                <Mail className="w-12 h-12 text-blue-600 mx-auto lg:mx-0 mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-lg text-gray-600">Get in touch with our team</p>
              </div>

              <div className="grid gap-8">
                <div className="bg-gray-50 rounded-xl p-8 text-center lg:text-left">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto lg:mx-0 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Headquarters</h4>
                  <p className="text-gray-600">
                    United States<br />
                    1689, 447 Broadway, 2nd Floor,<br />
                    New York - 10013<br />
                    <span className="inline-block mt-2">Phone: +1(551)2011659</span>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 text-center lg:text-left">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto lg:mx-0 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Offices</h4>
                  <div className="text-gray-600 space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">India Office - Mumbai</p>
                      <p>404, Skyline Icon, Marol<br />Mumbai - 400059</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">India Office - Bhubaneswar</p>
                      <p>Plot No 104/2017, Kalinga Vihar,<br />Bhubaneswar - 751019</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">India Office - Jaipur</p>
                      <p>Third Floor, Bhamashah Techno Hub<br />Sansthan Path, Jhalana Gram,<br />Jaipur, Rajasthan 302017</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">India Office - Bangalore</p>
                      <p>Sy.No.110/1, 2 & 3, 8th Floor, Venus Block<br />Prestige Technology Park III<br />Amane Bellandur Khane Village<br />Varthur Hobli, Marathahalli<br />Outer Ring Rd, Bengaluru 560103</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-300">
                      <p><span className="font-semibold text-gray-900">Phone:</span> +1(551)2011659</p>
                      <p><span className="font-semibold text-gray-900">Email:</span> info@firstscienceai.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>

        {selectedJob && (
          <JobApplicationForm
            jobTitle={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Company;