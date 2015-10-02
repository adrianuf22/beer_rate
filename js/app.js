(function () {
	var beer = {},
		btn_Send = $('button[name="beer_send"]'),
		getBeer = function () {
			var beers = localStorage.getItem('beers'),
				beer = {},
				parsedBeers,
				arrayBeer;

			$('form[name="beer_form"]').validator()

			beer.name = $('input[name="beer_name"]').val();
			beer.image = $('input[name="beer_image"]').val();
			beer.price = $('input[name="beer_price"]').val();
			beer.tobuy = $('input[name="beer_tobuy"]').val();
			beer.type = $('select[name="beer_type"]').val();
			beer.country = $('select[name="beer_country"]').val();
			beer.funlevel = $('input[name="beer_funlevel"]').val();
			beer.comments = $('textarea[name="beer_comments"]').val();
			
			arrayBeer = [
				beer
			];

			if (!beers) {
				localStorage.setItem('beers', JSON.stringify(arrayBeer));
			} else {
				parsedBeers = JSON.parse(beers);
				parsedBeers.push(beer);

				localStorage.setItem('beers', JSON.stringify(parsedBeers));
			}

			addListBeer(beer);
		};

	$('form[name="beer_form"]').validator().on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			getBeer();
		}

		e.preventDefault();
	});

	var addListBeer = function (beer) {
			var row = $('<tr>');

			$('<td>').text(beer.name).appendTo(row);
			$('<td>').text(beer.type).appendTo(row);

			row.appendTo('#beers_catalog tbody');
		},
		listCatalog = function () {
			var beers = localStorage.getItem('beers'),
				parsedBeers;

			if (beers) {
				parsedBeers = JSON.parse(beers);

				for(var ix = 0; ix < parsedBeers.length; ix += 1) {
					addListBeer(parsedBeers[ix]);	
				}
			}
		};

	listCatalog();
}());
