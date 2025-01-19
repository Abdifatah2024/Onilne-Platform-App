import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-800 py-10 ">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-4">Tusmo College</h2>
            <p className="text-sm text-gray-600">
              Tusmo College is dedicated to empowering learners with innovative tools, a supportive community, and expert knowledge. Join us to unlock your potential.
            </p>
          </div>

          {/* Quick Links */}
        
          {/* Contact Us */}
          <div>
            <h5 className="text-lg font-semibold text-blue-600 mb-4">Contact</h5>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                <strong>Email: </strong>
                <a
                  href="mailto:contact@tusmocollege.com"
                  className="hover:text-blue-500 transition duration-300"
                >
                  contact@tusmocollege.com
                </a>
              </li>
              <li className="text-sm text-gray-600">
                <strong>Phone: </strong>
                +123 456 7890
              </li>
              <li className="text-sm text-gray-600">
                <strong>Address: </strong>
                123 Main Street, City, Country
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-lg font-semibold text-blue-600 mb-4">Follow Us</h5>
            <p className="text-sm text-gray-600">
              Connect with us on our social media platforms for the latest updates and insights.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            &copy; 2025 Tusmo College. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 mt-4 sm:mt-0">
            Designed with ❤️ by Tusmo Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
