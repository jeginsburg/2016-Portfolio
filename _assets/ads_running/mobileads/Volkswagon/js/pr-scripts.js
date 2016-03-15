
var _pr_track_video = true;
var _pr_video;
var _pr_instance = 1;
var _pr_start = true;
var _pr_ended = false;
var _pr_restarted = false;
var _pr_q1 = false;
var _pr_q2 = false;
var _pr_q3 = false;
var _pr_current_time;
var _pr_total_time;
var _pr_percent;
var _pr_muted;
var videoOneFire = false;
var videoTwoFire = false;
var videoThreeFire = false;

var _pr_width_ratio_default;
var _pr_height_ratio_default;

function prInitPencilBanner() {
	console.log(PRPID + '-1');
	document.getElementById('pradi' + PRPID).style.display = 'none';
	console.log('pencil banner');
	document.getElementById('pr-banner-button').addEventListener('click', function(){
		console.log('pre button');
		//prwin.prBOver(PRPID);
		//prwin.prOpenPanel(1);
		console.log(PRPID + '-2');
		try{
			prBOver(PRPID);
		}catch(err1){
			console.log(err1);
		}
		console.log(PRPID + '-3');
		try{
			prOpenPanel(1);
		}catch(err){
			console.log(err)
		}
		console.log(PRPID + '-4');

		console.log('button click');
	});
	console.log('open listener');

	document.getElementById('pr-banner-clickbox').addEventListener('click', function(){prOpenPanel(1);});
	document.getElementById('pr-banner-disclaimer').addEventListener('click', function(){prDisclaimer();});
	document.getElementById('pr-banner-disclaimerclose').addEventListener('click', function(){prDisclaimerClose();});
	document.getElementById('pr-banner-logo').addEventListener('click', function(){
		//pr_trk('ac',855653,3,1);
		window.open('http://www.vw.com/en/models/passat/gallery.html');
	});

}

function prLoadBanner(){
	if(document.getElementById('pr-banner-button'))
	{
			prInitPencilBanner();
	}else{
		window.setTimeout(prLoadBanner,300);
	}
}


function prDisclaimer(){
	console.log('disclaiming');
	document.getElementById('pr-banner-disclaimer-text').innerHTML = 'The Volkswagen Passat received the highest numerical score among midsize cars in the proprietary J.D. Power 2012-2013 Automotive Performance, Execution and Layout Study&#8480, tied in 2012. 2013 study based on 83,442 total responses from new-vehicle owners of 230 models and measures opinions after 90 days of ownership. Proprietary study results are based on experiences and perceptions of owners surveyed in February-May 2013. Your experiences may vary. Visit jdpower.com.';
	document.getElementById('pr-banner-disclaimer-text').style.marginTop = '8px';
	document.getElementById('pr-banner-disclaimerclose').style.marginTop = '15px';
	document.getElementById('pr-banner-disclaimer').style.marginTop = '-42px';
	document.getElementById('pr-banner-text').style.marginTop = '-94px';
	document.getElementById('pr-banner-button').style.marginTop = '-89px';
}

function prDisclaimerClose(){
	console.log('no more disclaiming');
	document.getElementById('pr-banner-disclaimer-text').style.marginTop = '150px';
	document.getElementById('pr-banner-disclaimerclose').style.marginTop = '130px';
	document.getElementById('pr-banner-disclaimer').style.marginTop = '46px';
	document.getElementById('pr-banner-text').style.marginTop = '6px';
	document.getElementById('pr-banner-button').style.marginTop = '11px';
}


function prInitAd() {
	console.log('init ad');
	prOrientationCheck();
	prRetinaCheck();

	// _pr_prf = document.getElementById('prf' + PRPID);

	// document.getElementById('prf' + PRPID).style.position = 'fixed';
	// document.getElementById('prf' + PRPID).style.top = '0px';
	// document.getElementById('prf' + PRPID).style.left = '0px';
	// document.getElementById('prf' + PRPID).style.width = '100%';
	// document.getElementById('prf' + PRPID).style.height = '100%';

	document.getElementById('pr-panel-close').addEventListener('click', function(){prClose();});
	document.getElementById('pr-panel-logo').addEventListener('click', function(){prLogoTrack();});
	document.getElementById('pr-panel-button').addEventListener('click', function(){prButtonTrack();});
	document.getElementById('pr-panel-videoclose').addEventListener('click', function(){videoClose();});
	document.getElementById('pr-panel-awardwin').addEventListener('click', function(){videoOpenAward();});
	document.getElementById('pr-panel-fuel').addEventListener('click', function(){videoOpenFuel();});
	document.getElementById('pr-panel-spacious').addEventListener('click', function(){videoOpenSpacious();});
	prSetupVideo('pr-panel-video');

	var _pr_overlay = document.createElement('div');
	_pr_overlay.style.background = '#000';
	_pr_overlay.style.width = '100%';
	_pr_overlay.style.height = '100%';
	_pr_overlay.style.position = 'fixed';
	_pr_overlay.style.top = '0px';
	_pr_overlay.style.left = '0px';
	_pr_overlay.style.opacity = 0.8;
	_pr_overlay.style.zIndex = -1;
	//_pr_prf.appendChild(_pr_overlay);
	_pr_overlay.addEventListener('touchmove', function(e){e.preventDefault();});

	window.addEventListener('resize',prOrientationCheck);
	window.addEventListener('resize',prRetinaCheck);
	//window.addEventListener('resize', prSetRatio, false);
}

