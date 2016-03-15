var PRPID='$_PR_SHORTIMPRESSIONID_REPLACE_$';
prwin.prajx=1;

	document.getElementById('prw' + PRPID).style.position = 'absolute';
	document.getElementById('prw' + PRPID).style.top = '0px';
	document.getElementById('prw' + PRPID).style.left = '50%';
	document.getElementById('prw' + PRPID).style.width = '320px';
	document.getElementById('prw' + PRPID).style.height = '50px';
	document.getElementById('prw' + PRPID).style.marginLeft = '-160px';
	document.getElementById('prw' + PRPID).style.display = 'block';

            
function prFordFusion_320x50_Adhesion(){
	var css1 = document.createElement('link');
	css1.id = 'css1';
	css1.rel = 'stylesheet';
	css1.href = 'http://speed.pointroll.com/PointRoll/Media/Asset/Ford/167058/pr-styles.css';
	document.getElementsByTagName('head')[0].appendChild(css1);
	
    var js1=document.createElement('script');
    js1.id='js1';
    js1.src='http://speed.pointroll.com/PointRoll/Media/Asset/Ford/167058/pr-scripts.js';
    document.getElementsByTagName('head')[0].appendChild(js1);
}

prwin.prAddEvent('pi', (function(z){
	if(z == '$_PR_SHORTIMPRESSIONID_REPLACE_$'){
		prInitAd();
	}
}));
 
if(typeof(prwin.prDQ) == 'undefined'){
	prwin.prAddEvent('prPost', prFordFusion_320x50_Adhesion);
}else{
	prFordFusion_320x50_Adhesion();
}