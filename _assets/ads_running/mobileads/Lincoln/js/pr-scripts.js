var prOrientation;
var featurePage = 1;
var prCounter = 1;
var prColor = 'platinum';
var prImages = new Array();

var prLoadImagesHasRun = false;

var prWidthRatioDefault;
var prHeightRatioDefault;
var prLoadImagesHasRun = false;
var prStartTouch = 0, prEndTouch = 0;
var prTouchThreshold = 50;
var prTouchRegistered = false;

var prDragStart;
var prDragCurrent;
var prCurrAngle = 1;
var prNextAngle = prCurrAngle;
var prNumAngles = 18;
var prDragSize = 64;

function prSetRatio(){
   var prWrapper = document.getElementById('pr-wrapper');
   var prWidthRatio = window.innerWidth / prWidthRatioDefault;
   var prHeightRatio = window.innerHeight / prHeightRatioDefault;
   var prNewWidth;
   var prNewHeight;
   var prWidthMargin;
   var prHeightMargin;
   var prWrapperTop;
   var prWrapperLeft;

   if(prWidthRatio < prHeightRatio){
       prWrapper.style.zoom = prWidthRatio;

       prNewWidth = prWidthRatio * prWidthRatioDefault;
       prNewHeight = prWidthRatio * prHeightRatioDefault;
   }else{
       prWrapper.style.zoom = prHeightRatio;

       prNewWidth = prHeightRatio * prWidthRatioDefault;
       prNewHeight = prHeightRatio * prHeightRatioDefault;
   }

   prWidthMargin = window.innerWidth - prNewWidth;
   prHeightMargin = window.innerHeight - prNewHeight;

   prWrapper.style.top = (prHeightMargin / 2) + 'px';
   prWrapper.style.left = (prWidthMargin / 2) + 'px';

   window.scrollTo(0, 0);
}

prVideoCheck();

function prVideoCheck(){
	if(document.getElementById('pr-video')){
		prVideoInit();
	}else{
		window.setTimeout(function(){
			prVideoCheck();
		},100)
	}
}

function prVideoInit(){
	prSetupVideo('pr-video');
	_pr_video.play();
}

function prOpenVideo(){
	pr_trk('ac', 1954690, 1, 1);
	prOpenPanel(1);
	console.log('open video panel 970x250')
}


