var jgMobileMenu = false;
var noImages;
var imageCounter = 1;
var UIDName;
var WEBName;
var MOBName;

function jgCheckLoad(){
	if(document.getElementById('lastElement')){
		jgInit();
	}else{
		window.setTimeout(function(){
			jgCheckLoad();
		}, 100)
	}
}

jgCheckLoad();

function jgInit(){
	console.log('init jg site');

	document.getElementById('mobileNav').addEventListener('click', mobileMenuToggle);

	window.setTimeout(function(){
		document.getElementById('logo').style.opacity = '1';
	}, 300)

	window.setTimeout(function(){
		document.getElementById('desktopNav').style.opacity = '1';
		document.getElementById('desktopNav').style.marginRight = '3%';
		document.getElementById('mobileNav').style.opacity = '1';
		document.getElementById('mobileNav').style.marginRight = '15px';
	}, 600)

	try{jgInitExperience();}catch(e){}
	try{jgInitUIDesign();}catch(e){}
	try{jgInitWebDev();}catch(e){}
	try{jgInitMobileAds();}catch(e){}
}

//UI DESIGN FUNCTIONS
function jgInitUIDesign(){
	console.log('init ui design');

	document.getElementById('uidesign-1').addEventListener('click', function(){jgChooseUID('Bayada')});
	document.getElementById('uidesign-2').addEventListener('click', function(){jgChooseUID('SleepSolutions')});
	document.getElementById('uidesign-3').addEventListener('click', function(){jgChooseUID('GSKHub')});
	document.getElementById('uidesign-4').addEventListener('click', function(){jgChooseUID('GSInternal')});
	document.getElementById('uidesign-5').addEventListener('click', function(){jgChooseUID('Kennyetto')});
	document.getElementById('uidesign-6').addEventListener('click', function(){jgChooseUID('MyPhi')});
	document.getElementById('uidesign-7').addEventListener('click', function(){jgChooseUID('RoyalPalm')});
	document.getElementById('uidesign-8').addEventListener('click', function(){jgChooseUID('Tux')});
	UIDClose();

	document.getElementById('uidClose').addEventListener('click', UIDClose);
}

