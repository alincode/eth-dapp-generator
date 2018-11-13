const app = require('./lib/index');

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

let object = {
  ABI,
  constractAddress
};

app.getSourceCode(object);
app.generateHtml(object);