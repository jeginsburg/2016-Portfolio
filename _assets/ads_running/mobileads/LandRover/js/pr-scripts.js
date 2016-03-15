//10-22-14

//ac variables
var prWeatherOn;
var LRLabel;
var prZip = '19119';
var prTemperature;
var prCity;
var prState;
var prWeatherCondition;
var prModel;//rre
var prColor = 'fujiwhite';
var prImages = new Array();
var prNoWheels;
var prFirstTimeColor = 'yes';
var prFirstTimeWheel = 'yes';

var LRImage1;
var LRModelName;
var LROffer;
var LRLegal;
var LRCopy1;
var LREndFrame;
var LRTagline;
var LRUrl;

var isMobile;

function prAssignValues(){
	LRModelName = 'Range Rover Sport';
	prModel = 'rrs'

	console.log(prModel);
	LROffer = 'From $63,350<sup>*</sup>';
	LRLegal = '<sup>*</sup>"All prices shown are Manufacturer’s Suggested Retail Price. Excludes $925 destination/handling charge, tax, title, license, and retailer fees, all due at signing, and optional equipment. Retailer price, terms and vehicle availability may vary. Vehicle may vary from image shown. See your local authorized Land Rover Retailer for details. © 2015 Jaguar Land Rover North America, LLC.';
	LRCopy1 = 'swift is rarely so strong';

	LRTagline = 'Explore';
	LRUrl = 'http://www.landroverusa.com/index.html';
	console.log('LRUrl - ' + LRUrl);

	if(prModel == 'rre'){
		prNoWheels = 3;
	}else if(prModel == 'rr'){
		prNoWheels = 2;
	}else if(prModel == 'rrs'){
		prNoWheels = 4;
	}else if(prModel == 'lr4'){
		prNoWheels = 5;
	}
}

function prGetWeather(){
	var prWeatherFeed = document.createElement('script');
	prWeatherFeed.src = 'http://smq.pointroll.com/clients/landrover/2014/cwlookup.ashx?callback=weatherCallback&zip=' + prZip;
	prWeatherFeed.type = 'text/javascript';
	prWeatherFeed.charset = 'utf-8';
	prWeatherFeed.async = false;
	document.getElementsByTagName('head')[0].appendChild(prWeatherFeed);
}

function weatherCallback(data){
	console.log(data);
	prWeatherCondition = data.lr2014.condition;
	//prWeatherCondition = 'cloudy';
	prWeatherCondition = 'sun';
	//prWeatherCondition = 'snow';
	//prWeatherCondition = 'rain';

	prTemperature = data.lr2014['@actualtemp'];
	prTemperature = prTemperature.substring(0, prTemperature.indexOf('.'));
	prCity = data.lr2014.city;
	prState = data.lr2014.state;
	prSetWeatherContent();
}

function prSetWeatherContent(){
	console.log('setting weather content');

	if(prWeatherCondition == 'cloudy' || prWeatherCondition == 'CLOUDY'){
		//do nothing
	}else{
		var prLocationDiv = document.createElement('div');
		prLocationDiv.id = 'pr-location-div';
		prLocationDiv.innerHTML = prCity + ", <span style='text-transform:uppercase'>" + prState + "</span> &nbsp;&nbsp;" + prTemperature + "&deg";
		document.getElementById('pr-panel-wrapper').appendChild(prLocationDiv);

		var prTemperatureIcon = document.createElement('div');
		prTemperatureIcon.id = 'pr-temperature-icon';
		prTemperatureIcon.style.background = 'url(images/weathericon-' + prWeatherCondition + '.png)';
		prTemperatureIcon.style.backgroundSize = 'contain';
		document.getElementById('pr-panel-wrapper').appendChild(prTemperatureIcon);
	}
}

