import React from "react";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

function Home() {
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
  return (
    <div>
      {/* Hero Section */}
      <section
        style={
          {
            // height: "100%"
          }
        }
        className="h-[500px] relative flex items-center"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgb(248 248 248)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className=""
            style={{
              height: "80%",
              width: "80%",
            }}
          >
            <div
              className="text"
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              New Products
            </div>

            <div
              className="products"
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
              }}
            >
              <div
                className="title"
                style={{
                  height: "100%",
                  width: "60%",
                  fontSize: "1.7rem",
                  padding: "1rem 0",
                }}
              >
                MacBook Pro 14” and 16”
                <div
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  M4, M4 Pro or M4 Max chip
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  Available in Space black and Silver The most advanced Mac
                  laptops for demanding workflows.
                </div>
                From ₹169900.00*
              </div>
              <div
                className="image"
                style={{
                  backgroundImage: "",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  height: "70%",
                  width: "50%",
                }}
              >
                <img
                  src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large_2x.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Categories</h2>

          {loading ? (
            <p className="text-center">Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product._id} // Use MongoDB _id as the key
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                  >
                    <img
                      src={product.imageUrl} // Assuming your product has an `image` field
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        {/* {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                          />
                        ))} */}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-2">₹ {product.price}</p>
                      <button className="btn-primary w-full">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full">
                  No products available
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
