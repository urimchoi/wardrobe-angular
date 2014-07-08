(function() {
	var app = angular.module('wardrobe', []);

	app.controller('WardrobeController', function(){
		this.products = products;
		this.categories = categories;
	});

	app.controller('FilterController', function(){
		this.filter = '';
		this.setFilter = function(filterText){
			this.filter = filterText;
		};
		this.filterIsSet = function(filterText){
			return (this.filter === filterText);
		};
	});

	app.controller('AddController', function(){
		this.product = {};
		this.addProduct = function(product){
			products.push(this.product);
			this.product = {};
		};
	});

	var products = [
		{
			id:1,
			title:'Short-sleeve shirt in faded floral print',
			brand: 'JCrew',
			price: 20.00,
			date: new Date('7/7/2014'),
			image: 'https://s7.jcrew.com/is/image/jcrew/A4894_WO3024_m?$pdp_fs418$',
			category: 'shirt'
		},
		{
			id:2,
			title:'Jaspe cotton shirt in multi plaid',
			brand: 'JCrew',
			price: 25.00,
			date: new Date('1/4/2013'),
			image: 'https://s7.jcrew.com/is/image/jcrew/A4788_WO3519_m?$pdp_fs418$',
			category: 'shirt'
		},
		{
			id:3,
			title:'Cotton shawl-collar cardigan in nautical stripe',
			brand: 'JCrew',
			price: 108.00,
			date: new Date('1/4/2013'),
			image: 'https://s7.jcrew.com/is/image/jcrew/A9323_WN1150?$pdp_fs418$',
			category: 'sweater'
		},
		{
			id:4,
			title:'SUN-FADED CABLE COTTON SWEATER',
			brand: 'Club Monaco',
			price: 108.00,
			date: new Date('1/4/2013'),
			image: 'https://s7.jcrew.com/is/image/jcrew/A7708_SW9965_m?$pdp_fs418$',
			category: 'sweater'
		}
	];

	var categories = [
		{
			id:1,
			title: 'Shirt',
			products: [1, 2]
		},
		{
			id:2,
			title: 'Sweater',
			products: [1]
		},
		{
			id:3,
			title: 'Jacket',
			products: []
		},
		{
			id:4,
			title: 'Pants',
			products: []
		}
	];
})();
