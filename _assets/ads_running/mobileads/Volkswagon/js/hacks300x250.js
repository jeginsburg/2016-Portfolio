//var PRPID300x250='$_PR_SHORTIMPRESSIONID_REPLACE_$';
prwin.prajx=1;
                
function prVW_300x250(){
	var css1 = document.createElement('link');
	css1.id = 'css1';
	css1.rel = 'stylesheet';
	css1.href = 'http://speed.pointroll.com/PointRoll/Media/Asset/Volkswagen/169056/pr-styles.css';
	document.getElementsByTagName('head')[0].appendChild(css1);
	
//    var js1=document.createElement('script');
//    js1.id='js1';
//    js1.src='http://speed.pointroll.com/PointRoll/Media/Asset/Volkswagen/169056/pr-scripts.js';
//    document.getElementsByTagName('head')[0].appendChild(js1);
}

prwin.prAddEvent('pi', (function(z){
	if(z == '$_PR_SHORTIMPRESSIONID_REPLACE_$'){
		//prInitExpanded();
	}
}));
 
if(typeof(prwin.prDQ) == 'undefined'){
	prwin.prAddEvent('prPost', prVW_300x250);
}else{
	prVW_300x250();
}