const generator = require('./lib/index');

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

const CONTRACT_ADDRESS = '0x829af434f0a8934a431338c1a532abdc8d2c7dfc';

let options = {
  ABI,
  CONTRACT_ADDRESS
};

generator.getSourceCode(options);
generator.generateHtml(options);