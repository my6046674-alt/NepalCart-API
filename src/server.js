import express from "express";
import config from "./config/config.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res)=>{
  res.send("About page")
})
app.post("/contact", (req, res)=>{
  res.send("Contact page")
})

app.use("/api/products", productRoute);

app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}`);
});