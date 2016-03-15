///////////////WAP PRE///////////

var js0 = document.createElement('script');
js0.id = 'js0';
js0.src = prSSL('http://media.admob.com/api/v1/google_mobile_app_ads.js');
document.getElementsByTagName('head')[0].appendChild(js0);

var prLOADED = true;

function prSSL(url){
  var _pr_url_types = ['cdds', 'cgizmo', 'smq', 'smqd', 'speed', 'spd',];

  if(document.location.protocol == 'https:'){
    for(var i = 0; i < _pr_url_types.length; i++){
      if(url.search(_pr_url_types[i]) != -1){
        url = url.replace('http://' + _pr_url_types[i], 'https://' + _pr_url_types[i] + '-s');
      }
    }
  
  if(url.search('clients.pointroll') != -1){
    url = url.replace('http://', 'https://'); 
  }

    if(url.search('pointroll') == -1){
      url = url.replace('http://', 'https://');
    }

    if(url.search('css') != -1 && url.search('pointroll') != -1){
      url = url.replace('.css', '-ssl.css');
    }
  }

  return url;
}

var css2 = document.createElement('link');
css2.id = 'css2';
css2.rel = 'stylesheet';
css2.href = prSSL('http://fonts.googleapis.com/css?family=Roboto');
document.getElementsByTagName('head')[0].appendChild(css2); 

var css1 = document.createElement('link');
css1.id = 'css1';
css1.rel = 'stylesheet';
css1.href = prSSL('http://speed.pointroll.com/PointRoll/Media/Asset/LandRover/195634/pr-styles.css');
document.getElementsByTagName('head')[0].appendChild(css1); 




/////////////WAP POST////////////
prwin.prajx=1;
PRPID='$_PR_SHORTIMPRESSIONID_REPLACE_$';

function prAdReady320x50(){

var js2 = document.createElement('script');
js2.id = 'js2';
js2.src = prSSL('http://speed.pointroll.com/PointRoll/Media/Asset/LandRover/195634/pr-scripts.js');
prwin.document.getElementsByTagName('head')[0].appendChild(js2);

  if(prLOADED){
      //prInitAd();
  }else{
    window.setTimeout(prAdReady320x50, 150);
  }
}

prwin.prAddEvent('pi',(function(z){
  if (z == '$_PR_SHORTIMPRESSIONID_REPLACE_$'){
    prInitAd();
  }
}));

if(typeof(prwin.prDQ) == 'undefined'){
  prwin.prAddEvent('prPost', prAdReady320x50);
}else{
  prAdReady320x50();
}
