$(document).ready(function () {


	$('.preloader').delay(1500).fadeOut(500);
	$('.counter').counterUp({
		delay: 10,
		time: 2000,
	});
	$('.counter').addClass('animated fadeInDownBig');
	$('.text-bot').addClass('animated fadeIn');
	$('#slider .owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			autoplay:true,
			autoplayTimeout:2500,
			responsive:{
				0:{
					items:3
				},
				600:{
					items:3
				},
				1036:{
					items:6
				}
			}
		})

});


$('.text-bot').addClass('animated fadeIn');
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     });
// }
var menu = false;
function clickMenuBar() {
	if (menu == false) {
		document.querySelector('.menu-content-mobile').style.opacity = 1;
		document.querySelector('.icon-menu').style.color = 'white';
		menu = true;
	} else {
		document.querySelector('.menu-content-mobile').style.opacity = 0;
		menu = false;
		document.querySelector('.icon-menu').style.color = 'black';
	}
}
// window.onscroll = function () {
// 	if (
// 		document.body.scrollTop > 100 ||
// 		document.documentElement.scrollTop > 100
// 	) {
// 		document.querySelector('.icon-menu').style.color = 'black';
// 	} else {
// 		// document.querySelector('.icon-menu').style.color = 'white';
// 	}
// };
$(function () {
	var $clientslider = $('#clientlogo');
	var clients = $clientslider.children().length;
	var clientwidth = clients * 220;
	$clientslider.css('width', clientwidth);
	var rotating = true;
	var clientspeed = 1800;
	var seeclients = setInterval(rotateClients, clientspeed);
	$(document).on(
		{
			mouseenter: function () {
				rotating = false;
			},
			mouseleave: function () {
				rotating = true;
			},
		},
		'#ourclients'
	);
	function rotateClients() {
		if (rotating != false) {
			var $first = $('#clientlogo li:first');
			$first.animate(
				{
					'margin-left': '-220px',
				},
				2000,
				function () {
					$first.remove().css({
						'margin-left': '0px',
					});
					$('#clientlogo li:last').after($first);
				}
			);
		}
	}
});

//Products

const x = document.getElementsByClassName('item');
const y = document.getElementsByClassName('content-pro');
function onclickP(e) {
	for (var i = 0; i < x.length / 2; i++) {
		if (x[i].className === 'item active') {
			x[i + 4].className = 'item hiddenn';
			x[i].className = 'item';
			y[i].className = 'content-pro';
		}
	}
	e.target.parentElement.className = 'item active';
	for (var i = 0; i < x.length / 2; i++) {
		if (x[i].className === 'item active') {
			x[i + 4].className = 'item showw';
			y[i].className = 'content-pro on-show';
			if (x[i].id === '4') {
				hanldeBackgroundId(false);
			} else {
				hanldeBackgroundId(true);
			}
		}
	}
}

function addProduct() {
	x[0].className = 'item active';
	x[4].className = 'item showw';
	y[0].className = 'content-pro on-show';
}
function removeProduct() {
	for (var i = 0; i < x.length / 2; i++) {
		if (x[i].className === 'item active') {
			x[i + 4].className = 'item hiddenn';
			x[i].className = 'item';
			y[i].className = 'content-pro';
		}
	}
}

function hanldeBackgroundId(checkId) {
	const background = document.getElementById('elip');
	if (checkId === false) {
		background.src = './img/customer/elip1.svg';
	} else {
		background.src = './img/customer/elip.svg';
	}
}


/*  home  */

const CIRCLE_NUMBER = 4;

const root = document.getElementById("home-img");
const generateCircles = () => {
  const circleContainer = document.createElement('div');
  circleContainer.classList.add('circle-container')
  for (let i = 0; i < CIRCLE_NUMBER; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    circle.style.animationDelay = `${4 * (i / CIRCLE_NUMBER)}s`;
    circleContainer.appendChild(circle);
  }

  
  root.appendChild(circleContainer);
}

generateCircles();
const mobile = document.getElementsByClassName("mobile");
// active class 
function indexClass(){
	for(var i = 0; i<mobile.length;i++){
		if(mobile[i].className === "menu-item mobile active"){
			return i;
		}
   }

}

function classActive(){
	var index = indexClass();
	switch(index){
		case 0:
			return "home";
		case 1:
			return "intro";
		case 2:
			return "solution";
		case 3:
			return "product";
		case 4:
			return "customer";
		default:		
			return "footer";		
	}
}
// menu moble


function onclickMenu(e){
	var index = indexClass();
	var activeClass = classActive();
	     if(mobile[index].className === "menu-item mobile active"){
			 mobile[index].className = "menu-item mobile";
			 mobile[index].children[1].src ="./img/customer/menucheck.svg";
	}
	e.target.parentElement.className = "menu-item mobile active";
	e.target.parentElement.children[1].src ="./img/customer/menutick.svg";
	clickMenuBar();
	
}