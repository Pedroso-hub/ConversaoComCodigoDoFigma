let opcoes = document.querySelectorAll(".opcao");

let select = document.querySelector("#select-pais");
let select2 = document.querySelector("#select-ps");
let img = document.querySelector("#imagem1");
let img2 = document.querySelector("#imagem2");

async function setFlag(select, img){ 
    img.src = "https://flagsapi.com/"+select.value +"/flat/64.png";
}


setFlag(select, img);
setFlag(select2, img2);





