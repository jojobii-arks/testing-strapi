const axios = require("axios");
axios
  .post("http://localhost:1337/api/augments", {
    name: "bababooey",
  })
  .then((res) => res.json())
  .then(console.log)
  .catch();
