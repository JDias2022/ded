function menuToggle () {  
    console.log("clicouu")
let menuArea = document.getElementById("menu-area");

if(menuArea.classList.contains('menu-opened') == true ) { 
    menuArea.classList.remove('menu-opened');
    menuArea.classList.add('menu-closed')
} else {
    menuArea.classList.remove('menu-closed')
    menuArea.classList.add('menu-opened')
}
}