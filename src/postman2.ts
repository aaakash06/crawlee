import fs from "fs";

fetch(
  "https://merolagani.com/handlers/webrequesthandler.ashx?type=market_summary"
)
  .then((res) => res.text())
  .then((data) => fs.writeFileSync("summary.json", data))
  .catch((err) => console.error(err));
