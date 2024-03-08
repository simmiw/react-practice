const express = require('express');
const app = express();
const PORT = 3000;

app.get("/details", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send("My Name is Simmi");
})

app.get("/data", (req, res) => {
    res.json({ user: "Simmi", age: 30, country: "Netherlands", city: "Amsterdam" })
})

app.post("/create", (req, res)=>{
   res.send(req.params);
})


app.listen(PORT, (error) => {
    if (!error) console.log(`Working fine and App is running at ${PORT}`)
    else console.log("Error occured");
})