const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8050;

// fungsi untuk handle route atau link '/about'
function handleGetAbout(req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
}

function handleGetTest(req, res) {
  //req.params, req.query, req.body
  res.send(
    "NO : " +
      req.params.id +
      " mobil :" +
      req.params.mobil +
      " query :" +
      req.query.filter
  );
}

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/login", (req, res) => {
  res.send("Masoook!");
});

// routing ke fungsi yang sudah di tulis
app.get("/about", handleGetAbout);

/// /test/ <- link, /:id/:mobil <- parameter id dan mobil, filter, sort, search <- query
app.get("/test/:id/:mobil", handleGetTest);
// contoh: tokopedia.com/:toko/:barang

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});
