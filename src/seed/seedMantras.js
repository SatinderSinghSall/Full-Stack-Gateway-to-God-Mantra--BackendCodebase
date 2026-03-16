const Mantra = require("../models/Mantra");

const hanuman = {
  name: "Hanuman Chalisa",
  slug: "hanuman-chalisa",
  image: "hanuman.jpg",
  verses: [
    {
      verse: "जय हनुमान ज्ञान गुण सागर",
      meaning: "Victory to Hanuman, ocean of wisdom",
      order: 1,
    },
  ],
};

module.exports = [hanuman];