function jgChooseUID(name){
	console.log(name);

	UIDName = name;

	document.getElementById('uidesign-1').style.opacity = '0';
	document.getElementById('uidesign-2').style.opacity = '0';
	document.getElementById('uidesign-3').style.opacity = '0';
	document.getElementById('uidesign-4').style.opacity = '0';
	document.getElementById('uidesign-5').style.opacity = '0';
	document.getElementById('uidesign-6').style.opacity = '0';
	document.getElementById('uidesign-7').style.opacity = '0';
	document.getElementById('uidesign-8').style.opacity = '0';

	window.setTimeout(function(){
		document.getElementById('uidesign-1').style.display = 'none';
		document.getElementById('uidesign-2').style.display = 'none';
		document.getElementById('uidesign-3').style.display = 'none';
		document.getElementById('uidesign-4').style.display = 'none';
		document.getElementById('uidesign-5').style.display = 'none';
		document.getElementById('uidesign-6').style.display = 'none';
		document.getElementById('uidesign-7').style.display = 'none';
		document.getElementById('uidesign-8').style.display = 'none';
	}, 400)

	switch(name){
		case 'Bayada':
			document.getElementById('jgUIDTitle').innerHTML = 'Bayada Home Health Care';
			document.getElementById('jgUIDContent').innerHTML = 'This project involved creating an employee portal in which users could locate local offices for medical care. The screenshot shown is a mockup of the detail page for a given office, after it had come up during a search.';
			document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + name + '.jpg) center no-repeat';
			document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgUIDPrev').style.opacity = '0';
			document.getElementById('jgUIDNext').style.opacity = '0';
			break;
		case 'SleepSolutions':
			document.getElementById('jgUIDTitle').innerHTML = 'Sleep Solutions';
			document.getElementById('jgUIDContent').innerHTML = 'Sleep Solutions needed a specific design intended for an iPad display. They required a medical aid application that tracks patients, their test results, and appointments. The application also aided in recording the efficacy of a given medication as well as sleep trials that are being conducted.';
			document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + name + '.jpg) center no-repeat';
			document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgUIDPrev').style.opacity = '0';
			document.getElementById('jgUIDNext').style.opacity = '0';
			break;
		case 'GSKHub':
			document.getElementById('jgUIDTitle').innerHTML = 'GSK';
			document.getElementById('jgUIDContent').innerHTML = 'GSK needed a Sharepoint based employee resource portal. The GSK portal needed to accommodate news, links and videos to showcase top-rated ad content as well as their own video-based announcements.';
			document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + name + '.jpg) center no-repeat';
			document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgUIDPrev').style.opacity = '0';
			document.getElementById('jgUIDNext').style.opacity = '0';
			break;
		case 'GSInternal':
			document.getElementById('jgUIDTitle').innerHTML = 'Greek Solutions Internal';
			document.getElementById('jgUIDContent').innerHTML = 'The main interface for Greek Solutions is the student-focused internal portal. College organizations use this portal to manage members, finances, recruitment, as well as their external website and a host of other features. We also created a mobile and tablet version of the portal due to the popularity of these devices with a younger demographic.';
			document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + name + '.jpg) center no-repeat';
			document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgUIDButton1').innerHTML = 'Desktop Site';
			document.getElementById('button1Link').setAttribute('href', 'http://www.greek-solutions.com');
			document.getElementById('jgUIDPrev').style.opacity = '0';
			document.getElementById('jgUIDNext').style.opacity = '0';
			break;
		case 'Kennyetto':
			document.getElementById('jgUIDTitle').innerHTML = 'Kennyetto';
			document.getElementById('jgUIDContent').innerHTML = 'Creating a web-based shopping solution for Kennyetto was easier said than done as their company required the management of complex and customizable products. Their portal streamlined the ordering process to increase sales and customer satisfaction by providing an accurate portrayal of their order. The screens pictured to the left detail how a customer uses the application as well as their account details.';
			document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + name + '1.jpg) center no-repeat';
			document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = true;
			noImages = 6;
			document.getElementById('jgUIDPrev').addEventListener('click', PrevClick);
			document.getElementById('jgUIDNext').addEventListener('click', NextClick);
			break;
		case 'MyPhi':
			document.getElementById('jgUIDTitle').innerHTML = 'My Phi';
			document.getElementById('jgUIDContent').innerHTML = 'Beautiful design and the ability to work in multiple languages are the main focus of the MyPhi project. Their information also required the need to display a large amount of content on mobile devices, which proved to be a unique challenge that I was able to complete.';
			document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + name + '1.jpg) center no-repeat';
			document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = true;
			noImages = 2;
			document.getElementById('jgUIDPrev').addEventListener('click', PrevClick);
			document.getElementById('jgUIDNext').addEventListener('click', NextClick);
			break;
		case 'RoyalPalm':
			document.getElementById('jgUIDTitle').innerHTML = 'Royal Palm';
			document.getElementById('jgUIDContent').innerHTML = 'Royal Palm required a system that could track employee’s completed work and help them keep on schedule. The mockups you see here include their general dashboard as well as various account and task management screens.';
			document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + name + '1.jpg) center no-repeat';
			document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = true;
			noImages = 4;
			document.getElementById('jgUIDPrev').addEventListener('click', PrevClick);
			document.getElementById('jgUIDNext').addEventListener('click', NextClick);
			break;
		case 'Tux':
			document.getElementById('jgUIDTitle').innerHTML = 'National Tuxedo';
			document.getElementById('jgUIDContent').innerHTML = 'National Tuxedo needed a full website where users could view, rent, and order tuxedos. In addition to ordering tuxedos, the site also needed to support wedding parties. The groomsmen were tracked when they had ordered their suit and had gotten fitted. The screens show the tuxedo builder page as well as the wedding party manager and checkout process.';
			document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + name + '1.jpg) center no-repeat';
			document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = true;
			noImages = 7;
			document.getElementById('jgUIDPrev').addEventListener('click', PrevClick);
			document.getElementById('jgUIDNext').addEventListener('click', NextClick);
			break;
	}

	document.getElementById('jgLeftColumn').style.display = 'block';
	document.getElementById('jgRightColumn').style.display = 'block';

	window.setTimeout(function(){
		document.getElementById('jgLeftColumn').style.opacity = '1';
		document.getElementById('jgLeftColumn').style.width = '25%';
	}, 400)

	window.setTimeout(function(){
		document.getElementById('jgUIDTitle').style.opacity = '1';
		window.setTimeout(function(){
			document.getElementById('jgUIDContent').style.opacity = '1';
		}, 300)
		window.setTimeout(function(){
			if(jgButtonOne){document.getElementById('jgUIDButton1').style.opacity = '1';}
			if(jgButtonTwo){document.getElementById('jgUIDButton2').style.opacity = '1';}
		}, 600)
	}, 1000)

	window.setTimeout(function(){
		document.getElementById('jgRightColumn').style.opacity = '1';
		document.getElementById('jgRightColumn').style.height = '400px';
	}, 1400)

	window.setTimeout(function(){
		if(jgSlideshow){
			document.getElementById('jgUIDPrev').style.opacity = '1';
			document.getElementById('jgUIDNext').style.opacity = '1';			
		}
		document.getElementById('uidClose').style.opacity = '1';
		document.getElementById('jgUIDImage').style.opacity = '1';
	}, 2000)


	document.getElementById('uidClose').addEventListener('click', UIDClose);
}

// WEB DEVELOPMENT FUNCTIONS
function jgInitWebDev(){
	console.log('init web development');

	document.getElementById('webdev-1').addEventListener('click', function(){jgChooseWEB('GSCorporate')});
	document.getElementById('webdev-2').addEventListener('click', function(){jgChooseWEB('HouseholdStaffing')});
	document.getElementById('webdev-3').addEventListener('click', function(){jgChooseWEB('PurpleLion')});
	document.getElementById('webdev-4').addEventListener('click', function(){jgChooseWEB('Autosport')});
	document.getElementById('webdev-5').addEventListener('click', function(){jgChooseWEB('Kellys')});
	document.getElementById('webdev-6').addEventListener('click', function(){jgChooseWEB('TraceGift')});
	document.getElementById('webdev-7').addEventListener('click', function(){jgChooseWEB('STS')});
	document.getElementById('webdev-8').addEventListener('click', function(){jgChooseWEB('BethShalom')});
	document.getElementById('webdev-9').addEventListener('click', function(){jgChooseWEB('Hotwire')});
	WEBClose();

	document.getElementById('webClose').addEventListener('click', WEBClose);
}

