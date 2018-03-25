# ti-os [![Build Status](https://travis-ci.org/sindresorhus/ti-os.svg?branch=master)](https://travis-ci.org/sindresorhus/ti-os)

> Platform conditional utility for cross-platform Titanium apps


## Install

In the `Resources` directory:

```
$ npm install ti-os
```


## Usage

```js
const os = require('node_modules/ti-os/index');

// Use the properties for if statements
if (os.iphone) {
	console.log('Running on iPhone');
}

// And the method for inline conditionals
const win = Ti.UI.createWindow({
	title: os({
		iphone5: () => 'Yo iPhone 5',
		ios: 'Yo iOS',
		default: 'Yo' // The rest of the platforms
	})
});
```


## API

### os(platform)

#### platform

Type: `Object`<br>
Keys: `iphone5` `iphone` `ipad` `ios` `android` `default`

The `default` will be used if none of the platforms match.

Values can be a `string` or `function`. If it's a `function` it will be called.

### os.iphone5
### os.iphone
### os.ipad
### os.ios
### os.android


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
