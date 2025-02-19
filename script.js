navbar = document.querySelector(".navbar");
window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 0) {
        navbar.classList.add('defilé');
    }else{
        navbar.classList.remove('defilé');
    }

})

