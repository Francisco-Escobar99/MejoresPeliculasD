//Obtener los elementps de la clase .close
let links = document.querySelectorAll("./close")

//recorrer
links.forEach(function(link){
    //agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content1 = document.querySelector(".content");
        content1.classList.remove("animate__fadeInDown");
        content1.classList.remove("animate__animated");

        content1.classList.add("animate__fadeOutUp");
        content1.classList.add("animate__animated");
        
        setTimeout(function (){
            location.classList = "/";  
        }, 600);
        
     

        return false;
    });
})

