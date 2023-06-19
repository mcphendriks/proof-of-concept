//Importeert express uit de node_modules map
// Importeert express uit de node_modules map
import express from "express";

// initialiseren en configureert express, waarbij ejs wordt ingesteld. De public map wordt gebruikt voor statiche bestanden.
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));

//  Maak een route voor de index
app.get("/", function (req, res) {
  res.render("index", { spaces: spacesData });
});

// fetch data uit de api
const url = "https://campspace.herokuapp.com/spaces";
const spacesData = await fetch(url).then((response) => response.json());

// Start express op, haal het ingestelde poortnummer op
app.set("port", 700);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
