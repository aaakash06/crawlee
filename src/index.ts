import { CheerioCrawler } from "crawlee";

export const scrapeNext = async () => {
  try {
    const nepseUrl = "https://merolagani.com/latestmarket.aspx";
    let numericValue: number = 0;
    const crawler = new CheerioCrawler({
      async requestHandler({ request, $, _, log }) {
        // const nepseValue = $(
        //   "#index-slider .list-item:nth-of-type(1) span:nth-of-type(2)"
        // )
        //   .text()
        //   .trim();
        const html = $("body").html();
        console.log("html:::::::", html);
        // numericValue = parseFloat(nepseValue.replace(/,/g, ""));
      },
    });

    await crawler.run([nepseUrl]);
    console.log(numericValue);
  } catch (error) {
    console.error("Error scraping NEPSE index:", error);
  }
};

scrapeNext();
