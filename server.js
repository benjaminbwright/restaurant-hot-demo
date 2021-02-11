// express
const express = require("express");

// setup the server (app)
const app = express();
// setup a port
const PORT = process.env.PORT || 4500;

app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
})

// start the server listening for equests
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})