const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 3010;

// Middleware
app.use(express.json()); // Allow JSON data

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to database"))
  .catch((error) => console.error("❌ Error connecting to database:", error));

// API Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Optional: Serve static files (HTML, CSS, etc.)
app.use("/static", express.static("pages"));

// Start Server
app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});