function prInitAutotrader(){
	console.log('init ad');
	prCheckOrientation();

	//Swipe Events
	document.getElementById("pr-slidenav").addEventListener("mousedown", prOn360Grab);
	document.getElementById("pr-slidenav").addEventListener("touchstart", prOn360Grab);

	//prPreLoad2();
	prColorPick('platinum');
	// prCurrentPRPID = PRPID;
	// try{document.getElementById('prf' + PRPID).style.position = 'fixed';}catch(err){};
	// try{document.getElementById('prf' + PRPID).style.width = '100%';}catch(err){};
	// try{document.getElementById('prf' + PRPID).style.height = '100%';}catch(err){};
	// try{document.getElementById('prf' + PRPID).style.top = '0px';}catch(err){};
	// try{document.getElementById('prf' + PRPID).style.left = '0px';}catch(err){};
	// try{document.getElementById('prf' + PRPID).style.zIndex = '99999';}catch(err){};

	var _pr_overlay = document.createElement('div');
	_pr_overlay.style.background = '#000';
	_pr_overlay.style.width = '100%';
	_pr_overlay.style.height = '100%';
	_pr_overlay.style.position = 'fixed';
	_pr_overlay.style.top = '0px';
	_pr_overlay.style.left = '0px';
	_pr_overlay.style.opacity = 0.8;
	_pr_overlay.style.zIndex = -1;
	try{document.getElementById('prf' + PRPID).appendChild(_pr_overlay);}catch(err){};

	// Bottom Nav Event Listeners
	document.getElementById('pr-colors360').addEventListener('click', function(){
		//prActivity(7);
		prColors360();
	});
	document.getElementById('pr-interior').addEventListener('click', function(){
		//prActivity(8);
		prInterior();
	});
	document.getElementById('pr-drivecontrol').addEventListener('click', function(){
		//prActivity(10);
		prDriveControl();
	});
	document.getElementById('pr-performance').addEventListener('click', function(){
		//prActivity(12);
		prPerformance();
	});
	document.getElementById('pr-left-arrow').addEventListener('click', function(){
		//prActivity(5);
		prLeftArrow();
	});
	document.getElementById('pr-right-arrow').addEventListener('click', function(){
		//prActivity(6);
		prRightArrow();
	});
	document.getElementById('pr-close').addEventListener('click', function() {
		prCounter = 1;
		prColor = 'platinum';
		//prClose();
	});

	// CTA Event Listeners
	document.getElementById('pr-searchinventory-cta').addEventListener('click', prOnClkOut, false);
	document.getElementById('pr-buildprice-cta').addEventListener('click', prOnClkOut, false);
	document.getElementById('pr-getoffers-cta').addEventListener('click', prOnClkOut, false);

	//Load remaining car 360 images when user clicks on any color
	document.querySelector('#pr-platinum').addEventListener('click', prCheckLoadImages);
	document.querySelector('#pr-silver').addEventListener('click', prCheckLoadImages);
	document.querySelector('#pr-gold').addEventListener('click', prCheckLoadImages);
	document.querySelector('#pr-sapphire').addEventListener('click', prCheckLoadImages);
	document.querySelector('#pr-red').addEventListener('click', prCheckLoadImages);
	document.querySelector('#pr-sand').addEventListener('click', prCheckLoadImages);
	document.querySelector('#pr-quartz').addEventListener('click', prCheckLoadImages);
	document.querySelector('#pr-pearl').addEventListener('click', prCheckLoadImages);
	document.querySelector('#pr-black').addEventListener('click', prCheckLoadImages);

	document.getElementById('pr-interior-column').addEventListener('touchstart', function(){
		//prActivity(9);
		resetBottomNav();
		//document.getElementById('pr-color-picker').style.display = 'block';
	});
	document.getElementById('drivecontrol-back').addEventListener('touchstart', function(){
		//prActivity(11);
		resetBottomNav();
		//document.getElementById('pr-color-picker').style.display = 'block';
	});
	document.getElementById('pr-performance-column').addEventListener('touchstart', function(){
		//prActivity(13);
		resetBottomNav();
		//document.getElementById('pr-color-picker').style.display = 'block';
	});

	//document.getElementById('pr-drivecontrol-column').addEventListener('click', resetBottomNav);
	//document.getElementById('pr-performance-column').addEventListener('click', resetBottomNav);

	window.addEventListener('resize',prCheckOrientation);

	document.getElementById('pr-frame-360').style.background = 'url(images/' + prOrientation + '_' + prColor + '_' + prCounter + '.jpg)';
	document.getElementById('pr-frame-360').style.backgroundSize = 'contain';

	document.getElementById('pr-left-rotate').addEventListener('click', function(){
		//prActivity(1);
		prRightRotate();
	});
	document.getElementById('pr-right-rotate').addEventListener('click', function(){
		//prActivity(2);
		prLeftRotate();
	});

	document.getElementById('pr-platinum').addEventListener('click', function(){prColorPick('platinum'); /*prActivity(14);*/});
	document.getElementById('pr-silver').addEventListener('click', function(){prColorPick('silver'); /*prActivity(15);*/});
	document.getElementById('pr-gold').addEventListener('click', function(){prColorPick('gold'); /*prActivity(16);*/});
	document.getElementById('pr-sapphire').addEventListener('click', function(){prColorPick('sapphire'); /*prActivity(17);*/});
	document.getElementById('pr-red').addEventListener('click', function(){prColorPick('red'); /*prActivity(18);*/});
	document.getElementById('pr-sand').addEventListener('click', function(){prColorPick('sand'); /*prActivity(19);*/});
	document.getElementById('pr-quartz').addEventListener('click', function(){prColorPick('quartz'); /*prActivity(20);*/});
	document.getElementById('pr-pearl').addEventListener('click', function(){prColorPick('pearl'); /*prActivity(21);*/});
	document.getElementById('pr-black').addEventListener('click', function(){prColorPick('black'); /*prActivity(22);*/});

	//prLoadImages();

	document.getElementById('pr-experiencemkc').style.opacity = 1; // Fade in Title
}

// Click Out
function prOnClkOut(e){
	var PR_URL;
	var PR_CLK_ID;

	switch(e.target.id){
		case 'pr-searchinventory-cta' :
			PR_URL = document.getElementById('prMacro1').getAttribute('href');
			PR_CLK_ID = 1;
			break;
		case 'pr-buildprice-cta' :
			PR_URL = document.getElementById('prMacro2').getAttribute('href');
			PR_CLK_ID = 2;
			break;
		case 'pr-getoffers-cta' :
			PR_URL = document.getElementById('prMacro3').getAttribute('href');
			PR_CLK_ID = 3;
			break;
		default :
			console.log('Click ID (' + e.target.id + ') is not a valid selection');
			return;
			break;
	}

	try{pr_trk('pc', prup, PR_CLK_ID, 1);}catch(err){};
	window.setTimeout(function(){
		window.open(PR_URL,'_blank');
	}, 200);
}

