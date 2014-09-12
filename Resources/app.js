var win = Titanium.UI.createWindow({
	fullscreen: true,
	navBarHidden: true
});

var webView = Titanium.UI.createWebView({
	url: "http://146.201.212.244:8080/OWGIS_V2/mapviewer",
	width: Ti.Platform.DisplayCaps.platformWidth,
    bottom: 0,
    top: 0

});

win.add(webView);
win.open({
      modal : true
});