function prInitAd(){
	console.log('init ad');

	// document.getElementById('prf' + PRPID).style.left = '50%';
	// document.getElementById('prf' + PRPID).style.marginLeft = '-270px';


	isMobile = document.getElementById('pr-general-click').getAttribute('creativetype');
	prImpID = document.getElementById('pr-general-click').getAttribute('prImpID');
	prAssignValues();
	prGetWeather();

	prSetWheels(prNoWheels);

	document.getElementById('pr-panel-carbody-santoriniblack').style.opacity = '0';
	document.getElementById('pr-panel-carbody-loireblue').style.opacity = '0';
	document.getElementById('pr-panel-carbody-fujiwhite').style.opacity = '0';
	document.getElementById('pr-panel-carbody-firenzered').style.opacity = '0';
	document.getElementById('pr-panel-carbody-orkneygrey').style.opacity = '0';
	document.getElementById('pr-panel-carbody-corrisgrey').style.opacity = '0';
	document.getElementById('pr-panel-carbody-chilered').style.opacity = '0';
	document.getElementById('pr-panel-carbody-aleutiansilver').style.opacity = '0';
	document.getElementById('pr-panel-carbody-indussilver').style.opacity = '0';

	prSetColors(prModel);

	//prSetWeatherContent();

	//alert(isMobile);
	if(isMobile == 'wap'){
		document.getElementById('pr-panel-close').style.display = 'none';
		//document.getElementById('pr-panel-close').addEventListener('click', prClose);
	}else{
		document.getElementById('pr-panel-close').style.display = 'none';
	}

	prWeatherCondition = 'sun';

	document.getElementById('pr-panel-wrapper').style.background = 'url(images/pr-panel-bg-' + prWeatherCondition + '.jpg)';
	document.getElementById('pr-panel-wrapper').style.backgroundSize = 'contain';

	document.getElementById('pr-panel-exterior-btn').addEventListener('click', prExteriorClick);
	document.getElementById('pr-panel-wheels-btn').addEventListener('click', prWheelsClick);
	document.getElementById('pr-panel-legal-cta').addEventListener('click', prLegalEnter);
	document.getElementById('pr-legal-close').addEventListener('click', prLegalExit);

	document.getElementById('pr-panel-cta').addEventListener('click', prGeneralClick);
	document.getElementById('pr-panel-logo').addEventListener('click', prLogoClick);

	//document.getElementById('pr_panel_BTN').addEventListener('click', prGeneralClick);
	//document.getElementById('pr_panel_cta_BTN').addEventListener('click', prCTAClick);

	prPreloadImages();
	prExteriorSelect('fujiwhite');

	if(prModel == 'lr4'){
		prWheelSelect(3);
	}else{
		prWheelSelect(1);
	}

	prExteriorClick();
	prWheelsClick();

	window.setTimeout(function(){
		document.getElementById('pr-panel-tagline').style.opacity = '1';
		document.getElementById('pr-panel-tagline').style.margin = '10px 0px 0px 10px';
		document.getElementById('pr-panel-tagline').innerHTML = LRCopy1;

		document.getElementById('pr-panel-model').style.opacity = '1';
		document.getElementById('pr-panel-model').style.margin = '27px 0px 0px 10px';
		document.getElementById('pr-panel-model').innerHTML = LRModelName;

		document.getElementById('pr-panel-price').style.opacity = '1';
		document.getElementById('pr-panel-price').style.margin = '45px 0px 0px 10px';
		document.getElementById('pr-panel-price').innerHTML = LROffer;

		document.getElementById('pr-panel-cta').style.opacity = '1';
		document.getElementById('pr-panel-cta').style.margin = '70px 0px 0px 16px';
		document.getElementById('pr-panel-cta').innerHTML = "<div id='panel-arrow'></div>" + LRTagline;
	},2000)

	if(prWeatherCondition == 'rain' || prWeatherCondition == 'RAIN'){
		document.getElementById('panel-arrow').style.background = 'url(images/banner-arrow-white.png)';
		document.getElementById('panel-arrow').style.backgroundSize = 'contain';
	}
}

