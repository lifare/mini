import express from "express";
import * as path from "path";
import hbs from "express-handlebars";
import cookieParser from "cookie-parser";

const rootDir = process.cwd();
const port = 80;
const app = express();

// Выбираем в качестве движка шаблонов Handlebars
app.set("view engine", "hbs");
// Настраиваем пути и дефолтный view
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: path.join(rootDir, "/views/layouts/"),
    partialsDir: path.join(rootDir, "/views/partials/")
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "/static/html/index.html"));
  console.log(JSON.stringify(req.headers));
});

app.get("/menu", (_, res) => {
  res.render("menu", {
    layout: "default",
    items: [
      {
        name: "Americano",
        image: "/static/img/Americano.webp",
        price: 999
      },
      { name: "Cappuccino", image: "/static/img/Cappuccino.webp", price: 999 }
    ]
  });
});

app.get("/buy/:name", (req, res) => {
  res.status(501).end();
});

app.get("/cart", (req, res) => {
  res.status(501).end();
});

app.post("/cart", (req, res) => {
  res.status(501).end();
});

app.get("/login", (req, res) => {
  res.status(501).end();
});

app.listen(port, () => console.log(`App listening on port ${port}`));
