const { gambarcloud, unggah } = require("../database/imagecloud");
const { ambildata } = require("../database/uploadproses");
module.exports = uploadgbr;
class uploadgbr {
  upload1(req, res) {
    const file = ambildata(req);
    let url = "";
    console.log(file);
    unggah.upload(file, (err, result) => {
      if (err) {
        console.log(err);
        throw new Error("upload tidak berhasil");
      }
      res.send(result.url);
    });
  }
}