function prSetWheels(noWheels){
	console.log(noWheels);
	console.log(prModel);

	//alert(prModel);

	for(var i = 1; i < noWheels + 1; i++){
		document.getElementById('pr-wheels-' + i).style.opacity = '1';
		//document.getElementById('pr-wheels-' + i).addEventListener('click', function(){prWheelSelect(i)});
		console.log('wheel ' + i);
	}
	//alert('through loop');

	if(prModel == 'rre'){
		document.getElementById('pr-wheels-1').style.background = 'url(images/rre-wheel-4.png)';
		document.getElementById('pr-wheels-1').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-2').style.background = 'url(images/rre-wheel-5.png)';
		document.getElementById('pr-wheels-2').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-3').style.background = 'url(images/rre-wheel-5.png)';
		document.getElementById('pr-wheels-3').style.backgroundSize = 'contain';

		document.getElementById('pr-panel-tires-1').style.opacity = '0';
		document.getElementById('pr-panel-tires-1').style.background = 'url(images/' + prModel + '-carwheels-1.png)';
		document.getElementById('pr-panel-tires-1').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-2').style.opacity = '0';
		document.getElementById('pr-panel-tires-2').style.background = 'url(images/' + prModel + '-carwheels-2.png)';
		document.getElementById('pr-panel-tires-2').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-3').style.opacity = '0';
		document.getElementById('pr-panel-tires-3').style.background = 'url(images/' + prModel + '-carwheels-3.png)';
		document.getElementById('pr-panel-tires-3').style.backgroundSize = 'contain';

		document.getElementById('pr-wheels-1').addEventListener('click', function(){prWheelSelect(1)});
		document.getElementById('pr-wheels-2').addEventListener('click', function(){prWheelSelect(2)});
		document.getElementById('pr-wheels-3').addEventListener('click', function(){prWheelSelect(3)});
	}else if(prModel == 'rr'){
		document.getElementById('pr-wheels-1').style.background = 'url(images/rr-wheel-1.png)';
		document.getElementById('pr-wheels-1').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-2').style.background = 'url(images/rr-wheel-2.png)';
		document.getElementById('pr-wheels-2').style.backgroundSize = 'contain';

		document.getElementById('pr-panel-tires-1').style.opacity = '0';
		document.getElementById('pr-panel-tires-1').style.background = 'url(images/' + prModel + '-carwheels-1.png)';
		document.getElementById('pr-panel-tires-1').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-2').style.opacity = '0';
		document.getElementById('pr-panel-tires-2').style.background = 'url(images/' + prModel + '-carwheels-2.png)';
		document.getElementById('pr-panel-tires-2').style.backgroundSize = 'contain';

		document.getElementById('pr-wheels-1').addEventListener('click', function(){prWheelSelect(1)});
		document.getElementById('pr-wheels-2').addEventListener('click', function(){prWheelSelect(2)});
	}else if(prModel == 'rrs'){
		document.getElementById('pr-wheels-1').style.background = 'url(images/rrs-wheel-1.png)';
		document.getElementById('pr-wheels-1').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-2').style.background = 'url(images/rrs-wheel-2.png)';
		document.getElementById('pr-wheels-2').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-3').style.background = 'url(images/rrs-wheel-3.png)';
		document.getElementById('pr-wheels-3').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-4').style.background = 'url(images/rrs-wheel-4.png)';
		document.getElementById('pr-wheels-4').style.backgroundSize = 'contain';

		document.getElementById('pr-panel-tires-1').style.opacity = '0';
		document.getElementById('pr-panel-tires-1').style.background = 'url(images/' + prModel + '-carwheels-1.png)';
		document.getElementById('pr-panel-tires-1').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-2').style.opacity = '0';
		document.getElementById('pr-panel-tires-2').style.background = 'url(images/' + prModel + '-carwheels-2.png)';
		document.getElementById('pr-panel-tires-2').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-3').style.opacity = '0';
		document.getElementById('pr-panel-tires-3').style.background = 'url(images/' + prModel + '-carwheels-3.png)';
		document.getElementById('pr-panel-tires-3').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-4').style.opacity = '0';
		document.getElementById('pr-panel-tires-4').style.background = 'url(images/' + prModel + '-carwheels-4.png)';
		document.getElementById('pr-panel-tires-4').style.backgroundSize = 'contain';

		document.getElementById('pr-wheels-1').addEventListener('click', function(){prWheelSelect(1)});
		document.getElementById('pr-wheels-2').addEventListener('click', function(){prWheelSelect(2)});
		document.getElementById('pr-wheels-3').addEventListener('click', function(){prWheelSelect(3)});
		document.getElementById('pr-wheels-4').addEventListener('click', function(){prWheelSelect(4)});
	}else if(prModel == 'lr4'){
		document.getElementById('pr-wheels-1').style.background = 'url(images/lr4-wheel-1.png)';
		document.getElementById('pr-wheels-1').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-2').style.background = 'url(images/lr4-wheel-2.png)';
		document.getElementById('pr-wheels-2').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-3').style.background = 'url(images/lr4-wheel-3.png)';
		document.getElementById('pr-wheels-3').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-4').style.background = 'url(images/lr4-wheel-4.png)';
		document.getElementById('pr-wheels-4').style.backgroundSize = 'contain';
		document.getElementById('pr-wheels-5').style.background = 'url(images/lr4-wheel-5.png)';
		document.getElementById('pr-wheels-5').style.backgroundSize = 'contain';

		document.getElementById('pr-panel-tires-1').style.opacity = '0';
		document.getElementById('pr-panel-tires-1').style.background = 'url(images/' + prModel + '-carwheels-1.png)';
		document.getElementById('pr-panel-tires-1').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-2').style.opacity = '0';
		document.getElementById('pr-panel-tires-2').style.background = 'url(images/' + prModel + '-carwheels-2.png)';
		document.getElementById('pr-panel-tires-2').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-3').style.opacity = '0';
		document.getElementById('pr-panel-tires-3').style.background = 'url(images/' + prModel + '-carwheels-3.png)';
		document.getElementById('pr-panel-tires-3').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-4').style.opacity = '0';
		document.getElementById('pr-panel-tires-4').style.background = 'url(images/' + prModel + '-carwheels-4.png)';
		document.getElementById('pr-panel-tires-4').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-tires-5').style.opacity = '0';
		document.getElementById('pr-panel-tires-5').style.background = 'url(images/' + prModel + '-carwheels-5.png)';
		document.getElementById('pr-panel-tires-5').style.backgroundSize = 'contain';

		document.getElementById('pr-wheels-1').addEventListener('click', function(){prWheelSelect(1)});
		document.getElementById('pr-wheels-2').addEventListener('click', function(){prWheelSelect(2)});
		document.getElementById('pr-wheels-3').addEventListener('click', function(){prWheelSelect(3)});
		document.getElementById('pr-wheels-4').addEventListener('click', function(){prWheelSelect(4)});
		document.getElementById('pr-wheels-5').addEventListener('click', function(){prWheelSelect(5)});
	}
}

