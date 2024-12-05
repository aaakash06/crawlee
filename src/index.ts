import { PlaywrightCrawler } from "crawlee";

let nepseValue: number = 0;
let percentChange: number = 0;

let singleton: PlaywrightCrawler | null = null;

declare const globalThis: {
  PlaywrightCrawler: PlaywrightCrawler;
} & typeof global;

const getCrawler = () => {
  if (!singleton) {
    singleton = new PlaywrightCrawler({
      async requestHandler({ page }) {
        const ul = await page.waitForSelector("#index-slider");
        const li = await ul?.waitForSelector(".list-item");
        const span = await li?.waitForSelector("span");
        const text = await span?.textContent();

        if (!text) throw new Error("Failed to get text content");

        nepseValue = parseFloat(text.replace(/,/g, ""));
        percentChange = parseFloat(text.split("  ")[1]);
      },
    });
  }
  return singleton;
};

export const scrapeNext = async () => {
  try {
    const nepseUrl = "https://merolagani.com/latestmarket.aspx";
    const crawler = getCrawler();
    await crawler.run([nepseUrl]);
    return { nepseValue, percentChange };
  } catch (error) {
    console.error("Error scraping NEPSE index:", error);
    return { nepseValue: null, percentChange: null };
  }
};
