import fs from "fs";

fetch(
  "https://merolagani.com/handlers/webrequesthandler.ashx?type=market_summary"
)
  .then((res) => res.json())
  .then((data) => fs.writeFileSync("summary.json", JSON.stringify(data)))
  .catch((err) => console.error(err));
