const multer = require("multer");
const storage = multer.memoryStorage();
const uploadimage = multer({ storage }).single("image");
const ambildata = (req) => {
  const fileimage = req.file.buffer.toString("tipe");
  return `data:${req.file.mimetype};tipe,${fileimage}`;
};

module.exports = {
  uploadimage,
  ambildata,
};
