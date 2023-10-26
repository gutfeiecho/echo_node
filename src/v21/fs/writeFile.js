const fs = require("fs");
const AdmZip = require("adm-zip");
const zip = new AdmZip("text.zip");

fs.writeFile("input.txt", "I'm writing this file.", function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Write successfully.");
  fs.readFile("input.txt", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(
      "Asynchronous: ",
      data.toString(),
      typeof data,
      data instanceof Buffer
    );
  });
});

let contentXml = zip.readAsText("word/document.xml");
let str = "";
contentXml.match(/<w:t>[\s\S]*?<\/w:t>/gi).forEach((item) => {
  // str += item.replace("<w:t>", "").replace("</w:t>", "");
  // More efficient. Ten times faster.
  str += item.slice(5, -6);
});

fs.writeFile("text_words.txt", str, function (err) {
  if (err) {
    console.error(err);
    return;
  }
});
