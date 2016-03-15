function PrMap(g, e, c, d, f) {
    this.target = g;
    this.prInteractiveMap;
    this.markerCount = 0;
    this.markerArray = [];
    this.infoWindowArray = [];
    this.windowCount = 0;
    this.directionsRendererObj;
    this.customInfoWindow;
    this.onMapReady = f;
    this.centerMap;
    this.urlProtocol;
    this.currentZoom;
    this.mouseOverMap;
    this.startZoom = d;
    var b = this;
    this.centerLat = e;
    this.centerLng = c;
    if (document.domain.substring(0, 5) == "https") {
        this.urlProtocol = "https://";
    } else {
        this.urlProtocol = "http://";
    }
    var a = "initialize" + Math.random();
    a = a.replace(".", "");
    window[a] = function () {
        b.initialize(b.centerLat, b.centerLng);
        delete window[a];
        a = null;
    };
    this.loadScript(a);
    this.Log("PrMap INIT : " + this.versionID);
}
var PrMapProto = {
    versionID: "1.10.1.8",
    markerArray: [],
    PrMapOptions: {},
    handlerFunc: {},
    disableDefaultUI: false,
    zoomControlEnabled: false,
    positionControlEnabled: false,
    mapTypeControlEnabled: false,
    scaleControlEnabled: false,
    streetViewControlEnabled: false,
    disableDefaultInfoWindow: false,
    _zoom: "",
    overviewMapControlEnabled: false,
    loadScript: function (b) {
        var a = this;
        var c = document.createElement("script");
        c.type = "text/javascript";
        c.src = a.urlProtocol + "maps.googleapis.com/maps/api/js?client=gme-pointroll&sensor=false&" + "callback=" + b;
        document.getElementsByTagName("head")[0].appendChild(c);
    },
    initialize: function (c, b) {
        var a = this;
        if (this._zoom != "") {
            this.PrMapOptions["zoom"] = this._zoom;
        } else {
            this.PrMapOptions["zoom"] = this.startZoom;
        } if (this.disableDefaultUI) {
            this.PrMapOptions["disableDefaultUI"] = true;
        }
        this.PrMapOptions["center"] = new google.maps.LatLng(c, b);
        this.PrMapOptions["mapTypeId"] = google.maps.MapTypeId.ROADMAP;
        if (this.positionControlEnabled) {
            this.PrMapOptions["panControl"] = true;
        }
        if (this.zoomControlEnabled) {
            this.PrMapOptions["zoomControl"] = true;
        }
        if (this.streetViewControlEnabled) {
            this.PrMapOptions["streetViewControl"] = true;
        }
        if (this.mapTypeControlEnabled) {
            this.PrMapOptions["mapTypeControl"] = true;
        }
        if (this.overviewMapControlEnabled) {
            this.PrMapOptions["overviewMapControl"] = true;
        }
        this.prInteractiveMap = new google.maps.Map(this.target, a.PrMapOptions);
        window[this.onMapReady]();
        this.currentZoom = this.prInteractiveMap.getZoom();
        google.maps.event.addListener(this.prInteractiveMap, "zoom_changed", function () {
            var d = a.prInteractiveMap.getZoom();
            a.handleZoomChange(d);
        });
        if (this.disableDefaultInfoWindow) {
            this.timeoutID = window.setTimeout(this.createInfoBubble, 750);
            this.loadInfoWindow();
        }
        this.Activity(108849);
    },
    createLatLng: function (b, a) {
        return new google.maps.LatLng(b, a);
    },
    createDirectionsService: function () {
        return new google.maps.DirectionsService();
    },
    directionsRenderer: function () {
        if (this.directionsRendererObj == null) {
            this.directionsRendererObj = new google.maps.DirectionsRenderer();
        }
        this.directionsRendererObj.setMap(this.prInteractiveMap);
        return this.directionsRendererObj;
    },
    routeDirectionsService: function (b) {
        var a = this;
        this.createDirectionsService().route(b, function (d, c) {
            if (c == google.maps.DirectionsStatus.OK) {
                a.directionsRenderer().setDirections(d);
                a.PrMapEvent("DIRECTION_SERIVCE_SUCCESS");
            } else {
                a.PrMapEvent("DIRECTION_SERIVCE_FAILED");
            }
        });
    },
    travelMode: function (b) {
        var a;
        switch (b) {
        case "DRIVING":
            a = "DRIVING";
            break;
        case "WALKING":
            a = "WALKING";
            break;
        case "BICYCLING":
            a = "BICYCLING";
            break;
        case "TRANSIT":
            a = "TRANSIT";
            break;
        }
        return google.maps.TravelMode[a];
    },
    createMarkerAt: function (f, c, b, a, e) {
        var d = this.markerCount++;
        this.infoWindowArray[d] = this.createMarker(f, c, b, a, e);
    },
    createCustomIcon: function (b, c, a) {
        return new google.maps.MarkerImage(b, null, null, null, new google.maps.Size(c, a));
    },
    createMarker: function (g, h, i, f, c) {
        var k = this;
        this.infowindow = new google.maps.InfoWindow({
            content: ""
        });
        var b = this.markerCount++;
        var d = new google.maps.LatLng(g, h);
        var b = this.markerCount++;
        var j = d;
        var e = new google.maps.Marker({
            position: d,
            title: i,
            icon: f
        });
        if (this.markerArray[b] == null) {
            this.markerArray[b] = [e];
        } else {
            this.markerArray[b].push(e);
        }
        var j = d;
        e.content = c;
        e.setMap(this.prInteractiveMap);
        if (this.disableDefaultInfoWindow) {
            this.loadInfoWindow();
        }
        if (!k.disableDefaultInfoWindow) {
            google.maps.event.addListener(e, "click", function () {
                k.Activity(8843);
                k.infowindow.content = e.content;
                k._currentMarkerLocation = e.getPosition();
                k.infowindow.open(k.prInteractiveMap, e);
                k.PrMapEvent("MARKER_CLICK", e.content);
            });
            google.maps.event.addListener(k.infowindow, "closeclick", function () {
                k.PrMapEvent("MARKER_CLOSE");
                k.Activity(8844);
                k.infowindow.close();
            });
        } else {
            var a = document.createElement("div");
            a.style.cssText = this.windowContentStyle;
            a.innerHTML = e.content;
            var l = {
                content: a,
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(this.infoWindowXOffSet, this.infoWindowYOffSet),
                position: d,
                zIndex: null,
                boxStyle: {
                    background: "url('" + this.infoWindowImg + "') no-repeat",
                    opacity: this.infoWindowImgOpacity,
                    width: this.width,
                    height: this.height
                },
                closeBoxMargin: this.closeButtonPadding,
                closeBoxURL: this.closeButtonImg,
                infoBoxClearance: new google.maps.Size(1, 1),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: true
            };
            google.maps.event.addListener(e, "click", function () {
                k.Activity(8843);
                ib.setOptions(l);
                k._currentMarkerLocation = e.getPosition();
                ib.open(k.prInteractiveMap, this);
                k.PrMapEvent("MARKER_CLICK", e.content);
            });
        }
    },
    prCustomInfoWindow: function (f, c, i, a, b, e, h, d, g) {
        var j = this;
        this.infoWindowImg = f;
        this.windowContentStyle = c;
        this.closeButtonImg = b;
        this.height = (j.isNumber(i)) ? i + "px" : i;
        this.width = (j.isNumber(a)) ? a + "px" : a;
        this.closeButtonPadding = e;
        this.infoWindowXOffSet = d || 0;
        this.infoWindowYOffSet = h || -180;
        this.infoWindowImgOpacity = g || 0.75;
    },
    isNumber: function (a) {
        return /^-?[\d.]+(?:e-?\d+)?$/.test(a);
    },
    centerMap: function (b) {
        var c = this;
        var d = new google.maps.Geocoder();
        var a = [b];
        d.geocode({
            "address": b
        }, function (f, e) {
            if (e == google.maps.GeocoderStatus.OK) {
                c.prInteractiveMap.setCenter(f[0].geometry.location);
            } else {
                console.log("Geocode was unsuccessful: " + e);
            }
        });
    },
    centerOnMarkerClick: function () {
        this.prInteractiveMap.setCenter(this._currentMarkerLocation);
    },
    zoom: function (a) {
        this._zoomLvl = a;
        var b = this;
        this.prInteractiveMap.setZoom(this._zoomLvl);
    },
    fitAllMarkers: function () {
        this.prInteractiveMap.fitBounds(this.returnBounds());
    },
    returnBounds: function () {
        var d = new google.maps.LatLngBounds();
        var f = this.markerArray;
        var a = this;
        for (var c = 0; c < f.length; c++) {
            var b = f[c];
            for (var e in b) {
                if (typeof (b[e]) != "function") {
                    d.extend(b[e].position);
                }
            }
        }
        return d;
    },
    handleZoomChange: function (d) {
        var c = false;
        var b = false;
        var a = this;
        if (a.currentZoom < d) {
            if (!a.uniq1) {
                a.Activity(8840);
                a.uniq1 = true;
            }
            this.PrMapEvent("ZOOM_IN");
        } else {
            if (!a.uniq2) {
                a.Activity(8841);
                a.uniq2 = true;
            }
            this.PrMapEvent("ZOOM_OUT");
        }
        a.currentZoom = d;
    },
    setMapType: function (a) {
        var a = a;
        switch (a) {
        case "roadmap":
            a = google.maps.MapTypeId.ROADMAP;
            this.Activity(8845);
            break;
        case "terrain":
            a = google.maps.MapTypeId.TERRAIN;
            this.Activity(8848);
            break;
        case "satellite":
            a = google.maps.MapTypeId.SATELLITE;
            this.Activity(8846);
            break;
        case "hybrid":
            a = google.maps.MapTypeId.HYBRID;
            this.Activity(8847);
            break;
        }
        this.prInteractiveMap.setMapTypeId(a);
    },
    Log: function (a) {
        console.log("PR: " + a);
    },
    Activity: function (b, h) {
        var g;
        if (h) {
            g = b + " noun: " + h;
        }
        try {
            var f = ((prup != 0) ? prup : 1),
                c = ((prup != 0) ? "pa" : "ba");
            pr_trk(c, f, b, 1, h);
            this.Log("Tracking: " + g);
        } catch (d) {
            this.Log("Not tracking: " + g);
        }
    },
    loadInfoWindow: function () {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "http://speed.pointroll.com/PointRoll/Media/Asset/PointRollAdvertising/116870/infobox_min.js";
        document.getElementsByTagName("head")[0].appendChild(a);
    },
    hideInfoWindow: function () {
        if (ib) {
            ib.close();
        }
        if (this.infowindow) {
            this.infowindow.close();
        }
    },
    PrMapEvent: function (b, c) {
        var d = window;
        var a = document.createEvent("HTMLEvents");
        a.data = c;
        a.initEvent(b, true, true);
        d.dispatchEvent(a);
    },
    addMapListener: function (a, b) {
        if (this.handlerFunc[a] == null) {
            this.handlerFunc[a] = [b];
        } else {
            this.handlerFunc[a].push(b);
        }
        window.addEventListener(a, b, false);
    },
    createInfoBubble: function () {
        window.clearTimeout(this.timeoutID);
        ib = new PrCustomInfoBox();
    }
};
PrMap.prototype = PrMapProto;
var console;
if (typeof console == "undefined") {
    window.console = {
        log: function () {}
    };
}
var prup;
var pr_trk;
var ib;
var prActivity;
var PrCustomInfoBox;