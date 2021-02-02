function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: { lat: 36.731, lng: 85.257 },
		mapTypeId: "satellite"
	});
/*	const ChanganMarker = new google.maps.Marker({
		position: { lat: 34.1269, lng: 108.8668 },
		map,
		title: "Chang'an",
	});
	const ChanganTxt = "<div><h2>Chang'an</h2><p>Capital of the Tang dynasty. Xuanzang leaves in 629 CE and returns in 645 CE.</p></div>";
	const ChanganInfo = new google.maps.InfoWindow({
		content: ChanganTxt,
	});
	ChanganMarker.addListener("click", () => {
		ChanganInfo.open(map, ChanganMarker);
	});
	const LiangzhouMarker = new google.maps.Marker({
		position: { lat: 37.7531, lng: 102.6325 },
		map,
		title: "Liangzhou",
	});
	const JadeGateMarker = new google.maps.Marker({
		position: { lat: 40.345383, lng: 93.7747971 },
		map,
		title: "Jade Gate",
	});
	const HamiMarker = new google.maps.Marker({
		position: { lat: 43.0190461, lng: 89.5272547 },
		map,
		title: "Hami",
	}); 
}	*/
	// The following code was taken from a StackOverflow post by user Daniel Vassallo, with some small additional modifications of my own to add a few conditional statements and a polyline.
	// You can find the original at: https://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example
	var locations = [
		["Chang'an", 34.1269, 108.8668],
		["Liangzhou", 37.7531, 102.6325],
		["Jade Gate", 40.345383, 93.7747971],
		["Hami", 43.0190461, 89.5272547],
		["Turfan", 42.4097113, 88.5198511],
		["Kucha", 41.6982831, 82.2270443],
		["Aksu", 41.0336452, 78.8144426],
		["Tokmak", 42.8168054, 75.259003],
		["Tashkent", 41.2825125, 69.1392826],
		["Samarkand", 39.6406042, 66.8278027],
		["Kunduz", 36.7110325, 68.8129928],
		["Balkh", 36.7571232, 66.8771481],
		["Bamiyan", 34.8128019, 67.7863307],
		["Kapisi", 34.9102744, 69.3234789],
		["Nagarabhara", 34.4198223, 70.4365247],
		["Peshawar", 33.9772137, 71.4253852],
	]
	
	var infowindow = new google.maps.InfoWindow();
	
	var marker, i;
	
	// Icon image is temple by AFY Studio from the Noun Project.
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: { lat: locations[i][1], lng: locations[i][2] },
			map,
			title: locations[i][0],
			icon: "temple2.png"
		});
		
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				if (locations[i][0] == "Chang'an") {
					const ChanganTxt = "<div style='width:180px;'><h3>Chang'an</h3><p>Capital of the Tang dynasty. Xuanzang leaves in 629 CE.</p></div>";
					infowindow.setContent(ChanganTxt);
					infowindow.open(map, marker);
				}
				else if (locations[i][0] == "Jade Gate") {
					const JadeGateTxt = "<div style='width:180px;'><h3>Jade Gate</h3><img src='https://upload.wikimedia.org/wikipedia/commons/e/e9/Yumenguan.jpg' title='Yumenguan (c) by Brookqi is licensed under CC BY-SA 3.0' height='106' width='160'><p>A remote outpost often considered as the western limit of the Tang dynasty.</p></div>";
					infowindow.setContent(JadeGateTxt);
					infowindow.open(map, marker);
				}
				else if (locations[i][0] == "Turfan") {
					const TurfanTxt = "<div style='width:180px;'><h3>Turfan</h3><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Turfan%2C_fiery_mountains%2C_caves%2C_Buddhist_IGP4252.jpg/1024px-Turfan%2C_fiery_mountains%2C_caves%2C_Buddhist_IGP4252.jpg' title='Turfan, fiery mountains, caves, Buddhist IGP4252 (c) by W0zny is licensed under CC BY-SA 3.0' height='106' width='160'><p>Xuanzang arrived in Turfan in 630 CE. The king was a devout Buddhist, and gave him valuable gifts, a whole retinue of servants and horses to accompany him, and most importantly, a indispensable set of letters of introduction that would help guarantee Xuanzang safe passage under the name of the king.</p></div>";
					infowindow.setContent(TurfanTxt);
					infowindow.open(map, marker);
				}				
				else {
					infowindow.setContent(locations[i][0]);
					infowindow.open(map, marker);
				}
			}
		})(marker, i));
	}
	var itinerarycoords = []
	for (i = 0; i < locations.length; i++) {
		var coords = { lat: locations[i][1], lng: locations[i][2] };
		itinerarycoords.push(coords)
	}
	
	var directionsymbol = {
		path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
		fillColor: "#ffcc00",
		fillOpacity: 0.8,
	};
	
	const itinerary = new google.maps.Polyline({
		path: itinerarycoords,
		icons: [{
		icon: directionsymbol,
		offset: "5%",
		repeat: "5%",		
	}],
		strokeColor: "#ffcc00",
		strokeOpacity: 0.8,
		strokeWeight: 5
	});
	
	itinerary.setMap(map);
}
	