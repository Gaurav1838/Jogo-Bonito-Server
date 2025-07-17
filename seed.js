import mongoose from "mongoose";
import dotenv from "dotenv";
import Jersey from "./models/jersey.js";

dotenv.config();

const sampleJerseys = [
{
    name: "Real Madrid Home Kit",
    club: "Real Madrid",
    year: "2024-25",
    price: 1699,
    image: "rm-24-25-home.jpeg"
  },
  {
    name: "Barcelona Away Kit",
    club: "Barcelona",
    year: "2024-25",
    price: 1699,
    image: "assets/barca-24-25-away.jpeg"
  },
  {
    name: "Manchester United Home Kit",
    club: "Manchester United",
    year: "2021-22",
    price: 1599,
    image: "assets/manu-21-22-home.jpeg"
  },
  {
    name: "Liverpool Home Kit",
    club: "Liverpool",
    year: "2024-25",
    price: 1699,
    image: "assets/liver-24-25-home.jpeg"
  },
  {
    name: "AC Milan Home Kit",
    club: "AC Milan",
    year: "2013-14",
    price: 1999,
    image: "assets/ac-13-14-home.jpeg"
  },
  {
    name: "Juventus Home Kit",
    club: "Juventus",
    year: "2023-24",
    price: 1899,
    image: "assets/juve-23-24-home.jpeg"
  },
  {
    name: "PSG Home Kit",
    club: "Paris Saint-Germain",
    year: "2021-22",
    price: 1799,
    image: "assets/psg-21-22-home.jpeg"
  },
  {
    name: "Real Madrid Away Kit",
    club: "Real Madrid",
    year: "2016-17",
    price: 1999,
    image: "assets/rm-2016-17-away.jpeg"
  },
  {
    name: "Manchester United Retro Kit",
    club: "Manchester United",
    year: "2007-08",
    price: 1999,
    image: "assets/manu-07-08-home.jpeg"
  },
  {
    name: "Argentina World Cup Kit",
    club: "Argentina",
    year: "2022",
    price: 1599,
    image: "assets/arg-2022-wc.jpeg"
  },
  {
    name: "Germany Euro Kit",
    club: "Germany",
    year: "2024",
    price: 1599,
    image: "assets/ger-euro-24.jpeg"
  },
  {
    name: "Brazil World Cup Kit",
    club: "Brazil",
    year: "2022",
    price: 1599,
    image: "assets/brazil-22-wc.jpeg"
  }


];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected...");

    await Jersey.deleteMany();
    console.log("Old data cleared.");
    //console.log("Total sample:", sampleJerseys.length);
    await Jersey.insertMany(sampleJerseys);
    console.log("Sample jerseys inserted!");

    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Seeding failed:", err);
    mongoose.disconnect();
  });