function prGeneralClick(){
	var prURL = document.getElementById('pr-general-click').getAttribute('href');
	console.log(prURL);
	pr_trk('pc', prup, 1, 1);
    //var beaconTrack = 'http://clk.pointroll.com/pc/?p=' + prup + '&c=1&i=' + prImpID + '&clickurl=' + prURL;
	window.setTimeout(function(){
		admob.opener.openUrl(prURL);
	},100);
}

function prCTAClick(){
	var prURL = document.getElementById('pr-general-click').getAttribute('href');
	console.log(prURL);
	pr_trk('pc', prup, 1, 1);
    //var beaconTrack = 'http://clk.pointroll.com/pc/?p=' + prup + '&c=1&i=' + prImpID + '&clickurl=' + prURL;
	window.setTimeout(function(){
		admob.opener.openUrl(prURL);
	},100);
}

function prLogoClick(){
	var prURL = document.getElementById('pr-general-click').getAttribute('href');
	console.log(prURL);
	pr_trk('pc', prup, 2, 1);
    //var beaconTrack = 'http://clk.pointroll.com/pc/?p=' + prup + '&c=1&i=' + prImpID + '&clickurl=' + prURL;
	window.setTimeout(function(){
		admob.opener.openUrl(prURL);
	},100);
}

function prPreLoad(){
	for (i = 0; i < prPreLoad.arguments.length; i++) {
		prImages[i] = new Image()
		prImages[i].src = prPreLoad.arguments[i]
		prImages[i].onLoad = function(){
			console.log('image loaded');
		}
	}	
}

function prPreloadImages(){
	console.log('preloading images');
	prPreLoad(
		"images/" + prModel + "-carbody-santoriniblack.png",
		// "images/" + prModel + "-carbody-loireblue.png",
		// "images/" + prModel + "-carbody-orkneygrey.png",
		"images/" + prModel + "-carbody-fujiwhite.png",
		// "images/" + prModel + "-carbody-firenzered.png",
		"images/" + prModel + "-carbody-chilered.png",
		"images/" + prModel + "-carbody-corrisgrey.png",
		"images/" + prModel + "-carbody-indussilver.png",
		"images/" + prModel + "-carwheels-1.png",
		"images/" + prModel + "-carwheels-2.png",
		"images/" + prModel + "-carwheels-3.png",
		"images/" + prModel + "-carwheels-4.png"
		// "images/" + prModel + "-carwheels-5.png"
	)
	console.log('done preloading');
}

function prLegalEnter(){
	document.getElementById('pr-panel-legal').style.opacity = '1';
	document.getElementById('pr-panel-legal').style.margin = '0px 0px 0px 0px';
	document.getElementById('pr-legal-content').innerHTML = '<br /><br />' + LRLegal + '<br /><br /> TAP ANYWHERE TO CLOSE';
	document.getElementById('pr-legal-content').addEventListener('click', prLegalExit);

	document.getElementById('pr-panel-legal-cta').style.zIndex = '15';
	document.getElementById('pr-panel-legal-cta').style.margin = '200px 0px 0px 350px';
	document.getElementById('pr-panel-legal-cta').innerHTML = "*legal <";//<div id='legal-arrow'></div>

	document.getElementById('pr-panel-close').style.zIndex = '0';

	//prActivity(13);
}

