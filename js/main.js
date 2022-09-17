
var eth = document.getElementById("ethereum");
var btc = document.getElementById("bitcoin");

var liveprice = {
	"async": true,
	"scroosDomain": true,
	"url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
	
	"method": "GET",
	"headers": {}
}

$.ajax(liveprice).done(function (response){
	eth.innerHTML = response.ethereum.usd;
	btc.innerHTML = response.bitcoin.usd;
});