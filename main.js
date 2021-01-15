const navBar = document.querySelector("#navagation");
const stick = navBar.offsetTop;
var load;
var fade;

window.onscroll = function() {whenScroll()};

function whenScroll(){
	if(window.pageYOffset > stick){
		navBar.classList.add("sticky")
	} else {
		navBar.classList.remove("sticky");
	}
}

function toTop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function copyEmail(){
	document.querySelector("#emailAddress").select();
	document.execCommand("copy");
	alert("Email Copied Successfully!")
}

function preload(){
	fade = setTimeout(fadeaway, 1000);
	load = setTimeout(show, 3000);
}

function fadeaway(){
	var loading = document.querySelector("#loader");
	loading.classList.add("fadeOut")
}

function show(){
	var containers = document.querySelectorAll(".container, .withbackground");
	var i;
	for(i = 0; i < containers.length; i++)
	{
		containers[i].style.display = "block";
	}
	document.querySelector("#loader").style.display = "none";
}
