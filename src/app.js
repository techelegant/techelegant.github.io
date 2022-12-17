const path = require("path");
const express = require("express");
const app = express();

const hbs = require("hbs");

const port = process.env.PORT || 3000

/*
app.get("",(req,res) => {
    res.send("Hello Express!");
})

app.get("/about",(req,res) => {
    res.send("About Express!");
})
*/
//if you want to call pages statically, just set path and use exprss.static
const publicDirectoryPath = path.join(__dirname,"../public");
app.use(express.static(publicDirectoryPath));

//for dynamically call pages use hbs
const partialpagepath = path.join(__dirname,"../views/partials");
app.set("view engine","hbs");
hbs.registerPartials(partialpagepath);
app.get(["","/home"],(req,res) => {
    res.render("index",{title:"Express Modules",author:"Jay Contractor"});
});

//for error page call
app.get("/home/*",(req,res) => {
    res.render("404",{errorTitle:"home page not found!"});
});
app.get("*",(req,res) => {
    res.render("404");
});
/*
app.use((req,res,next) => {
    //res.status(404).send("<h2>404 Error!</h2><p>No Page Found!</p>");
    res.status(404).render("404");
});
*/

app.listen(port);