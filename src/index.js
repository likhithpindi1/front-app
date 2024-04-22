let express = require("express");
require("./db/connection");
let route = require("./controles/Routes");

let port = process.env.PORT || 3001;

let app = express();

app.get("/", (req, res) => {
  res.send("h1");
  res.end();
});
app.use(express.json());
app.use("/", route);

app.listen(port, () => {
  console.log(port);
});
