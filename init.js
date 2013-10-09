$(window).load(function() {
	if (navigator.geolocation) {
		var lat = -1;
		var lng = -1;
		var setPos = function (position) {
			lat = position.coords.latitude;
			lng = position.coords.longitude;
			$("#pos").html("Lat: "+lat + "<br />\nLng: " + lng + 
			"<br />\n<a target='_blank' href='http://maps.google.com/?q="+lat+","+lng+"'>Map</a>");
		};
		navigator.geolocation.getCurrentPosition(setPos);
		navigator.geolocation.watchPosition(setPos);
	}
	$("#notify").click(function() {
		var notification = new Notification("Titulo!", {
				icon: "images/ext.png",
				body: "Mensagem...",
				tag: "A TAG"
			}
		)
		notification.show();
	});
});