function prLegalExit(){
	document.getElementById('pr-panel-legal').style.opacity = '0';
	document.getElementById('pr-panel-legal').style.margin = '0px 0px 0px -400px';

	document.getElementById('pr-panel-legal-cta').innerHTML = '*legal >';
	document.getElementById('pr-panel-legal-cta').style.margin = '200px 0px 0px 5px';

	document.getElementById('pr-panel-close').style.zIndex = '10';

	//prActivity(14);
}

function prSetColors(model){
	if(model == 'rre'){
		document.getElementById('pr-panel-carbody-santoriniblack').style.background = 'url(images/' + prModel + '-carbody-santoriniblack.png)';
		document.getElementById('pr-panel-carbody-santoriniblack').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-loireblue').style.background = 'url(images/' + prModel + '-carbody-loireblue.png)';
		document.getElementById('pr-panel-carbody-loireblue').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-fujiwhite').style.background = 'url(images/' + prModel + '-carbody-fujiwhite.png)';
		document.getElementById('pr-panel-carbody-fujiwhite').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-firenzered').style.background = 'url(images/' + prModel + '-carbody-firenzered.png)';
		document.getElementById('pr-panel-carbody-firenzered').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-corrisgrey').style.background = 'url(images/' + prModel + '-carbody-corrisgrey.png)';
		document.getElementById('pr-panel-carbody-corrisgrey').style.backgroundSize = 'contain';
	}else if(model == 'lr4'){
		document.getElementById('pr-panel-carbody-santoriniblack').style.background = 'url(images/' + prModel + '-carbody-santoriniblack.png)';
		document.getElementById('pr-panel-carbody-santoriniblack').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-indussilver').style.background = 'url(images/' + prModel + '-carbody-indussilver.png)';
		document.getElementById('pr-panel-carbody-indussilver').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-fujiwhite').style.background = 'url(images/' + prModel + '-carbody-fujiwhite.png)';
		document.getElementById('pr-panel-carbody-fujiwhite').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-firenzered').style.background = 'url(images/' + prModel + '-carbody-firenzered.png)';
		document.getElementById('pr-panel-carbody-firenzered').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-corrisgrey').style.background = 'url(images/' + prModel + '-carbody-corrisgrey.png)';
		document.getElementById('pr-panel-carbody-corrisgrey').style.backgroundSize = 'contain';
	}else if(model == 'rrs'){
		document.getElementById('pr-panel-carbody-santoriniblack').style.background = 'url(images/' + prModel + '-carbody-santoriniblack.png)';
		document.getElementById('pr-panel-carbody-santoriniblack').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-indussilver').style.background = 'url(images/' + prModel + '-carbody-indussilver.png)';
		document.getElementById('pr-panel-carbody-indussilver').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-fujiwhite').style.background = 'url(images/' + prModel + '-carbody-fujiwhite.png)';
		document.getElementById('pr-panel-carbody-fujiwhite').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-chilered').style.background = 'url(images/' + prModel + '-carbody-chilered.png)';
		document.getElementById('pr-panel-carbody-chilered').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-corrisgrey').style.background = 'url(images/' + prModel + '-carbody-corrisgrey.png)';
		document.getElementById('pr-panel-carbody-corrisgrey').style.backgroundSize = 'contain';
	}else if(model == 'rr'){
		document.getElementById('pr-panel-carbody-santoriniblack').style.background = 'url(images/' + prModel + '-carbody-santoriniblack.png)';
		document.getElementById('pr-panel-carbody-santoriniblack').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-indussilver').style.background = 'url(images/' + prModel + '-carbody-indussilver.png)';
		document.getElementById('pr-panel-carbody-indussilver').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-fujiwhite').style.background = 'url(images/' + prModel + '-carbody-fujiwhite.png)';
		document.getElementById('pr-panel-carbody-fujiwhite').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-aleutiansilver').style.background = 'url(images/' + prModel + '-carbody-aleutiansilver.png)';
		document.getElementById('pr-panel-carbody-aleutiansilver').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-carbody-corrisgrey').style.background = 'url(images/' + prModel + '-carbody-corrisgrey.png)';
		document.getElementById('pr-panel-carbody-corrisgrey').style.backgroundSize = 'contain';
	}
}

