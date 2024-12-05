// import { PlaywrightCrawler } from "crawlee";

// let singleton: PlaywrightCrawler | null = null;

// declare const globalThis: {
//   PlaywrightCrawler: PlaywrightCrawler;
// } & typeof global;

// const getCrawler = () => {
//   if (!singleton) {
//     singleton = new PlaywrightCrawler({
//       async requestHandler({ page }) {
//         const ul = await page.waitForSelector("#index-slider");
//         const li = await ul?.waitForSelector(".list-item");
//         const span = await li?.waitForSelector("span");
//         const text = await span?.textContent();

//         if (!text) throw new Error("Failed to get text content");

//         return {
//           nepseValue: parseFloat(text.replace(/,/g, "")),
//           percentChange: parseFloat(text.split("  ")[1]),
//         };
//       },
//     });
//   }
//   return singleton;
// };

// export const scrapeNext = async () => {
//   try {
//     const nepseUrl = "https://merolagani.com/latestmarket.aspx";
//     const crawler = getCrawler();

//     let result: { nepseValue: number; percentChange: number } | null = null;

//     crawler.router.addDefaultHandler(async (context) => {
//       result = await crawler.options.requestHandler!(context);
//     });

//     await crawler.run([nepseUrl]);

//     if (!result) throw new Error("Failed to scrape data");
//     return result;
//   } catch (error) {
//     console.error("Error scraping NEPSE index:", error);
//     return { nepseValue: null, percentChange: null };
//   }
// };
