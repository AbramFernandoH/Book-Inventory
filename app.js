const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
// generate id
const {v4: uuid} = require('uuid');
const app = express();

// parse data from form so can be access by req.body
app.use(express.urlencoded({extended: true}));
// parse json dari body
app.use(express.json());
// set static file to be inside public folder
app.use(express.static(path.join(__dirname, 'public')))
// agar bisa menipu form untuk melakukan put/patch/delete request
app.use(methodOverride('_method'));
// agar bisa dijalankan dari directory manapun
app.set('views', path.join(__dirname, 'views'));
// set view engine untuk ejs
app.set('view engine', 'ejs');

// db
let booksDb = [];

// render booksInventory data from booksDb
app.get("/", (req, res) => {
  res.render("home", {booksDb});
});

// render the add new book page
app.get("/add", (req, res) => {
  res.render("newBook");
});

app.listen(3000, () => {
  console.log("Connected to port 3000");
})