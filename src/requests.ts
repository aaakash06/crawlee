import { PlaywrightCrawler, Dataset } from "crawlee";
import { Request } from "playwright";

interface NetworkRequest {
  url: string;
  method: string;
  resourceType: string;
  status?: number;
}

const crawler = new PlaywrightCrawler({
  async requestHandler({ page, log }) {
    const requests: NetworkRequest[] = [];

    // Monitor network requests
    page.on("request", (request: Request) => {
      requests.push({
        url: request.url(),
        method: request.method(),
        resourceType: request.resourceType(),
      });
    });

    // Wait for network idle to ensure we capture most requests
    await page.goto(page.url(), { waitUntil: "networkidle" });

    log.info(`Captured ${requests.length} network requests`);
  },
  // Recommended browser settings
  browserPoolOptions: {
    useFingerprints: false, // Disable fingerprinting for better performance
  },
  maxRequestsPerCrawl: 1, // Limit to single page for network analysis
});

// Start the crawler
crawler.run(["https://merolagani.com/latestmarket.aspx"]);