function prLogoTrack(){
	console.log('button track');
	var prVWLink = document.getElementById('pr-general-click').getAttribute('href');
	//pr_trk('pc',855653,2,1);
	window.setTimeout(function(){window.open(prVWLink)},300);
}

function prButtonTrack(){
	var prVWLink = document.getElementById('pr-general-click').getAttribute('href');
	//pr_trk('pc',855653,1,1);
	window.setTimeout(function(){window.open(prVWLink)},300);
}

function prOrientationCheck(){
	if(window.innerHeight < window.innerWidth)
	{
		_pr_width_ratio_default = 1024;
		_pr_height_ratio_default = 690;
		prLandscape();
	}else{
		_pr_width_ratio_default = 768;
		_pr_height_ratio_default = 946;
		prPortrait();
	}
	//window.setTimeout(prOrientationCheck, 1000);
	prSetRatio();
}


function prSetRatio(){
	var _pr_wrapper = document.getElementById('pr-panel-wrapper');
	var _pr_width_ratio = window.innerWidth / _pr_width_ratio_default;
	var _pr_height_ratio = window.innerHeight / _pr_height_ratio_default;
	var _pr_new_width;
	var _pr_new_height;
	var _pr_width_margin;
	var _pr_height_margin;
	var _pr_wrapper_top;
	var _pr_wrapper_left;
		
	if(_pr_width_ratio < _pr_height_ratio){
		_pr_wrapper.style.zoom = _pr_width_ratio;
		
		_pr_new_width = _pr_width_ratio * _pr_width_ratio_default;
		_pr_new_height = _pr_width_ratio * _pr_height_ratio_default;
	}else{
		_pr_wrapper.style.zoom = _pr_height_ratio;
		
		_pr_new_width = _pr_height_ratio * _pr_width_ratio_default;
		_pr_new_height = _pr_height_ratio * _pr_height_ratio_default;	
	}
	
	_pr_width_margin = window.innerWidth - _pr_new_width;
	_pr_height_margin = window.innerHeight - _pr_new_height;
	console.log(_pr_new_height);
	console.log(_pr_height_margin);
	
	console.log(_pr_width_ratio_default);
	console.log(_pr_height_ratio_default);
	_pr_wrapper.style.top = (_pr_height_margin / 2) + 'px';
	_pr_wrapper.style.left = (_pr_width_margin / 2) + 'px';
	
	window.scrollTo(0, 0);
}
function prRetinaCheck(){
	if(window.devicePixelRatio > 1){
		console.log('retina')
		prRetina();
	}else{}
}

function prRetina(){
	document.getElementById('pr-panel-wrapper').style.background = 'url(images/pr-panel-bg-retina.jpg) no-repeat #f0f4f4';
	document.getElementById('pr-panel-wrapper').style.backgroundSize = '100%';
	document.getElementById('pr-panel-title').style.background = 'url(images/pr-panel-title-retina.png) no-repeat';
	document.getElementById('pr-panel-title').style.backgroundSize = '100%';
	document.getElementById('pr-panel-close').style.background = 'url(images/pr-panel-close-retina.png) no-repeat';
	document.getElementById('pr-panel-close').style.backgroundSize = '100%';
	document.getElementById('pr-panel-awardwin').style.background = 'url(images/pr-panel-awardwin-retina.png) no-repeat';
	document.getElementById('pr-panel-awardwin').style.backgroundSize = '100%';
	document.getElementById('pr-panel-fuel').style.background = 'url(images/pr-panel-fuel-retina.png) no-repeat';
	document.getElementById('pr-panel-fuel').style.backgroundSize = '100%';
	document.getElementById('pr-panel-spacious').style.background = 'url(images/pr-panel-spacious-retina.png) no-repeat';
	document.getElementById('pr-panel-spacious').style.backgroundSize = '100%';
	document.getElementById('pr-panel-spacious').style.width = '300px';
	document.getElementById('pr-panel-car').style.background = 'url(images/pr-panel-car-retina.png) no-repeat';
	document.getElementById('pr-panel-car').style.backgroundSize = '100%';
	document.getElementById('pr-panel-button').style.background = 'url(images/pr-panel-exploremore-retina.png) no-repeat';
	document.getElementById('pr-panel-button').style.backgroundSize = '100%';
	document.getElementById('pr-panel-logo').style.background = 'url(images/pr-panel-vwlogo-retina.png) no-repeat';
	document.getElementById('pr-panel-logo').style.backgroundSize = '100%';
	document.getElementById('pr-panel-videoclose').style.background = 'url(images/pr-panel-close-retina.png) no-repeat';
	document.getElementById('pr-panel-videoclose').style.backgroundSize = '100%';
}

