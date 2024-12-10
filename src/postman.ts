import request from "request";
import fs from "fs";
var options = {
  method: "POST",
  url: "https://merolagani.com/signalr/send?transport=serverSentEvents&connectionToken=bBvTL2Jj2Xeurgyqw2iTWSk21dWgojpDxpbMQJrRsBYZCRqPfHdDBmj-Evn8UUtIg9Uwm5CzsOhjgCJxpCo6_nuCPAw8B_QE6fEERBro_Z0qXTwqH0UstsNO64c7rXQFR8bjqNPyxXQYeGjloYmVE98musDzmZiUjO5cyWJn3R4nJUmxLpWRGIrhC0wgw43u0",

  body: "data=%7B%22H%22%3A%22stocktickerhub%22%2C%22M%22%3A%22GetAllStocks%22%2C%22A%22%3A%5B%5D%2C%22I%22%3A0%7D",
};
request(options, function (error: any, response: any) {
  if (error) throw new Error(error);
  fs.writeFileSync("stocks.json", response.body);
});

// fetch("https://merolagani.com/signalr/send?transport=serverSentEvents&connectionToken=6YIKdLSccwtCbKaUCN3C8k7jkelkwP3jDPnGmhcpgQM-kN3fugscGX6icpP_ZbhYr60LIAYGBJg06P2wQKLzNknjJD0Y8ww3lsha84oeLmDx0ZAcHQkmhDkyZKMGY66U_4U8X9oWmF1SRHMx57EkTATF2odODum9pW8-5Cc6gfqK6biz1dAJkOerscZfD3_p0", {
//   "headers": {
//     "accept": "application/json, text/javascript, */*; q=0.01",
//     "accept-language": "en-US,en;q=0.5",
//     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Brave\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
//     "sec-ch-ua-mobile": "?1",
//     "sec-ch-ua-platform": "\"Android\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "sec-gpc": "1",
//     "x-requested-with": "XMLHttpRequest",
//     "cookie": "ASP.NET_SessionId=x1xovfm13bducngotcpm3lwt",
//     "Referer": "https://merolagani.com/latestmarket.aspx",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "data=%7B%22H%22%3A%22stocktickerhub%22%2C%22M%22%3A%22GetAllStocks%22%2C%22A%22%3A%5B%5D%2C%22I%22%3A0%7D",
//   "method": "POST"
// });

// fetch("https://merolagani.com/signalr/send?transport=serverSentEvents&connectionToken=6YIKdLSccwtCbKaUCN3C8k7jkelkwP3jDPnGmhcpgQM-kN3fugscGX6icpP_ZbhYr60LIAYGBJg06P2wQKLzNknjJD0Y8ww3lsha84oeLmDx0ZAcHQkmhDkyZKMGY66U_4U8X9oWmF1SRHMx57EkTATF2odODum9pW8-5Cc6gfqK6biz1dAJkOerscZfD3_p0", {
//   "headers": {
//     "accept": "application/json, text/javascript, */*; q=0.01",
//     "accept-language": "en-US,en;q=0.5",
//     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Brave\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
//     "sec-ch-ua-mobile": "?1",
//     "sec-ch-ua-platform": "\"Android\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "sec-gpc": "1",
//     "x-requested-with": "XMLHttpRequest"
//   },
//   "referrer": "https://merolagani.com/latestmarket.aspx",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "data=%7B%22H%22%3A%22stocktickerhub%22%2C%22M%22%3A%22GetAllStocks%22%2C%22A%22%3A%5B%5D%2C%22I%22%3A0%7D",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });
