const PORT = 3000;
const axios = require("axios");
const cheerio = require("cheerio");
// const request = require("request");
// const { request } = require("express");
const express = require("express");

const app = express();

const url = "https://www.theguardian.com/uk";

//kind of works for the guardian
axios(url)
  .then((response) => {
    const html = response.data;
    // console.log(html);
    const $ = cheerio.load(html);
    const articles = [];

    $(".fc-item__content").each(function () {
      const title = $(this).text();
      const url = $(this).find("a").attr("href");
      const actualTitle = $(this).find("span").text();
      articles.push({
        title,
        // url,
        // actualTitle,
      });
    });
    // console.log(articles);
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

const rpdrURL =
  "https://rupaulsdragrace.fandom.com/wiki/RuPaul%27s_Drag_Race_(Season_1)";

axios.get(rpdrURL).then((res) => {
  const $ = cheerio.load(res.data);
  $(".mw-parser-output")
    .children("center")
    .each((index, element) => {
      // console.log(
      //   $(element)
      //     // .children("center")
      //     .children("table")
      //     .children("tbody")
      //     .children("tr")
      //     .children("td")
      //     .children("div")
      //     .children("div")
      //     .children("a")
      //     .attr("href")
      //   // .html()
      // );
    });
  const gettingToSpecificTablePathway = $(".mw-parser-output")
    .children(".wikitable")
    .children("tbody");
  // .children()
  // .html();
  // console.log(gettingToSpecificTablePathway);
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

  // console.log(
  //   $(".mw-parser-output")
  //     .children("center")
  //     .children("table")
  //     .children("tbody")
  //     .children("tr")
  //     .children("td")
  //     .children("div")
  //     .children("div")
  //     .children("a")
  //     .attr("title")
  // );
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
