import { useState } from "react";

const defaultImage = "src/assets/img/nova-cafe-logo.png";

export default function MenuGrid({ menuArray }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="relative">
      {selectedItem ? (
        // Expanded card view
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 w-11/12 md:w-3/4 lg:w-1/2">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded-lg"
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop
                e.target.src = defaultImage;
              }}
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold">{selectedItem.name}</h2>
              <p className="text-gray-600 mt-2">{selectedItem.description}</p>
              <p className="text-gray-800 mt-2 font-bold">
                {selectedItem.price}
              </p>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
                Order Now
              </button>
              <button
                onClick={() => setSelectedItem(null)}
                className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Normal grid view
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all">
          {menuArray.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop
                  e.target.src = defaultImage;
                }}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-gray-800 mt-2 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
