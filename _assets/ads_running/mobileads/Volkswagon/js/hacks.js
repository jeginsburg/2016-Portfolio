prwin.PRPID='$_PR_SHORTIMPRESSIONID_REPLACE_$';
prwin.prajx=1;

function prVW_970x66(){
	var css1 = document.createElement('link');
	css1.id = 'css1';
	css1.rel = 'stylesheet';
	css1.href = 'http://speed.pointroll.com/PointRoll/Media/Asset/Volkswagen/169056/pr-styles.css';
	parent.document.getElementsByTagName('head')[0].appendChild(css1);
	
    var js1=document.createElement('script');
    js1.id='js1';
    js1.src='http://media.pointroll.com/PointRoll/Media/Asset/Volkswagen/169056/pr-scripts.js';
    parent.document.getElementsByTagName('head')[0].appendChild(js1);

	//parent.document.getElementById('prw' + prwin.PRPID).style.position = 'absolute';
	parent.document.getElementById('prw' + prwin.PRPID).style.top = '0px';
	parent.document.getElementById('prw' + prwin.PRPID).style.left = '50%';
	parent.document.getElementById('prw' + prwin.PRPID).style.height = '66px';
	parent.document.getElementById('prw' + prwin.PRPID).style.marginLeft = '0px';
	parent.document.getElementById('prw' + prwin.PRPID).style.marginTop = '0px';
	parent.document.getElementById('prw' + prwin.PRPID).style.background = '#eaf0f4';

	console.log('open listener');
}

prwin.prAddEvent('pi', (function(z){
	if(z == '$_PR_SHORTIMPRESSIONID_REPLACE_$'){
		prInitAd();
	}
}));
 
if(typeof(prwin.prDQ) == 'undefined'){
	prwin.prAddEvent('prPost', prVW_970x66);
}else{
	prVW_970x66();
}