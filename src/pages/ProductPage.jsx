import React, { useState } from "react";
import { StarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// Updated product data with better images and organized by price ranges
const ProductPage = [
  // Premium Products (Above ₹50,000)
  {
    id: 1,
    name: 'MacBook Pro 16"',
    category: "Electronics",
    price: 199999,
    originalPrice: 229999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    rating: 4.8,
    reviewCount: 256,
    description: "M2 Pro chip, 32GB RAM, 1TB SSD",
    isOnSale: true,
  },
  {
    id: 2,
    name: "Canon EOS R5",
    category: "Electronics",
    price: 339999,
    originalPrice: 359999,
    image:
      "https://images.unsplash.com/photo-1621520291095-aa6c7137f018?w=500&q=80",
    rating: 4.9,
    reviewCount: 189,
    description: "Mirrorless Camera with 8K Video",
    isOnSale: true,
  },
  // Mid-Range Products (₹20,000 - ₹50,000)
  {
    id: 3,
    name: "iPad Air",
    category: "Electronics",
    price: 29999,
    originalPrice: 34999,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
    rating: 4.7,
    reviewCount: 342,
    description: "10.9-inch, M1 chip, 64GB",
    isOnSale: true,
  },
  {
    id: 4,
    name: "Sony WH-1000XM4",
    category: "Electronics",
    price: 24999,
    originalPrice: 29999,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
    rating: 4.8,
    reviewCount: 567,
    description: "Wireless Noise Cancelling Headphones",
    isOnSale: true,
  },
  // Budget Products (₹5,000 - ₹20,000)
  {
    id: 5,
    name: "Fitbit Versa 3",
    category: "Electronics",
    price: 14999,
    originalPrice: 17999,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
    rating: 4.5,
    reviewCount: 890,
    description: "Smart Fitness Watch with GPS",
    isOnSale: true,
  },
  {
    id: 6,
    name: "JBL Flip 6",
    category: "Electronics",
    price: 9999,
    originalPrice: 11999,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    rating: 4.6,
    reviewCount: 445,
    description: "Portable Bluetooth Speaker",
    isOnSale: true,
  },
  // Entry Level Products (Below ₹5,000)
  {
    id: 7,
    name: "Mi Power Bank",
    category: "Electronics",
    price: 1999,
    originalPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    rating: 4.4,
    reviewCount: 1232,
    description: "20000mAh Fast Charging",
    isOnSale: true,
  },
  {
    id: 8,
    name: "Boat Airdopes",
    category: "Electronics",
    price: 2999,
    originalPrice: 3999,
    image:
      "https://images.unsplash.com/photo-1606220588913-6d7f9c40d522?w=500&q=80",
    rating: 4.3,
    reviewCount: 2341,
    description: "True Wireless Earbuds",
    isOnSale: true,
  },
];

const categories = ["All", "Electronics"];

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
  { label: "₹5000 - ₹10,000", min: 5000, max: 10000 },
  { label: "Above ₹10,000", min: 10000, max: Infinity },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRange, setSelectedRange] = useState(priceRanges[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice =
      product.price >= selectedRange.min && product.price <= selectedRange.max;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Search and Filters Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Price Range Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full md:w-64 px-4 py-2 text-left bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            <div className="flex items-center justify-between">
              <span>{selectedRange.label}</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 w-full md:w-64 mt-1 bg-white border rounded-lg shadow-lg">
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => {
                    setSelectedRange(range);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                    selectedRange.label === range.label
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.isOnSale && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    SALE
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Price Section */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.isOnSale && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.isOnSale && (
                    <span className="text-sm text-green-600 font-semibold">
                      Save ₹
                      {(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Rating Section */}
                <div className="flex items-center gap-2 mb-6">
                  <StarRating rating={product.rating} />
                  <span className="text-sm text-gray-600">
                    ({product.reviewCount})
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
