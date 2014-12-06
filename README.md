[![npm](http://img.shields.io/npm/v/jquery.inputmask.phoneau.svg?style=flat-square)](http://npmjs.org/package/jquery.inputmask.phoneau) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://jameswyse.mit-license.org) [![npm](http://img.shields.io/david/jameswyse/jquery.inputmask.phoneau.svg?style=flat-square)](http://npmjs.org/package/jquery.inputmask.phoneau) [![npm](http://img.shields.io/david/dev/jameswyse/jquery.inputmask.phoneau.svg?style=flat-square)](http://npmjs.org/package/jquery.inputmask.phoneau) ![codeship](http://img.shields.io/codeship/08240900-5f8a-0132-2efc-3643fcd47fc7.svg?style=flat-square)
jquery.inputmask.phoneAU
========================

A [jquery.inputmask](https://github.com/RobinHerbots/jquery.inputmask) extension for Australian phone numbers.


## Demo
[![codepen](https://cdn.rawgit.com/jameswyse/jquery.inputmask.phoneAU/master/screenshot.gif)](http://codepen.io/jameswyse/pen/EaPNKX)

- [Open on github.io](http://jameswyse.github.io/jquery.inputmask.phoneAU/)
- [Open on codepen.io](http://codepen.io/jameswyse/pen/EaPNKX)


## Available on NPM
[![NPM](https://nodei.co/npm/jquery.inputmask.phoneau.png)](https://nodei.co/npm/jquery.inputmask.phoneau/)

```bash
$ npm install --save jquery.inputmask.phoneau
```


## Usage
```javascript
$(function () {
  $('input[type=tel]').inputmask('phoneAU');
});
```


## Dependencies
- [jQuery](https://github.com/jquery/jquery) - `npm i jquery`
- [jquery.inputmask](https://github.com/RobinHerbots/jquery.inputmask) - `npm i jquery.inputmask`


## License
The MIT License (MIT)

Copyright (c) 2014 James Wyse <james@jameswyse.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