function prOn360Grab(e) {
	e.preventDefault();
	//console.log("pr_lmkc_320x480_on360Grab");
	prDragStart = (e.touches) ? e.touches[0].clientX : e.clientX;
	
	document.addEventListener("mousemove", prOn360Drag);
	document.addEventListener("mouseup", prOn360Release);
	document.addEventListener("touchmove", prOn360Drag);
	document.addEventListener("touchend", prOn360Release);
}

function prOn360Drag(e) {
	e.preventDefault();
	//console.log("pr_lmkc_320x480_on360Drag");
	var prDragCurrent = (e.touches) ? e.touches[0].clientX : e.clientX;
	prNextAngle = prCurrAngle + Math.floor((prDragCurrent - prDragStart)/prDragSize);
	
	if(prNextAngle > prNumAngles) {
		prNextAngle -= prNumAngles;
	} else if(prNextAngle<1) {
		prNextAngle += prNumAngles;
	}
	
	//PR_CURRANGLE = PR_NEXTANGLE;
	prImageChange(prNextAngle);
}

function prOn360Release(e) {
	e.preventDefault();
	//console.log("pr_lmkc_320x480_on360Release");
	prCurrAngle = prNextAngle;
	document.removeEventListener("mousemove", prOn360Drag);
	document.removeEventListener("mouseup", prOn360Release);
	document.removeEventListener("touchmove", prOn360Drag);
	document.removeEventListener("touchend", prOn360Release);
}


function prPreLoad2(){
	for (i = 0; i < prPreLoad2.arguments.length; i++) {
		prImages[i] = new Image()
		prImages[i].src = prPreLoad2.arguments[i];
		console.log(prImages[i].src);
	}
}

	prPreLoad2("carimages/landscape_platinum_1.jpg");


	prPreLoad2(
		"carimages/landscape_platinum_2.jpg",
		"carimages/landscape_platinum_3.jpg",
		"carimages/landscape_platinum_4.jpg",
		"carimages/landscape_platinum_5.jpg",
		"carimages/landscape_platinum_6.jpg",
		"carimages/landscape_platinum_7.jpg",
		"carimages/landscape_platinum_8.jpg",
		"carimages/landscape_platinum_9.jpg",
		"carimages/landscape_platinum_10.jpg",
		"carimages/landscape_platinum_11.jpg",
		"carimages/landscape_platinum_12.jpg",
		"carimages/landscape_platinum_13.jpg",
		"carimages/landscape_platinum_14.jpg",
		"carimages/landscape_platinum_15.jpg",
		"carimages/landscape_platinum_16.jpg",
		"carimages/landscape_platinum_17.jpg",
		"carimages/landscape_platinum_18.jpg",
		"carimages/portrait_platinum_1.jpg",
		"carimages/portrait_platinum_2.jpg",
		"carimages/portrait_platinum_3.jpg",
		"carimages/portrait_platinum_4.jpg",
		"carimages/portrait_platinum_5.jpg",
		"carimages/portrait_platinum_6.jpg",
		"carimages/portrait_platinum_7.jpg",
		"carimages/portrait_platinum_8.jpg",
		"carimages/portrait_platinum_9.jpg",
		"carimages/portrait_platinum_10.jpg",
		"carimages/portrait_platinum_11.jpg",
		"carimages/portrait_platinum_12.jpg",
		"carimages/portrait_platinum_13.jpg",
		"carimages/portrait_platinum_14.jpg",
		"carimages/portrait_platinum_15.jpg",
		"carimages/portrait_platinum_16.jpg",
		"carimages/portrait_platinum_17.jpg",
		"carimages/portrait_platinum_18.jpg"
	)

function prCheckLoadImages() {
	// if (!prLoadImagesHasRun) {
	// 	prLoadImages();
	// } else {
	// }
}

