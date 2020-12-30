const navBar = document.querySelector("#navagation");
const stick = navBar.offsetTop;

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
