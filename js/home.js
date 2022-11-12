function openNav() {
	document.getElementById("mySidenav").style.width = "270px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

var current_logged_in = sessionStorage.getItem("loggedIn");
console.log(current_logged_in);

document.getElementById("email").innerHTML="Welcome back<br>" + current_logged_in;