function jgChooseWEB(name){
	console.log(name);

	WEBName = name;

	document.getElementById('webdev-1').style.opacity = '0';
	document.getElementById('webdev-2').style.opacity = '0';
	document.getElementById('webdev-3').style.opacity = '0';
	document.getElementById('webdev-4').style.opacity = '0';
	document.getElementById('webdev-5').style.opacity = '0';
	document.getElementById('webdev-6').style.opacity = '0';
	document.getElementById('webdev-7').style.opacity = '0';
	document.getElementById('webdev-8').style.opacity = '0';
	document.getElementById('webdev-9').style.opacity = '0';

	window.setTimeout(function(){
		document.getElementById('webdev-1').style.display = 'none';
		document.getElementById('webdev-2').style.display = 'none';
		document.getElementById('webdev-3').style.display = 'none';
		document.getElementById('webdev-4').style.display = 'none';
		document.getElementById('webdev-5').style.display = 'none';
		document.getElementById('webdev-6').style.display = 'none';
		document.getElementById('webdev-7').style.display = 'none';
		document.getElementById('webdev-8').style.display = 'none';
		document.getElementById('webdev-9').style.display = 'none';
	}, 400)

	switch(name){
		case 'GSCorporate':
			document.getElementById('jgWEBTitle').innerHTML = 'Greek Solutions Corporate';
			document.getElementById('jgWEBContent').innerHTML = 'Shown here is the front-facing website for the Greek Solutions Chapter Management product. The goal of the site was to provide an external face so that both prospective organizations and users would be able to see of what our internal system was capable.';
			document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + name + '.jpg) center no-repeat';
			document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgWEBButton1').innerHTML = 'Visit Site';
			document.getElementById('button1Link').setAttribute('href', 'http://www.greek-solutions.com');
			document.getElementById('jgWEBPrev').style.opacity = '0';
			document.getElementById('jgWEBNext').style.opacity = '0';
			break;
		case 'HouseholdStaffing':
			document.getElementById('jgWEBTitle').innerHTML = 'Household Staffing';
			document.getElementById('jgWEBContent').innerHTML = 'Household Staffing requested for us to rebrand their site by updating the format and design. The rebranding also allowed us to better help users in finding and placing adult care providers.';
			document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + name + '.jpg) center no-repeat';
			document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgWEBButton1').innerHTML = 'Visit Site';
			document.getElementById('button1Link').setAttribute('href', 'https://www.householdstaffing.com/');
			document.getElementById('jgWEBPrev').style.opacity = '0';
			document.getElementById('jgWEBNext').style.opacity = '0';
			break;
		case 'PurpleLion':
			document.getElementById('jgWEBTitle').innerHTML = 'Purple Lion';
			document.getElementById('jgWEBContent').innerHTML = 'Purple Lion is the corporate umbrella under which Greek Solutions sits. While Greek Solutions is one product, Purple Lion has also completed custom web development projects and we wanted a site that would appeal to a more diverse audience.';
			document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + name + '.png) center no-repeat';
			document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgWEBButton1').innerHTML = 'Visit Site';
			document.getElementById('button1Link').setAttribute('href', 'http://www.purpleliondesign.com/lion/');
			document.getElementById('jgWEBPrev').style.opacity = '0';
			document.getElementById('jgWEBNext').style.opacity = '0';
			break;
		case 'Autosport':
			document.getElementById('jgWEBTitle').innerHTML = 'Autosport';
			document.getElementById('jgWEBContent').innerHTML = 'Autosport is a car reseller specializing in refurbished vintage cars and memorabilia. They needed a rebranded site, as well as new functionality. When we updated the site we allowed customers to easily search for cars as well as find out general information about the products Autosport offers.';
			document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + name + '1.jpg) center no-repeat';
			document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = true;
			noImages = 6;
			document.getElementById('jgWEBButton1').innerHTML = 'Visit Site';
			document.getElementById('button1Link').setAttribute('href', 'http://www.autosportdesigns.com/');
			document.getElementById('jgWEBPrev').addEventListener('click', PrevClick);
			document.getElementById('jgWEBNext').addEventListener('click', NextClick);
			break;
		case 'Kellys':
			document.getElementById('jgWEBTitle').innerHTML = 'Kelly Sports';
			document.getElementById('jgWEBContent').innerHTML = 'Kelly Sports needed a web store focusing on selling team apparel and clothing to high school teams. Their site now has functionality which players, coaches and parents can all utilize. While shopping they can choose which type of sports gear the need, which logos they would like to use, and a required ship date.';
			document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + name + '1.jpg) center no-repeat';
			document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = true;
			noImages = 6;
			document.getElementById('jgWEBButton1').innerHTML = 'Visit Site';
			document.getElementById('button1Link').setAttribute('href', 'https://kellysteamstores.com/Kellys/Products.aspx');
			document.getElementById('jgWEBPrev').addEventListener('click', PrevClick);
			document.getElementById('jgWEBNext').addEventListener('click', NextClick);
			break;
		case 'TraceGift':
			document.getElementById('jgWEBTitle').innerHTML = 'TRACE International';
			document.getElementById('jgWEBContent').innerHTML = 'TRACE International requested a portal which allows them to track candidates for potential employment during the vetting process. The system we designed required sections for user management, interview results and other relevant information. The portal shown here was created to track corporate gifts and expenses.';
			document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + name + '1.jpg) center no-repeat';
			document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = true;
			noImages = 3;
			document.getElementById('jgWEBButton1').innerHTML = 'Visit Site';
			document.getElementById('button1Link').setAttribute('href', 'https://tracnumber.com/StaticPages/Languages.aspx');
			document.getElementById('jgWEBPrev').addEventListener('click', PrevClick);
			document.getElementById('jgWEBNext').addEventListener('click', NextClick);
			break;
		case 'STS':
			document.getElementById('jgWEBTitle').innerHTML = 'STS Tire';
			document.getElementById('jgWEBContent').innerHTML = 'STS Tire needed a rebranding as well as building additional content onto their previously existing site. As a seller of tires and auto services, they needed for customers to be able to browse tire options, schedule maintenance appointments and pay for products with a full checkout process.';
			document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + name + '1.jpg) center no-repeat';
			document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = true;
			noImages = 3;
			document.getElementById('jgWEBButton1').innerHTML = 'Visit Site';
			document.getElementById('button1Link').setAttribute('href', 'http://www.ststire.com/index.php');
			document.getElementById('jgWEBPrev').addEventListener('click', PrevClick);
			document.getElementById('jgWEBNext').addEventListener('click', NextClick);
			break;
		case 'BethShalom':
			document.getElementById('jgWEBTitle').innerHTML = 'Beth Shalom';
			document.getElementById('jgWEBContent').innerHTML = 'Beth Shalom needed a fully functional website, but also needed to have certain information behind a protected membership wall. All information needed to be editable and included everything from basic page content to fully customizable lists, calendars and images. The administrators also needed the ability to see and then either approve or reject new users.';
			document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + name + '.png) center no-repeat';
			document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgWEBButton1').innerHTML = 'Visit Site';
			document.getElementById('button1Link').setAttribute('href', 'http://bethshalomnc.org/');
			document.getElementById('jgWEBPrev').style.opacity = '0';
			document.getElementById('jgWEBNext').style.opacity = '0';
			break;
		case 'Hotwire':
			document.getElementById('jgWEBTitle').innerHTML = 'Hotwire Communications';
			document.getElementById('jgWEBContent').innerHTML = 'Hotwire Communications does a lot of work that involves its customers needing to know the schedule of work.  This is a proof of concept of a mini-site that would be used for each property they serviced.  The information here would include information about the services offered, as a well as an interactive map of the property in question with information about the progress of the work.  Given that it is a proof of concept, not all links are functional.';
			document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + name + '.jpg) center no-repeat';
			document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgWEBButton1').innerHTML = 'Visit Site';
			document.getElementById('button1Link').setAttribute('href', 'http://jginsburg.com/web/Hotwire/events.html');
			document.getElementById('jgWEBPrev').style.opacity = '0';
			document.getElementById('jgWEBNext').style.opacity = '0';
			break;
	}

	document.getElementById('jgLeftColumn').style.display = 'block';
	document.getElementById('jgRightColumn').style.display = 'block';

	window.setTimeout(function(){
		document.getElementById('jgLeftColumn').style.opacity = '1';
		document.getElementById('jgLeftColumn').style.width = '25%';
	}, 400)

	window.setTimeout(function(){
		document.getElementById('jgWEBTitle').style.opacity = '1';
		window.setTimeout(function(){
			document.getElementById('jgWEBContent').style.opacity = '1';
		}, 300)
		window.setTimeout(function(){
			if(jgButtonOne){document.getElementById('jgWEBButton1').style.opacity = '1';}
			if(jgButtonTwo){document.getElementById('jgWEBButton2').style.opacity = '1';}
		}, 600)
	}, 1000)

	window.setTimeout(function(){
		document.getElementById('jgRightColumn').style.opacity = '1';
		document.getElementById('jgRightColumn').style.height = '400px';
	}, 1400)

	window.setTimeout(function(){
		if(jgSlideshow){
			document.getElementById('jgWEBPrev').style.opacity = '1';
			document.getElementById('jgWEBNext').style.opacity = '1';			
		}
		document.getElementById('webClose').style.opacity = '1';
		document.getElementById('jgWEBImage').style.opacity = '1';
	}, 2000)


	document.getElementById('webClose').addEventListener('click', WEBClose);
}

