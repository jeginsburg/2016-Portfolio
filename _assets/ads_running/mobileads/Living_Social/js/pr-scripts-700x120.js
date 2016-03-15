var prWhereGoing = '';
var prDateType = '';
var prZip;
var prCategory = 'travel,entertainment';
var prCity = 340;
var noDeals;
var currentDeal = 0;
var prDealURL1;
var prDealURL2;
var prDealURL3;
var prDealURL4;
var prDealURL5;
var prDeal1Title;
var prDeal2Title;
var prDeal3Title;
var prDeal4Title;
var prDeal5Title;
var prDeal1Title;
var prDeal2Title;
var prDeal3Title;
var prDeal4Title;
var prDeal5Title;
var prCTAURL;
var prLogoURL;

prCheckBannerLoad();

function prCheckBannerLoad(){
	if(document.getElementById('pr-vday-banner-cta')){
		prInitBanner();
	}else{
		prCheckBannerLoad();
	}
}

function prInitBanner(){
	console.log('banner loaded');
	document.getElementById('pradi' + PRPID).style.display = 'none';
	// document.getElementById('pr-vday-banner-generalclick').addEventListener('click', function(){
	// 	pr_trk('ac', prup, 1, 1);
	// 	window.setTimeout(function(){
	// 		window.open('https://www.livingsocial.com/');
	// 	}, 100)
	// })
	document.getElementById('pr-vday-banner-cta').addEventListener('click', function(){
		prOpenPanel(1);
	})
}

function prInitAd(){
	console.log('init ad');

	prZip = document.getElementById('pr-vday-panel-wrapper').getAttribute('prZip');
	prCTAURL = document.getElementById('pr-vday-panel-wrapper').getAttribute('ctaclick');
	prLogoURL = document.getElementById('pr-vday-panel-wrapper').getAttribute('logoclick');

	try{document.getElementById('prf' + PRPID).style.left = '50%';
	document.getElementById('prf' + PRPID).style.marginLeft = '-490px';}catch(error){}

	prGetCityInfo();
	document.getElementById('pr-vday-panel-answer1-1-box').addEventListener('click', function(){Option1Answer(1)});
	//document.getElementById('pr-vday-panel-answer1-1-text').addEventListener('click', function(){Option1Answer(1)});
	document.getElementById('pr-vday-panel-answer1-2-box').addEventListener('click', function(){Option1Answer(2)});
	//document.getElementById('pr-vday-panel-answer1-2-text').addEventListener('click', function(){Option1Answer(2)});

	document.getElementById('pr-vday-panel-answer2-1-box').addEventListener('click', function(){Option2Answer(1)});
	//document.getElementById('pr-vday-panel-answer2-1-text').addEventListener('click', function(){Option2Answer(1)});
	document.getElementById('pr-vday-panel-answer2-2-box').addEventListener('click', function(){Option2Answer(2)});
	//document.getElementById('pr-vday-panel-answer2-2-text').addEventListener('click', function(){Option2Answer(2)});
	document.getElementById('pr-vday-panel-answer2-3-box').addEventListener('click', function(){Option2Answer(3)});
	//document.getElementById('pr-vday-panel-answer2-3-text').addEventListener('click', function(){Option2Answer(3)});

	try{document.getElementById('pr-vday-panel-close').addEventListener('click', prClose);
	document.getElementById('pr-vday-panel-close2').addEventListener('click', prClose);}catch(error){}
	document.getElementById('pr-vday-panel-footercta2').addEventListener('click', prCTAClick);
	document.getElementById('pr-vday-panel-footercta').addEventListener('click', prQuizResults);

	document.getElementById('pr-vday-panel-footerlogo').addEventListener('click', prLogoClick);
	document.getElementById('pr-vday-panel-footerlogo2').addEventListener('click', prLogoClick);
}

function prCTAClick(){
	pr_trk('pc', prup, 3, 1);
	window.setTimeout(function(){
		window.open(prCTAURL);
	}, 100)
}

function prLogoClick(){
	pr_trk('pc', prup, 2, 1);
	window.setTimeout(function(){
		window.open(prLogoURL);
	}, 100)
}

