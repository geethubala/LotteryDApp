// Import the page's CSS. Webpack will know what to do with it.
//import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';
// import { default as Ethjs} from 'ethjs';


var Eth = require('ethjs')
var eth = new Eth(window.web3.currentProvider);
var address;


if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
        eth.setProvider(window.web3.currentProvider);
      } else {
        eth.setProvider(provider); // set to TestRPC if not available
      }

    // console.log(eth);

  var HumanStandardTokenABI =[
    {
      "constant": false,
      "inputs": [],
      "name": "create_ticket",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "show_ticket",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        },
        {
          "name": "",
          "type": "bytes32[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        },
        {
          "name": "",
          "type": "bytes32[]"
        },
        {
          "name": "",
          "type": "bytes32[]"
        },
        {
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tickets",
      "outputs": [
        {
          "name": "number",
          "type": "uint256"
        },
        {
          "name": "date",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "duedate",
          "type": "bytes32"
        },
        {
          "name": "ticket_owner",
          "type": "bytes32"
        },
        {
          "name": "ticket_status",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "result",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "num",
          "type": "uint256"
        },
        {
          "name": "newid",
          "type": "bytes32"
        }
      ],
      "name": "ticket_sale",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  var Token = eth.contract(HumanStandardTokenABI)//, Bytecode, { from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57', gas: 3000000 });
  var tokenInstance = null;
  tokenInstance =Token.at('0x345ca3e014aaf5dca488057592ee47305d9b3e10');
console.log(tokenInstance);

// var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));
// var ETHEREUM_CLIENT = new Web3(new Web3.currentProvider);
/*var ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"selfDestruct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"RATE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"createTocken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
/*var contractAddress = '0x3535925144B410bC0d18BD777585D951a80B4FC9'
var Token = eth.contract(ABI).at(contractAddress);*/
//
// Token.balanceOf('0x627306090abaB3A6e1400e9345bC60c78a8BEf57')
//                   .then(function(tokenBalance){
//                     console.log(tokenBalance);
//                   })

$(document).ready(function(){

// tokenInstance.balanceOf('0x627306090abaB3A6e1400e9345bC60c78a8BEf57')
//                   .then(function(tokenBalance){
//                     console.log(tokenBalance[0]);
//                   })

});
//   $("#send").click(function (){
//     var to = $("#receiver").val();
//     var amount = parseInt($("#amount").val());
//       try{
//       Token.transfer(to,amount,{from:'0x627306090abaB3A6e1400e9345bC60c78a8BEf57'}).then((txHash) => {
//   eth.getTransactionSuccess(txHash).then(txReceipt => {
//     // result <Receipt { hash: '0x...', ... }>
//     console.log(txHash);
//     console.log(txReceipt);
//   });
// });
//       $("#balance").text(Token.balanceOf(eth.coinbase/10e18))
//       $("#status").text('Transaction Successfull!');
//     } catch(err)  {
//       console.error(err);
//       $("#status").text('Unsuccessfull');
//     }
//
//
//
//   });

// });
