import React, { useState, useEffect } from "react";
import { Star, Filter } from "lucide-react";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]); // State for storing fetched products
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data); // Set products state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const { addToCart } = useCart();

  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <button className="flex items-center text-gray-600 hover:text-primary">
          <Filter className="w-5 h-5 mr-2" />
          Filter
        </button>
      </div>

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id} // Use MongoDB _id as the key
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                {/* <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div> */}
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price}</p>
                <button
                  className="btn-primary w-full"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products available.</p>
      )}
    </div>
  );
}

export default Products;
