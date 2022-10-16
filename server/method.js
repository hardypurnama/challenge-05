const express = require("express");
const { urlencoded } = require("express");
const app = express();
const path = require("path");
const Car = require("./CRUD_set/cars");
const { uploadimage } = require("./database/uploadproses");
app.use(express.static("public"));
const PORT = process.env.PORT || 8050;
const mobil = new Car();
app.use(express.json());
const uploadgbr = require("./database/uploadmodul");
const upload12 = new uploadgbr();
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", express.static("public"));
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/"))
);
app.post("/api/v1/uploadgbr", uploadgbr, (...args) =>
  upload12.upload1(...args)
);

app.get("/api/cars", (...args) => mobil.tarikMobils(...args));
app.delete("/api/car/:id", (...args) => mobil.HapusMobil(...args));
app.get("/api/car/:id", (...args) => mobil.tarikMobil(...args));
app.put("/api/car/:id", (...args) => mobil.UpdateMobil(...args));
app.post("/api/car", (...args) => mobil.CreateMobil(...args));

app.use((req, res) => {
  res.send("Data tidak ditemukan !");
});

app.listen(PORT, () => {
  console.log(`Express Server: http://localhost:${PORT}`);
});
