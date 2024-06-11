function clickBurguer(){
    let menuBurguer = document.querySelector('.menuBurguer');
    if(menuBurguer.style.display == 'block'){
        menuBurguer.style.display = 'none';
    } else{
        menuBurguer.style.display = 'block';
    }
}