  var map;
  function initializeGMap() {
	 if(typeof(Storage)!=="undefined") 
	 { 
	 if(localStorage.gps){
	 var gps = localStorage.gps;
	 } 
	else{
	var gps="+40.5131582,-3.3505356";
	}
	}
  var gps = gps.split(",");
  var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles,{name: "Parras-Peréz"});
  var Centre = new google.maps.LatLng(parseFloat(gps[0]),parseFloat(gps[1]));
  var mapOptions = {  zoom: 14, center: Centre,  mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }};
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);	
  var developersNote = new google.maps.LatLng(parseFloat(gps[0]),parseFloat(gps[1]));
  var marker = new google.maps.Marker({
    position: developersNote,
    map: map,
	});

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

function gourl(){
if(typeof(Storage)!=="undefined") 
	 { 
	 if(localStorage.gps){
	 var gps = localStorage.gps;
	 } 
	else{
	var gps="";
	}
	}
  gp1="http://www.google.es/maps?q="+gps;
  window.open(gp1);
}