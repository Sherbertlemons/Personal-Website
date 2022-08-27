
var eth = document.getElementById("ethereum");

var liveprice = {
	"async": true,
	"scroosDomain": true,
	"url": "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",

	"method": "GET",
	"headers": {}
}

$.ajax(liveprice).done(function (response){
	eth.innerHTML = response.ethereum.usd;
});