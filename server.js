// REQUIRE DEPENDENCIES
const express = require('express');
const budget = require("./models/budget");



// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;


// DEFINE OUR ROUTES
app.get("/budgets/", (req, res) => {
    res.render("budget_index.ejs", {
        allBudget: budget
    })
});


app.get("/budgets/:index", (req, res) => {
    res.render("budget_show.ejs", {
        budgets: budget[req.params.index]
    })
});

app.get("/budgets/new", (req, res)=>{
    res.render("budget_new.ejs"
    )
});

app.post("/budgets", (req, res) => {
    console.log("Create route accessed!")
    res.send("This route works")
});
    
app.listen(port, () => {
    console.log(`Working `, port)
});