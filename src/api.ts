import express, { Request, Response } from "express";
import { scrapeNext } from "./";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  const data = await scrapeNext();
  if (!data) {
    res.status(500).json({ ok: false, error: "Failed to scrape data" });
  }
  res.status(200).json({ ok: true, data });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
