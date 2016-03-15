var prFeed = '';
var prZip;
var prLat;
var prLong;
var prTerms = false;
var addressURL;
var generalURL;
var mapURL;
var prStoreAddress;
var prBeaconFired = false;
var prBeaconValue;

function prInitAd(){
	console.log('init ad');

	document.getElementById('rollover-cta').addEventListener('click', TermsDecide);
	//document.getElementById('rollover-cta').addEventListener('mouseout', TermsExit);
	document.getElementById('cta').addEventListener('click',FrameThree);
	document.getElementById('pr-cta-clickbox').addEventListener('click',FrameThree);
	document.getElementById('frame-back').addEventListener('click',FrameBack);


	generalURL = document.getElementById('general-click').getAttribute('href');
	mapURL = document.getElementById('map-click').getAttribute('href');

	prZip = document.getElementById('pr-zip').getAttribute('zip');
	prFeed = 'http://smq.pointroll.com/clients/services/proxy/jsonproxy.ashx?proxy=http%3A%2F%2Fstripe.pointroll.com%2Fapi%2Fdata%2Fget%3Fcreativeid%3D0%26placementid%3D0%26serviceid%3D19%26zip%3D' + prZip;
	prGetFeed();
	window.setTimeout(function(){
		prCheckActive();
	},1000)
}

function prBeaconFire(){
	if(prBeaconFired == false){
		console.log('beacon fire');
		var _pixel = new Image();
		//_pixel.src = document.getElementById('general-click').getAttribute('clickpixel');
		//console.log(prBeaconValue);
		//document.getElementById('beacon-fire').src = prBeaconValue;
	}
}

function generalClick(){
	pr_trk('pc', prup, 1, 1);
	window.setTimeout(function(){
		window.open(generalURL);
	});
}

function nounClick(){
	pr_trk('pc', prup, 2, 1);
	window.setTimeout(function(){
		window.open(generalURL);
	});
}

function failsafeClick(){
	pr_trk('pc', prup, 3, 1, 'failsafe');
	window.setTimeout(function(){
		window.open(generalURL);
	});
}

function addressClick(){
	pr_trk('pc', prup, 4, 1, prStoreAddress);
	// window.setTimeout(function(){
	// 	window.open(mapURL);
	// });
}


function TermsDecide(){
	if(!prTerms){
		TermsEnter();
	}else{
		TermsExit();
	}
}

function TermsEnter(){
	document.getElementById('rollover-content').style.display = 'block';
	window.setTimeout(function(){
		document.getElementById('rollover-content').style.opacity = '1';
	},100);
	prTerms = true;
	prBeaconFire();
	prBeaconFired = true;
	//prActivity(1);
}

function TermsExit(){
	document.getElementById('rollover-content').style.opacity = '0';
	window.setTimeout(function(){
		document.getElementById('rollover-content').style.display = 'none';
	},400)
	prTerms = false;
}

function FrameBack(){
	document.getElementById('frame-2').style.margin = '0px 0px 0px 0px';
	document.getElementById('frame-3').style.margin = '300px 0px 0px 0px';
	document.getElementById('pr-clickbox').style.display = 'block';
	//prActivity(3);
}

function FrameThree(){
	//prActivity(2);	
	console.log('frame three');
	//prFeed = 'http://smq.pointroll.com/clients/services/proxy/jsonproxy.ashx?proxy=http%3A%2F%2Fstripe.pointroll.com%2Fapi%2Fdata%2Fget%3Fcreativeid%3D0%26placementid%3D0%26serviceid%3D19%26zip%3D' + prZip;
	//prGetFeed();
	prBeaconFire();
	prBeaconFired = true;
	window.setTimeout(function(){
		//prCheckActive();
		document.getElementById('pr-clickbox').style.display = 'none';
		document.getElementById('frame-2').style.margin = '-300px 0px 0px 0px';
		document.getElementById('frame-3').style.margin = '0px 0px 0px 0px';
	},200)
}

function prCheckActive(){
	if(document.getElementById('frame-map').className != 'active'){
		//prTrackActivity(100001, PRPID, prup, 0, 'failsafe');
		//prActivity(100001);
		console.log('activity 100,001 fired');
		document.getElementById('frame-results').removeEventListener('click', addressClick);
	}
}

