
'use client';

import Link from 'next/link';
import { useState } from 'react';

const projectDemos = {
  '1': {
    title: 'E-Commerce Mobile App Demo',
    type: 'mobile',
    component: 'ECommerceDemo'
  },
  '2': {
    title: 'Healthcare Dashboard Demo',
    type: 'web',
    component: 'HealthcareDemo'
  },
  '3': {
    title: 'Financial App Demo',
    type: 'mobile',
    component: 'FinancialDemo'
  },
  '4': {
    title: 'Restaurant Website Demo',
    type: 'web',
    component: 'RestaurantDemo'
  },
  '5': {
    title: 'Learning Platform Demo',
    type: 'web',
    component: 'LearningDemo'
  },
  '6': {
    title: 'Travel App Demo',
    type: 'mobile',
    component: 'TravelDemo'
  },
  '7': {
    title: 'Corporate Website Demo',
    type: 'web',
    component: 'CorporateDemo'
  }
};

// E-Commerce Demo Component with multiple pages
function ECommerceDemo() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99, rating: 4.5, image: 'https://readdy.ai/api/search-image?query=wireless%20headphones%20product%20photography%20white%20background%20modern%20sleek%20design%20premium%20quality&width=200&height=200&seq=demo1&orientation=squarish' },
    { id: 2, name: 'Smart Watch', price: 199, rating: 4.8, image: 'https://readdy.ai/api/search-image?query=smartwatch%20product%20photography%20white%20background%20modern%20technology%20wearable%20device&width=200&height=200&seq=demo2&orientation=squarish' },
    { id: 3, name: 'Phone Case', price: 29, rating: 4.2, image: 'https://readdy.ai/api/search-image?query=phone%20case%20product%20photography%20white%20background%20modern%20accessories%20protective%20cover&width=200&height=200&seq=demo3&orientation=squarish' },
    { id: 4, name: 'Bluetooth Speaker', price: 79, rating: 4.6, image: 'https://readdy.ai/api/search-image?query=bluetooth%20speaker%20product%20photography%20white%20background%20modern%20audio%20device%20portable&width=200&height=200&seq=demo4&orientation=squarish' }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const HomePage = () => (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="relative">
        <img 
          src="https://readdy.ai/api/search-image?query=modern%20e-commerce%20banner%20shopping%20online%20technology%20lifestyle%20clean%20background&width=400&height=200&seq=ecom-banner&orientation=landscape"
          alt="Shopping Banner" 
          className="w-full h-32 object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-xl font-bold">Shop the Latest Tech</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="flex space-x-4 mb-4 overflow-x-auto">
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Browse Products
          </button>
          <button 
            onClick={() => setCurrentPage('cart')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap relative"
          >
            View Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-3 shadow-sm border">
              <img src={product.image} alt={product.name} className="w-full h-20 object-cover object-top rounded-lg mb-2" />
              <h3 className="font-semibold text-sm text-gray-800 mb-1">{product.name}</h3>
              <p className="text-blue-600 font-bold text-sm">${product.price}</p>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400 text-xs">
                  {'★'.repeat(Math.floor(product.rating))}
                </div>
                <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductsPage = () => (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
        <button onClick={() => setCurrentPage('home')} className="text-blue-600">
          <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
        </button>
        <h2 className="text-lg font-bold text-gray-800">Products</h2>
        <button onClick={() => setCurrentPage('cart')} className="relative">
          <i className="ri-shopping-cart-line text-2xl text-gray-700 w-6 h-6 flex items-center justify-center"></i>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      <div className="p-4 space-y-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm border flex items-center space-x-4 hover:shadow-md transition-shadow">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover object-top rounded-lg" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{product.name}</h3>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400 text-sm">
                  {'★'.repeat(Math.floor(product.rating))}
                </div>
                <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
              </div>
              <p className="text-blue-600 font-bold mt-1">${product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const CartPage = () => (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
        <button onClick={() => setCurrentPage('home')} className="text-blue-600">
          <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
        </button>
        <h2 className="text-lg font-bold text-gray-800">Shopping Cart</h2>
        <div></div>
      </div>

      <div className="p-4">
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <i className="ri-shopping-cart-line text-6xl text-gray-300 mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover object-top rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-blue-600 font-bold">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${cart.reduce((sum, item) => sum + item.price, 0)}
                </span>
              </div>
              <button className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  const pages = {
    home: <HomePage />,
    products: <ProductsPage />,
    cart: <CartPage />
  };

  return pages[currentPage];
}

// Healthcare Demo Component with multiple pages
function HealthcareDemo() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  const patients = [
    { id: 1, name: 'John Smith', age: 45, condition: 'Hypertension', status: 'Stable', lastVisit: '2024-01-15' },
    { id: 2, name: 'Sarah Johnson', age: 32, condition: 'Diabetes', status: 'Monitoring', lastVisit: '2024-01-14' },
    { id: 3, name: 'Mike Wilson', age: 58, condition: 'Heart Disease', status: 'Critical', lastVisit: '2024-01-13' }
  ];

  const DashboardPage = () => (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="bg-white shadow-sm border-b p-4">
        <h2 className="text-xl font-bold text-gray-800">Healthcare Dashboard</h2>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Total Patients</h3>
            <p className="text-3xl font-bold text-blue-600">147</p>
            <p className="text-sm text-blue-600 mt-1">+12 this week</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Stable Cases</h3>
            <p className="text-3xl font-bold text-green-600">132</p>
            <p className="text-sm text-green-600 mt-1">89.8% of total</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Critical Cases</h3>
            <p className="text-3xl font-bold text-red-600">15</p>
            <p className="text-sm text-red-600 mt-1">Requires attention</p>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <button 
            onClick={() => setCurrentPage('patients')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            View All Patients
          </button>
          <button 
            onClick={() => setCurrentPage('reports')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
          >
            Generate Reports
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Patient John Smith checked in</span>
              <span className="text-sm text-gray-500 ml-auto">2 min ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">Lab results received for Sarah Johnson</span>
              <span className="text-sm text-gray-500 ml-auto">15 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PatientsPage = () => (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
        <button onClick={() => setCurrentPage('dashboard')} className="text-blue-600">
          <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
        </button>
        <h2 className="text-lg font-bold text-gray-800">Patient Records</h2>
        <div></div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {patients.map((patient) => (
            <div 
              key={patient.id} 
              className="bg-white p-4 rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedPatient(patient)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-lg">{patient.name}</h4>
                  <p className="text-gray-600">Age: {patient.age} | {patient.condition}</p>
                  <p className="text-sm text-gray-500">Last visit: {patient.lastVisit}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                  patient.status === 'Stable' ? 'bg-green-100 text-green-800' :
                  patient.status === 'Monitoring' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {patient.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPatient && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Patient Details</h3>
            <div className="space-y-3">
              <p><strong>Name:</strong> {selectedPatient.name}</p>
              <p><strong>Age:</strong> {selectedPatient.age}</p>
              <p><strong>Condition:</strong> {selectedPatient.condition}</p>
              <p><strong>Status:</strong> {selectedPatient.status}</p>
              <p><strong>Last Visit:</strong> {selectedPatient.lastVisit}</p>
            </div>
            <button
              onClick={() => setSelectedPatient(null)}
              className="mt-6 w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const ReportsPage = () => (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
        <button onClick={() => setCurrentPage('dashboard')} className="text-blue-600">
          <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
        </button>
        <h2 className="text-lg font-bold text-gray-800">Medical Reports</h2>
        <div></div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">89%</p>
              <p className="text-sm text-gray-600">Patient Satisfaction</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">95%</p>
              <p className="text-sm text-gray-600">Treatment Success</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-gray-800 mb-2">Weekly Patient Report</h4>
            <p className="text-gray-600 text-sm mb-3">Generated on January 15, 2024</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              Download PDF
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-gray-800 mb-2">Treatment Outcomes</h4>
            <p className="text-gray-600 text-sm mb-3">Generated on January 10, 2024</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const pages = {
    dashboard: <DashboardPage />,
    patients: <PatientsPage />,
    reports: <ReportsPage />
  };

  return pages[currentPage];
}

// Financial Demo Component
function FinancialDemo() {
  const [balance, setBalance] = useState(2547.89);
  const [showTransfer, setShowTransfer] = useState(false);

  const transactions = [
    { id: 1, type: 'credit', amount: 500, description: 'Salary Deposit', date: '2024-01-15' },
    { id: 2, type: 'debit', amount: 89.99, description: 'Online Shopping', date: '2024-01-14' },
    { id: 3, type: 'debit', amount: 45.50, description: 'Grocery Store', date: '2024-01-13' }
  ];

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <h2 className="text-xl font-bold mb-4">FinanceApp</h2>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm opacity-90">Available Balance</p>
          <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        <button 
          onClick={() => setShowTransfer(true)}
          className="bg-white p-4 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow"
        >
          <i className="ri-send-plane-line text-blue-600 text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
          <p className="font-semibold text-gray-800">Transfer</p>
        </button>
        <button className="bg-white p-4 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow">
          <i className="ri-history-line text-green-600 text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
          <p className="font-semibold text-gray-800">History</p>
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">{transaction.description}</p>
                <p className="text-sm text-gray-600">{transaction.date}</p>
              </div>
              <p className={`font-bold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type === 'credit' ? '+' : '-'}${transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showTransfer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Transfer Money</h3>
            <input type="text" placeholder="Recipient" className="w-full p-3 border rounded-lg mb-3" />
            <input type="number" placeholder="Amount" className="w-full p-3 border rounded-lg mb-4" />
            <div className="flex space-x-3">
              <button
                onClick={() => setShowTransfer(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowTransfer(false)}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Restaurant Demo Component
function RestaurantDemo() {
  const [selectedCategory, setSelectedCategory] = useState('appetizers');
  
  const menuItems = {
    appetizers: [
      { id: 1, name: 'Caesar Salad', price: 12, description: 'Fresh romaine lettuce with parmesan' },
      { id: 2, name: 'Bruschetta', price: 9, description: 'Toasted bread with tomatoes and basil' }
    ],
    mains: [
      { id: 3, name: 'Grilled Salmon', price: 24, description: 'Fresh Atlantic salmon with vegetables' },
      { id: 4, name: 'Beef Steak', price: 28, description: 'Premium cut with garlic butter' }
    ]
  };

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="relative">
        <img 
          src="https://readdy.ai/api/search-image?query=elegant%20restaurant%20interior%20dining%20room%20warm%20lighting%20modern%20design&width=400&height=200&seq=restaurant-hero&orientation=landscape"
          alt="Restaurant" 
          className="w-full h-48 object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Bella Vista</h2>
            <p className="text-lg">Fine Dining Experience</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSelectedCategory('appetizers')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedCategory === 'appetizers' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Appetizers
          </button>
          <button
            onClick={() => setSelectedCategory('mains')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedCategory === 'mains' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Main Courses
          </button>
        </div>

        <div className="space-y-4">
          {menuItems[selectedCategory].map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <p className="text-xl font-bold text-blue-600">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
          Make Reservation
        </button>
      </div>
    </div>
  );
}

// Learning Platform Demo Component
function LearningDemo() {
  const [progress, setProgress] = useState(65);
  
  const courses = [
    { id: 1, title: 'Web Design Basics', progress: 80, lessons: 12 },
    { id: 2, title: 'JavaScript Fundamentals', progress: 45, lessons: 20 },
    { id: 3, title: 'UI/UX Principles', progress: 90, lessons: 8 }
  ];

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="bg-white shadow-sm border-b p-4">
        <h2 className="text-xl font-bold text-gray-800">LearnHub Dashboard</h2>
      </div>

      <div className="p-4">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-2">Welcome back, Student!</h3>
          <p className="mb-4">Continue your learning journey</p>
          <div className="bg-white/20 rounded-full h-3 mb-2">
            <div className="bg-white h-3 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm">Overall Progress: {progress}%</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Courses</h3>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">{course.title}</h4>
                  <p className="text-gray-600">{course.lessons} lessons</p>
                </div>
                <span className="text-sm font-medium text-blue-600">{course.progress}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setProgress(Math.min(100, progress + 5))}
          className="w-full mt-6 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Continue Learning
        </button>
      </div>
    </div>
  );
}

// Travel Demo Component
function TravelDemo() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  
  const destinations = [
    { id: 1, name: 'Paris, France', price: 899, image: 'https://readdy.ai/api/search-image?query=Paris%20Eiffel%20Tower%20travel%20destination%20beautiful%20scenic%20view&width=300&height=200&seq=paris&orientation=landscape' },
    { id: 2, name: 'Tokyo, Japan', price: 1299, image: 'https://readdy.ai/api/search-image?query=Tokyo%20Japan%20cityscape%20cherry%20blossoms%20travel%20destination&width=300&height=200&seq=tokyo&orientation=landscape' },
    { id: 3, name: 'Bali, Indonesia', price: 699, image: 'https://readdy.ai/api/search-image?query=Bali%20Indonesia%20tropical%20beach%20paradise%20travel%20destination&width=300&height=200&seq=bali&orientation=landscape' }
  ];

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">TravelWise</h2>
        <p className="text-lg">Discover Amazing Destinations</p>
      </div>

      <div className="p-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border mb-4">
          <input 
            type="text" 
            placeholder="Where do you want to go?"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Destinations</h3>
        <div className="space-y-4">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-lg shadow-sm border overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedDestination(destination)}
            >
              <img src={destination.image} alt={destination.name} className="w-full h-32 object-cover object-top" />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-800">{destination.name}</h4>
                  <p className="text-lg font-bold text-green-600">From ${destination.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDestination && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full overflow-hidden">
            <img src={selectedDestination.image} alt={selectedDestination.name} className="w-full h-48 object-cover object-top" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedDestination.name}</h3>
              <p className="text-2xl font-bold text-green-600 mb-4">From ${selectedDestination.price}</p>
              <p className="text-gray-600 mb-4">Experience the beauty and culture of this amazing destination.</p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors whitespace-nowrap"
                >
                  Close
                </button>
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Corporate Demo Component
function CorporateDemo() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="relative">
        <img 
          src="https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20professional%20business%20environment&width=400&height=200&seq=corporate&orientation=landscape"
          alt="Corporate" 
          className="w-full h-48 object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-2">TechCorp Solutions</h2>
            <p className="text-lg">Innovation at Its Best</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex space-x-4 border-b mb-6">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'about' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'services' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'
            }`}
          >
            Services
          </button>
        </div>

        {activeTab === 'about' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">About Our Company</h3>
            <p className="text-gray-600">
              We are a leading technology company providing innovative solutions to businesses worldwide. Our team of experts is dedicated to delivering excellence in every project.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">50+</p>
                <p className="text-gray-600">Team Members</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Our Services</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Web Development</h4>
                <p className="text-gray-600">Custom websites and web applications</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Mobile Apps</h4>
                <p className="text-gray-600">iOS and Android app development</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Consulting</h4>
                <p className="text-gray-600">Technology strategy and consulting</p>
              </div>
            </div>
          </div>
        )}

        <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
          Contact Us
        </button>
      </div>
    </div>
  );
}

const DemoComponents = {
  ECommerceDemo,
  HealthcareDemo,
  FinancialDemo,
  RestaurantDemo,
  LearningDemo,
  TravelDemo,
  CorporateDemo
};

export default function ProjectDemo({ projectId }: { projectId: string }) {
  const demo = projectDemos[projectId];
  
  if (!demo) {
    return <div>Demo not found</div>;
  }

  const DemoComponent = DemoComponents[demo.component];

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{demo.title}</h1>
            <p className="text-gray-600">Interactive demo - Click and explore the features</p>
          </div>
          <Link
            href="/projects"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-arrow-left-line mr-2 w-5 h-5 flex items-center justify-center"></i>
            Back to Projects
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className={`mx-auto ${demo.type === 'mobile' ? 'max-w-sm' : 'w-full'}`}>
            <div className={`${demo.type === 'mobile' ? 'h-[600px]' : 'h-[700px]'} border-8 border-gray-800 rounded-2xl overflow-hidden`}>
              <DemoComponent />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            This is a fully interactive demo. Try clicking buttons, filling forms, and exploring the interface!
          </p>
        </div>
      </div>
    </div>
  );
}
