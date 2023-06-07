// Importeert express uit de node_modules map
import express from "express";

// initialiseren en configureert express, waarbij ejs wordt ingesteld. De public map wordt gebruikt voor statiche bestanden.
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));
const port = 700;

//  Maak een route voor de index
app.get("/", function (req, res) {
  res.render("index", data);
});

// Start express op, haal het ingestelde poortnummer op
app.listen(port, () => {
  console.log(`Application started on http://localhost:${port}`);
});