function prExteriorClick(){

	document.getElementById('pr-panel-exterior-btn').style.background = 'url(images/exterior-btn-on.png)';
	document.getElementById('pr-panel-exterior-btn').style.backgroundSize = 'contain';
	document.getElementById('pr-panel-exterior').style.zIndex = '1';
	document.getElementById('pr-panel-wheels-btn').style.background = 'url(images/wheels-btn-off.png)';
	document.getElementById('pr-panel-wheels-btn').style.backgroundSize = 'contain';
	document.getElementById('pr-panel-wheels').style.zIndex = '-1';

	if(prWeatherCondition == 'snow' || prWeatherCondition == 'SNOW'){
		document.getElementById('pr-panel-exterior-btn').style.background = 'url(images/exterior-btn-on-black.png)';
		document.getElementById('pr-panel-exterior-btn').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-wheels-btn').style.background = 'url(images/wheels-btn-off-black.png)';
		document.getElementById('pr-panel-wheels-btn').style.backgroundSize = 'contain';
	}else{
		document.getElementById('pr-panel-exterior-btn').style.background = 'url(images/exterior-btn-on.png)';
		document.getElementById('pr-panel-exterior-btn').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-wheels-btn').style.background = 'url(images/wheels-btn-off.png)';
		document.getElementById('pr-panel-wheels-btn').style.backgroundSize = 'contain';		
	}

	if(prModel == 'rre'){
		document.getElementById('pr-ext-black').addEventListener('click', function(){prExteriorSelect('santoriniblack')});
		document.getElementById('pr-ext-blue').addEventListener('click', function(){prExteriorSelect('loireblue')});
		document.getElementById('pr-ext-white').addEventListener('click', function(){prExteriorSelect('fujiwhite')});
		document.getElementById('pr-ext-red').addEventListener('click', function(){prExteriorSelect('firenzered')});
		document.getElementById('pr-ext-gray').addEventListener('click', function(){prExteriorSelect('corrisgrey')});
	}else if(prModel == 'rr'){
		document.getElementById('pr-ext-black').addEventListener('click', function(){prExteriorSelect('santoriniblack')});
		document.getElementById('pr-ext-blue').addEventListener('click', function(){prExteriorSelect('indussilver')});
		document.getElementById('pr-ext-blue').style.background = 'url(images/exterior-swatch-silver.jpg) no-repeat';
		document.getElementById('pr-ext-blue').style.backgroundSize = 'contain';
		document.getElementById('pr-ext-white').addEventListener('click', function(){prExteriorSelect('fujiwhite')});
		document.getElementById('pr-ext-red').addEventListener('click', function(){prExteriorSelect('aleutiansilver')});
		document.getElementById('pr-ext-red').style.background = 'url(images/exterior-swatch-aleutian.jpg) no-repeat';
		document.getElementById('pr-ext-red').style.backgroundSize = 'contain';
		document.getElementById('pr-ext-gray').addEventListener('click', function(){prExteriorSelect('corrisgrey')});
	}else if(prModel == 'rrs'){
		document.getElementById('pr-ext-black').addEventListener('click', function(){prExteriorSelect('santoriniblack')});
		document.getElementById('pr-ext-blue').addEventListener('click', function(){prExteriorSelect('indussilver')});
		document.getElementById('pr-ext-blue').style.background = 'url(images/exterior-swatch-silver.jpg) no-repeat';
		document.getElementById('pr-ext-blue').style.backgroundSize = 'contain';
		document.getElementById('pr-ext-white').addEventListener('click', function(){prExteriorSelect('fujiwhite')});
		document.getElementById('pr-ext-red').addEventListener('click', function(){prExteriorSelect('chilered')});
		document.getElementById('pr-ext-red').style.display = 'none'
		document.getElementById('pr-ext-gray').addEventListener('click', function(){prExteriorSelect('corrisgrey')});
		document.getElementById('pr-ext-gray').style.background = 'url(images/exterior-swatch-corrisgrey.jpg) no-repeat';
		document.getElementById('pr-ext-gray').style.backgroundSize = 'contain';
		document.getElementById('pr-ext-gray').style.margin = '35px 0px 0px 185px';
	}else if(prModel == 'lr4'){
		document.getElementById('pr-ext-black').addEventListener('click', function(){prExteriorSelect('santoriniblack')});
		document.getElementById('pr-ext-blue').addEventListener('click', function(){prExteriorSelect('indussilver')});
		document.getElementById('pr-ext-blue').style.background = 'url(images/exterior-swatch-silver.jpg) no-repeat';
		document.getElementById('pr-ext-blue').style.backgroundSize = 'contain';
		document.getElementById('pr-ext-white').addEventListener('click', function(){prExteriorSelect('fujiwhite')});
		document.getElementById('pr-ext-red').addEventListener('click', function(){prExteriorSelect('firenzered')});
		document.getElementById('pr-ext-gray').addEventListener('click', function(){prExteriorSelect('corrisgrey')});
		document.getElementById('pr-ext-gray').style.background = 'url(images/exterior-swatch-corrisgrey.jpg) no-repeat';
		document.getElementById('pr-ext-gray').style.backgroundSize = 'contain';
	}



	//prActivity(1);
}