function prLoadImages(myColor){
	//prLoadImagesHasRun = true;

	prPreLoad2(

		"carimages/landscape_" + myColor + "_1.jpg",
		"carimages/landscape_" + myColor + "_2.jpg",
		"carimages/landscape_" + myColor + "_3.jpg",
		"carimages/landscape_" + myColor + "_4.jpg",
		"carimages/landscape_" + myColor + "_5.jpg",
		"carimages/landscape_" + myColor + "_6.jpg",
		"carimages/landscape_" + myColor + "_7.jpg",
		"carimages/landscape_" + myColor + "_8.jpg",
		"carimages/landscape_" + myColor + "_9.jpg",
		"carimages/landscape_" + myColor + "_10.jpg",
		"carimages/landscape_" + myColor + "_11.jpg",
		"carimages/landscape_" + myColor + "_12.jpg",
		"carimages/landscape_" + myColor + "_13.jpg",
		"carimages/landscape_" + myColor + "_14.jpg",
		"carimages/landscape_" + myColor + "_15.jpg",
		"carimages/landscape_" + myColor + "_16.jpg",
		"carimages/landscape_" + myColor + "_17.jpg",
		"carimages/landscape_" + myColor + "_18.jpg",
		"carimages/portrait_" + myColor + "_1.jpg",
		"carimages/portrait_" + myColor + "_2.jpg",
		"carimages/portrait_" + myColor + "_3.jpg",
		"carimages/portrait_" + myColor + "_4.jpg",
		"carimages/portrait_" + myColor + "_5.jpg",
		"carimages/portrait_" + myColor + "_6.jpg",
		"carimages/portrait_" + myColor + "_7.jpg",
		"carimages/portrait_" + myColor + "_8.jpg",
		"carimages/portrait_" + myColor + "_9.jpg",
		"carimages/portrait_" + myColor + "_10.jpg",
		"carimages/portrait_" + myColor + "_11.jpg",
		"carimages/portrait_" + myColor + "_12.jpg",
		"carimages/portrait_" + myColor + "_13.jpg",
		"carimages/portrait_" + myColor + "_14.jpg",
		"carimages/portrait_" + myColor + "_15.jpg",
		"carimages/portrait_" + myColor + "_16.jpg",
		"carimages/portrait_" + myColor + "_17.jpg",
		"carimages/portrait_" + myColor + "_18.jpg"
	)

	window.setTimeout(function(){
		 document.getElementById('pr-loading').style.display = 'none';
	}, 2000)

}

function prImageChange(imageCounter){
	if(imageCounter > 18){imageCounter = 1;}
	if(imageCounter < 1){imageCounter = 18;}
	console.log('url(carimages/' + prOrientation + '_' + prColor + '_' + imageCounter + '.jpg)');
	document.getElementById('pr-frame-360').style.background = 'url(carimages/' + prOrientation + '_' + prColor + '_' + imageCounter + '.jpg)';
	document.getElementById('pr-frame-360').style.backgroundSize = 'contain';
}

function prLeftRotate(){
	prImageChange(prCounter++);
}

function prRightRotate(){
	prImageChange(prCounter--);
}

function prColorPick(color){
	document.getElementById('pr-loading').style.display = 'block';
	prLoadImages(color);
	prResetColor();
	window.setTimeout(function(){
		document.getElementById('pr-' + color).style.height = '70px';
		document.getElementById('pr-' + color).style.marginTop = '-20px';
	},300)

	prColor = color;
	window.setTimeout(function(){
		prImageChange(prCounter);
	}, 100)
}

function prResetColor(){
	document.getElementById('pr-platinum').style.height = '50px';
	document.getElementById('pr-platinum').style.marginTop = '0px';
	document.getElementById('pr-silver').style.height = '50px';
	document.getElementById('pr-silver').style.marginTop = '0px';
	document.getElementById('pr-gold').style.height = '50px';
	document.getElementById('pr-gold').style.marginTop = '0px';
	document.getElementById('pr-sapphire').style.height = '50px';
	document.getElementById('pr-sapphire').style.marginTop = '0px';
	document.getElementById('pr-red').style.height = '50px';
	document.getElementById('pr-red').style.marginTop = '0px';
	document.getElementById('pr-sand').style.height = '50px';
	document.getElementById('pr-sand').style.marginTop = '0px';
	document.getElementById('pr-quartz').style.height = '50px';
	document.getElementById('pr-quartz').style.marginTop = '0px';
	document.getElementById('pr-pearl').style.height = '50px';
	document.getElementById('pr-pearl').style.marginTop = '0px';
	document.getElementById('pr-black').style.height = '50px';
	document.getElementById('pr-black').style.marginTop = '0px';
}

