const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'CoinMarketCapzakutynskyV1.p.rapidapi.com'
	}
};

fetch('https://coinmarketcapzakutynskyv1.p.rapidapi.com/getCryptocurrency', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));