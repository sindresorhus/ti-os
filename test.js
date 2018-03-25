import test from 'ava';
import SandboxedModule from 'sandboxed-module';

function customRequire(osname, height) {
	return SandboxedModule.require('.', {
		globals: {
			Ti: {
				Platform: {
					osname,
					displayCaps: {
						platformHeight: height || 0
					}
				}
			}
		}
	});
}

test('matches for defined platform', t => {
	t.true(customRequire('iphone')({iphone: true}));
	t.true(customRequire('iphone').iphone);

	t.true(customRequire('iphone')({ios: true}));
	t.true(customRequire('iphone').ios);

	t.true(customRequire('iphone', 568)({iphone5: true}));
	t.true(customRequire('iphone', 568).iphone5);

	t.true(customRequire('ipad')({ipad: true}));
	t.true(customRequire('ipad').ipad);

	t.true(customRequire('android')({android: true}));
	t.true(customRequire('android').android);
	t.false(customRequire('android').ios);
	t.true(customRequire('android')({iphone: true, android: true}));
	t.true(customRequire('android')({default: true}));
});
