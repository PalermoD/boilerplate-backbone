var Animal = Backbone.Model.extend({
	walk: function(){
		console.log("animal walking . . .")
	}
});



var Dog= Animal.extend({
	walk: function(){
		console.log("dog is walking")
	}
});

var dog = new Dog();

dog.walk();