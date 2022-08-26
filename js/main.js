const encodedParams = new URLSearchParams();
encodedParams.append("id", "1");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '755eec32bbmsh511028bc83d44afp17d90djsn0fd2750c913f',
		'X-RapidAPI-Host': 'CoinMarketCapzakutynskyV1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://coinmarketcapzakutynskyv1.p.rapidapi.com/getCryptocurrency', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));