function prQuizResults(){

try{prActivity(1);}catch(error){}

	if(prWhereGoing != '' && prDateType != ''){
	//if(prDateType != ''){
//adventurous | romantic
//heartracing | somethingnew | localgem
		
		//console.log(prWhereGoing);
		console.log(prDateType);

		if(prWhereGoing == 'adventurous' && prDateType == 'heartracing'){
			prCategory = 'Extreme/Adventure Sports - Fitness/Active,Aviation/Entertainment,Specialty Sports/Racing - Entertainment,Water Sports - Fitness/Active,Snow Sports - Fitness/Active,Athletic Spectator Sports - Entertainment,Race Entry - Fitness/Active';
		}else if(prWhereGoing == 'adventurous' && prDateType == 'somethingnew'){
			prCategory = 'Dance Studio,Yoga Classes,Race Entry';
		}else if(prWhereGoing == 'adventurous' && prDateType == 'localgem'){
			prCategory = 'Event/Festival/Exhibition - Entertainment,Museums - Entertainment,Culinary Classes/Entertainment,City Attraction/Entertainment';
		}else if(prWhereGoing == 'romantic' && prDateType == 'heartracing'){
			prCategory = 'Beer/Wine/Spirits - Entertainment,Nightlife/Entertainment,Performing Art Center/Theater/Entertainment';
		}else if(prWhereGoing == 'romantic' && prDateType == 'somethingnew'){
			prCategory = 'Culinary Classes/Entertainment,Event/Festival/Exhibition - Entertainment,Museums - Entertainment,City Attraction/Entertainment';
		}else if(prWhereGoing == 'romantic' && prDateType == 'localgem'){
			prCategory = 'Asian/Full-Service Restaurants,City Attraction/Entertainment,Central and South American/Full-Service Restaurants,European/Full-Service Restaurants,North American/Full-Service Restaurants,Experiential Dining/Entertainment';
		}

		// switch(prDateType){
		// 	case 'evening':
		// 		prCategory = 'Nightlife/Entertainment,Beer/Wine/Spirits - Entertainment,Nightlife/Entertainment,Performing Art Center/Theater/Entertainment';
		// 	break;

		// 	case 'dinner':
		// 		prCategory = 'African/Middle Eastern/Full-Service Restaurants,Asian/Full-Service Restaurants,City Attraction/Entertainment,Central and South American/Full-Service Restaurants,European/Full-Service Restaurants,North American/Full-Service Restaurants,Experiential Dining/Entertainment,Central and South American/Full-Service Restaurants,European/Full-Service Restaurants,North American/Full-Service Restaurants,Beer/Wine/Spirits - Entertainment';
		// 	break;

		// 	case 'adventure':
		// 		prCategory = 'Extreme/Adventure Sports - Fitness/Active,Aviation/Entertainment,Specialty Sports/Racing - Entertainment,Water Sports - Fitness/Active,Snow Sports - Fitness/Active,Athletic Spectator Sports - Entertainment,Race Entry - Fitness/Active';
		// 	break;

		// 	case 'creative':
		// 		prCategory = 'Performing Art Center/Theater/Entertainment,Event/Festival/Exhibition - Entertainment,Museums - Entertainment,Culinary Classes/Entertainment,City Attraction/Entertainment';
		// 	break;

		// 	case 'getaways':
		// 		prCategory = 'Ranch/Lodge/Camping/Travel,Cruise/Boat/Travel,Adventure/Travel,Gambling/Travel,Ski/Travel,Culinary/Travel,Cityscape/Travel,Luxury/Travel,Wine/Travel';
		// 	break;
		// }

		window.setTimeout(function(){
			prGetData();
			document.getElementById('pr-vday-panel-frame1').style.margin = '0px 0px 0px -980px';
			document.getElementById('pr-vday-panel-frame2').style.margin = '0px 0px 0px 0px';
		}, 100)
	}
}

function prGetCityInfo(){
	var prCityInfo = document.createElement('script');
	//prCityInfo.src = 'http://smq.pointroll.com/clients/services/proxy/jsonproxy.ashx?proxy=http://stripe.pointroll.com/api/data/get/153?zip=' + prZip;
	prCityInfo.src = 'https://stripe-s.pointroll.com/api/data/get/153?format=jsonp&zip=' + prZip;
	prCityInfo.type = 'text/javascript';
	prCityInfo.charset = 'utf-8';
	prCityInfo.id = 'prCityInfo';
	prCityInfo.async = false;
	document.getElementsByTagName('head')[0].appendChild(prCityInfo);
}

function parseResponse(data){
	console.log('parse callback');
	console.log(data);
	if(data.Data){
		prCity = data.Data[0].id;
	}else if(data.deals){
		prPopulateDeals(data);
	}else if(!data){
		alert('no data');
		prPopulateDeals(data);
	}
}

function proxyCallback(data){
	console.log('proxy callback');
	console.log(data);
	if(data.Data){
		prCity = data.Data.id;
	}else if(data.deals){
		alert('deals');
		prPopulateDeals(data);
	}
}

function proxyError(){
	console.log('proxy error');
}

function prGetData(){
	var prDealInfo = document.createElement('script');
	//prDealInfo.src = 'http://smq.pointroll.com/clients/services/proxy/jsonproxy.ashx?proxy=' + encodeURIComponent('http://stripe.pointroll.com/api/data/get/152?category=') + prCategory + encodeURIComponent('&city=') + prCity;
	prDealInfo.src = 'https://stripe-s.pointroll.com/api/data/get/152?category=' + prCategory + '&city=' + prCity + '&format=jsonp';
	//alert(prDealInfo.src);
	prDealInfo.type = 'text/javascript';
	prDealInfo.charset = 'utf-8';
	prDealInfo.id = 'prDealInfo';
	prDealInfo.async = false;
	document.getElementsByTagName('head')[0].appendChild(prDealInfo);
}

