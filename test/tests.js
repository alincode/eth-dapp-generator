const assert = require('assert');
const generator = require('../lib/index');

const ABI = [{
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
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getName2",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "string"
    }],
    "name": "setName2",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
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
  }
]

const constractAddress = '0x353df9459c6d62d294530484bdbd6b9b45fd1c98';

let options = {
  ABI,
  constractAddress,
  WEB3_CDN_URL: 'https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0/dist/web3.min.js'
};

describe('test', () => {

  it('generateHtml', () => {
    assert.doesNotThrow(() => {
      generator.generateHtml(options);
    }, Error);
  });

  it('getSourceCode', () => {
    assert.doesNotThrow(() => {
      generator.getSourceCode(options)
    }, Error);
  });

});