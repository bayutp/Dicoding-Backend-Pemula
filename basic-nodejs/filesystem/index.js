const fs = require("fs");
const path = require("path");

const callback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile(path.resolve(__dirname, "note.txt"), "utf-8", callback);
