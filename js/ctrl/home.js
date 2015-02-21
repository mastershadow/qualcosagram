define(['app', 'jquery', 'sorci', 'moment'], function (app, jQuery, sorci, moment) {
	var randomKey = function() {
		var keys = Object.keys(sorci.grams);
		return keys[keys.length * Math.random() << 0];
	}

    app.controller('HomeCtrl', function ($scope, $routeParams, $location) {
    	var key = $routeParams.qualegram || randomKey();

    	var data = sorci.grams[key];

    	if (data == null) {
    		key = randomKey()
			data = sorci.grams[key];
    	}

        $scope.title = key;
        $scope.message = data.message;
        $scope.url = window.location.origin;

        // backdrop
        var bg = sorci.backdrops[data.backdrop[0]] || 'images/road2.jpg';
		jQuery.backstretch(bg);

        // counter
		var endDate = moment("2015-05-20T01:32:21.000Z").add(Math.round(Math.random() * 7), "days").subtract(Math.round(Math.random() * 2), "months").toDate();
		jQuery('.countdown.simple').countdown({ date: endDate });
		jQuery('.countdown.styled').countdown({
		  date: endDate,
		  render: function(data) {
			jQuery(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
		  }
		});

    });

});
