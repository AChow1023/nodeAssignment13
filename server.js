const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/characters", (req, res)=> {
    const characters = [];
    characters[0] = {
        name: "Monkey D. Luffy",
        height: "5'9\"",
        hair: "black",
        role: "Captain",
        power: "Gum-Gum fruit",
        img: "images/luffyPic.jfif"
    };
    characters[1] = {
        name: "Roronoa Zoro",
        height: "5'11\"",
        hair: "green",
        role: "second-in-command",
        power: "three sword style",
        img: "images/zoroPic.jfif"
    };
    characters[2] = {
        name: "Nami",
        height: "5'7\"",
        hair: "orange",
        role: "navigator",
        power: "N/A",
        img: "images/namiSPic.png"
    };
    characters[3] = {
        name: "Usopp",
        height: "5'9\"",
        hair: "black",
        role: "sniper",
        power: "sniper",
        img: "images/usoppPic.jfif"
    };
    characters[4] = {
        name: "Nico Robin",
        height: "6'2\"",
        hair: "black",
        role: "archaeologist",
        power: "Flower-Flower fruit",
        img: "images/robinSPic.png"
    };

    res.send(characters);
});

app.listen(3001, () => {

});