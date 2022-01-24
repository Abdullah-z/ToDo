const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');

// var items=[];
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({exteded:true});
app.get("/", function(req, res) {
  app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1= new Item({
  name: "Welcome to todo list"
});

const item2= new Item({
  name: "+ to add new"
});

const item3= new Item({
  name: "x to delete"
});

const defaultItems= [item1, item2, item3];

Item.insertMany(defaultItems, function(err){
  if (err){
    console.log(err)
  }
  else {
    console.log("success");
  }
});

  var d = new Date();

  var options ={
    weekday: "long",
    day: "numeric",
    month: "long"
  };

 var day= d.toLocaleString("en-US", options);

  res.render("list", {kindOfDay:day, userValue:items});

});

app.post("/",function(req,res){
var item = req.body.userEnter;
items.push(item);
res.redirect("/");
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