// MOBILE ADS FUNCTIONS
function jgInitMobileAds(){
	console.log('init mobile ads');

	document.getElementById('mobile-1').addEventListener('click', function(){jgChooseMOB('ABC')});
	document.getElementById('mobile-2').addEventListener('click', function(){jgChooseMOB('Cricket')});
	document.getElementById('mobile-3').addEventListener('click', function(){jgChooseMOB('LandRover')});
	document.getElementById('mobile-4').addEventListener('click', function(){jgChooseMOB('Ford')});
	document.getElementById('mobile-5').addEventListener('click', function(){jgChooseMOB('Lincoln')});
	document.getElementById('mobile-6').addEventListener('click', function(){jgChooseMOB('LivingSocial')});
	document.getElementById('mobile-7').addEventListener('click', function(){jgChooseMOB('Volkswagon')});
	document.getElementById('mobile-8').addEventListener('click', function(){jgChooseMOB('Ziploc')});
	document.getElementById('mobile-9').addEventListener('click', function(){jgChooseMOB('HRBlock')});
	document.getElementById('mobile-10').addEventListener('click', function(){jgChooseMOB('Patron')});
	MOBClose();

	document.getElementById('mobClose').addEventListener('click', MOBClose);
}

function jgChooseMOB(name){
	console.log(name);

	MOBName = name;

	document.getElementById('mobile-1').style.opacity = '0';
	document.getElementById('mobile-2').style.opacity = '0';
	document.getElementById('mobile-3').style.opacity = '0';
	document.getElementById('mobile-4').style.opacity = '0';
	document.getElementById('mobile-5').style.opacity = '0';
	document.getElementById('mobile-6').style.opacity = '0';
	document.getElementById('mobile-7').style.opacity = '0';
	document.getElementById('mobile-8').style.opacity = '0';
	document.getElementById('mobile-9').style.opacity = '0';
	document.getElementById('mobile-10').style.opacity = '0';

	window.setTimeout(function(){
		document.getElementById('mobile-1').style.display = 'none';
		document.getElementById('mobile-2').style.display = 'none';
		document.getElementById('mobile-3').style.display = 'none';
		document.getElementById('mobile-4').style.display = 'none';
		document.getElementById('mobile-5').style.display = 'none';
		document.getElementById('mobile-6').style.display = 'none';
		document.getElementById('mobile-7').style.display = 'none';
		document.getElementById('mobile-8').style.display = 'none';
		document.getElementById('mobile-9').style.display = 'none';
		document.getElementById('mobile-10').style.display = 'none';
	}, 400)

	switch(name){
		case 'ABC':
			document.getElementById('jgMOBTitle').innerHTML = 'ABC - Once Upon A Time';
			document.getElementById('jgMOBContent').innerHTML = 'This was a mobile polite unit. The client had a trailer for the show and wanted to match the animation style with a few of the visual effects in the trailer, such as the smoke and lightning effects.';
			document.getElementById('jgMOBImage').innerHTML = "<iframe id='ad-frame-abc' align='middle' width='100%' height='250' border='0' scrolling='no' src='http://jginsburg.com/mobileads/ABC/index.html'></iframe>";
			document.getElementById('jgMOBImage').style.background = "";
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
		case 'Cricket':
			document.getElementById('jgMOBTitle').innerHTML = 'Cricket Wireless';
			document.getElementById('jgMOBContent').innerHTML = 'This creative has two parts, with the first portion being animation, which matches the style of the commercials. The second aspect of the creative is a store locator, which grabs the zip code of where the ad is being viewed and then uses it to return the closest store.';
			document.getElementById('jgMOBImage').innerHTML = "<iframe id='ad-frame-abc' align='middle' width='100%' height='250' border='0' scrolling='no' src='http://jginsburg.com/mobileads/Cricket_Wireless/index.html'></iframe>";
			document.getElementById('jgMOBImage').style.background = "";
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
		case 'LandRover':
			document.getElementById('jgMOBTitle').innerHTML = 'Land Rover';
			document.getElementById('jgMOBContent').innerHTML = 'Land Rover utilizes DCO and AdControl, two proprietary products that generate a JSON feed. My creative uses this feed to populate the unit. The feeds return information such as the car model, price, legal terms and copy. Based these returns, the colors, models and wheel types change.';
			document.getElementById('jgMOBImage').innerHTML = "<iframe id='ad-frame-abc' align='middle' width='100%' height='350' border='0' scrolling='no' src='http://jginsburg.com/mobileads/LandRover/index.html'></iframe>";
			document.getElementById('jgMOBImage').style.background = "";
			var jgButtonOne = false;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
		case 'Ford':
			document.getElementById('jgMOBTitle').innerHTML = 'Ford Fusion';
			document.getElementById('jgMOBContent').innerHTML = 'Ford Fusion had an existing video, but wanted the clickable ad afterwards to mimic the end frame. Their layout also had to change based on whether it is viewed in portrait or in landscape. You can view the ad and rotate your device by clicking the button below.';
			document.getElementById('jgMOBImage').innerHTML = "<iframe id='ad-frame-abc' align='middle' width='100%' height='350' border='0' scrolling='no' src='http://jginsburg.com/mobileads/Ford/index.html'></iframe>";
			document.getElementById('jgMOBImage').style.background = "";
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBButton1').innerHTML = 'View Ad';
			document.getElementById('button1Link').setAttribute('href', 'http://jginsburg.com/mobileads/Ford/index.html');
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
		case 'Lincoln':
			document.getElementById('jgMOBTitle').innerHTML = 'Lincoln MKC';
			document.getElementById('jgMOBContent').innerHTML = 'This creative ran specifically on iPad. When users saw the panel, they could rotate the car by swiping, which would display informational pieces about the car model and also change the color of the car they were viewing.';
			document.getElementById('jgMOBImage').style.background = 'url(images/mobileads/' + name + '.jpg) center no-repeat';
			document.getElementById('jgMOBImage').style.backgroundSize = 'contain';
			document.getElementById('jgMOBImage').innerHTML = '';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBButton1').innerHTML = 'View Ad';
			document.getElementById('button1Link').setAttribute('href', 'http://jginsburg.com/mobileads/Lincoln/index.html');
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
		case 'LivingSocial':
			document.getElementById('jgMOBTitle').innerHTML = 'Living Social';
			document.getElementById('jgMOBContent').innerHTML = "This unit is a creative that ran before Valentine's Day. A user would select a few options to the questions, and then, based on their answer, the unit communicated with the Living Social API and returned a JSON feed of events. The unit then takes that information and populates a graphic with all the deals that the user can view and select.";
			document.getElementById('jgMOBImage').style.background = 'url(images/mobileads/' + name + '.jpg) center no-repeat';
			document.getElementById('jgMOBImage').style.backgroundSize = 'contain';
			document.getElementById('jgMOBImage').innerHTML = '';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBButton1').innerHTML = 'View Ad';
			document.getElementById('button1Link').setAttribute('href', 'http://jginsburg.com/mobileads/Living_Social/index.html');
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
		case 'Volkswagon':
			document.getElementById('jgMOBTitle').innerHTML = 'Volkswagon';
			document.getElementById('jgMOBContent').innerHTML = "This was an exapandable unit, of which the first portion is an animated car driving in the frame. Afterwards, on click, the unit expands to a larger view in which the customer would view one of three videos.";
			document.getElementById('jgMOBImage').style.background = 'url(images/mobileads/' + name + '.jpg) center no-repeat';
			document.getElementById('jgMOBImage').style.backgroundSize = 'contain';
			document.getElementById('jgMOBImage').innerHTML = '';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBButton1').innerHTML = 'View Ad';
			document.getElementById('button1Link').setAttribute('href', 'http://jginsburg.com/mobileads/Volkswagon/index.html');
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
		case 'Ziploc':
			document.getElementById('jgMOBTitle').innerHTML = 'Ziploc';
			document.getElementById('jgMOBContent').innerHTML = "This ad, which appeared on Facebook last summer, was reached by a user clicking on the ad within Facebook itself. Once the ad expanded, the user can get tips, take a small quiz and click out to view informative sites.";
			document.getElementById('jgMOBImage').style.background = 'url(images/mobileads/' + name + '.jpg) center no-repeat';
			document.getElementById('jgMOBImage').style.backgroundSize = 'contain';
			document.getElementById('jgMOBImage').innerHTML = '';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBButton1').innerHTML = 'View Ad';
			document.getElementById('button1Link').setAttribute('href', 'http://jginsburg.com/mobileads/Ziploc/index.html');
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
		case 'HRBlock':
			document.getElementById('jgMOBTitle').innerHTML = 'H & R Block';
			document.getElementById('jgMOBContent').innerHTML = "This creative unit utilized AdControl, a web service, to alter both the animation and messaging across a variety of sizes.  This ad also has javascript code that accounts for any content and sizing.";
			document.getElementById('jgMOBImage').style.background = 'url(images/mobileads/' + name + '.jpg) center no-repeat';
			document.getElementById('jgMOBImage').style.backgroundSize = 'contain';
			document.getElementById('jgMOBImage').innerHTML = '';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBButton1').innerHTML = 'View Ad';
			document.getElementById('button1Link').setAttribute('href', 'http://jginsburg.com/mobileads/HRBlock/index.html');
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
		case 'Patron':
			document.getElementById('jgMOBTitle').innerHTML = 'Patrón Tequila';
			document.getElementById('jgMOBContent').innerHTML = 'This utilized both video as well as having a voting element. Once the initial animation plays, each of the possible cocktail options scrolls through, and clicking on any of them would send off a voting pixel as well as taking the user to the vote received page.  The voting pixel was an assembled URL based on data set when a particular drink was selected.';
			document.getElementById('jgMOBImage').style.background = 'url(images/mobileads/' + name + '.png) center no-repeat';
			var jgButtonOne = true;
			var jgButtonTwo = false;
			var jgSlideshow = false;
			document.getElementById('jgMOBButton1').innerHTML = 'View Ad';
			document.getElementById('button1Link').setAttribute('href', 'http://jginsburg.com/mobileads/Patron/index.html');
			document.getElementById('jgMOBPrev').style.opacity = '0';
			document.getElementById('jgMOBNext').style.opacity = '0';
			break;
	}

	document.getElementById('jgLeftColumn').style.display = 'block';
	document.getElementById('jgRightColumn').style.display = 'block';

	window.setTimeout(function(){
		document.getElementById('jgLeftColumn').style.opacity = '1';
		document.getElementById('jgLeftColumn').style.width = '25%';
	}, 400)

	window.setTimeout(function(){
		document.getElementById('jgMOBTitle').style.opacity = '1';
		window.setTimeout(function(){
			document.getElementById('jgMOBContent').style.opacity = '1';
		}, 300)
		window.setTimeout(function(){
			if(jgButtonOne){document.getElementById('jgMOBButton1').style.opacity = '1';}
			if(jgButtonTwo){document.getElementById('jgMOBButton2').style.opacity = '1';}
		}, 600)
	}, 1000)

	window.setTimeout(function(){
		document.getElementById('jgRightColumn').style.opacity = '1';
		document.getElementById('jgRightColumn').style.height = '400px';
	}, 1400)

	window.setTimeout(function(){
		if(jgSlideshow){
			document.getElementById('jgMOBPrev').style.opacity = '1';
			document.getElementById('jgMOBNext').style.opacity = '1';			
		}
		document.getElementById('mobClose').style.opacity = '1';
		document.getElementById('jgMOBImage').style.opacity = '1';
	}, 2000)


	document.getElementById('mobClose').addEventListener('click', MOBClose);
}


