const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Cors
let corsOptions = {
    origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Import Routes
const crudRoute = require("./routes/crudRoute");

// BodyParser Middleware
app.use(express.json());

// Route
app.use("/api/crud", crudRoute);

app.listen(3000, "127.0.0.1", () => {
    console.log("200!");
});
