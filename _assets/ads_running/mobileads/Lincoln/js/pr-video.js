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
				prActivity(prVideoActivity(1206));
			}else{
				console.log('video log: start ' + prVideoActivity(1206));
			}
		}else{
			if(_pr_ended){
				_pr_ended = false;
				_pr_q1 = _pr_q2 = _pr_q3 = false;
			
				if(_pr_track_video){
					prActivity(1007);
					prActivity(prVideoActivity(1206));
				}else{
					console.log('video log: replay 1007');
					console.log('video log: start ' + prVideoActivity(1206));
				}
			}else if(_pr_restarted){
				_pr_ended = false;
				_pr_restarted = false;
				_pr_q1 = _pr_q2 = _pr_q3 = false;
			
				if(_pr_track_video){
					prActivity(1003);
				}else{
					console.log('video log: restart 1003');
				}
			}else{
				if(_pr_track_video){
					prActivity(1001);
				}else{
					console.log('video log: play 1001');
				}
			}
		}
	});
	
	_pr_video.addEventListener('pause', function(event){
		if(_pr_percent != 100){
			if(_pr_track_video){
				prActivity(1002);
			}else{
				console.log('video log: pause 1002');
			}
		}
	});
	
	_pr_video.addEventListener('ended', function(event){
		_pr_ended = true;
		
		if(_pr_track_video){
			prActivity(prVideoActivity(204));
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
				prActivity(prVideoActivity(201));
			}else{
				console.log('video log: 25% complete ' + prVideoActivity(201));
			}
		}else if(!_pr_q2 && _pr_percent > 50){
			_pr_q1 = _pr_q2 = true;
			
			if(_pr_track_video){
				prActivity(prVideoActivity(202));
			}else{
				console.log('video log: 50% complete ' + prVideoActivity(202));
			}
		}else if(!_pr_q3 && _pr_percent > 75){
			_pr_q1 = _pr_q2 = _pr_q3 = true;
			
			if(_pr_track_video){
				prActivity(prVideoActivity(203));
			}else{
				console.log('video log: 75% complete ' + prVideoActivity(203));
			}
		}
	});
			
	_pr_video.addEventListener('volumechange', function(event){
		if(event.target.muted){
			if(!_pr_muted){
				if(_pr_track_video){
					prActivity(1004);
				}else{
					console.log('video log: mute 1004');
				}
						
				_pr_muted = true;
			}
		}else{
			if(_pr_muted){
				if(_pr_track_video){
					prActivity(1005);
				}else{
					console.log('video log: unmute 1005');
				}
						
				_pr_muted = false;
			}
		}
	});
	
	_pr_video.addEventListener('webkitendfullscreen', function(event){
		if(_pr_track_video){
			prActivity(1010);
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
