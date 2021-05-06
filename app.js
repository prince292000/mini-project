const ul = document.querySelector("ul");
const body = document.querySelector("body");
const h1 = document.querySelector("h2");
const li = document.querySelector("li");

const length = ul.children.length;


    if(length === 1){
        body.style.background = "white";
    }

    if(length === 2){
        body.style.background = "green";
        ul.style.color = "white";
        h1.style.color = "white";
        
       
    }

    if(length === 3){
        body.style.background = "yellow";
        ul.style.color = "blue";
        h1.style.color = "blue";
        
    }

    if(length === 4){
        body.style.background = "red";
        ul.style.color = "white";
        h1.style.color = "white";
    }

    if(length === 5){
        body.style.background = "blue";
        ul.style.color = "white";
        h1.style.color = "white";
    }

    if(length === 6){
        body.style.background = "red"
        ul.style.color = "yellow";
        h1.style.color = "yellow";
    }
