let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
menu.addEventListener("click", function(){
    if(navbar.style.left==="100%"){
        navbar.style.left=0;
    }else{
        navbar.style.left="100%";
    }
})
const header = document.querySelector('.header');
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 140)
})
window.onscroll = () => {
    navbar.style.left="100%";
}