$('header .navbar-nav li.nav-item' ).click(function(){
    var menuActive = $(this).attr("data-active");
    localStorage.setItem("menuActive",menuActive);
    setMenuActive();
})

function setMenuActive(){
    var tabActive = localStorage.getItem("menuActive");
    if(tabActive == null){
        localStorage.getItem("menuActive",1);
        tabActive = 1;
    }
    $('header .navbar-nav li.nav-item' ).each(function(){
        $(this).removeClass("active");
        let tab = $(this).attr("data-active");
        if(tab == tabActive){
            $(this).addClass("active");
        }
    })
}

setMenuActive();