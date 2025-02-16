import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Clock } from "lucide-react";

function Home() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Payment",
      description: "100% secure payment",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "#F8F8F8",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <h4 className="text-left">New Fashion</h4>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to ShopHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover our curated collection of premium products at unbeatable
            prices.
          </p>
          <Link to="/products" className="btn-primary inline-flex items-center">
            Shop Now
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <img
                  src={`https://images.unsplash.com/photo-${item}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Product Name</h3>
                  <p className="text-gray-600 mb-2">$99.99</p>
                  <button className="btn-primary w-full">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