function prCheckOrientation(){
	if(window.innerWidth > window.innerHeight){
		prWidthRatioDefault = 1024;
        prHeightRatioDefault = 671;

        prOrientation = 'landscape';
		prLandscape();
	}else{
		prWidthRatioDefault = 768;
        prHeightRatioDefault = 929;

        prOrientation = 'portrait';
		prPortrait();
	}
	prSetRatio();

}

function prLandscape(){
	console.log('landscape');
	prDragSize = 64;
	document.getElementById('pr-frame-360').style.background = 'url(carimages/' + prOrientation + '_' + prColor + '_' + prCounter + '.jpg)';
	document.getElementById('pr-frame-360').style.backgroundSize = 'contain';
	document.getElementById('pr-wrapper').className = '';
	document.getElementById('pr-experiencemkc').className = '';
	document.getElementById('pr-frame-360').className = '';
	document.getElementById('pr-frame-interior').className = '';
	document.getElementById('pr-frame-drivecontrol').className = '';
	document.getElementById('pr-frame-performance').className = '';
	document.getElementById('pr-close').className = '';
	document.getElementById('pr-slidenav').className = '';
	document.getElementById('pr-color-picker').className = '';
	document.getElementById('pr-left-rotate').className = '';
	document.getElementById('pr-right-rotate').className = '';
	document.getElementById('pr-performance-column').className = '';
	document.getElementById('pr-drivecontrol-column').className = '';
	document.getElementById('pr-interior-column').className = '';
	document.getElementById('pr-bottomnav').className = '';
	document.getElementById('pr-left-arrow').className = '';
	document.getElementById('pr-colors360').className = '';
	document.getElementById('pr-interior').className = '';
	document.getElementById('pr-lincoln-logo').className = '';
	document.getElementById('pr-drivecontrol').className = '';
	document.getElementById('pr-performance').className = '';
	document.getElementById('pr-right-arrow').className = '';
	document.getElementById('pr-bottom-footer').className = '';
	document.getElementById('pr-logo').className = '';
	document.getElementById('pr-cta-buttons').className = '';
	document.getElementById('pr-searchinventory-cta').className = '';
	document.getElementById('pr-buildprice-cta').className = '';
	document.getElementById('pr-getoffers-cta').className = '';
	document.getElementById('pr-loading').className = '';
}

function prPortrait(){
	console.log('portrait');
	prDragSize = 48;
	document.getElementById('pr-frame-360').style.background = 'url(carimages/' + prOrientation + '_' + prColor + '_' + prCounter + '.jpg)';
	document.getElementById('pr-frame-360').style.backgroundSize = 'contain';
	document.getElementById('pr-wrapper').className = 'pr-portrait';
	document.getElementById('pr-experiencemkc').className = 'pr-portrait';
	document.getElementById('pr-frame-360').className = 'pr-portrait';
	document.getElementById('pr-frame-interior').className = 'pr-portrait';
	document.getElementById('pr-color-picker').className = 'pr-portrait';
	document.getElementById('pr-left-rotate').className = 'pr-portrait';
	document.getElementById('pr-right-rotate').className = 'pr-portrait';
	document.getElementById('pr-frame-drivecontrol').className = 'pr-portrait';
	document.getElementById('pr-frame-performance').className = 'pr-portrait';
	document.getElementById('pr-close').className = 'pr-portrait';
	document.getElementById('pr-slidenav').className = 'pr-portrait';
	document.getElementById('pr-performance-column').className = 'pr-portrait';
	document.getElementById('pr-drivecontrol-column').className = 'pr-portrait';
	document.getElementById('pr-interior-column').className = 'pr-portrait';
	document.getElementById('pr-bottomnav').className = 'pr-portrait';
	document.getElementById('pr-left-arrow').className = 'pr-portrait';
	document.getElementById('pr-colors360').className = 'pr-portrait';
	document.getElementById('pr-interior').className = 'pr-portrait';
	document.getElementById('pr-lincoln-logo').className = 'pr-portrait';
	document.getElementById('pr-drivecontrol').className = 'pr-portrait';
	document.getElementById('pr-performance').className = 'pr-portrait';
	document.getElementById('pr-right-arrow').className = 'pr-portrait';
	document.getElementById('pr-bottom-footer').className = 'pr-portrait';
	document.getElementById('pr-logo').className = 'pr-portrait';
	document.getElementById('pr-cta-buttons').className = 'pr-portrait';
	document.getElementById('pr-searchinventory-cta').className = 'pr-portrait';
	document.getElementById('pr-buildprice-cta').className = 'pr-portrait';
	document.getElementById('pr-getoffers-cta').className = 'pr-portrait';
	document.getElementById('pr-loading').className = 'pr-portrait';
}