function prLandscape(){
	console.log('landscape');
	//document.getElementById('prf' + PRPID).style.left = '0px';
	document.getElementById('pr-panel-wrapper').className = '';
	document.getElementById('pr-panel-title').className = '';
	document.getElementById('pr-panel-close').className = '';
	document.getElementById('pr-panel-awardwin').className = '';
	document.getElementById('pr-panel-fuel').className = '';
	document.getElementById('pr-panel-spacious').className = '';
	document.getElementById('pr-panel-car').className = '';
	document.getElementById('pr-panel-button').className = '';
	document.getElementById('pr-panel-logo').className = '';
	document.getElementById('pr-panel-videooverlay').className = '';
	document.getElementById('pr-panel-morevideo').className = '';
	document.getElementById('pr-panel-videoclose').className = '';
	document.getElementById('pr-panel-video').className = '';
}

function prPortrait(){
	console.log('portrait');
	//document.getElementById('prf' + PRPID).style.left = '50%';
	document.getElementById('pr-panel-wrapper').className = 'prPortrait';
	document.getElementById('pr-panel-title').className = 'prPortrait';
	document.getElementById('pr-panel-close').className = 'prPortrait';
	document.getElementById('pr-panel-awardwin').className = 'prPortrait';
	document.getElementById('pr-panel-fuel').className = 'prPortrait';
	document.getElementById('pr-panel-spacious').className = 'prPortrait';
	document.getElementById('pr-panel-car').className = 'prPortrait';
	document.getElementById('pr-panel-button').className = 'prPortrait';
	document.getElementById('pr-panel-logo').className = 'prPortrait';
	document.getElementById('pr-panel-videooverlay').className = 'prPortrait';
	document.getElementById('pr-panel-morevideo').className = 'prPortrait';
	document.getElementById('pr-panel-videoclose').className = 'prPortrait';
	document.getElementById('pr-panel-video').className = 'prPortrait';
}

function videoClose(){
	_pr_video.pause();
	_pr_ended = false;
	document.getElementById('pr-panel-videooverlay').style.margin = '-1024px 0px 0px 0px'
	document.getElementById('pr-panel-videooverlay').style.opacity = '0'
}

function videoOpenAward(){
	document.getElementById('pr-panel-mp4').src = 'videos/Death_Match.mp4';
	document.getElementById('pr-panel-ogg').src = 'videos/Death_Match.ogv'
	document.getElementById('pr-panel-webm').src = 'videos/Death_Match.webm'
	prNewVideo(1);
	videoOneFire = true;
	document.getElementById('pr-panel-videooverlay').style.margin = '0px 0px 0px 0px'
	document.getElementById('pr-panel-videooverlay').style.opacity = '1'
}

function videoOpenFuel(){
	document.getElementById('pr-panel-mp4').src = 'videos/Fuel.mp4'
	document.getElementById('pr-panel-ogg').src = 'videos/Fuel.ogv'
	document.getElementById('pr-panel-webm').src = 'videos/Fuel.webm'
	prNewVideo(2);
	videoTwoFire = true;
	document.getElementById('pr-panel-videooverlay').style.margin = '0px 0px 0px 0px'
	document.getElementById('pr-panel-videooverlay').style.opacity = '1'
}

function videoOpenSpacious(){
	document.getElementById('pr-panel-mp4').src = 'videos/Roomy.mp4'
	document.getElementById('pr-panel-ogg').src = 'videos/Roomy.ogv'
	document.getElementById('pr-panel-webm').src = 'videos/Roomy.webm'
	prNewVideo(3);
	videoThreeFire = true;
	document.getElementById('pr-panel-videooverlay').style.margin = '0px 0px 0px 0px'
	document.getElementById('pr-panel-videooverlay').style.opacity = '1'
}

