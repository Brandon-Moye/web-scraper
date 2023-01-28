const PORT = 3000;
const axios = require("axios");
const cheerio = require("cheerio");
// const request = require("request");
// const { request } = require("express");
const express = require("express");

const app = express();

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

const seasonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let seasonsWebpageArray = [];
let masterDatabase = new Object();
let seasonDatabase = new Object();
let queenLinkDatabase = new Object();
for (let i = 0; i < seasonArray.length; i++) {
  // console.log(seasonArray[i]);
  seasonsWebpageArray.push(
    `https://rupaulsdragrace.fandom.com/wiki/RuPaul%27s_Drag_Race_(Season_${seasonArray[i]})`
  );
  masterDatabase.webpage = seasonsWebpageArray;
}
console.log(masterDatabase);
queenLinks = [];
for (let i = 0; i < seasonsWebpageArray.length; i++) {
  axios.get(seasonsWebpageArray[i]).then((res) => {
    const maximumCast = 20;
    seasonDatabase.season = seasonsWebpageArray[i];
    console.log(seasonDatabase);
    for (let i = 0; i < maximumCast; i++) {
      const $ = cheerio.load(res.data);
      // let nameOfQueen = $(
      //   `table[class="wikitable"] tbody tr:nth-child(${i}) td:nth-child(2) b a`
      // ).text();

      // if (nameOfQueen === undefined) {
      //   nameOfQueen = $(
      //     `table[class="wikitable"] tbody tr:nth-child(${i}) td:nth-child(1) b a`
      //   ).text();
      // }
      // console.log(nameOfQueen);

      let linkToQueenPage = $(
        `table[class="wikitable"] tbody tr:nth-child(${i}) td:nth-child(2) b a`
      ).attr("href");
      if (linkToQueenPage === undefined) {
        linkToQueenPage = $(
          `table[class="wikitable"] tbody tr:nth-child(${i}) td:nth-child(1) b a`
        ).attr("href");
      }
      // console.log(linkToQueenPage);
      queenLinks.push(linkToQueenPage);
      // console.log(queenLinks);
      queenLinkDatabase.queenLinks = linkToQueenPage;
      console.log(queenLinkDatabase);
    }
    // console.log(seasonDatabase);
    // queenLinks.push(linkToQueenPage);
  });
}

// for (let i = 0; i < seasonsWebpageArray.length; i++) {
//   let rpdrURLBeingUsed = seasonsWebpageArray[i];
//   axios.get(rpdrURLBeingUsed).then((res) => {
//     const $ = cheerio.load(res.data);
//     const castSize = $(
//       `table[class="wikitable"] tbody tr:last-child td:first-child`
//     ).html();
//   });
// }
console.log("end of test");
const rpdrS1URL =
  "https://rupaulsdragrace.fandom.com/wiki/RuPaul%27s_Drag_Race_(Season_8)";

axios.get(rpdrS1URL).then((res) => {
  const $ = cheerio.load(res.data);

  // console.log([
  //   $(`table[class="wikitable"] tbody tr:last-child td:first-child`).html(),
  // ]);

  queenIndexNumber = 6;

  let trialForQueenURL = $(
    `table[class="wikitable"] tbody tr:nth-child(${queenIndexNumber}) td:nth-child(2) b a`
  ).attr("href");
  let trialForQUeenName = $(
    `table[class="wikitable"] tbody tr:nth-child(${queenIndexNumber}) td:nth-child(2) b a`
  ).text();

  if (trialForQueenURL === undefined) {
    trialForQueenURL = $(
      `table[class="wikitable"] tbody tr:nth-child(${queenIndexNumber}) td:nth-child(2) a`
    ).attr("href");
    // trialForQUeenName = $(
    //   `table[class="wikitable"] tbody tr:nth-child(${queenIndexNumber}) td:nth-child(1) b a`
    // ).text();
  }
  // console.log(trialForQueenURL);
  // console.log(trialForQUeenName);
  // console.log();
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
