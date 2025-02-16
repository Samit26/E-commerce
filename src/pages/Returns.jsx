import React, { useEffect } from 'react';
import { RefreshCw, Shield, HelpCircle, CheckCircle } from 'lucide-react';

function Returns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">Returns & Refunds</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Return Policy</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <RefreshCw className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">30-Day Returns</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy on most items. Items must be unused and in their original packaging with all tags attached.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">
                  If you receive a defective item, we'll replace it or provide a full refund, including shipping costs.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <HelpCircle className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Non-Returnable Items</h3>
                <p className="text-gray-600">
                  Some items cannot be returned for health and safety reasons, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Personal care items</li>
                  <li>Undergarments</li>
                  <li>Customized products</li>
                  <li>Digital downloads</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Return Process</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">How to Return</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Log into your account and go to your orders</li>
                  <li>Select the item you want to return</li>
                  <li>Choose your return reason</li>
                  <li>Print the return shipping label</li>
                  <li>Pack the item securely</li>
                  <li>Drop off at any authorized shipping location</li>
                </ol>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Refund Process</h3>
              <p className="text-gray-600 mb-4">
                Once we receive your return, we'll inspect the item and process your refund within 3-5 business days. Refunds will be issued to the original payment method.
              </p>
              <p className="text-gray-600">
                Please note that shipping costs are non-refundable unless the return is due to our error or a defective product.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600">
                Our customer service team is available to assist you with returns and refunds. Contact us at support@shophub.com or call 1-800-SHOPHUB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Returns;