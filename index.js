const PORT = 3000;
const axios = require("axios");
const cheerio = require("cheerio");
// const request = require("request");
// const { request } = require("express");
const express = require("express");

const app = express();

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

const seasonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let seasonsWebpageArray = [];
for (let i = 0; i < seasonArray.length; i++) {
  // console.log(seasonArray[i]);
  seasonsWebpageArray.push(
    `https://rupaulsdragrace.fandom.com/wiki/RuPaul%27s_Drag_Race_(Season_${seasonArray[i]})`
  );
}
for (let i = 0; i < seasonArray.length; i++) {
  let rpdrURLBeingUsed = seasonsWebpageArray[i];
  console.log(rpdrURLBeingUsed);
}
console.log("end of test");

const rpdrS1URL =
  "https://rupaulsdragrace.fandom.com/wiki/RuPaul%27s_Drag_Race_(Season_1)";

axios.get(rpdrS1URL).then((res) => {
  const $ = cheerio.load(res.data);

  console.log([
    $(`table[class="wikitable"] tbody tr:last-child td:first-child`).html(),
  ]);

  queenIndexNumber = 3;
  console.log(
    $(
      `table[class="wikitable"] tbody tr:nth-child(${queenIndexNumber}) td:nth-child(2) b a`
    ).attr("href")
  );
  console.log(
    $(
      `table[class="wikitable"] tbody tr:nth-child(${queenIndexNumber}) td:nth-child(2) b a`
    ).text()
  );
});

// DONT TOUCH - THIS PATH GETS ME TO AKASHIA
// .children("center")
// .children("table")
// .children("tbody")
// .children("tr")
// .children("td")
// .children("div")
// .children("div")
// .children("a")
// .attr("href")
