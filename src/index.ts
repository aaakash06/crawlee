import { PlaywrightCrawler } from "crawlee";

export const scrapeNext = async () => {
  try {
    const nepseUrl = "https://merolagani.com/latestmarket.aspx";
    let numericValue: number = 0;
    const crawler = new PlaywrightCrawler({
      async requestHandler({ request, page, enqueueLinks, log }) {
        // const nepseValue = $(
        //   "#index-slider .list-item:nth-of-type(1) span:nth-of-type(2)"
        // )
        //   .text()
        //   .trim();
        const ul = await page.waitForSelector("#index-slider");
        const li = await ul?.waitForSelector(".list-item");
        const span = await li?.waitForSelector("span");
        const text = await span?.textContent();
        console.log("text:::::::", text);
        // numericValue = parseFloat(nepseValue.replace(/,/g, ""));
      },
    });

    await crawler.run([nepseUrl]);
    // console.log(numericValue);
  } catch (error) {
    console.error("Error scraping NEPSE index:", error);
  }
};

scrapeNext();
