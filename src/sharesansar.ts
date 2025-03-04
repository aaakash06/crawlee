import fs from "fs";
fetch("https://www.sharesansar.com/ipo-result-search", {
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.5",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  body: "_token=z2TVNJzC11zIWmd7lhw8N0Fd22SYVQhhFCu0uQYe&companyid=77&boid=1301090003268855",
  method: "POST",
})
  .then((res) => res.json())
  .then((data) => {
    fs.writeFileSync("sharesansar.json", JSON.stringify(data, null, 2));
  });
