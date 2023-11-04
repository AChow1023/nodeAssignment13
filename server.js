const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send("yo");
});

app.get("/api/characters", (req, res)=> {
    const characters = [
        "monkey d. luffy",
        "roronoa zoro",
        "nami",
        "usopp",
        "nico robin"
    ];
    res.send(characters);
});

app.listen(3000, () => {

});