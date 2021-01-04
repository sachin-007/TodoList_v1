const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app=express();
let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
  // res.send("hello");

  let day = date();


  // if (today.getDay()=== 6 || today.getDay() === 0) {
  //   day="weekend";
  //   // res.send("yeh it's the weekend!");
  //   // res.sendFile(__dirname+"/weekend.html")
  //   res.render("list",{kindOfDay:day});
  // }
  // else {
  //   day="weekday";
  //   // res.write("<p>It is not the Weekend.</p>");
  //   // res.write("<h2>Boo! I have to work!</h2>");
  //   // res.send();
  //   // res.sendFile(__dirname+"/index.html")
  //   // res.sendFile(__dirname+"/weekday.html")
  // }

  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //     default:
  //       console.log("Error : Current day is eqal to "+ currentDay);
  // }
  res.render("list",{listTitle:day, newListItems:items});
});



app.post("/",function(req,res){

  let item = req.body.newItem;

  if(req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  }else{
    item.push(item);
    res.redirect("/");
  }



  items.push(item);

  // res.render("list",{newListItem:item})
  res.redirect("/")
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"work List",newListItems:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
})

app.post("/work",function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})


app.listen(3300,function(){
  console.log("server started on port 3300");




















});