function prPopulateDeals(data){

	noDeals = data.deals.length;

	if(noDeals == 4){
		document.getElementById('pr-vday-panel-offer-5').style.display = 'none';
	}
	if(noDeals == 3){
		document.getElementById('pr-vday-panel-offer-4').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-5').style.display = 'none';
	}
	if(noDeals == 2){
		document.getElementById('pr-vday-panel-offer-3').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-4').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-5').style.display = 'none';
	}
	if(noDeals == 1){
		document.getElementById('pr-vday-panel-offer-2').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-3').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-4').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-5').style.display = 'none';
	}
	if(noDeals == 0){
		document.getElementById('pr-vday-panel-offer-1').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-2').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-3').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-4').style.display = 'none';
		document.getElementById('pr-vday-panel-offer-5').style.display = 'none';
		document.getElementById('pr-vday-panel-left-arrow').style.display = 'none';
		document.getElementById('pr-vday-panel-right-arrow').style.display = 'none';
		document.getElementById('pr-vday-panel-nodeals').style.display = 'block';
		document.getElementById('pr-vday-panel-nodeals').style.opacity = '1';
	}

	if(data.deals[currentDeal].images[0]){
		document.getElementById('pr-vday-panel-offer-1-picture').style.background = 'url(' + data.deals[currentDeal].images[0].size700 + ')';
		document.getElementById('pr-vday-panel-offer-1-picture').style.backgroundSize = 'cover';		
	}else{
		document.getElementById('pr-vday-panel-offer-1-picture').style.background = 'url(' + data.deals[currentDeal].images.size700 + ')';
		document.getElementById('pr-vday-panel-offer-1-picture').style.backgroundSize = 'cover';		
	}

	document.getElementById('pr-vday-panel-offer-1-title').innerHTML = data.deals[currentDeal].deal_concept;
	if(data.deals[currentDeal].deal_concept.length > 25){
		document.getElementById('pr-vday-panel-offer-1-title').innerHTML = data.deals[currentDeal].deal_concept.substr(0,24) + '...';
	}
	document.getElementById('pr-vday-panel-offer-1-description').innerHTML = data.deals[currentDeal].long_title;
	if(data.deals[currentDeal].long_title.length > 40){
		document.getElementById('pr-vday-panel-offer-1-description').innerHTML = data.deals[currentDeal].long_title.substr(0,39) + '...';
	}

	document.getElementById('pr-vday-panel-offer-1-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal].price;
	prDealURL1 = data.deals[currentDeal].url;
	prDeal1Title = data.deals[currentDeal].long_title;
	document.getElementById('pr-vday-panel-offer-1').addEventListener('click', function(){
		prTrackActivity(4, PRPID, prup, 0, data.deals[currentDeal].long_title);
		window.open(prDealURL1);
	})

	if(data.deals[currentDeal + 1].images[0]){
		document.getElementById('pr-vday-panel-offer-2-picture').style.background = 'url(' + data.deals[currentDeal + 1].images[0].size700 + ')';
		document.getElementById('pr-vday-panel-offer-2-picture').style.backgroundSize = 'cover';		
	}else{
		document.getElementById('pr-vday-panel-offer-2-picture').style.background = 'url(' + data.deals[currentDeal + 1].images.size700 + ')';
		document.getElementById('pr-vday-panel-offer-2-picture').style.backgroundSize = 'cover';		
	}

	document.getElementById('pr-vday-panel-offer-2-title').innerHTML = data.deals[currentDeal + 1].deal_concept;
	if(data.deals[currentDeal + 1].deal_concept.length > 25){
		document.getElementById('pr-vday-panel-offer-2-title').innerHTML = data.deals[currentDeal + 1].deal_concept.substr(0,24) + '...';
	}
	document.getElementById('pr-vday-panel-offer-2-description').innerHTML = data.deals[currentDeal + 1].long_title;
	if(data.deals[currentDeal + 1].long_title.length > 40){
		document.getElementById('pr-vday-panel-offer-2-description').innerHTML = data.deals[currentDeal + 1].long_title.substr(0,39) + '...';
	}

	document.getElementById('pr-vday-panel-offer-2-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 1].price;
	prDealURL2 = data.deals[currentDeal + 1].url;
	prDeal2Title = data.deals[currentDeal + 1].long_title;
	document.getElementById('pr-vday-panel-offer-2').addEventListener('click', function(){
		prTrackActivity(4, PRPID, prup, 0, prDeal2Title);
		window.open(prDealURL2);
	})

	if(data.deals[currentDeal + 2].images[0]){
		document.getElementById('pr-vday-panel-offer-3-picture').style.background = 'url(' + data.deals[currentDeal + 2].images[0].size700 + ')';
		document.getElementById('pr-vday-panel-offer-3-picture').style.backgroundSize = 'cover';		
	}else{
		document.getElementById('pr-vday-panel-offer-3-picture').style.background = 'url(' + data.deals[currentDeal + 2].images.size700 + ')';
		document.getElementById('pr-vday-panel-offer-3-picture').style.backgroundSize = 'cover';		
	}

	document.getElementById('pr-vday-panel-offer-3-title').innerHTML = data.deals[currentDeal + 2].deal_concept;
	if(data.deals[currentDeal + 1].deal_concept.length > 25){
		document.getElementById('pr-vday-panel-offer-3-title').innerHTML = data.deals[currentDeal + 2].deal_concept.substr(0,24) + '...';
	}
	document.getElementById('pr-vday-panel-offer-3-description').innerHTML = data.deals[currentDeal + 2].long_title;
	if(data.deals[currentDeal + 1].long_title.length > 40){
		document.getElementById('pr-vday-panel-offer-3-description').innerHTML = data.deals[currentDeal + 2].long_title.substr(0,39) + '...';
	}

	document.getElementById('pr-vday-panel-offer-3-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 2].price;
	prDealURL3 = data.deals[currentDeal + 2].url;
	prDeal3Title = data.deals[currentDeal + 2].long_title;
	document.getElementById('pr-vday-panel-offer-3').addEventListener('click', function(){
		prTrackActivity(4, PRPID, prup, 0, prDeal3Title);
		window.open(prDealURL3);
	})

	if(data.deals[currentDeal + 3].images[0]){
		document.getElementById('pr-vday-panel-offer-4-picture').style.background = 'url(' + data.deals[currentDeal + 3].images[0].size700 + ')';
		document.getElementById('pr-vday-panel-offer-4-picture').style.backgroundSize = 'cover';		
	}else{
		document.getElementById('pr-vday-panel-offer-4-picture').style.background = 'url(' + data.deals[currentDeal + 3].images.size700 + ')';
		document.getElementById('pr-vday-panel-offer-4-picture').style.backgroundSize = 'cover';		
	}

	document.getElementById('pr-vday-panel-offer-4-title').innerHTML = data.deals[currentDeal + 3].deal_concept;
	if(data.deals[currentDeal + 3].deal_concept.length > 25){
		document.getElementById('pr-vday-panel-offer-4-title').innerHTML = data.deals[currentDeal + 3].deal_concept.substr(0,24) + '...';
	}
	document.getElementById('pr-vday-panel-offer-4-description').innerHTML = data.deals[currentDeal + 3].long_title;
	if(data.deals[currentDeal + 3].long_title.length > 40){
		document.getElementById('pr-vday-panel-offer-4-description').innerHTML = data.deals[currentDeal + 3].long_title.substr(0,39) + '...';
	}

	document.getElementById('pr-vday-panel-offer-4-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 3].price;
	prDealURL4 = data.deals[currentDeal + 3].url;
	prDeal4Title = data.deals[currentDeal + 3].long_title;
	document.getElementById('pr-vday-panel-offer-4').addEventListener('click', function(){
		prTrackActivity(4, PRPID, prup, 0, prDeal4Title);
		window.open(prDealURL4);
	})

	if(data.deals[currentDeal + 4].images[0]){
		document.getElementById('pr-vday-panel-offer-5-picture').style.background = 'url(' + data.deals[currentDeal + 4].images[0].size700 + ')';
		document.getElementById('pr-vday-panel-offer-5-picture').style.backgroundSize = 'cover';		
	}else{
		document.getElementById('pr-vday-panel-offer-5-picture').style.background = 'url(' + data.deals[currentDeal + 4].images.size700 + ')';
		document.getElementById('pr-vday-panel-offer-5-picture').style.backgroundSize = 'cover';		
	}

	document.getElementById('pr-vday-panel-offer-5-title').innerHTML = data.deals[currentDeal + 4].deal_concept;
	if(data.deals[currentDeal + 4].deal_concept.length > 25){
		document.getElementById('pr-vday-panel-offer-5-title').innerHTML = data.deals[currentDeal + 4].deal_concept.substr(0,24) + '...';
	}
	document.getElementById('pr-vday-panel-offer-5-description').innerHTML = data.deals[currentDeal + 4].long_title;
	if(data.deals[currentDeal + 4].long_title.length > 40){
		document.getElementById('pr-vday-panel-offer-5-description').innerHTML = data.deals[currentDeal + 4].long_title.substr(0,39) + '...';
	}

	document.getElementById('pr-vday-panel-offer-5-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 4].price;
	prDealURL5 = data.deals[currentDeal + 4].url;
	prDeal5Title = data.deals[currentDeal + 4].long_title;
	document.getElementById('pr-vday-panel-offer-5').addEventListener('click', function(){
		prTrackActivity(4, PRPID, prup, 0, prDeal5Title);
		window.open(prDealURL5);
	})

	document.getElementById('pr-vday-panel-right-arrow').addEventListener('click', function(){
		prRightArrow(data);
	})
	document.getElementById('pr-vday-panel-left-arrow').addEventListener('click', function(){
		prLeftArrow(data);
	})
}

function prRightArrow(data){
	prActivity(3);

	currentDeal += 5;
	if(currentDeal > (noDeals - 1)){
		currentDeal = 0;
	}

	document.getElementById('pr-vday-panel-offer-1').style.margin = '20px 0px 0px 60px'
	document.getElementById('pr-vday-panel-offer-1').style.opacity = '0';
	document.getElementById('pr-vday-panel-offer-2').style.margin = '20px 0px 0px 225px'
	document.getElementById('pr-vday-panel-offer-2').style.opacity = '0';
	document.getElementById('pr-vday-panel-offer-3').style.margin = '20px 0px 0px 390px'
	document.getElementById('pr-vday-panel-offer-3').style.opacity = '0';
	document.getElementById('pr-vday-panel-offer-4').style.margin = '20px 0px 0px 555px'
	document.getElementById('pr-vday-panel-offer-4').style.opacity = '0';
	document.getElementById('pr-vday-panel-offer-5').style.margin = '20px 0px 0px 720px'
	document.getElementById('pr-vday-panel-offer-5').style.opacity = '0';

	window.setTimeout(function(){
		document.getElementById('pr-vday-panel-offer-1').style.margin = '20px 0px 0px 120px'
		document.getElementById('pr-vday-panel-offer-2').style.margin = '20px 0px 0px 285px'
		document.getElementById('pr-vday-panel-offer-3').style.margin = '20px 0px 0px 450px'
		document.getElementById('pr-vday-panel-offer-4').style.margin = '20px 0px 0px 615px'
		document.getElementById('pr-vday-panel-offer-5').style.margin = '20px 0px 0px 780px'

		if(data.deals[currentDeal].images[0]){
			document.getElementById('pr-vday-panel-offer-1-picture').style.background = 'url(' + data.deals[currentDeal].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-1-picture').style.backgroundSize = 'cover';		
		}else{
			document.getElementById('pr-vday-panel-offer-1-picture').style.background = 'url(' + data.deals[currentDeal].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-1-picture').style.backgroundSize = 'cover';		
		}

		document.getElementById('pr-vday-panel-offer-1-title').innerHTML = data.deals[currentDeal].deal_concept;
		if(data.deals[currentDeal].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-1-title').innerHTML = data.deals[currentDeal].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-1-description').innerHTML = data.deals[currentDeal].long_title;
		if(data.deals[currentDeal].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-1-description').innerHTML = data.deals[currentDeal].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-1-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal].price;
		prDealURL1 = data.deals[currentDeal].url;
		prDeal1Title = data.deals[currentDeal].long_title;

		if(data.deals[currentDeal + 1].images[0]){
			document.getElementById('pr-vday-panel-offer-2-picture').style.background = 'url(' + data.deals[currentDeal + 1].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-2-picture').style.backgroundSize = 'cover';		
		}else{
			document.getElementById('pr-vday-panel-offer-2-picture').style.background = 'url(' + data.deals[currentDeal + 1].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-2-picture').style.backgroundSize = 'cover';		
		}

		document.getElementById('pr-vday-panel-offer-2-title').innerHTML = data.deals[currentDeal + 1].deal_concept;
		if(data.deals[currentDeal + 1].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-2-title').innerHTML = data.deals[currentDeal + 1].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-2-description').innerHTML = data.deals[currentDeal + 1].long_title;
		if(data.deals[currentDeal + 1].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-2-description').innerHTML = data.deals[currentDeal + 1].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-2-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 1].price;
		prDealURL2 = data.deals[currentDeal + 1].url;
		prDeal2Title = data.deals[currentDeal + 1].long_title;


		if(data.deals[currentDeal + 2].images[0]){
			document.getElementById('pr-vday-panel-offer-3-picture').style.background = 'url(' + data.deals[currentDeal + 2].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-3-picture').style.backgroundSize = 'cover';		
		}else{
			document.getElementById('pr-vday-panel-offer-3-picture').style.background = 'url(' + data.deals[currentDeal + 2].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-3-picture').style.backgroundSize = 'cover';
		}

		document.getElementById('pr-vday-panel-offer-3-title').innerHTML = data.deals[currentDeal + 2].deal_concept;
		if(data.deals[currentDeal + 2].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-3-title').innerHTML = data.deals[currentDeal + 2].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-3-description').innerHTML = data.deals[currentDeal + 2].long_title;
		if(data.deals[currentDeal + 2].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-3-description').innerHTML = data.deals[currentDeal + 2].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-3-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 2].price;
		prDealURL3 = data.deals[currentDeal + 2].url;
		prDeal3Title = data.deals[currentDeal + 2].long_title;


		if(data.deals[currentDeal + 3].images[0]){
			document.getElementById('pr-vday-panel-offer-4-picture').style.background = 'url(' + data.deals[currentDeal + 3].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-4-picture').style.backgroundSize = 'cover';		
		}else{
			document.getElementById('pr-vday-panel-offer-4-picture').style.background = 'url(' + data.deals[currentDeal + 3].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-4-picture').style.backgroundSize = 'cover';
		}

		document.getElementById('pr-vday-panel-offer-4-title').innerHTML = data.deals[currentDeal + 3].deal_concept;
		if(data.deals[currentDeal + 3].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-4-title').innerHTML = data.deals[currentDeal + 3].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-4-description').innerHTML = data.deals[currentDeal + 3].long_title;
		if(data.deals[currentDeal + 3].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-4-description').innerHTML = data.deals[currentDeal + 3].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-4-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 3].price;
		prDealURL4 = data.deals[currentDeal + 3].url;
		prDeal4Title = data.deals[currentDeal + 3].long_title;


		if(data.deals[currentDeal + 4].images[0]){
			document.getElementById('pr-vday-panel-offer-5-picture').style.background = 'url(' + data.deals[currentDeal + 4].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-5-picture').style.backgroundSize = 'cover';
		}else{
			document.getElementById('pr-vday-panel-offer-5-picture').style.background = 'url(' + data.deals[currentDeal + 4].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-5-picture').style.backgroundSize = 'cover';
		}

		document.getElementById('pr-vday-panel-offer-5-title').innerHTML = data.deals[currentDeal + 4].deal_concept;
		if(data.deals[currentDeal + 4].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-5-title').innerHTML = data.deals[currentDeal + 4].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-5-description').innerHTML = data.deals[currentDeal + 4].long_title;
		if(data.deals[currentDeal + 4].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-5-description').innerHTML = data.deals[currentDeal + 4].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-5-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 4].price;
		prDealURL5 = data.deals[currentDeal + 4].url;
		prDeal5Title = data.deals[currentDeal + 4].long_title;
	}, 400)

	window.setTimeout(function(){
		document.getElementById('pr-vday-panel-offer-1').style.margin = '20px 0px 0px 90px'
		document.getElementById('pr-vday-panel-offer-1').style.opacity = '1';
		document.getElementById('pr-vday-panel-offer-2').style.margin = '20px 0px 0px 255px'
		document.getElementById('pr-vday-panel-offer-2').style.opacity = '1';
		document.getElementById('pr-vday-panel-offer-3').style.margin = '20px 0px 0px 420px'
		document.getElementById('pr-vday-panel-offer-3').style.opacity = '1';
		document.getElementById('pr-vday-panel-offer-4').style.margin = '20px 0px 0px 585px'
		document.getElementById('pr-vday-panel-offer-4').style.opacity = '1';
		document.getElementById('pr-vday-panel-offer-5').style.margin = '20px 0px 0px 750px'
		document.getElementById('pr-vday-panel-offer-5').style.opacity = '1';
	}, 800)

}

function prLeftArrow(data){
	prActivity(2);

	currentDeal -= 2;
	if(currentDeal < 0){
		currentDeal = (noDeals - 1);
	}

	document.getElementById('pr-vday-panel-offer-1').style.margin = '20px 0px 0px 120px'
	document.getElementById('pr-vday-panel-offer-1').style.opacity = '0';
	document.getElementById('pr-vday-panel-offer-2').style.margin = '20px 0px 0px 285px'
	document.getElementById('pr-vday-panel-offer-2').style.opacity = '0';
	document.getElementById('pr-vday-panel-offer-3').style.margin = '20px 0px 0px 450px'
	document.getElementById('pr-vday-panel-offer-3').style.opacity = '0';
	document.getElementById('pr-vday-panel-offer-4').style.margin = '20px 0px 0px 615px'
	document.getElementById('pr-vday-panel-offer-4').style.opacity = '0';
	document.getElementById('pr-vday-panel-offer-5').style.margin = '20px 0px 0px 780px'
	document.getElementById('pr-vday-panel-offer-5').style.opacity = '0';

	window.setTimeout(function(){
		document.getElementById('pr-vday-panel-offer-1').style.margin = '20px 0px 0px 60px'
		document.getElementById('pr-vday-panel-offer-2').style.margin = '20px 0px 0px 225px'
		document.getElementById('pr-vday-panel-offer-3').style.margin = '20px 0px 0px 390px'
		document.getElementById('pr-vday-panel-offer-4').style.margin = '20px 0px 0px 555px'
		document.getElementById('pr-vday-panel-offer-5').style.margin = '20px 0px 0px 720px'

		if(data.deals[currentDeal].images[0]){
			document.getElementById('pr-vday-panel-offer-1-picture').style.background = 'url(' + data.deals[currentDeal].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-1-picture').style.backgroundSize = 'cover';		
		}else{
			document.getElementById('pr-vday-panel-offer-1-picture').style.background = 'url(' + data.deals[currentDeal].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-1-picture').style.backgroundSize = 'cover';		
		}

		document.getElementById('pr-vday-panel-offer-1-title').innerHTML = data.deals[currentDeal].deal_concept;
		if(data.deals[currentDeal].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-1-title').innerHTML = data.deals[currentDeal].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-1-description').innerHTML = data.deals[currentDeal].long_title;
		if(data.deals[currentDeal].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-1-description').innerHTML = data.deals[currentDeal].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-1-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal].price;
		prDealURL1 = data.deals[currentDeal].url;
		prDeal1Title = data.deals[currentDeal].long_title;

		if(data.deals[currentDeal + 1].images[0]){
			document.getElementById('pr-vday-panel-offer-2-picture').style.background = 'url(' + data.deals[currentDeal + 1].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-2-picture').style.backgroundSize = 'cover';		
		}else{
			document.getElementById('pr-vday-panel-offer-2-picture').style.background = 'url(' + data.deals[currentDeal + 1].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-2-picture').style.backgroundSize = 'cover';		
		}

		document.getElementById('pr-vday-panel-offer-2-title').innerHTML = data.deals[currentDeal + 1].deal_concept;
		if(data.deals[currentDeal + 1].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-2-title').innerHTML = data.deals[currentDeal + 1].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-2-description').innerHTML = data.deals[currentDeal + 1].long_title;
		if(data.deals[currentDeal + 1].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-2-description').innerHTML = data.deals[currentDeal + 1].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-2-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 1].price;
		prDealURL2 = data.deals[currentDeal + 1].url;
		prDeal2Title = data.deals[currentDeal + 1].long_title;

		if(data.deals[currentDeal + 2].images[0]){
			document.getElementById('pr-vday-panel-offer-3-picture').style.background = 'url(' + data.deals[currentDeal + 2].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-3-picture').style.backgroundSize = 'cover';		
		}else{
			document.getElementById('pr-vday-panel-offer-3-picture').style.background = 'url(' + data.deals[currentDeal + 2].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-3-picture').style.backgroundSize = 'cover';
		}

		document.getElementById('pr-vday-panel-offer-3-title').innerHTML = data.deals[currentDeal + 2].deal_concept;
		if(data.deals[currentDeal + 2].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-3-title').innerHTML = data.deals[currentDeal + 2].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-3-description').innerHTML = data.deals[currentDeal + 2].long_title;
		if(data.deals[currentDeal + 2].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-3-description').innerHTML = data.deals[currentDeal + 2].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-3-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 2].price;
		prDealURL3 = data.deals[currentDeal + 2].url;
		prDeal3Title = data.deals[currentDeal + 2].long_title;


		if(data.deals[currentDeal + 3].images[0]){
			document.getElementById('pr-vday-panel-offer-4-picture').style.background = 'url(' + data.deals[currentDeal + 3].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-4-picture').style.backgroundSize = 'cover';		
		}else{
			document.getElementById('pr-vday-panel-offer-4-picture').style.background = 'url(' + data.deals[currentDeal + 3].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-4-picture').style.backgroundSize = 'cover';
		}

		document.getElementById('pr-vday-panel-offer-4-title').innerHTML = data.deals[currentDeal + 3].deal_concept;
		if(data.deals[currentDeal + 3].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-4-title').innerHTML = data.deals[currentDeal + 3].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-4-description').innerHTML = data.deals[currentDeal + 3].long_title;
		if(data.deals[currentDeal + 3].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-4-description').innerHTML = data.deals[currentDeal + 3].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-4-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 3].price;
		prDealURL4 = data.deals[currentDeal + 3].url;
		prDeal4Title = data.deals[currentDeal + 3].long_title;


		if(data.deals[currentDeal + 4].images[0]){
			document.getElementById('pr-vday-panel-offer-5-picture').style.background = 'url(' + data.deals[currentDeal + 4].images[0].size700 + ')';
			document.getElementById('pr-vday-panel-offer-5-picture').style.backgroundSize = 'cover';
		}else{
			document.getElementById('pr-vday-panel-offer-5-picture').style.background = 'url(' + data.deals[currentDeal + 4].images.size700 + ')';
			document.getElementById('pr-vday-panel-offer-5-picture').style.backgroundSize = 'cover';
		}

		document.getElementById('pr-vday-panel-offer-5-title').innerHTML = data.deals[currentDeal + 4].deal_concept;
		if(data.deals[currentDeal + 4].deal_concept.length > 25){
			document.getElementById('pr-vday-panel-offer-5-title').innerHTML = data.deals[currentDeal + 4].deal_concept.substr(0,24) + '...';
		}
		document.getElementById('pr-vday-panel-offer-5-description').innerHTML = data.deals[currentDeal + 4].long_title;
		if(data.deals[currentDeal + 4].long_title.length > 40){
			document.getElementById('pr-vday-panel-offer-5-description').innerHTML = data.deals[currentDeal + 4].long_title.substr(0,39) + '...';
		}

		document.getElementById('pr-vday-panel-offer-5-price').innerHTML = "<span class='money'>$</span>" + data.deals[currentDeal + 4].price;
		prDealURL5 = data.deals[currentDeal + 4].url;
		prDeal5Title = data.deals[currentDeal + 4].long_title;
	}, 400)

	window.setTimeout(function(){
		document.getElementById('pr-vday-panel-offer-1').style.margin = '20px 0px 0px 90px'
		document.getElementById('pr-vday-panel-offer-1').style.opacity = '1';
		document.getElementById('pr-vday-panel-offer-2').style.margin = '20px 0px 0px 255px'
		document.getElementById('pr-vday-panel-offer-2').style.opacity = '1';
		document.getElementById('pr-vday-panel-offer-3').style.margin = '20px 0px 0px 420px'
		document.getElementById('pr-vday-panel-offer-3').style.opacity = '1';
		document.getElementById('pr-vday-panel-offer-4').style.margin = '20px 0px 0px 585px'
		document.getElementById('pr-vday-panel-offer-4').style.opacity = '1';
		document.getElementById('pr-vday-panel-offer-5').style.margin = '20px 0px 0px 750px'
		document.getElementById('pr-vday-panel-offer-5').style.opacity = '1';
	}, 800)
}



function Option1Answer(answer){
	console.log(answer);
	if(answer == 1){
		prWhereGoing = 'adventurous';
		document.getElementById('pr-vday-panel-answer1-1-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/adventurous-checked.png)';
		document.getElementById('pr-vday-panel-answer1-1-box').style.backgroundSize = 'contain';
		document.getElementById('pr-vday-panel-answer1-2-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/romantic-unchecked.png)';
		document.getElementById('pr-vday-panel-answer1-2-box').style.backgroundSize = 'contain';
		try{prActivity(5);}catch(error){}
	}else if(answer == 2){
		prWhereGoing = 'romantic';
		document.getElementById('pr-vday-panel-answer1-1-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/adventurous-unchecked.png)';
		document.getElementById('pr-vday-panel-answer1-1-box').style.backgroundSize = 'contain';
		document.getElementById('pr-vday-panel-answer1-2-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/romantic-checked.png)';
		document.getElementById('pr-vday-panel-answer1-2-box').style.backgroundSize = 'contain';
		try{prActivity(6);}catch(error){}
	}
}

function Option2Answer(answer){
	console.log(answer);
	if(answer == 1){
		try{prActivity(7);}catch(error){}

		prDateType = 'somethingnew';
		document.getElementById('pr-vday-panel-answer2-1-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/somethingnew-checked.png)';
		document.getElementById('pr-vday-panel-answer2-1-box').style.backgroundSize = 'contain';
		document.getElementById('pr-vday-panel-answer2-2-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/localgem-unchecked.png)';
		document.getElementById('pr-vday-panel-answer2-2-box').style.backgroundSize = 'contain';
		document.getElementById('pr-vday-panel-answer2-3-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/heartracing-unchecked.png)';
		document.getElementById('pr-vday-panel-answer2-3-box').style.backgroundSize = 'contain';
	}else if(answer == 2){
		try{prActivity(8);}catch(error){}
		
		prDateType = 'localgem';
		document.getElementById('pr-vday-panel-answer2-1-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/somethingnew-unchecked.png)';
		document.getElementById('pr-vday-panel-answer2-1-box').style.backgroundSize = 'contain';
		document.getElementById('pr-vday-panel-answer2-2-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/localgem-checked.png)';
		document.getElementById('pr-vday-panel-answer2-2-box').style.backgroundSize = 'contain';
		document.getElementById('pr-vday-panel-answer2-3-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/heartracing-unchecked.png)';
		document.getElementById('pr-vday-panel-answer2-3-box').style.backgroundSize = 'contain';
	}else if(answer == 3){
		try{prActivity(9);}catch(error){}
		
		prDateType = 'heartracing';
		document.getElementById('pr-vday-panel-answer2-1-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/somethingnew-unchecked.png)';
		document.getElementById('pr-vday-panel-answer2-1-box').style.backgroundSize = 'contain';
		document.getElementById('pr-vday-panel-answer2-2-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/localgem-unchecked.png)';
		document.getElementById('pr-vday-panel-answer2-2-box').style.backgroundSize = 'contain';
		document.getElementById('pr-vday-panel-answer2-3-box').style.background = 'url(https://speed-s.pointroll.com/PointRoll/Media/Asset/Church&Dwight/197343/heartracing-check.png)';
		document.getElementById('pr-vday-panel-answer2-3-box').style.backgroundSize = 'contain';
	}	
}