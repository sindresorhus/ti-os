/* globals Ti */
'use strict';

const os = object => {
	let osname;

	if (object.default !== undefined) {
		osname = object.default;
	}

	if (object.ios !== undefined &&
		(Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad')) {
		osname = object.ios;
	}

	if (object[Ti.Platform.osname] !== undefined) {
		osname = object[Ti.Platform.osname];
	}

	if (object.iphone5 !== undefined &&
		Ti.Platform.osname === 'iphone' &&
		Ti.Platform.displayCaps.platformHeight === 568) {
		osname = object.iphone5;
	}

	return typeof osname === 'function' ? osname() : osname;
};

os.iphone = Ti.Platform.osname === 'iphone';
os.iphone5 = os.iphone && Ti.Platform.displayCaps.platformHeight === 568;
os.ipad = Ti.Platform.osname === 'ipad';
os.ios = os.iphone || os.ipad;
os.android = Ti.Platform.osname === 'android';

module.exports = os;
