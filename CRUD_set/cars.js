const db = require("../database/dbms");
module.exports = Cars;
class Cars {
  constructor() {}

  tarikMobils(req, res) {
    db.query("SELECT * FROM `mobil`", function (err, results, fields) {
      console.log(results);
      res.send(JSON.stringify(results));
    });
  }

  HapusMobil(req, res) {
    db.query(
      "DELETE FROM `mobil` where id=?",
      [req.params.id],
      function (err, results, fields) {
        console.log(results);
        res.send("Data Deleted!");
      }
    );
  }

  tarikMobil(req, res) {
    db.query(
      "SELECT * FROM `mobil` where id=?",
      [req.params.id],
      function (err, results, fields) {
        console.log(results);
        res.send(JSON.stringify(results));
      }
    );
  }

  UpdateMobil(req, res) {
    const gambar = req.body.foto ? req.body.foto : handleUpload(req.body.foto);
    console.log(gambar);
    db.query(
      `UPDATE mobil SET nama=?, ukuran=?, foto=?, harga_sewa=?,`,
      [
        req.body.nama,
        req.body.ukuran,
        req.body.foto,
        req.body.harga_sewa,
        gambar,
      ],
      function (err, results, fields) {
        console.log(results);
        res.send("Berhasil update data!");
      }
    );
  }

  CreateMobil(req, res) {
    const gambar = req.body.foto ? req.body.foto : handleUpload(req.body.foto);
    console.log(gambar);
    db.query(
      `INSERT INTO mobil (nama, ukuran, foto, harga_sewa) 
            VALUES (?, ?, ?, ?)`,
      [
        req.body.nama,
        req.body.ukuran,
        req.body.foto,
        req.body.harga_sewa,
        gambar,
      ],
      function (err, results, fields) {
        console.log(err, results);
        res.send("Berhasil menambahkan data!");
      }
    );
  }
}
