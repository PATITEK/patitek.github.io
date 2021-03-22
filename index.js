$('.counter').counterUp({
    delay: 10,
    time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('.text-bot').addClass('animated fadeIn');
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
$(function () {
    
    var $clientslider = $('#clientlogo');
    var clients = $clientslider.children().length;
    var clientwidth = (clients * 220);
    $clientslider.css('width', clientwidth);
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);
    $(document).on({
        mouseenter: function () {
            rotating = false;
        },
        mouseleave: function () {
            rotating = true;
        },
        
        
    }, '#ourclients');
    function rotateClients() {
        if (rotating != false) {
            var $first = $('#clientlogo li:first');
            $first.animate({
                'margin-left': '-220px'
            }, 2000, function () {
                $first.remove().css({
                    'margin-left': '0px'
                });
                $('#clientlogo li:last').after($first);
            });
        }
    }
    
});
