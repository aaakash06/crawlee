import request from "request";
import fs from "fs";
var options = {
  method: "POST",
  url: "https://merolagani.com/signalr/send?transport=serverSentEvents&connectionToken=bBvTL2Jj2Xeurgyqw2iTWSk21dWgojpDxpbMQJrRsBYZCRqPfHdDBmj-Evn8UUtIg9Uwm5CzsOhjgCJxpCo6_nuCPAw8B_QE6fEERBro_Z0qXTwqH0UstsNO64c7rXQFR8bjqNPyxXQYeGjloYmVE98musDzmZiUjO5cyWJn3R4nJUmxLpWRGIrhC0wgw43u0",

  body: "data=%7B%22H%22%3A%22stocktickerhub%22%2C%22M%22%3A%22GetAllStocks%22%2C%22A%22%3A%5B%5D%2C%22I%22%3A0%7D",
};
request(options, function (error: any, response: any) {
  if (error) throw new Error(error);
  console.log(response.body);
  // fs.writeFileSync("stocks.json", response.body);
});
