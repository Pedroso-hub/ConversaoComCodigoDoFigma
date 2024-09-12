let opcoes = document.querySelectorAll(".opcao");

let select = document.querySelector("#select-pais");
let select2 = document.querySelector("#select-ps");
let img = document.querySelector("#imagem1");
let img2 = document.querySelector("#imagem2");
let botaoTrocar = document.querySelector(".botton-swap");




select.addEventListener("change", ()=> {
    img.src = `https://flagsapi.com/${select.value}/flat/64.png`;
});
select2.addEventListener("change", ()=> {
    img2.src = `https://flagsapi.com/${select2.value}/flat/64.png`;
});



botaoTrocar.addEventListener("click", ()=>{
    let selectTemp = select.value;
    select.value = select2.value;
    select2.value = selectTemp;
    let imgTemp = img.src;
    img.src = img2.src;
    img2.src = imgTemp;
})





