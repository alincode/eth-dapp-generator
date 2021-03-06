const fs = require('fs');
const _ = require('lodash');
const html = require('nanohtml');

function getFunctionNames(ABI, isView = false) {
  var data = _.map(ABI, _.clone);
  data = data.filter(o => o.constant == isView);
  data = data.reduce(function (arr, element) {
    return arr.concat(element.name);
  }, []);
  return data;
}

function generateView(functionName) {
  return `
      async function ${functionName}() {
        let returnValue = await myContract.methods.${functionName}().call();
        document.getElementById("result").append(returnValue + ",");
      }
  `
};

function getParameterNames(functionName, ABI) {
  const inputs = _.find(ABI, ['name', functionName]).inputs;
  return inputs.map(element => element.name);
}

function inputJS(functionName, parameterName) {
  return `let ${parameterName} = document.getElementById("${functionName}_${parameterName}").value;`;
}

function generateFunction(functionName, ABI) {
  const parameterNames = getParameterNames(functionName, ABI);

  return `
      async function ${functionName}(event) {
        ${parameterNames.map(parameterName => inputJS(functionName, parameterName)).join(' ')}
        let data = await myContract.methods.${functionName}(${parameterNames.join()}).send({
          from: web3.eth.defaultAccount
        }).then(values => {
          render();
        });
      }

      document.getElementById("${functionName}Click").addEventListener("click", ${functionName});
  `
};

function inputHtml(functionName, parameterName) {
  return `<input type="text" id="${functionName}_${parameterName}"/>`;
}

function generateFunctionHtml(functionName, ABI) {
  const parameterNames = getParameterNames(functionName, ABI);
  return `
    <div style ="margin-top:10px;">
      ${parameterNames.map(parameterName => inputHtml(functionName, parameterName)).join(' ')} <a href="#" id="${functionName}Click" class="btn btn-primary">${functionName}</a>
    </div>`;
};

function generateHtml(options, filename = 'demo') {
  const sourceCode = getSourceCode(options);
  fs.writeFileSync(`${filename}.html`, sourceCode);
}

function getSourceCode(newOptions) {
  const defaultOptions = {
    WEB3_CDN_URL: 'https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0/dist/web3.min.js'
  };
  const options = _.merge(defaultOptions, newOptions);

  const names = getFunctionNames(options.ABI, false).sort();
  const views = getFunctionNames(options.ABI, true).sort();
  return `
<!DOCTYPE html><html>
  <head>
    <title>Hello World DApp</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
  </head>
  <body class="container">

  <h1>Hello World DApp</h1>
    ${names.map(name => generateFunctionHtml(name, options.ABI)).join(' ')}
    <div id="result"></div>
    <script src ="${options.WEB3_CDN_URL}"></script>
    
    <script>
      async function web3Init() {
        if (ethereum) {
          window.web3 = new Web3(ethereum);
          try {
            const accounts = await ethereum.enable();
            web3.eth.defaultAccount = accounts[0];
          } catch (error) {}
        } else if (web3) {
          window.web3 = new Web3(web3.currentProvider);
        } else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
      }

      web3Init();

      const ABI = ${JSON.stringify(options.ABI)};
      
      const CONTRACT_ADDRESS = '${options.CONTRACT_ADDRESS}';

      window.myContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

      // ===== DOM Event =====
      ${names.map(name => generateFunction(name, options.ABI)).join(' ')}
      // ===== load =====
      ${views.map(view => generateView(view)).join(' ')}
      function render() {
        
        ${views.map(view => `${view}();\n       `).join(' ')}
      }

      window.onload = function () {
        render();
      };
    </script>
  </body>
</html>
`
};

module.exports = {
  getSourceCode,
  generateHtml
}