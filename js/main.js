const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '395c6962-00be-4ba1-b7a3-f37afd2497c9',
		'X-RapidAPI-Host': 'CoinMarketCapzakutynskyV1.p.rapidapi.com'
	}
};

fetch('https://coinmarketcapzakutynskyv1.p.rapidapi.com/getCryptocurrency', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));