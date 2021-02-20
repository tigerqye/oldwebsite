var load;
var show_navbar;
var copy;
var copy_times = 1;
var is_shown = false;

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
	var small_nava_bar = document.querySelector("#drop_down");
	small_nava_bar.style.visibility = "visible";
	small_nava_bar.classList.add("fadein_ten");
}

function copyEmail(){
	document.querySelector("#emailAddress").select();
	document.execCommand("copy");
	var copy_button = document.querySelectorAll("#email");
	if(copy_times == 1)
	{
		copy_button[0].textContent = "Copied!";
		copy_button[1].textContent = "Copied!";
	}
	else
	{
		copy_button[0].textContent = "Copied " + copy_times + "x!";
		copy_button[1].textContent = "Copied " + copy_times + "x!";
	}
	copy_times++;
	copy = setTimeout(revert, 1000);
}

function revert(){
	var copy_button = document.querySelectorAll("#email");
	copy_button[0].textContent = "Email";
	copy_button[1].textContent = "Email";
}

function show_small(){
	var small_nav = document.querySelector("#smallnavbar");
	if(is_shown){
		small_nav.style.visibility = "hidden";
		is_shown = false;
	}else{
		small_nav.style.visibility = "visible";
		is_shown = true;
	}
}
