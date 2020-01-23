import express from "express";


const port =  process.env.PORT || 80;
const app = express();


app.get("/", (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.send('hello world');
});


app.listen(port, () => console.log(`App listening on port ${port}`));
