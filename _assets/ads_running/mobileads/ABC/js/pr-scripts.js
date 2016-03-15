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

var prDate;
var prMonth;
var prDay;
var prImagePath = 'images/';


function prInitAd(){
	window.setTimeout(function(){prRotate();}, 900);
	console.log('init ad');

	prDate = new Date();
	prMonth = prDate.getMonth() + 1;
	prDay = prDate.getDate();

	//document.getElementById('pr-panel-tap').addEventListener('click', function(){prShowVideo();});

	prShowVideo();
	document.getElementById('pr-panel-videoholder').addEventListener('click', function(){prCloseVideo();});
	document.getElementById('pr-video').addEventListener('ended', function(){	_pr_video.webkitExitFullScreen();
; prCloseVideo();});
	document.getElementById('pr-video').addEventListener('webkitendfullscreen', function(){prCloseVideo();});


	document.getElementById('pr-panel-replay').addEventListener('click', function(){prReplay();});

	if(prMonth == 3 && prDay == 7){
		document.getElementById('pr-panel-date').style.background = 'url(' + prImagePath + 'pr-returnsun.png)';
	}else if(prMonth == 3 && prDay == 8){
		document.getElementById('pr-panel-date').style.background = 'url(' + prImagePath + 'pr-tomorrow.png)';
	}else if(prMonth == 3 && prDay == 9){
		document.getElementById('pr-panel-date').style.background = 'url(' + prImagePath + 'pr-tonight.png)';
	}else {
		document.getElementById('pr-panel-date').style.background = 'url(' + prImagePath + 'pr-returnsun.png)';
	}

	//prSmoke();
}

function prShowVideo(){
	//document.getElementById('pr-panel-tap').style.display = 'none';
	if(prMonth == 3 && prDay == 7){
		document.getElementById('prMP4').src = prImagePath + 'ABC_ReturnSun2.mp4';
		document.getElementById('prOGG').src = prImagePath + 'ABC_ReturnSun2.ogv';
		document.getElementById('prWEBM').src = prImagePath + 'ABC_ReturnSun2.webm';
	}else if(prMonth == 3 && prDay == 8){
		document.getElementById('prMP4').src = prImagePath + 'ABC_Tomorrow2.mp4';
		document.getElementById('prOGG').src = prImagePath + 'ABC_Tomorrow2.ogv';
		document.getElementById('prWEBM').src = prImagePath + 'ABC_Tomorrow2.webm';
	}else if(prMonth == 3 && prDay == 9){
		document.getElementById('prMP4').src = prImagePath + 'ABC_Tonight2.mp4';
		document.getElementById('prOGG').src = prImagePath + 'ABC_Tonight2.ogv';
		document.getElementById('prWEBM').src = prImagePath + 'ABC_Tonight2.webm';
	}else {
		document.getElementById('prMP4').src = prImagePath + 'ABC_ReturnSun2.mp4';
		document.getElementById('prOGG').src = prImagePath + 'ABC_ReturnSun2.ogv';
		document.getElementById('prWEBM').src = prImagePath + 'ABC_ReturnSun2.webm';
	}

	prSetupVideo('pr-video');
	_pr_video.play();
}

function prReplay(e){
	//document.getElementById('pr-panel-tap').style.display = 'none';
	document.getElementById('pr-panel-videoholder').style.marginLeft = '0px';
	/*
	if(prMonth == 3 && prDay == 7){
		document.getElementById('prMP4').src = prImagePath + 'ABC_ReturnSun2.mp4';
		document.getElementById('prOGG').src = prImagePath + 'ABC_ReturnSun2.ogv';
		document.getElementById('prWEBM').src = prImagePath + 'ABC_ReturnSun2.webm';
	}else if(prMonth == 3 && prDay == 8){
		document.getElementById('prMP4').src = prImagePath + 'ABC_Tomorrow2.mp4';
		document.getElementById('prOGG').src = prImagePath + 'ABC_Tomorrow2.ogv';
		document.getElementById('prWEBM').src = prImagePath + 'ABC_Tomorrow2.webm';
	}else if(prMonth == 3 && prDay == 9){
		document.getElementById('prMP4').src = prImagePath + 'ABC_Tonight2.mp4';
		document.getElementById('prOGG').src = prImagePath + 'ABC_Tonight2.ogv';
		document.getElementById('prWEBM').src = prImagePath + 'ABC_Tonight2.webm';
	}else {
		document.getElementById('prMP4').src = prImagePath + 'ABC_ReturnSun2.mp4';
		document.getElementById('prOGG').src = prImagePath + 'ABC_ReturnSun2.ogv';
		document.getElementById('prWEBM').src = prImagePath + 'ABC_ReturnSun2.webm';
	}*/
	//console.log('replay')
	//_pr_video = null;
	//console.log('nulled')

	//prSetupVideo('pr-video');
	//console.log('setup video')
	//_pr_video.play();
	prNewVideo(1);

/*	window.setTimeout(function(){


	_pr_video.load();

	window.setTimeout(function(){
		_pr_start = true;	
		_pr_ended = false;
		_pr_restarted = true;
		_pr_q1 = _pr_q2 = _pr_q3 = false;
		
		//change video source location here
		
		_pr_video.play();
	}, 100);	

	_pr_video.play();

	//_pr_q1 = _pr_q2 = _pr_q3 = false;
	prActivity(1007);
	//prNewVideo(1);
	//console.log('setup');
	//_pr_video.currentTime = 0;
	//_pr_video.play();

	},100);
*/			


}

function prCloseVideo(){
	document.getElementById('pr-panel-videoholder').style.marginLeft = '-100%';
	//document.getElementById('pr-panel-videoholder').style.display = 'none';
	document.getElementById('pr-panel-lightning').className = 'prStrike';
	//_pr_video.currentTime = 0;
	_pr_video.pause();
}

function prRotate() {
	//document.getElementById('pr-panel-flare').className = 'prRotate';
}

function prSmokeVanish()
{
	console.log('smoke vanishing');

	document.getElementById('myCanvas').style.marginTop = '-200px';
	document.getElementById('myCanvas').style.marginLeft = '-100px';
//	document.getElementById('myCanvas').style.opacity = '0';
	document.getElementById('myCanvas').style.transform = 'rotate(90deg)';
//	window.setTimeout(function(){
//		document.getElementById('myCanvas').style.display = 'none';
//	},5000)

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
