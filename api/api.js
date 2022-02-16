const express = require("express");
const cors = require("cors");

const PORT = 4000;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "11",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
  ]);
});

app.listen(PORT, () => {
  console.log("listening for requests on port", PORT);
});
