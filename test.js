'use strict';
var assert = require('assert');
var SandboxedModule = require('sandboxed-module');

function customRequire(osname, height) {
	return SandboxedModule.require('./index', {
		globals: {
			Ti: {
				Platform: {
					osname: osname,
					displayCaps: {
						platformHeight: height || 0
					}
				}
			}
		}
	});
}

it('should match for defined platform', function () {
	assert(customRequire('iphone')({iphone: true}));
	assert(customRequire('iphone').iphone);

	assert(customRequire('iphone')({ios: true}));
	assert(customRequire('iphone').ios);

	assert(customRequire('iphone', 568)({iphone5: true}));
	assert(customRequire('iphone', 568).iphone5);

	assert(customRequire('ipad')({ipad: true}));
	assert(customRequire('ipad').ipad);

	assert(customRequire('android')({android: true}));
	assert(customRequire('android').android);
	assert(!customRequire('android').ios);
	assert(customRequire('android')({iphone: true, android: true}));
	assert(customRequire('android')({default: true}));
});
