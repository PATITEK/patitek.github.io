
var menu=false;
function clickMenuBar(){
    if(menu==false)
    {
        document.querySelector('.menu-content-mobile').style.opacity = 1;
        menu=true;
        document.querySelector(".icon-menu").style.color = "white";
    }
    else{
        
        document.querySelector('.menu-content-mobile').style.opacity = 0;
        menu=false;
        document.querySelector(".icon-menu").style.color = "black";
        
    }

}
window.onscroll = function () {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        document.querySelector(".icon-menu").style.color="black";
        
    } else {
        document.querySelector(".icon-menu").style.color = "white";
    }
};