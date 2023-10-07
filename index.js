let fs = require("fs");
let superAgent = require("superagent");
let data = fs.readFile("./dog.txt", "utf-8", (err, data) => {
  console.log(data);
  superAgent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      console.log(res.body.message);
      fs.writeFile(`${__dirname}/randomDog.txt`, res.body.message, (err) => {
        console.log("The file has been updated ");
      });
    });
});
