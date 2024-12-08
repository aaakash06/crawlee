import { PlaywrightCrawler, Dataset } from "crawlee";
import { PlaywrightCrawlingContext } from "crawlee";

// Type definition for stock data
interface StockData {
  symbol?: string;
  price?: number;
  // Add other fields as needed
}

const crawler = new PlaywrightCrawler({
  // Enable request interception
  useSessionPool: true,
  persistCookiesPerSession: true,

  async requestHandler({ page, request, log }: PlaywrightCrawlingContext) {
    log.info(`Processing ${request.url}`);

    // Enable network request interception
    await page.route("**/*", async (route) => {
      const request = route.request();

      // Continue the request
      await route.continue();

      // After the response is received
      const response = await route.request().response();
      if (response) {
        // Check if this is an API response containing stock data
        if (request.url().includes("your-target-api-endpoint")) {
          try {
            const responseData = await response.json();
            // Process and store the data
            await Dataset.pushData({
              url: request.url(),
              stockData: responseData,
              timestamp: new Date().toISOString(),
            });
          } catch (error) {
            // log.error("Failed to parse response:", error);
          }
        }
      }
    });

    // Navigate to the page
    await page.goto(request.url);

    // Wait for any necessary elements or network requests
    await page.waitForLoadState("networkidle");
  },

  // Handle any errors that occur during crawling
  failedRequestHandler({ request, log, error }) {
    // log.error(`Request ${request.url} failed: ${error.message}`);
  },
});

// Run the crawler
async function runCrawler() {
  try {
    await crawler.run(["https://merolagani.com/latestmarket.aspx"]);

    // After crawling, you can access the stored data
    const dataset = await Dataset.open();
    await dataset.exportToJSON("stock-data.json");
  } catch (error) {
    console.error("Crawler failed:", error);
  }
}

runCrawler();