// SLIDESHOW FUNCTIONS
function PrevClick(){
	imageCounter--;
	if(imageCounter < 1){imageCounter = noImages;}
	try{
		document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + UIDName +  imageCounter + '.jpg) center no-repeat';
		document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
	}catch(e){}
	try{
		document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + WEBName +  imageCounter + '.jpg) center no-repeat';
		document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
	}catch(e){}
	try{
		document.getElementById('jgMOBImage').style.background = 'url(images/mobielads/' + MOBName +  imageCounter + '.jpg) center no-repeat';
		document.getElementById('jgMOBImage').style.backgroundSize = 'contain';
	}catch(e){}
}

function NextClick(){
	imageCounter++;
	if(imageCounter > noImages){imageCounter = 1;}
	try{
		document.getElementById('jgUIDImage').style.background = 'url(images/uidesign/' + UIDName +  imageCounter + '.jpg) center no-repeat';
		document.getElementById('jgUIDImage').style.backgroundSize = 'contain';
	}catch(e){}
	try{
		document.getElementById('jgWEBImage').style.background = 'url(images/webdev/' + WEBName +  imageCounter + '.jpg) center no-repeat';
		document.getElementById('jgWEBImage').style.backgroundSize = 'contain';
	}catch(e){}
	try{
		document.getElementById('jgMOBImage').style.background = 'url(images/mobileads/' + MOBName +  imageCounter + '.jpg) center no-repeat';
		document.getElementById('jgMOBImage').style.backgroundSize = 'contain';
	}catch(e){}
}

