const express = require('express');
const app = express();
const datetime = require("node-datetime");
 const path = require('path');
 const dt = datetime.create(new Date());
 const day_of_login = dt.format("W");
 const hour_of_login = dt.format("H:M");
 const free_day1 = "Sunday";
 const free_day2 = "Saturday";
 const lasthour= "17:00";
 const firsthour = "09:00";
app.use(express.static(path.join(__dirname,'public')));
app.get("/", (req, res) => {
    if (hour_of_login <= lasthour && hour_of_login >= firsthour) {
      if (day_of_login != free_day1 && day_of_login != free_day2) {
        res.sendFile(__dirname + "/public/home.html");
      } else {
        res.sendFile(__dirname + "/public/error.html");
      }
    } else {
      res.sendFile(__dirname + "/public/error.html");
    }
  });
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));


