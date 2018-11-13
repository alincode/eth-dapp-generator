# Ethereum DApp Generator

[![NPM version][npm-image]][npm-url] 

**Install via NPM**

```
npm i eth-dapp-generator --save
```

**Example**

```
const app = require('./src/index');

const ABI = [{
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "string"
    }],
    "name": "setName",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getName",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const constractAddress = '0x829af434f0a8934a431338c1a532abdc8d2c7dfc';

let options = {
  ABI,
  constractAddress
};

// options.WEB3_CDN_URL = 'https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0/dist/web3.min.js';

app.getSourceCode(options);
app.generateHtml(options);
```

**Test**

```sh
# running dev mode
npm run dev

# running test script
npm test
```

### Resources

* [Mocha - the fun, simple, flexible JavaScript test framework](https://mochajs.org/)

### Maintainers

- [alincode](https://github.com/alincode) - **AILIN LIOU** (author)

### License (MIT)

```
MIT License

Copyright (c) 2018 Ai-Lin Liou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

[npm-url]: https://npmjs.org/package/eth-dapp-generator
[npm-image]: http://img.shields.io/npm/v/eth-dapp-generator.svg