function UIDClose(){
	document.getElementById('jgLeftColumn').style.opacity = '0';
	document.getElementById('jgRightColumn').style.opacity = '0';

	window.setTimeout(function(){
		document.getElementById('jgLeftColumn').style.display = 'none';
		document.getElementById('jgRightColumn').style.display = 'none';
		document.getElementById('uidesign-1').style.display = 'block';
		document.getElementById('uidesign-2').style.display = 'block';
		document.getElementById('uidesign-3').style.display = 'block';
		document.getElementById('uidesign-4').style.display = 'block';
		document.getElementById('uidesign-5').style.display = 'block';
		document.getElementById('uidesign-6').style.display = 'block';
		document.getElementById('uidesign-7').style.display = 'block';
		document.getElementById('uidesign-8').style.display = 'block';
	}, 400)

	window.setTimeout(function(){
		document.getElementById('uidesign-1').style.opacity = '1';
		document.getElementById('uidesign-2').style.opacity = '1';
		document.getElementById('uidesign-3').style.opacity = '1';
		document.getElementById('uidesign-4').style.opacity = '1';
		document.getElementById('uidesign-5').style.opacity = '1';
		document.getElementById('uidesign-6').style.opacity = '1';
		document.getElementById('uidesign-7').style.opacity = '1';
		document.getElementById('uidesign-8').style.opacity = '1';

		document.getElementById('jgLeftColumn').style.width = '0%';
		document.getElementById('jgUIDTitle').style.opacity = '0';
		document.getElementById('jgUIDContent').style.opacity = '0';
		document.getElementById('jgUIDButton1').style.opacity = '0';
		document.getElementById('jgUIDButton2').style.opacity = '0';
		document.getElementById('jgRightColumn').style.height = '0px';
		document.getElementById('jgUIDPrev').style.opacity = '0';
		document.getElementById('jgUIDNext').style.opacity = '0';
		document.getElementById('uidClose').style.opacity = '0';
		document.getElementById('jgUIDImage').style.opacity = '0';
	}, 800)

}

