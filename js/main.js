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


var Vehicles = Backbone.Collection.extend({
	model: Car
});

var vehicles = new Vehicles();

vehicles.add(new Vehicle({ registrationNumber: "XLI887", color: "Blue"}));
vehicles.add(new Vehicle({ registrationNumber: "ZNP123", color: "Blue"}));
vehicles.add(new Vehicle({ registrationNumber: "XUV456", color: "Blue"}));


// collection demo


var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs([
	new Song({ title: "I love you baby", genre: "Jazz"}),
	new Song({ title: "blue moon", genre: "Jazz"}),
    new Song({title: "Baby got back", })

	]);



