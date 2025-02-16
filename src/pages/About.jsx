import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2024, ShopHub has grown from a small startup to one of the leading e-commerce platforms. Our mission is to provide high-quality products at competitive prices while ensuring an exceptional shopping experience for our customers.
          </p>

          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">We carefully curate our product selection to ensure only the best items make it to our store.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">Your satisfaction is our top priority. We're here to help you every step of the way.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">We constantly improve our platform to provide the best shopping experience possible.</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-gray-600">CEO</p>
              </div>
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="font-semibold">David Chen</h3>
                <p className="text-gray-600">CTO</p>
              </div>
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="font-semibold">Emily Martinez</h3>
                <p className="text-gray-600">Head of Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;