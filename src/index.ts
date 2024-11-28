import { CheerioCrawler } from "crawlee";

export const scrapeNext = async () => {
  try {
    const nepseUrl = "https://www.sharesansar.com/";
    let numericValue: number = 0;
    const crawler = new CheerioCrawler({
      async requestHandler({ request, $, _, log }) {
        const nepseValue = $("#tag-id").text().trim();
        log.info(nepseValue);
        console.log(nepseValue);
        numericValue = parseFloat(nepseValue.replace(/,/g, ""));
      },
    });

    await crawler.run([nepseUrl]);
    console.log(numericValue);
  } catch (error) {
    console.error("Error scraping NEPSE index:", error);
  }
};

scrapeNext();
