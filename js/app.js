'use strict';

function randomCustomersPerHour (min, max){
  let randomNumberOfCustomers = 0;
  while (randomNumberOfCustomers < min){
    randomNumberOfCustomers = Math.round(Math.random() * max);
    if (randomNumberOfCustomers >= min && randomNumberOfCustomers <= max) {
      // console.log('This will return: ' + randomNumberOfCustomers);
      return randomNumberOfCustomers
    }
  }
}

let seattle = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesPerHourArray: [],
  cookiesPurchasedPerHour: function (locationMinCustomers, locationMaxCustomers){
    let i = 0;
    let customersPerHour;
    let hourlyCookieOutput = [];
    while (i < 14) {
      customersPerHour = randomCustomersPerHour(locationMinCustomers, locationMaxCustomers);
      let x = customersPerHour * this.averageCookiesPerCustomer;
      hourlyCookieOutput.push(Math.round(x));
      i++;
    }
    let y = 0;
    let cookieCounter = 0;
    let totalCookies = 0;
    for (y = 0; y < 14; y++) {
    cookieCounter = hourlyCookieOutput[y];
    totalCookies += cookieCounter;
    }
    hourlyCookieOutput.push(totalCookies);
    return hourlyCookieOutput;
  }
};

seattle.cookiesPerHourArray = seattle.cookiesPurchasedPerHour(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
//console.log(seattle);

let seattleListPlacement = document.getElementById('mainid');
for (let listItems = 0; listItems < seattle.cookiesPerHourArray.length; listItems++){
  let elementForSeattleData = document.createElement('li');
  elementForSeattleData.textContent = seattle.cookiesPerHourArray[listItems];
  seattleListPlacement.appendChild(elementForSeattleData);
};


let tokyo = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  cookiesPerHourArray: [],
  cookiesPurchasedPerHour: function (locationMinCustomers, locationMaxCustomers){
    let i = 0;
    let customersPerHour;
    let hourlyCookieOutput = [];
    while (i < 14) {
      customersPerHour = randomCustomersPerHour(locationMinCustomers, locationMaxCustomers);
      let x = customersPerHour * this.averageCookiesPerCustomer;
      hourlyCookieOutput.push(Math.round(x));
      i++;
    }
    let y = 0;
    let cookieCounter = 0;
    let totalCookies = 0;
    for (y = 0; y < 14; y++) {
    cookieCounter = hourlyCookieOutput[y];
    totalCookies += cookieCounter;
    }
    hourlyCookieOutput.push(totalCookies);
    return hourlyCookieOutput;
  }
}

tokyo.cookiesPerHourArray = tokyo.cookiesPurchasedPerHour(tokyo.minHourlyCustomers, tokyo.maxHourlyCustomers);
//console.log(tokyo);

let tokyoListPlacement = document.getElementById('mainid');
for (let listItems = 0; listItems < tokyo.cookiesPerHourArray.length; listItems++){
  let elementForTokyoData = document.createElement('li');
  elementForTokyoData.textContent = tokyo.cookiesPerHourArray[listItems];
  tokyoListPlacement.appendChild(elementForTokyoData);
};


let dubai = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  cookiesPerHourArray: [],
  cookiesPurchasedPerHour: function (locationMinCustomers, locationMaxCustomers){
    let i = 0;
    let customersPerHour;
    let hourlyCookieOutput = [];
    while (i < 14) {
      customersPerHour = randomCustomersPerHour(locationMinCustomers, locationMaxCustomers);
      let x = customersPerHour * this.averageCookiesPerCustomer;
      hourlyCookieOutput.push(Math.round(x));
      i++;
    }
    let y = 0;
    let cookieCounter = 0;
    let totalCookies = 0;
    for (y = 0; y < 14; y++) {
    cookieCounter = hourlyCookieOutput[y];
    totalCookies += cookieCounter;
    }
    hourlyCookieOutput.push(totalCookies);
    return hourlyCookieOutput;
  }
};

dubai.cookiesPerHourArray = dubai.cookiesPurchasedPerHour(dubai.minHourlyCustomers, dubai.maxHourlyCustomers);
// console.log(dubai);


let paris = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  cookiesPerHourArray: [],
  cookiesPurchasedPerHour: function (locationMinCustomers, locationMaxCustomers){
    let i = 0;
    let customersPerHour;
    let hourlyCookieOutput = [];
    while (i < 14) {
      customersPerHour = randomCustomersPerHour(locationMinCustomers, locationMaxCustomers);
      let x = customersPerHour * this.averageCookiesPerCustomer;
      hourlyCookieOutput.push(Math.round(x));
      i++;
    }
    let y = 0;
    let cookieCounter = 0;
    let totalCookies = 0;
    for (y = 0; y < 14; y++) {
    cookieCounter = hourlyCookieOutput[y];
    totalCookies += cookieCounter;
    }
    hourlyCookieOutput.push(totalCookies);
    return hourlyCookieOutput;
  }
};

paris.cookiesPerHourArray = paris.cookiesPurchasedPerHour(paris.minHourlyCustomers, paris.maxHourlyCustomers);
// console.log(paris);

let lima = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.6,
  cookiesPerHourArray: [],
  cookiesPurchasedPerHour: function (locationMinCustomers, locationMaxCustomers){
    let i = 0;
    let customersPerHour;
    let hourlyCookieOutput = [];
    while (i < 14) {
      customersPerHour = randomCustomersPerHour(locationMinCustomers, locationMaxCustomers);
      let x = customersPerHour * this.averageCookiesPerCustomer;
      hourlyCookieOutput.push(Math.round(x));
      i++;
    }
    let y = 0;
    let cookieCounter = 0;
    let totalCookies = 0;
    for (y = 0; y < 14; y++) {
    cookieCounter = hourlyCookieOutput[y];
    totalCookies += cookieCounter;
    }
    hourlyCookieOutput.push(totalCookies);
    return hourlyCookieOutput;
  }
};

lima.cookiesPerHourArray = lima.cookiesPurchasedPerHour(lima.minHourlyCustomers, lima.maxHourlyCustomers);
// console.log(lima);
