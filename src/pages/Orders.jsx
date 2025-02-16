import React, { useEffect } from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

function Orders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample order data (in a real app, this would come from an API)
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-03-15',
      status: 'Delivered',
      total: 299.99,
      items: [
        {
          id: 1,
          name: 'Premium Headphones',
          price: 199.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          name: 'Wireless Speaker',
          price: 99.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      id: 'ORD-2024-002',
      date: '2024-03-10',
      status: 'In Transit',
      total: 599.99,
      items: [
        {
          id: 3,
          name: 'Camera Lens',
          price: 599.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'In Transit':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'Processing':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
                  <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className="ml-2 font-medium">{order.status}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center py-4 border-b last:border-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-6 flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Total Amount</p>
                  <p className="text-xl font-semibold">${order.total.toFixed(2)}</p>
                </div>
                <button className="btn-primary">Track Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;