fetch(
  "https://merolagani.com/handlers/webrequesthandler.ashx?type=market_summary"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
