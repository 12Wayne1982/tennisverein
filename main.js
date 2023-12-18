// universell
    function closeMenusOpenMenu(CLASS_NavMenu, ID_NavMenu){
        // Alle Elmennte der Klasse sind display: none, außer...
        let classNavMenu = document.getElementsByClassName(CLASS_NavMenu);
        for (i = 0; i < classNavMenu.length; i = i + 1) {
            classNavMenu[i].style.display = "none";
        }
        // ...außer das Element mit folgender ID.
        document.getElementById(ID_NavMenu).style.display = "block";
    }

// speziell für DESKTOP
    function closeMenusDESKTOP(CLASS_NavMenu){
        let i;
        let x = document.getElementsByClassName(CLASS_NavMenu);
            for (i = 0; i < x.length; i = i + 1) {
                x[i].style.display = "none";
            }
    }

    function openCloseBanner(ID_Banner, ID_Logo){
        let banner = document.getElementById(ID_Banner);
        let logo = document.getElementById(ID_Logo);

        logo.addEventListener('mouseover', () =>{
            closeMenusDESKTOP('nav-menu');
            banner.style.display = "block"; 
        })

        logo.addEventListener('mouseout', () =>{
            banner.style.display = "none"; 
        }) 
    }

    function squareBorder(ID_Button, ID_NavMenu){
        let button = document.getElementById(ID_Button);
        let navMenu = document.getElementById(ID_NavMenu);

        button.addEventListener('mouseover', () =>{
            // Add show-menu class to nav menu
            navMenu.className = "nav-menu squareBorder";
        })

        button.addEventListener('mouseout', () =>{
            // Add show-menu class to nav menu
            navMenu.className = "nav-menu";
        })
    }

// Speziell für TABLET und HANDY
// function openMenuMOBILE(ID_NavMenu){
//     var x = document.getElementById(ID_NavMenu);
//     x.style.display = "block";

//     var y = document.getElementById("hamburgerIcon");
//     y.style.display = "none";

//     var z = document.getElementById("closeIcon");
//     z.style.display = "block";
// }

function closeMenusMOBILE(CLASS_NavMenu){
    let classNavMenu = document.getElementsByClassName(CLASS_NavMenu);
    for (i = 0; i < classNavMenu.length; i++){
        classNavMenu[i].classList.remove('show-menu');
    }

    // Burger-Icon taucht danach wieder auf.
    let menuIconWrapper = document.getElementById('menu-icon-wrapper');
    menuIconWrapper.classList.remove('show-icon');
        
}

const openMenuMOBILE = (toggleId, navId) =>{
    
    let navMenuMobile = document.getElementsByClassName('nav-menu-MOBILE');
    
    // let mainMenu = document.getElementById('main-menu');
    let navMenulevel2 = document.getElementsByClassName('nav-menu-level-2');
    let navMenulevel3 = document.getElementsByClassName('nav-menu-level-3-MOBILE');

    let toggle = document.getElementById(toggleId);
    let nav = document.getElementById(navId);

    toggle.classList.toggle('show-icon')
    nav.classList.toggle('show-menu')

    for (i = 0; i < navMenulevel2.length; i++){
        if(navMenulevel2[i].className == 'nav-menu-level-2 nav-menu-MOBILE show-menu'){
            for (i = 0; i < navMenuMobile.length; i++){
                    navMenuMobile[i].classList.remove('show-menu');
                    }
        }
    }

    for (i = 0; i < navMenulevel3.length; i++){
        if(navMenulevel3[i].className == 'nav-menu-level-3-MOBILE nav-menu-MOBILE show-menu'){
            for (i = 0; i < navMenuMobile.length; i++){
                    navMenuMobile[i].classList.remove('show-menu');
                    }
        }
    }
 }
 

 function closeMenusOpenMenuMOBILE(CLASS_NavMenu, ID_NavMenu){

    let classNavMenu = document.getElementsByClassName(CLASS_NavMenu);
    let idNavMenu = document.getElementById(ID_NavMenu);


    // Alle Elemente der Klasse .nav-menu werden geschlossen
    for (i = 0; i < classNavMenu.length; i++){
        classNavMenu[i].classList.remove('show-menu');
    }

    // ...außer das Element mit folgender ID.
    idNavMenu.classList.toggle('show-menu');
}