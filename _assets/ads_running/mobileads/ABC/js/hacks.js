var PRPID='$_PR_SHORTIMPRESSIONID_REPLACE_$';
//prwin.prajx=1;
                
function prOnceUpon_300x250(){
	var css1 = document.createElement('link');
	css1.id = 'css1';
	css1.rel = 'stylesheet';
	css1.href = 'http://speed.pointroll.com/PointRoll/Media/Asset/ABC/170339/pr-styles.css';
	document.getElementsByTagName('head')[0].appendChild(css1);
	
    var js1=document.createElement('script');
    js1.id='js1';
    js1.src='http://speed.pointroll.com/PointRoll/Media/Asset/ABC/170339/pr-scripts.js';
    document.getElementsByTagName('head')[0].appendChild(js1);

	document.getElementById('prw' + PRPID).style.height = '250px';
	//document.getElementById('prw' + PRPID).style.position = 'absolute';
	//document.getElementById('prw' + PRPID).style.top = '0px';
	//document.getElementById('prw' + PRPID).style.left = '50%';
	//document.getElementById('prw' + PRPID).style.marginLeft = '-150px';
}

prwin.prAddEvent('pi', (function(z){
	if(z == '$_PR_SHORTIMPRESSIONID_REPLACE_$'){
		prInitAd();
	}
}));
 
if(typeof(prwin.prDQ) == 'undefined'){
	prwin.prAddEvent('prPost', prOnceUpon_300x250);
}else{
	prOnceUpon_300x250();
}