function prExteriorSelect(color){
	console.log(color);

	document.getElementById('pr-panel-carbody-' + color).style.opacity = '1';

	window.setTimeout(function(){
		document.getElementById('pr-panel-carbody-santoriniblack').style.opacity = '0';
		document.getElementById('pr-panel-carbody-loireblue').style.opacity = '0';
		document.getElementById('pr-panel-carbody-fujiwhite').style.opacity = '0';
		document.getElementById('pr-panel-carbody-firenzered').style.opacity = '0';
		document.getElementById('pr-panel-carbody-orkneygrey').style.opacity = '0';
		document.getElementById('pr-panel-carbody-corrisgrey').style.opacity = '0';
		document.getElementById('pr-panel-carbody-chilered').style.opacity = '0';
		document.getElementById('pr-panel-carbody-aleutiansilver').style.opacity = '0';
		document.getElementById('pr-panel-carbody-indussilver').style.opacity = '0';

		document.getElementById('pr-panel-carbody-' + color).style.opacity = '1';
	}, 200)

	//document.getElementById('pr-panel-carbody').style.background = 'url(images/' + prModel + '-carbody-' + color + '.png)';
	//document.getElementById('pr-panel-carbody').style.backgroundSize = 'contain';

	if(color == 'santoriniblack'){
		document.getElementById('pr-ext-selected').style.margin = '72px 0px 0px 50px';
		document.getElementById('pr-ext-text').innerHTML = 'Exterior: Santorini Black';
		//prActivity(2);
	}else if(color == 'loireblue'){
		document.getElementById('pr-ext-selected').style.margin = '72px 0px 0px 95px';
		document.getElementById('pr-ext-text').innerHTML = 'Exterior: Loire Blue';
		//prActivity(3);
	}else if(color == 'fujiwhite'){
		document.getElementById('pr-ext-selected').style.margin = '72px 0px 0px 140px';
		document.getElementById('pr-ext-text').innerHTML = 'Exterior: Fuji White';
		if(prFirstTimeColor == 'yes'){
			prFirstTimeColor = 'no';
		}else{/*prActivity(4);*/}
	}else if(color == 'firenzered'){
		document.getElementById('pr-ext-selected').style.margin = '72px 0px 0px 185px';
		document.getElementById('pr-ext-text').innerHTML = 'Exterior: Firenze Red';
		//prActivity(5);
	}else if(color == 'orkneygrey'){
		document.getElementById('pr-ext-selected').style.margin = '72px 0px 0px 230px';
		document.getElementById('pr-ext-text').innerHTML = 'Exterior: Orkney Grey';
		//prActivity(6);
	}else if(color == 'corrisgrey'){
		document.getElementById('pr-ext-selected').style.margin = '72px 0px 0px 185px';
		document.getElementById('pr-ext-text').innerHTML = 'Exterior: Corris Grey';
		//prActivity(15);
	}else if(color == 'indussilver'){
		document.getElementById('pr-ext-selected').style.margin = '72px 0px 0px 95px';
		document.getElementById('pr-ext-text').innerHTML = 'Exterior: Indus Silver';
		//prActivity(16);
	}else if(color == 'chilered'){
		document.getElementById('pr-ext-selected').style.margin = '72px 0px 0px 185px';
		document.getElementById('pr-ext-text').innerHTML = 'Exterior: Chile Red';
		//prActivity(17);
	}else if(color == 'aleutiansilver'){
		document.getElementById('pr-ext-selected').style.margin = '72px 0px 0px 185px';
		document.getElementById('pr-ext-text').innerHTML = 'Exterior: Aleutian Silver';
		//prActivity(18);
	}
}