function prLeftArrow(){
	if(featurePage == 1){
		prPerformance();
	}else if(featurePage == 2){
		prColors360();
	}else if(featurePage == 3){
		prInterior();
	}else if(featurePage == 4){
		prDriveControl();
	}
}

function prRightArrow(){
	if(featurePage == 1){
		prInterior();
	}else if(featurePage == 2){
		prDriveControl();
	}else if(featurePage == 3){
		prPerformance();
	}else if(featurePage == 4){
		prColors360();
	}
}

function prColors360(){
	resetBottomNav();
	document.getElementById('pr-frame-drivecontrol').style.opacity = '0';
	document.getElementById('pr-frame-performance').style.opacity = '0';
	document.getElementById('pr-frame-interior').style.opacity = '0';

	document.getElementById('pr-color-picker').style.display = 'block';
	document.getElementById('pr-left-rotate').style.display = 'block';
	document.getElementById('pr-right-rotate').style.display = 'block';

	document.getElementById('pr-colors360').style.background = 'url(images/pr-color360-orange.png) center no-repeat';
	if(prOrientation == 'portrait'){
		document.getElementById('pr-colors360').style.height = '75px';
		document.getElementById('pr-colors360').className = 'pr-portrait pr-highlighted';
	}else{
		document.getElementById('pr-colors360').style.height = '100px';
		document.getElementById('pr-colors360').className = 'pr-highlighted';
	}
	document.getElementById('pr-colors360').style.backgroundSize = 'contain';
	featurePage = 1;
}

function prInterior(){
	resetBottomNav();
	document.getElementById('pr-frame-drivecontrol').style.opacity = '0';
	document.getElementById('pr-frame-performance').style.opacity = '0';

	document.getElementById('pr-interior-column').style.opacity = '1';
	document.getElementById('pr-frame-interior').style.opacity = '1';

	document.getElementById('pr-interior').style.background = 'url(images/pr-interior-orange.png) center no-repeat';

	if(prOrientation == 'portrait'){
		document.getElementById('pr-interior').className = 'pr-portrait pr-highlighted';
		document.getElementById('pr-interior').style.height = '75px';
		document.getElementById('pr-interior-column').style.margin = '0px 0px 0px 187px';
	}else{
		document.getElementById('pr-interior').className = 'pr-highlighted';
		document.getElementById('pr-interior').style.height = '100px';
		document.getElementById('pr-interior-column').style.margin = '0px 0px 0px 268px';
	}

	document.getElementById('pr-frame-interior').className = 'interior-animate';

	window.setTimeout(function(){
		document.getElementById('pr-frame-interior').className = 'interior-animate-backwards';
	}, 14000)

	document.getElementById('pr-interior').style.backgroundSize = 'contain';
	featurePage = 2;
}

function prDriveControl(){
	resetBottomNav();
	document.getElementById('pr-frame-interior').style.opacity = '0';
	document.getElementById('pr-frame-performance').style.opacity = '0';

	document.getElementById('pr-drivecontrol-column').style.opacity = '1';
	document.getElementById('pr-frame-drivecontrol').style.opacity = '1';

	document.getElementById('drivecontrol-title').addEventListener('click', driveControlControl);
	document.getElementById('normal-title').addEventListener('click', normalControl);
	document.getElementById('sport-title').addEventListener('click', sportControl);
	document.getElementById('comfort-title').addEventListener('click', comfortControl);

	if(prOrientation == 'portrait'){
		document.getElementById('pr-drivecontrol').className = 'pr-portrait pr-highlighted';
		document.getElementById('pr-drivecontrol').style.height = '75px';
		document.getElementById('pr-drivecontrol-column').style.margin = '0px 0px 0px 392px';
	}else{
		document.getElementById('pr-drivecontrol').className = 'pr-highlighted';
		document.getElementById('pr-drivecontrol').style.height = '100px';
		document.getElementById('pr-drivecontrol-column').style.margin = '0px 0px 0px 566px';
	}

	document.getElementById('pr-frame-drivecontrol').className = 'drivecontrol-animate';

	window.setTimeout(function(){
		document.getElementById('pr-frame-drivecontrol').className = 'drivecontrol-animate-backwards';
	}, 14000)

	document.getElementById('pr-drivecontrol').style.background = 'url(images/pr-drivecontrol-orange.png) center no-repeat';
	document.getElementById('pr-drivecontrol').style.backgroundSize = 'contain';
	featurePage = 3;
}


