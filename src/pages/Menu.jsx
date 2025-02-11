import React from "react";

const menuItems = [
  {
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with creamy sauce and crispy pancetta.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Greek Salad",
    description:
      "A refreshing mix of crisp vegetables topped with feta cheese and olives.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Gourmet Burger",
    description: "Juicy beef patty with melted cheese and fresh toppings.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Sushi Platter",
    description: "Assorted sushi rolls made with the freshest ingredients.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Chocolate Cake",
    description: "Decadent chocolate cake topped with creamy icing.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Tomato Soup",
    description: "Smooth and creamy tomato soup with fresh basil.",
    image: "https://via.placeholder.com/300",
  },
];

const Menu = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 fixed top-0 w-full z-10">
        <h1 className="text-2xl font-bold text-center">🍽️ Nova Cafe</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 pb-32 px-5 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer (not fixed, but ensures spacing) */}
      <footer className="bg-white shadow-md py-6 text-center">
        <p className="text-gray-600">📍 312 E Main St, Bozeman, MT 59715</p>
        <p className="text-gray-600">📞 (406) 587-3973</p>
      </footer>
    </div>
  );
};

export default Menu;