function WEBClose(){
	document.getElementById('jgLeftColumn').style.opacity = '0';
	document.getElementById('jgRightColumn').style.opacity = '0';

	window.setTimeout(function(){
		document.getElementById('jgLeftColumn').style.display = 'none';
		document.getElementById('jgRightColumn').style.display = 'none';
		document.getElementById('webdev-1').style.display = 'block';
		document.getElementById('webdev-2').style.display = 'block';
		document.getElementById('webdev-3').style.display = 'block';
		document.getElementById('webdev-4').style.display = 'block';
		document.getElementById('webdev-5').style.display = 'block';
		document.getElementById('webdev-6').style.display = 'block';
		document.getElementById('webdev-7').style.display = 'block';
		document.getElementById('webdev-8').style.display = 'block';
		document.getElementById('webdev-9').style.display = 'block';
	}, 400)

	window.setTimeout(function(){
		document.getElementById('webdev-1').style.opacity = '1';
		document.getElementById('webdev-2').style.opacity = '1';
		document.getElementById('webdev-3').style.opacity = '1';
		document.getElementById('webdev-4').style.opacity = '1';
		document.getElementById('webdev-5').style.opacity = '1';
		document.getElementById('webdev-6').style.opacity = '1';
		document.getElementById('webdev-7').style.opacity = '1';
		document.getElementById('webdev-8').style.opacity = '1';
		document.getElementById('webdev-9').style.opacity = '1';

		document.getElementById('jgLeftColumn').style.width = '0%';
		document.getElementById('jgWEBTitle').style.opacity = '0';
		document.getElementById('jgWEBContent').style.opacity = '0';
		document.getElementById('jgWEBButton1').style.opacity = '0';
		document.getElementById('jgWEBButton2').style.opacity = '0';
		document.getElementById('jgRightColumn').style.height = '0px';
		document.getElementById('jgWEBPrev').style.opacity = '0';
		document.getElementById('jgWEBNext').style.opacity = '0';
		document.getElementById('webClose').style.opacity = '0';
		document.getElementById('jgWEBImage').style.opacity = '0';
	}, 800)

}

function MOBClose(){
	document.getElementById('jgLeftColumn').style.opacity = '0';
	document.getElementById('jgRightColumn').style.opacity = '0';

	window.setTimeout(function(){
		document.getElementById('jgLeftColumn').style.display = 'none';
		document.getElementById('jgRightColumn').style.display = 'none';
		document.getElementById('mobile-1').style.display = 'block';
		document.getElementById('mobile-2').style.display = 'block';
		document.getElementById('mobile-3').style.display = 'block';
		document.getElementById('mobile-4').style.display = 'block';
		document.getElementById('mobile-5').style.display = 'block';
		document.getElementById('mobile-6').style.display = 'block';
		document.getElementById('mobile-7').style.display = 'block';
		document.getElementById('mobile-8').style.display = 'block';
		document.getElementById('mobile-9').style.display = 'block';
		document.getElementById('mobile-10').style.display = 'block';
	}, 400)

	window.setTimeout(function(){
		document.getElementById('mobile-1').style.opacity = '1';
		document.getElementById('mobile-2').style.opacity = '1';
		document.getElementById('mobile-3').style.opacity = '1';
		document.getElementById('mobile-4').style.opacity = '1';
		document.getElementById('mobile-5').style.opacity = '1';
		document.getElementById('mobile-6').style.opacity = '1';
		document.getElementById('mobile-7').style.opacity = '1';
		document.getElementById('mobile-8').style.opacity = '1';
		document.getElementById('mobile-9').style.opacity = '1';
		document.getElementById('mobile-10').style.opacity = '1';

		document.getElementById('jgLeftColumn').style.width = '0%';
		document.getElementById('jgMOBTitle').style.opacity = '0';
		document.getElementById('jgMOBContent').style.opacity = '0';
		document.getElementById('jgMOBButton1').style.opacity = '0';
		document.getElementById('jgMOBButton2').style.opacity = '0';
		document.getElementById('jgRightColumn').style.height = '0px';
		document.getElementById('jgMOBPrev').style.opacity = '0';
		document.getElementById('jgMOBNext').style.opacity = '0';
		document.getElementById('mobClose').style.opacity = '0';
		document.getElementById('jgMOBImage').style.opacity = '0';
	}, 800)

}

function jgInitExperience(){
	console.log('init experience');
	document.getElementById('sizmek').addEventListener('click', function(){jgChooseExp('sizmek')});
	document.getElementById('miles').addEventListener('click', function(){jgChooseExp('miles')});
	document.getElementById('purplelion').addEventListener('click', function(){jgChooseExp('purplelion')});
	document.getElementById('freelance').addEventListener('click', function(){jgChooseExp('freelance')});
	document.getElementById('hotwire').addEventListener('click', function(){jgChooseExp('hotwire')});

	document.getElementById('expClose').addEventListener('click', experienceClose);
}

