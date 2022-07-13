const axios = require("axios");

const slots = [
  "addi",
  "domina",
  "note",
  "secreta",
  "soul",
  "ward",
  "might",
  "precision",
  "technique",
  "deftness",
  "keeper",
  "esperio",
  "exploit",
  "gigas",
  "guard",
  "mastery",
  "fusia",
  "dualble",
  "spirit",
  "stamina",
  "tria",
];

slots.forEach((slot) => {
  axios
    .post("http://localhost:1337/api/augment-slots", {
      data: {
        name: slot,
      },
    })
    .then((res) => console.log(res));
});
