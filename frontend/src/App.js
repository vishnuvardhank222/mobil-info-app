import React from "react";
import "./App.css";
 
const mobiles = [
{ name: "Redmi Note 13", price: 14999, range: "10-20k", image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg" },
{ name: "iQOO Z9", price: 19999, range: "10-20k", image: "https://m.media-amazon.com/images/I/71v0Vxjv6bL._AC_UY327_FMwebp_QL65_.jpg" },
{ name: "Realme Narzo 60", price: 24999, range: "20-30k", image: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UY327_FMwebp_QL65_.jpg" },
{ name: "Samsung M14", price: 28999, range: "20-30k", image: "https://m.media-amazon.com/images/I/81ZSn2rk9lL._AC_UY327_FMwebp_QL65_.jpg" },
{ name: "Nothing Phone 2", price: 39999, range: "30-40k", image: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UY327_FMwebp_QL65_.jpg" },
];
 
function App() {
  const [filter, setFilter] = React.useState("All");
 
  const filteredMobiles =
    filter === "All" ? mobiles : mobiles.filter((m) => m.range === filter);
 
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📱 Mobile Info App</h1>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["All", "10-20k", "20-30k", "30-40k"].map((range) => (
          <button
            key={range}
            onClick={() => setFilter(range)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {range}
          </button>
        ))}
      </div>
 
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredMobiles.map((mobile) => (
          <div
key={mobile.name}
            className="bg-white shadow rounded p-4 flex flex-col items-center"
          >
            <img
              src={mobile.image}
alt={mobile.name}
              className="w-32 h-32 object-cover mb-2"
            />
{mobile.name}</h2>
            <p className="text-gray-600">₹{mobile.price}</p>
            <span className="text-sm text-blue-600">{mobile.range}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default App;
