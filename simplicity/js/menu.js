const botao = document.querySelector ("nav h2");
const linksMenu = document.querySelector(".links-menu");
const icone = document.querySelector(".icone");

botao.addEventListener("click", function(event){
    event.preventDefault(); //Usar sempre em formulários e links
    linksMenu.classList.toggle("aberto");
    if (linksMenu.classList.contains("aberto")) {
        icone.innerHTML = "Fechar &times";
        
    } else {
        icone.innerHTML = "Menu &equiv;";
    }
});