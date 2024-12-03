import { PlaywrightCrawler } from "crawlee";

export const scrapeNext = async () => {
  try {
    const nepseUrl = "https://merolagani.com/latestmarket.aspx";
    let nepseValue: number = 0;
    let percentChange: number = 0;
    const crawler = new PlaywrightCrawler({
      async requestHandler({ request, page, enqueueLinks, log }) {
        const ul = await page.waitForSelector("#index-slider");
        const li = await ul?.waitForSelector(".list-item");
        const span = await li?.waitForSelector("span");
        const text = await span?.textContent();
        console.log("text:::::::", text);
        nepseValue = parseFloat(text!.replace(/,/g, ""));
        percentChange = parseFloat(text!.split("  ")[1]);
      },
    });

    await crawler.run([nepseUrl]);
    return { nepseValue, percentChange };
  } catch (error) {
    console.error("Error scraping NEPSE index:", error);
  }
};
