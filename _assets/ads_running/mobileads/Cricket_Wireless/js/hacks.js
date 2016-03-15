var PRPID='$_PR_SHORTIMPRESSIONID_REPLACE_$';
prwin.prajx=1;
                
function prCricket_300x250(){
	var css1 = document.createElement('link');
	css1.id = 'css1';
	css1.rel = 'stylesheet';
	css1.href = 'http://speed.pointroll.com/PointRoll/Media/Asset/AIOWireless/180288/pr-styles.css';
	document.getElementsByTagName('head')[0].appendChild(css1);
	
    var js1=document.createElement('script');
    js1.id='js1';
    js1.src='http://speed.pointroll.com/PointRoll/Media/Asset/AIOWireless/180288/pr-scripts.js';
    document.getElementsByTagName('head')[0].appendChild(js1);
}

prwin.prAddEvent('pi', (function(z){
	if(z == '$_PR_SHORTIMPRESSIONID_REPLACE_$'){
		prInitAd();
	}
}));
 
if(typeof(prwin.prDQ) == 'undefined'){
	prwin.prAddEvent('prPost', prCricket_300x250);
}else{
	prCricket_300x250();
}


//HACK FIX
document.getElementById('prw' + PRPID).setAttribute('style', 'height:0px !important;');
document.getElementById('prf' + PRPID).setAttribute('style', 'position:static; margin:auto !important;');
prBannerLoad();
function prBannerLoad(){
	if(document.getElementById('pr-wrapper')){
		document.getElementById('pr-wrapper').setAttribute('style', 'top:auto !important; left:auto !important;');
	}else{
		window.setTimeout(function(){
			prBannerLoad();
		},100)
	}
}

prBannerLoad();
function prBannerLoad(){
	if(document.getElementById('pr-wrapper')){
		document.getElementById('pr-wrapper').setAttribute('style', 'width:298px; height:248px;');
	}else{
		window.setTimeout(function(){
			prBannerLoad();
		},100)
	}
}