function experienceClose(){
	document.getElementById('overlay').style.opacity = '0';
	window.setTimeout(function(){
		document.getElementById('overlay').style.display = 'none';

		document.getElementById('whiteBox').style.opacity = '0';
		document.getElementById('whiteBox').style.width = '0%';
		document.getElementById('whiteBox').style.height = '0%';
		document.getElementById('expCompany').style.opacity = '0';
		document.getElementById('expTitle').style.opacity = '0';
		document.getElementById('expTime').style.opacity = '0';
		document.getElementById('expContent').style.opacity = '0';

	}, 400)
}

function jgChooseExp(company){
	console.log(company);

	document.getElementById('overlay').style.display = 'block';

	switch(company){
		case 'sizmek':
			document.getElementById('expCompany').innerHTML = 'Sizmek';
			document.getElementById('expTitle').innerHTML = 'Art Director, Team Lead';
			document.getElementById('expTime').innerHTML = 'October 2013 - Present';
			document.getElementById('expContent').innerHTML = "<ul><li>Responsible for the quality and results of a team of designers and developers creating some of the best and most innovative banner ads.</li><li>Drive clients to find the best solution for unique and challenging creatives, and develop dynamic strategies for complex rich media.</li><li>Build rich media for mobile web, desktop and in-app utilizing HTML5, CSS, and Javascript under tight deadlines.</li><li>Act as a liaison between editorial and development teams</li><li>Collaborate with Project Managers, Traffic Managers, and Art Directors to gather campaign info to help build and scope projects</li><li>Translate client files (HTML/PSD’s/PDF’s) to work with Pointroll/Sizmek's proprietary platform</li><li>Ensure campaigns function properly on publisher pages across all devices and browsers</li></ul>";
			break;
		case 'miles':
			document.getElementById('expCompany').innerHTML = 'Miles Technologies';
			document.getElementById('expTitle').innerHTML = 'Senior Graphical & User Interface Developer';
			document.getElementById('expTime').innerHTML = 'June 2010 - June 2013';
			document.getElementById('expContent').innerHTML = '<ul><li>Responsible for creation of web interfaces, master pages and control skinning for custom software solutions.</li><li>Responsible for quality of user interfaces designed for all custom developed software applications as well as new and existing feature development.</li><li>Responsible for coordinating mockups for all new system designs.</li><li>Coordinate graphics integration to applications.</li><li>Analyze UI for systems during QA phase of project in order to provide recommendations on modifying the code / display in order to be more user-friendly and/or intuitive.</li></ul>';
			break;
		case 'purplelion':
			document.getElementById('expCompany').innerHTML = 'Purple Lion Design';
			document.getElementById('expTitle').innerHTML = 'Co-Founder, Web Developer, Project Manager';
			document.getElementById('expTime').innerHTML = 'September 2011 - Present';
			document.getElementById('expContent').innerHTML = "<ul><li>Responsible for creation of all graphics and user interface related items.</li><li>Responsibilities Include initial project designs, master page creation, UI updates as well as marketing & branding decisions.</li><li>Work for custom software clients include designing, mocking up and developing screens for corporate websites, Greek Solutions products and all additional custom software solutions.</li></ul>";
			break;
		case 'freelance':
			document.getElementById('expCompany').innerHTML = 'Freelance';
			document.getElementById('expTitle').innerHTML = 'Web/Interactive Developer';
			document.getElementById('expTime').innerHTML = 'May 2009 - Present';
			document.getElementById('expContent').innerHTML = "<ul><li>I am taking on various projects that come my way, ranging from external websites for organizations, public branding, logo design, responsive design, general web development and video editing.</li></ul>";
			break;
		case 'hotwire':
			document.getElementById('expCompany').innerHTML = 'Hotwire Communications LLC';
			document.getElementById('expTitle').innerHTML = 'User Interface Designer/Developer';
			document.getElementById('expTime').innerHTML = 'June 2013 - October 2013';
			document.getElementById('expContent').innerHTML = "<ul><li>Create wireframes & mockups for a variety of websites and applications, ranging from client deliverables to interactive web screens.</li><li>Create HTML/CSS/Javascript template pages based on created mockups before passing along to back-end developers.</li><li>Provide input during design stages of web applications, taking into account new techniques and user needs.</li></ul>";
			break;
	}


	window.setTimeout(function(){
		document.getElementById('overlay').style.opacity = '1';

		document.getElementById('whiteBox').style.opacity = '1';
		document.getElementById('whiteBox').style.width = '70%';
		document.getElementById('whiteBox').style.height = '65%';

	}, 400)

	window.setTimeout(function(){
		document.getElementById('expCompany').style.opacity = '1';
	}, 800)

	window.setTimeout(function(){
		document.getElementById('expTitle').style.opacity = '1';
	}, 1000)

	window.setTimeout(function(){
		document.getElementById('expTime').style.opacity = '1';
	}, 1200)

	window.setTimeout(function(){
		document.getElementById('expContent').style.opacity = '1';
	}, 1400)
}

function mobileMenuToggle(){
	if(!jgMobileMenu){
		document.getElementById('mobileMenu').style.display = 'block';

		window.setTimeout(function(){
			document.getElementById('mobileMenu').style.opacity = '1';
			document.getElementById('mobileMenu').style.height = '100%';
			jgMobileMenu = true;
		}, 400)
	}else{
		document.getElementById('mobileMenu').style.opacity = '0';
		document.getElementById('mobileMenu').style.height = '0px';

		window.setTimeout(function(){
			document.getElementById('mobileMenu').style.display = 'none';
			jgMobileMenu = false;
		}, 400)

	}
}