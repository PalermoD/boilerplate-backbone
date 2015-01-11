// model demo

var Vehicle = Backbone.Model.extend({
	urlRoot: "api/vehicles",
	registrationNumber: "vehicleId",
	start: function(){
		console.log("Vehicle started")
	}
});



var Car = Vehicle.extend({
	
	start: function(){
		console.log("Car started")
	},
	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "Id it required";
	}
});

var car = new Car({
	registrationNumber: "XLI887",
	color: "blue",
	

});

car.start();


// collection demo


var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs([
	new Song({ title: "I love you baby"}),
	new Song({ title: "blue moon"}),
	new Song({title: "Baby got back"})

	]);