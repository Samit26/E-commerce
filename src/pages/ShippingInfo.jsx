import React, { useEffect } from 'react';
import { Truck, Package, Clock, CreditCard } from 'lucide-react';

function ShippingInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Shipping Methods</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Truck className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Standard Shipping</h3>
                <p className="text-gray-600 mb-2">Delivery in 5-7 business days</p>
                <p className="text-gray-600">Free for orders over $50</p>
                <p className="text-gray-600">$4.99 for orders under $50</p>
              </div>
            </div>

            <div className="flex items-start">
              <Package className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Express Shipping</h3>
                <p className="text-gray-600 mb-2">Delivery in 2-3 business days</p>
                <p className="text-gray-600">$9.99 flat rate</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Next Day Delivery</h3>
                <p className="text-gray-600 mb-2">Order by 2 PM for next day delivery</p>
                <p className="text-gray-600">$19.99 flat rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Shipping Policy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Order Processing</h3>
              <p className="text-gray-600">
                Orders are processed within 24 hours of being placed. You will receive a confirmation email with tracking information once your order ships.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Shipping Restrictions</h3>
              <p className="text-gray-600">
                We currently ship to the United States and Canada. Some restrictions may apply to certain products or locations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">International Shipping</h3>
              <p className="text-gray-600">
                International shipping rates and delivery times vary by location. Additional customs fees may apply.
              </p>
            </div>

            <div className="flex items-start mt-8">
              <CreditCard className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Payment Methods</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and Apple Pay. Payment is processed securely through our payment gateway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingInfo;