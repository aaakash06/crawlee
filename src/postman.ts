import request from "request";

var options = {
  method: "POST",
  url: "https://merolagani.com/signalr/send?transport=serverSentEvents&connectionToken=bBvTL2Jj2Xeurgyqw2iTWSk21dWgojpDxpbMQJrRsBYZCRqPfHdDBmj-Evn8UUtIg9Uwm5CzsOhjgCJxpCo6_nuCPAw8B_QE6fEERBro_Z0qXTwqH0UstsNO64c7rXQFR8bjqNPyxXQYeGjloYmVE98musDzmZiUjO5cyWJn3R4nJUmxLpWRGIrhC0wgw43u0",
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    cookie: "ASP.NET_SessionId=1ouvg4hi12242eaezlgyff1p",
    origin: "https://merolagani.com",
    priority: "u=1, i",
    referer: "https://merolagani.com/latestmarket.aspx",
    "sec-ch-ua": '"Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": '"Android"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "user-agent":
      "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
    "x-requested-with": "XMLHttpRequest",
  },
  body: "data=%7B%22H%22%3A%22stocktickerhub%22%2C%22M%22%3A%22GetAllStocks%22%2C%22A%22%3A%5B%5D%2C%22I%22%3A0%7D",
};
request(options, function (error: any, response: any) {
  if (error) throw new Error(error);
  console.log(response.body);
});
