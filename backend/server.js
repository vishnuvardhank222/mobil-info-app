const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
 
app.use(cors());
app.use(express.json());
 
const mobiles = [
  { name: "Redmi Note 13", price: 14999, range: "10-20k" },
  { name: "iQOO Z9", price: 19999, range: "10-20k" },
  { name: "Realme Narzo 60", price: 24999, range: "20-30k" },
  { name: "Samsung M14", price: 28999, range: "20-30k" },
  { name: "Nothing Phone 2", price: 39999, range: "30-40k" },
];
 
app.get("/", (req, res) => {
  res.send("Mobile API Running");
});
 
app.get("/mobiles", (req, res) => {
  res.json(mobiles);
});
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
