const require = createRequire(import.meta.url);
require("dotenv").config();
import { createRequire } from "module";
import soacModel from "./model/Soac.js";
const express = require("express");
const bodyParser = require("body-parser");
const MONGODB_URI = process.env.API_KEY;
const mongoose = require("mongoose");
const app = express();
var cors = require("cors");
app.use(cors());
const PORT = 8080;
const degreeDayType = {
  WesternCherry: {
    baseTemp: 41,
    ddAfterDate: "05-01",
    firstFlight: 950, // degree days after March 1st
    firstApplication: 1060, // on or before 1060 degree days
  },
  LeafRollers: {
    baseTemp: 41,
    maxTemp: 85,
    peakMothFlight: 0, // 220 -250 degree days
    firstHatch: 420, // degree days
  },
  CodlingMoth: {
    baseTemp: 50,
    maxTemp: 88,
    firstSpray: 250, // degree days
  },
  AppleScab: {
    baseTemp: 32,
    infectionPhase: 0, // 300 - 700 degree days
  },
};
let storedData = {
  WesternCherry: {
    dayDegreeDay: 0,
    degreeDaysAccumulated: 0,
  },
  LeafRollers: {
    dayDegreeDay: 0,
    degreeDaysAccumulated: 0,
  },
  CodlingMoth: {
    dayDegreeDay: 0,
    degreeDaysAccumulated: 0,
  },
  AppleScab: {
    dayDegreeDay: 0,
    degreeDaysAccumulated: 0,
  },
  Temperature: {
    dayLow: 1000,
    dayHigh: -1000,
    dayAverage: 0,
    timeOfLow: "",
    timeOfHigh: "",
    current: 0,
  },
  Rain: {
    totalRainfall: 0,
    dayRainfall: 0,
  },
  Humidity: {
    dayLow: 1000,
    dayHigh: -1000,
    dayHumidity: 0,
    timeOfLow: "",
    timeOfHigh: "",
  },
};

mongoose.connect(MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server running Render`);
});
app.post("/get", sendTest);

async function sendTest(req, res) {
  let specificDate = req.body.date;
  let dayAfter = new Date(specificDate);
  dayAfter.setDate(dayAfter.getDate() + 1);
  let dayBefore = new Date(specificDate);
  dayBefore.setDate(dayBefore.getDate() - 1);
  let species = req.body.species;
  let reqData = req.body.reqData;
  const results = await soacModel
    .find({
      device: 12,
      id: 222,
      time: {
        $gte: new Date(specificDate).toISOString(),
        $lt: new Date(dayAfter).toISOString(),
      },
    })
    .exec()
    .then(function (users) {
      console.log("--------------------");
      console.log("Request Made");
      console.log("Date: " + JSON.stringify(specificDate));
      console.log("Species: " + JSON.stringify(species));
      console.log("reqData: " + JSON.stringify(reqData));
      console.log("--------------------");
      storeData(users, species, reqData);
      if (reqData == "timeOfLow" || reqData == "timeOfHigh") {
        storedData[species][reqData] = storedData[species][reqData].slice(
          11,
          16
        );
        res.json(storedData[species][reqData]);
      } else {
        storedData[species][reqData] = storedData[species][reqData].toFixed(2);
        res.json(Number(storedData[species][reqData]));
      }
      // console.log(users);
      res.json(users);
    })
    .catch(function (err) {
      // console.log(req.body);
    });
}

function storeData(users, species, reqData) {
  switch (species) {
    case "Rain":
      // Determins and Converts total and daily rainfall to Millimeters to Inches
      if (reqData == "totalRainfall") {
        storedData.Rain.totalRainfall = Number(
          millimeterToInchConversion(users[users.length - 1].total_rainfall)
        );
      }
      if (reqData == "dayRainfall") {
        storedData.Rain.dayRainfall = Number(
          millimeterToInchConversion(
            users[users.length - 1].total_rainfall - users[0].total_rainfall
          )
        );
      }
      break;
    case "Humidity":
      // Determins average humidity for the day
      sortMetric(users, "humidity", "Humidity");
      // Sets Humidity in Percentage
      storedData.Humidity.dayHumidity = Number(storedData.Humidity.dayHumidity);
      break;
    case "Temperature":
    case "WesternCherry":
    case "LeafRollers":
    case "CodlingMoth":
    case "AppleScab":
      // Determines high and low temp for day
      sortMetric(users, "temperature", "Temperature");
      // Sets and Converts Celcius to Fahrenheit
      storedData.Temperature.dayLow = Number(
        fahrenheitConversion(storedData.Temperature.dayLow)
      );
      storedData.Temperature.dayHigh = Number(
        fahrenheitConversion(storedData.Temperature.dayHigh)
      );
      storedData.Temperature.dayAverage = Number(
        fahrenheitConversion(storedData.Temperature.dayAverage)
      );
      if (
        species == "WesternCherry" ||
        species == "LeafRollers" ||
        species == "CodlingMoth" ||
        species == "AppleScab"
      ) {
        degreeDay(species, reqData);
      }
      break;
    default:
      console.log("Error");
  }
}

function fahrenheitConversion(celciusTemp) {
  let fahrenheitTemp = celciusTemp * (9 / 5) + 32;
  return fahrenheitTemp;
}

function millimeterToInchConversion(millimeters) {
  let inches = millimeters / 25.4;
  return inches;
}

function degreeDay(species) {
  storedData[species].dayDegreeDay =
    (Number(storedData.Temperature.dayLow) +
      Number(storedData.Temperature.dayHigh)) /
      2 -
    Number(degreeDayType[species].baseTemp);
  if (storedData[species].dayDegreeDay < 0) {
    storedData[species].dayDegreeDay = 0;
  }
}

function sortMetric(results, metric, metricName) {
  (storedData[metricName].dayLow = 1000),
    (storedData[metricName].dayHigh = -1000),
    (storedData[metricName].dayAverage = 0);
  let total = 0;
  for (let i = 0; i < results.length; i++) {
    if (results[i][metric] > storedData[metricName].dayHigh) {
      storedData[metricName].dayHigh = results[i][metric];
      storedData[metricName].timeOfHigh = results[i].time;
    }
    if (results[i][metric] < storedData[metricName].dayLow) {
      storedData[metricName].dayLow = results[i][metric];
      storedData[metricName].timeOfLow = results[i].time;
    }
    total += results[i][metric];
  }

  storedData[metricName].dayAverage = total / results.length;
}

function appleScabLikely() {}
