import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const URL = "https://v2.jokeapi.dev/";

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/joke", async (req,res) => {
    const response = await axios.get(URL+"joke/Dark");
    console.log(response.data);
    if(response.data.type == "single"){
        res.render("index.ejs", {joke: response.data.joke});
    } else {
        res.render("index.ejs", {setup: response.data.setup , delivery: response.data.delivery } );
    }
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});