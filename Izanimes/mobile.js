const btnMobile = document.getElementById("hamburguer");
btnMobile.addEventListener("click",toggleMenu);

function toggleMenu(){
    const nav = document.getElementById("navMobile")
    nav.classList.toggle("active");
}