function prWheelSelect(wheelNo){
	console.log(wheelNo);

	document.getElementById('pr-panel-tires-1').style.opacity = '0';
	document.getElementById('pr-panel-tires-2').style.opacity = '0';
	document.getElementById('pr-panel-tires-3').style.opacity = '0';
	document.getElementById('pr-panel-tires-4').style.opacity = '0';
	document.getElementById('pr-panel-tires-5').style.opacity = '0';

	document.getElementById('pr-panel-tires-' + wheelNo).style.opacity = '1';

	//document.getElementById('pr-panel-tires').style.background = 'url(images/' + prModel + '-carwheels-' + wheelNo + '.png)';
	//document.getElementById('pr-panel-tires').style.backgroundSize = 'contain';

	if(wheelNo == 1){
		document.getElementById('pr-wheels-selected').style.margin = '72px 0px 0px 50px';
		if(prModel == 'rre'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 19'' Six-Spoke Style 603";
		}else if(prModel == 'rr'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 19'' 5 Split Spoke Style 1";
		}else if(prModel == 'rrs'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 22'' 5 Split Spoke Style 6 Wheel";
		}else if(prModel == 'lr4'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 19'' 10 Spoke Alloy Wheel";
		}
		if(prFirstTimeWheel == 'yes'){
			prFirstTimeWheel = 'no';
		}else{/*prActivity(8);*/}
	}else if(wheelNo == 2){
		document.getElementById('pr-wheels-selected').style.margin = '72px 0px 0px 95px';
		if(prModel == 'rre'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 20'' Five Split-Spoke Style 504";
		}else if(prModel == 'rr'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 20'' 5 Split Spoke Shadow Chrome";
		}else if(prModel == 'rrs'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 21'' 5 Split Spoke Style 14 Wheel";
		}else if(prModel == 'lr4'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 19'' 7 Split Spoke Gloss Black";
		}
		//prActivity(9);
	}else if(wheelNo == 3){
		document.getElementById('pr-wheels-selected').style.margin = '72px 0px 0px 140px';
		if(prModel == 'rre'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 20'' Five Split-Spoke Shadow Chrome";
		}else if(prModel == 'rrs'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 21'' 5 Split Spoke Style 16 Wheel";
		}else if(prModel == 'lr4'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 20'' 5 Split Spoke Gloss Black";
		}
		//prActivity(10);
	}else if(wheelNo == 4){
		document.getElementById('pr-wheels-selected').style.margin = '72px 0px 0px 185px';
		if(prModel == 'rrs'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 19'' 5 Split Spoke Style 1 Wheel";
		}else if(prModel == 'lr4'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 20'' 5 Spoke Gloss Black";
		}
		//prActivity(11);
	}else if(wheelNo == 5){
		document.getElementById('pr-wheels-selected').style.margin = '72px 0px 0px 230px';
		if(prModel == 'lr4'){
			document.getElementById('pr-wheels-text').innerHTML = "Wheel: 20'' 5 Split Spoke Style 511";
		}
		//prActivity(12);
	}
}

function prWheelsClick(){
	//prActivity(7);

	document.getElementById('pr-panel-exterior-btn').style.background = 'url(images/exterior-btn-off.png)';
	document.getElementById('pr-panel-exterior-btn').style.backgroundSize = 'contain';
	document.getElementById('pr-panel-wheels-btn').style.background = 'url(images/wheels-btn-on.png)';
	document.getElementById('pr-panel-wheels-btn').style.backgroundSize = 'contain';
	document.getElementById('pr-panel-wheels').style.zIndex = '1';

	if(prWeatherCondition == 'snow' || prWeatherCondition == 'SNOW'){
		document.getElementById('pr-panel-exterior-btn').style.background = 'url(images/exterior-btn-off-black.png)';
		document.getElementById('pr-panel-exterior-btn').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-wheels-btn').style.background = 'url(images/wheels-btn-on-black.png)';
		document.getElementById('pr-panel-wheels-btn').style.backgroundSize = 'contain';
	}else{
		document.getElementById('pr-panel-exterior-btn').style.background = 'url(images/exterior-btn-off.png)';
		document.getElementById('pr-panel-exterior-btn').style.backgroundSize = 'contain';
		document.getElementById('pr-panel-wheels-btn').style.background = 'url(images/wheels-btn-on.png)';
		document.getElementById('pr-panel-wheels-btn').style.backgroundSize = 'contain';
	}


}