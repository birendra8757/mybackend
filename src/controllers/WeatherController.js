let axios = require("axios");

const gettemprature = async function (req, res) {
    try {
      let cityobj = [];
      let cities = [
        "Bengaluru",
        "Mumbai",
        "Delhi",
        "Kolkata",
        "Chennai",
        "London",
        "Moscow",
      ];
      for (let i = 0; i < cities.length; i++) {
        const element = cities[i];
        let obj = { city: cities[i] };
        let result = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=67b540074def973268bd493922007b5a`
        );
        obj.temp = result.data.main.temp;
        cityobj.push(obj);
      }
      let sorted = cityobj.sort((a, b) => a.temp - b.temp);
      // console.log(sorted)
      res.status(200).send({ data: sorted });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  module.exports.gettemprature = gettemprature;