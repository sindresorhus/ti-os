# ti-os [![Build Status](https://travis-ci.org/sindresorhus/ti-os.svg?branch=master)](https://travis-ci.org/sindresorhus/ti-os)

> Platform conditional utility for cross-platform Titanium apps


## Install

In the `Resources` directory:

```sh
$ npm install --save ti-os
```


## Usage

```js
var os = require('node_modules/ti-os/index');

// use the properties for if statements
if (os.iphone) {
	console.log('Running on iPhone');
}

// and the method for inline conditionals
var win = Ti.UI.createWindow({
	title: os({
		iphone5: function () {
			return 'Yo iPhone 5';
		},
		ios: 'Yo iOS',
		default: 'Yo' // the rest of the platforms
	})
});
```


## API

### os(platform)

#### platform

*Required*  
Type: `object`  
Keys: `iphone5`, `iphone`, `ipad`, `ios`, `android`, `default`

`default` will be used if none of the platforms match.

Values can be a `string` or `function`. If it's a `function` it will be called.

### os.iphone5
### os.iphone
### os.ipad
### os.ios
### os.android


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
