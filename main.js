var load;
var show_navbar;

function preload(){
	load = setTimeout(to_navbar, 2000);
}

function to_navbar(){
	var nav = document.querySelector("#header");
	nav.classList.remove("fadeinwhite")
	nav.classList.add("navbar");
	show_navbar = setTimeout(show_nav, 2000);
}

function show_nav(){
	var nava_bar = document.querySelector("#navagation");
	nava_bar.style.visibility = "visible";
	nava_bar.classList.add("fadein");
}

function copyEmail(){
	document.querySelector("#emailAddress").select();
	document.execCommand("copy");
	alert("Email Copied to Clipboad");
}
