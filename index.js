$(".preloader").delay(1500).fadeOut(500);
$(".counter").counterUp({
	delay: 10,
	time: 2000,
});
$(".counter").addClass("animated fadeInDownBig");
$(".text-bot").addClass("animated fadeIn");
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
		document.querySelector(
			".menu-content-mobile"
		).style.opacity = 1;
		menu = true;
		document.querySelector(".icon-menu").style.color = "white";
	} else {
		document.querySelector(
			".menu-content-mobile"
		).style.opacity = 0;
		menu = false;
		document.querySelector(".icon-menu").style.color = "black";
	}
}
window.onscroll = function () {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		document.querySelector(".icon-menu").style.color = "black";
	} else {
		document.querySelector(".icon-menu").style.color = "white";
	}
};
$(function () {
	var $clientslider = $("#clientlogo");
	var clients = $clientslider.children().length;
	var clientwidth = clients * 220;
	$clientslider.css("width", clientwidth);
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
		"#ourclients"
	);
	function rotateClients() {
		if (rotating != false) {
			var $first = $("#clientlogo li:first");
			$first.animate(
				{
					"margin-left": "-220px",
				},
				2000,
				function () {
					$first.remove().css({
						"margin-left":
							"0px",
					});
					$(
						"#clientlogo li:last"
					).after($first);
				}
			);
		}
	}
});

//Products

const x = document.getElementsByClassName("item");
const y = document.getElementsByClassName("content-pro");
function onclickP(e) {
	for (var i = 0; i < x.length / 2; i++) {
		if (x[i].className === "item active") {
			x[i + 4].className = "item hiddenn";
			x[i].className = "item";
			y[i].className = "content-pro";
		}
	}
	e.target.parentElement.className = "item active";
	for (var i = 0; i < x.length / 2; i++) {
		if (x[i].className === "item active") {
			x[i + 4].className = "item showw";
			y[i].className = "content-pro on-show";
		}
	}
}
var checkAuto = false;
function autoPlay() {
	checkAuto = !checkAuto;
	if (checkAuto)
		document.getElementById("modal").style.width = "1366px";
	else closeYoutube();
}

function closeYoutube() {
	document.getElementById("modal").style.width = "0";
}

function addProduct() {
	x[0].className = "item active";
	x[4].className = "item showw";
	y[0].className = "content-pro on-show";
}
function removeProduct() {
	for (var i = 0; i < x.length / 2; i++) {
		if (x[i].className === "item active") {
			x[i + 4].className = "item hiddenn";
			x[i].className = "item";
			y[i].className = "content-pro";
		}
	}
}
