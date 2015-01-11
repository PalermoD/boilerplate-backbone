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