function driveControlControl(){
	document.getElementById('normal-content').style.opacity = '0';
	document.getElementById('normal-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('normal-title').style.margin = '340px 0px 0px 0px';
	document.getElementById('normal-arrow').style.margin = '344px 0px 0px 170px';
	document.getElementById('sport-content').style.opacity = '0';
	document.getElementById('sport-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('sport-title').style.margin = '380px 0px 0px 0px';
	document.getElementById('sport-arrow').style.margin = '384px 0px 0px 170px';
	document.getElementById('comfort-content').style.opacity = '0';
	document.getElementById('comfort-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('comfort-title').style.margin = '420px 0px 0px 0px';
	document.getElementById('comfort-arrow').style.margin = '424px 0px 0px 170px';

	document.getElementById('drivecontrol-title').style.margin = '150px 0px 0px 0px';
	document.getElementById('drivecontrol-content').style.opacity = '1';
	document.getElementById('drivecontrol-content').style.margin = '190px 0px 0px 0px';
	document.getElementById('drivecontrol-arrow').style.webkitTransform = 'rotate(90deg) translate3d(0, 0, 0)';
	document.getElementById('drivecontrol-arrow').style.margin = '154px 0px 0px 165px';
}


function normalControl(){
	document.getElementById('drivecontrol-content').style.opacity = '0';
	document.getElementById('drivecontrol-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('sport-content').style.opacity = '0';
	document.getElementById('sport-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('sport-title').style.margin = '400px 0px 0px 0px';
	document.getElementById('sport-arrow').style.margin = '404px 0px 0px 170px';
	document.getElementById('comfort-content').style.opacity = '0';
	document.getElementById('comfort-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('comfort-title').style.margin = '440px 0px 0px 0px';
	document.getElementById('comfort-arrow').style.margin = '444px 0px 0px 170px';

	document.getElementById('normal-title').style.margin = '190px 0px 0px 0px';
	document.getElementById('normal-content').style.opacity = '1';
	document.getElementById('normal-content').style.margin = '220px 0px 0px 0px';
	document.getElementById('normal-arrow').style.webkitTransform = 'rotate(90deg) translate3d(0, 0, 0)';
	document.getElementById('normal-arrow').style.margin = '194px 0px 0px 165px';
}

function sportControl(){
	document.getElementById('drivecontrol-content').style.opacity = '0';
	document.getElementById('drivecontrol-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';

	document.getElementById('normal-content').style.opacity = '0';
	document.getElementById('normal-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('normal-title').style.margin = '190px 0px 0px 0px';
	document.getElementById('normal-arrow').style.margin = '194px 0px 0px 170px';
	document.getElementById('comfort-content').style.opacity = '0';
	document.getElementById('comfort-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('comfort-title').style.margin = '450px 0px 0px 0px';
	document.getElementById('comfort-arrow').style.margin = '454px 0px 0px 170px';

	document.getElementById('sport-title').style.margin = '230px 0px 0px 0px';
	document.getElementById('sport-content').style.opacity = '1';
	document.getElementById('sport-content').style.margin = '260px 0px 0px 0px';
	document.getElementById('sport-arrow').style.webkitTransform = 'rotate(90deg) translate3d(0, 0, 0)';
	document.getElementById('sport-arrow').style.margin = '234px 0px 0px 165px';
}

function comfortControl(){
	document.getElementById('drivecontrol-content').style.opacity = '0';
	document.getElementById('drivecontrol-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';

	document.getElementById('sport-content').style.opacity = '0';
	document.getElementById('sport-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('sport-title').style.margin = '230px 0px 0px 0px';
	document.getElementById('sport-arrow').style.margin = '234px 0px 0px 170px';
	document.getElementById('normal-content').style.opacity = '0';
	document.getElementById('normal-arrow').style.webkitTransform = 'rotate(0deg) translate3d(0, 0, 0)';
	document.getElementById('normal-title').style.margin = '190px 0px 0px 0px';
	document.getElementById('normal-arrow').style.margin = '194px 0px 0px 170px';

	document.getElementById('comfort-title').style.margin = '270px 0px 0px 0px';
	document.getElementById('comfort-content').style.opacity = '1';
	document.getElementById('comfort-content').style.margin = '300px 0px 0px 0px';
	document.getElementById('comfort-arrow').style.webkitTransform = 'rotate(90deg) translate3d(0, 0, 0)';
	document.getElementById('comfort-arrow').style.margin = '274px 0px 0px 165px';
}


function prPerformance(){
	resetBottomNav();
	document.getElementById('pr-frame-interior').style.opacity = '0';
	document.getElementById('pr-frame-drivecontrol').style.opacity = '0';

	document.getElementById('pr-performance-column').style.opacity = '1';
	document.getElementById('pr-frame-performance').style.opacity = '1';

	if(prOrientation == 'portrait'){
		document.getElementById('pr-performance').className = 'pr-portrait pr-highlighted';
		document.getElementById('pr-performance').style.height = '75px';
		document.getElementById('pr-performance-column').style.margin = '0px 0px 0px 517px';
	}else{
		document.getElementById('pr-performance').className = 'pr-highlighted';
		document.getElementById('pr-performance').style.height = '100px';
		document.getElementById('pr-performance-column').style.margin = '0px 0px 0px 754px';
	}

	document.getElementById('pr-frame-performance').className = 'performance-animate';

	window.setTimeout(function(){
		document.getElementById('pr-frame-performance').className = 'performance-animate-backwards';
	}, 14000)

	document.getElementById('pr-performance').style.background = 'url(images/pr-performance-orange.png) center no-repeat';
	document.getElementById('pr-performance').style.backgroundSize = 'contain';
	featurePage = 4;
}

function resetBottomNav(){
	if(prOrientation == 'portrait'){
		document.getElementById('pr-colors360').style.height = '80px';
		document.getElementById('pr-interior').style.height = '80px';
		document.getElementById('pr-interior-column').style.margin = '948px 0px 0px 187px';
		document.getElementById('pr-drivecontrol').style.height = '80px';
		document.getElementById('pr-drivecontrol-column').style.margin = '948px 0px 0px 392px';
		document.getElementById('pr-performance').style.height = '80px';
		document.getElementById('pr-performance-column').style.margin = '948px 0px 0px 517px';
		document.getElementById('pr-colors360').className = 'pr-portrait';
		document.getElementById('pr-interior').className = 'pr-portrait';
		document.getElementById('pr-drivecontrol').className = 'pr-portrait';
		document.getElementById('pr-performance').className = 'pr-portrait';
		document.getElementById('pr-color-picker').style.display = 'none';
		document.getElementById('pr-left-rotate').style.display = 'none';
		document.getElementById('pr-right-rotate').style.display = 'none';
	}else{
		document.getElementById('pr-colors360').style.height = '105px';
		document.getElementById('pr-interior').style.height = '105px';
		document.getElementById('pr-interior-column').style.margin = '548px 0px 0px 268px';
		document.getElementById('pr-drivecontrol').style.height = '105px';
		document.getElementById('pr-drivecontrol-column').style.margin = '548px 0px 0px 566px';
		document.getElementById('pr-performance').style.height = '105px';
		document.getElementById('pr-performance-column').style.margin = '548px 0px 0px 754px';
		document.getElementById('pr-colors360').className = '';
		document.getElementById('pr-interior').className = '';
		document.getElementById('pr-drivecontrol').className = '';
		document.getElementById('pr-performance').className = '';
		document.getElementById('pr-color-picker').style.display = 'none';
		document.getElementById('pr-left-rotate').style.display = 'none';
		document.getElementById('pr-right-rotate').style.display = 'none';
	}


	document.getElementById('pr-colors360').style.background = 'url(images/pr-color360-white.png) center no-repeat';
	document.getElementById('pr-colors360').style.backgroundSize = 'contain';

	document.getElementById('pr-interior').style.background = 'url(images/pr-interior-white.png) center no-repeat';
	document.getElementById('pr-interior').style.backgroundSize = 'contain';
	document.getElementById('pr-interior-column').style.opacity = '0';
	//document.getElementById('pr-frame-interior').style.opacity = '0';

	document.getElementById('pr-drivecontrol').style.background = 'url(images/pr-drivecontrol-white.png) center no-repeat';
	document.getElementById('pr-drivecontrol').style.backgroundSize = 'contain';
	document.getElementById('pr-drivecontrol-column').style.opacity = '0';
	//document.getElementById('pr-frame-drivecontrol').style.opacity = '0';

	document.getElementById('pr-performance').style.background = 'url(images/pr-performance-white.png) center no-repeat';
	document.getElementById('pr-performance').style.backgroundSize = 'contain';
	document.getElementById('pr-performance-column').style.opacity = '0';
	//document.getElementById('pr-frame-performance').style.opacity = '0';
}








