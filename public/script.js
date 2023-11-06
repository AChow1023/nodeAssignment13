const showCharacters = async () => {
    const characterJSON = await getJSON();
    if(characterJSON == ""){
        console.log("invalid load of json");
        return;
    }
    
    let characterDiv = document.getElementById("character-list");

    characterJSON.forEach((character) =>{
        let section = document.createElement("section");
        characterDiv.append(section);

        let h3 = document.createElement("h3");
        h3.innerHTML = character.name;
        section.append(h3);

        let ul = document.createElement("ul");
        
        let liHe = document.createElement("li");
        liHe.innerHTML = character.height;
        ul.append(liHe);

        let liHa = document.createElement("li");
        liHa.innerHTML = 'Hair: ' + character.hair;
        ul.append(liHa);

        let liR = document.createElement("li");
        liR.innerHTML = character.role;
        ul.append(liR);

        let liP = document.createElement("power");
        liP.innerHTML = character.power;
        ul.append(liR);

        section.append(ul);
        
        let img = document.createElement("img");
        section.append(img);
        img.src = "http://localhost:3001/" + character.img;

    });
};

const getJSON = async () => {
    try{
        return (await fetch("http://localhost:3001/api/characters")).json();
    }
    catch(error){
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => showCharacters();