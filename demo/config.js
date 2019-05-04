// CONFIG
//
// shared between login.html and service.html

const OHLEDGER = 'ohledger';
const OHLEDGER_WEB3 = 'ohledger-web3';
const ETH = 'eth-web3';

var paymentSchedule = {};
paymentSchedule[ETH] = {
  "appAddress": "0x046c88317b23dc57F6945Bf4140140f73c8FC80F",
  "epicTierCost": '0.013 Ether', // eth
  "legendaryTierCost": '0.0034 Ether', // eth
  "currencyLabelToDenominationMultiplier": 1000000000000000000,
  "fixedPointDigitsForDisplay": 4,
  "denomination": 'Ether',
  "tallyDaysForEpic": null,
  "tallyDaysForLegendary": 1
};
paymentSchedule[OHLEDGER] = {
  "appAddress": "0x046c88317b23dc57F6945Bf4140140f73c8FC80F",
  "epicTierCost": '2.00 USD', // usd
  "legendaryTierCost": '0.50 USD',
  "currencyLabelToDenominationMultiplier": 100,
  "fixedPointDigitsForDisplay": 2,
  "denomination": "USD",
  "tallyDaysForEpic": null,
  "tallyDaysForLegendary": 1
};
paymentSchedule[OHLEDGER_WEB3] = paymentSchedule[OHLEDGER];