function prGetFeed(){
	//alert('get feed');
	var prStore = document.createElement('script');
	prStore.src = prFeed;
	prStore.type = 'text/javascript';
	prStore.charset = 'utf-8';
	prStore.id = 'prStore';
	prStore.async = false;
	document.getElementsByTagName('head')[0].appendChild(prStore);
	document.getElementById('pr-failsafe').style.opacity = '1';
}

function proxyCallback(data){
	document.getElementById('pr-failsafe').style.display = 'none';
	console.log('proxy callback');
	console.log(data);
	document.getElementById('frame-map').className = 'active';
	prStoreResponse(data);
}

function proxyError(){
	//alert('error');
	console.log('proxy error');
}

var prAddress;
var prCity;
var prState;
var prZipcode;
var prDistance;

function prStoreResponse(myData){
	console.log(myData);
	document.getElementById('frame-map').style.zIndex = '2';


	if(typeof myData.xmlData == 'undefined'){
		prAddress = myData.Sheet1.Address;
	}else{
		prAddress = myData.xmlData.Sheet1[0].Address;
	}


	// if(myData.xmlData.Sheet1[0].Address){
	// 	prAddress = myData.xmlData.Sheet1[0].Address;
	// }else if(myData.xmlData.Sheet1[0].Address == undefined){
	// 	prAddress = myData.Sheet1.Address;
	// }
	console.log(prAddress);

	//var prCity = myData.xmlData.Sheet1[0].City;
	if(typeof myData.xmlData == 'undefined'){
		prCity = myData.Sheet1.City;
	}else{
		prCity = myData.xmlData.Sheet1[0].City;
	}
	console.log(prCity);

	//var prState = myData.xmlData.Sheet1[0].State;
	if(typeof myData.xmlData == 'undefined'){
		prState = myData.Sheet1.State;
	}else{
		prState = myData.xmlData.Sheet1[0].State;
	}
	console.log(prState);

	//var prZipcode = myData.xmlData.Sheet1[0].Zip;
	if(typeof myData.xmlData == 'undefined'){
		prZipcode = myData.Sheet1.Zip;
	}else{
		prZipcode = myData.xmlData.Sheet1[0].Zip;
	}
	console.log(prZipcode);

	//var prDistance = myData.xmlData.Sheet1[0].distance;
	if(typeof myData.xmlData == 'undefined'){
		prDistance = myData.Sheet1.distance;
	}else{
		prDistance = myData.xmlData.Sheet1[0].distance;
	}

	//prLat = myData.xmlData.Sheet1[0].latitude;
	if(typeof myData.xmlData == 'undefined'){
		prLat = myData.Sheet1.latitude;
	}else{
		prLat = myData.xmlData.Sheet1[0].latitude;
	}

	//prLong = myData.xmlData.Sheet1[0].longitude;
	if(typeof myData.xmlData == 'undefined'){
		prLong = myData.Sheet1.longitude;
	}else{
		prLong = myData.xmlData.Sheet1[0].longitude;
	}

	addressURL = 'https://www.google.com/maps/place/' + prAddress + ' ' + prCity + ', ' + prState + ' ' + prZipcode
	document.getElementById('title').innerHTML = 'Cricket Wireless';
	document.getElementById('address-content').innerHTML = prAddress + '<br />' + prCity + ', ' + prState + ' ' + prZipcode;
	document.getElementById('miles').innerHTML = prDistance.substring(0,3);
	var distanceCharacters = prDistance.substring(0, prDistance.indexOf('.'));
	console.log(distanceCharacters);
	console.log(distanceCharacters.length);
	if(distanceCharacters.length == 2){
		document.getElementById('miles').innerHTML = prDistance.substring(0,4);
		document.getElementById('miles').style.margin = '6px 0px 0px -6px'
	}
	prStoreAddress = prAddress + ' ' + prCity + ', ' + prState + ' ' + prZipcode;
	//prTrackActivity(100002, PRPID, prup, 0, prStoreAddress);
	pr_initIFrame();
}

function pr_initIFrame() {
	var pr_mapSrc = document.getElementById("frame-map").getAttribute("prmapsrc");
	if(pr_mapSrc.indexOf("$")!=-1) {
		pr_mapSrc = "http://speed.pointroll.com/PointRoll/Media/Asset/AIOWireless/180288/PrMap_container.html";
	}
	document.getElementById("pr_cricket_iframe").setAttribute("src", pr_mapSrc + "?mylat=" + prLat + "&mylon=" + prLong);
}