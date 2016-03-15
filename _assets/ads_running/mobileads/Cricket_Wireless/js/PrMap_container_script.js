pr_checkLoaded();

function pr_checkLoaded(){
   if (document.getElementById("pr_cricket_iframe_map")){
      pr_onIFrameLoaded();
   } else {
      setTimeout(function(){
         pr_checkLoaded();
      }, 250);
   }
}

var myLat;
var myLong;
var pr_storeMap;
var pr_GooglePin;
var pr_storeDirectionsDisplay;
var pr_storeDirectionsService;

function pr_onIFrameLoaded() {
	var js3=document.createElement("script");
	js3.id="pr-script-map";
	js3.src="http://speed.pointroll.com/PointRoll/Media/Asset/AIOWireless/180288/PrMap_min.js";
	js3.onload=pr_onMapResponse;
	document.getElementsByTagName("head")[0].appendChild(js3);
  
	var pr_scrapeURL = document.URL;
 	pr_scrapeURL = pr_scrapeURL.slice(pr_scrapeURL.indexOf("?") + 1, pr_scrapeURL.length);
	var dataArray = pr_scrapeURL.split("&");
	var tempArray;
	for(var i=0;i<dataArray.length; i++) {
		tempArray = dataArray[i].split("=");
		window[tempArray[0]] = tempArray[1];
		switch(tempArray[0]) {
			case "mylat" :
				myLat = tempArray[1];
				break;
			case "mylon" :
				myLong = tempArray[1];
				break;
		}
	}
}

function pr_onMapResponse() {
	console.log("pr_onMapResponse");
	pr_storeMap = new PrMap(document.getElementById('pr_cricket_iframe_map'), myLat,  myLong, 14, 'pr_onMapReady');
	pr_storeMap.disableDefaultUI = true;
	//pr_storeMap.positionControlEnabled = true;
}

function pr_onMapReady() {
	console.log('map ready');
	window.setTimeout(function(){
		pr_storeMap.createMarkerAt(myLat, myLong, 'Cricket Wireless', 'http://speed.pointroll.com/PointRoll/Media/Asset/AIOWireless/180288/pin_map.png', 'Cricket Wireless');
	},100);
	//pr_storeMap.fitAllMarkers();
	pr_storeDirectionsService = new google.maps.DirectionsService();
	pr_storeDirectionsDisplay = new google.maps.DirectionsRenderer();
}
