//PRE HACK
	var LOADED = false;

	var css1 = document.createElement('link');
	css1.id = 'css1';
	css1.rel = 'stylesheet';
	css1.href = 'https://speed-s.pointroll.com/PointRoll/Media/Asset/SCJohnson/174775/pr-styles.css';
	document.getElementsByTagName('head')[0].appendChild(css1);

	var appleMeta = document.createElement('meta');
	appleMeta.name = 'viewport';
	appleMeta.content = 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0';
	document.getElementsByTagName('head')[0].appendChild(appleMeta);

    var js1=document.createElement('script');
    js1.id='js1';
    js1.src='https://speed-s.pointroll.com/PointRoll/Media/Asset/SCJohnson/174775/pr-script.js';
    document.getElementsByTagName('head')[0].appendChild(js1);


//POST HACK
var PRPID='$_PR_SHORTIMPRESSIONID_REPLACE_$';
prwin.prajx=1;
                
function prZiploc_Facebook(){
    if (LOADED) {
        window.setTimeout(openPanel1, 250);
    } else {
        window.setTimeout(prZiploc_Facebook, 250);
    }
}

prwin.prAddEvent('pi', (function(z){
	if(z == '$_PR_SHORTIMPRESSIONID_REPLACE_$'){
		prInitAd();
	}
}));
 
if(typeof(prwin.prDQ) == 'undefined'){
	prwin.prAddEvent('prPost', prZiploc_Facebook);
}else{
	prZiploc_Facebook();
}