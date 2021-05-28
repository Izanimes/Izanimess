let logar = document.getElementById("btnLogin");
let popUp  = document.getElementById("popLogin");
logar.addEventListener("click",abrirpop);

function abrirpop(){
    popUp.classList.add('ativo')
}

let x = document.getElementById("closePopLogin");

x.addEventListener("click",()=>{
    popUp.classList.remove("ativo")
})