function prSetupVideo(obj){
	_pr_video = document.getElementById(obj);
	_pr_start = true;
	_pr_ended = false;
	_pr_restarted = false;
	_pr_q1 = _pr_q2 = _pr_q3 = false;
    _pr_muted = _pr_video.muted;
	
	_pr_video.addEventListener('play', function(event){
		if(_pr_start){
			_pr_start = false;
			
			if(_pr_track_video){
				//prActivity(prVideoActivity(1206));
			}else{
				console.log('video log: start ' + prVideoActivity(1206));
			}
		}else{
			if(_pr_ended){
				_pr_ended = false;
				_pr_q1 = _pr_q2 = _pr_q3 = false;
			
				if(_pr_track_video){
					//prActivity(1007);
					//prActivity(prVideoActivity(1206));
				}else{
					console.log('video log: replay 1007');
					console.log('video log: start ' + prVideoActivity(1206));
				}
			}else if(_pr_restarted){
				_pr_ended = false;
				_pr_restarted = false;
				_pr_q1 = _pr_q2 = _pr_q3 = false;
			
				if(_pr_track_video){
					//prActivity(1003);
				}else{
					console.log('video log: restart 1003');
				}
			}else{
				if(_pr_track_video){
					//prActivity(1001);
				}else{
					console.log('video log: play 1001');
				}
			}
		}
	});
	
	_pr_video.addEventListener('pause', function(event){
		if(_pr_percent != 100){
			if(_pr_track_video){
				//prActivity(1002);
			}else{
				console.log('video log: pause 1002');
			}
		}
	});
	
	_pr_video.addEventListener('ended', function(event){
		_pr_ended = true;
		
		if(_pr_track_video){
			//prActivity(prVideoActivity(204));
		}else{
			console.log('video log: 100% complete ' + prVideoActivity(204));
		}
	});
	
	_pr_video.addEventListener('timeupdate', function(event){
		_pr_current_time = _pr_video.currentTime;
		_pr_total_time = _pr_video.duration;
		_pr_percent = _pr_current_time / _pr_total_time * 100;
		
		if(!_pr_q1 && _pr_percent > 25){
			_pr_q1 = true;
			
			if(_pr_track_video){
				//prActivity(prVideoActivity(201));
			}else{
				console.log('video log: 25% complete ' + prVideoActivity(201));
			}
		}else if(!_pr_q2 && _pr_percent > 50){
			_pr_q1 = _pr_q2 = true;
			
			if(_pr_track_video){
				//prActivity(prVideoActivity(202));
			}else{
				console.log('video log: 50% complete ' + prVideoActivity(202));
			}
		}else if(!_pr_q3 && _pr_percent > 75){
			_pr_q1 = _pr_q2 = _pr_q3 = true;
			
			if(_pr_track_video){
				//prActivity(prVideoActivity(203));
			}else{
				console.log('video log: 75% complete ' + prVideoActivity(203));
			}
		}
	});
			
	_pr_video.addEventListener('volumechange', function(event){
		if(event.target.muted){
			if(!_pr_muted){
				if(_pr_track_video){
					//prActivity(1004);
				}else{
					console.log('video log: mute 1004');
				}
						
				_pr_muted = true;
			}
		}else{
			if(_pr_muted){
				if(_pr_track_video){
					//prActivity(1005);
				}else{
					console.log('video log: unmute 1005');
				}
						
				_pr_muted = false;
			}
		}
	});
	
	_pr_video.addEventListener('webkitendfullscreen', function(event){
		if(_pr_track_video){
			//prActivity(1010);
		}else{
			console.log('video log: fullscreen 1010');
		}
	});
}

function prNewVideo(inst){
	_pr_video.load();
/*	if(videoOneFire && inst == 1){
		prActivity(1007);
	}

	if(videoTwoFire && inst == 2){
		prActivity(1007);
	}

	if(videoThreeFire && inst == 3){
		prActivity(1007);
	}*/
			
	window.setTimeout(function(){
		_pr_instance = inst;
		_pr_start = true;	
		_pr_ended = false;
		_pr_restarted = false;
		_pr_q1 = _pr_q2 = _pr_q3 = false;
		
		//change video source location here
		
		_pr_video.play();
	}, 100);	
}

function prVideoActivity(activity){
	return -1 * (activity + ((_pr_instance - 1) * 10));
}
