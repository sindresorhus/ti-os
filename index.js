'use strict';
var os = module.exports = function (obj) {
	var osname;

	if (obj.default !== undefined) {
		osname = obj.default;
	}

	if (obj.ios !== undefined &&
		Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
		osname = obj.ios;
	}

	if (obj[Ti.Platform.osname] !== undefined) {
		osname = obj[Ti.Platform.osname];
	}

	if (obj.iphone5 !== undefined &&
		Ti.Platform.osname === 'iphone' &&
		Ti.Platform.displayCaps.platformHeight === 568) {
		osname = obj.iphone5;
	}

	return typeof osname === 'function' ? osname() : osname;
};

os.iphone = Ti.Platform.osname === 'iphone';
os.iphone5 = os.iphone && Ti.Platform.displayCaps.platformHeight === 568;
os.ipad = Ti.Platform.osname === 'ipad';
os.ios = os.iphone || os.ipad;
os.android = Ti.Platform.osname === 'android';
