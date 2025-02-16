import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text">
            ShopHub
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/search"
              className="text-gray-600 hover:text-primary transition-colors relative"
            >
              <CiSearch />
            </Link>
            <Link
              to="/cart"
              className="text-gray-600 hover:text-primary transition-colors relative"
            >
              <IoCartOutline />
            </Link>
            <Link
              to="/login"
              className="text-gray-600 hover:text-primary transition-colors relative"
            >
              <RiAccountCircleLine />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } pb-4 space-y-4`}
        >
          <Link
            to="/"
            className="block text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="block text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Cart ({cartItemsCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
