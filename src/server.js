import express from "express";
import config from "./config/config.js";
import connectDB from "./config/database.js";

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res)=>{
  res.send("About page")
})
app.post("/contact", (req, res)=>{
  res.send("Contact page")
})

// app.use("/api/products", productRoute);

app.use("/api/auth", authRoute)

app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}`);
});