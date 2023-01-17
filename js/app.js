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
  // locationArrayOfHourlyCookiesPurchased: this.cookiesPurchasedPerHour(this.minHourlyCustomers, this.maxHourlyCustomers),
}

// let hoursOpenPlusTotal = [];
// hoursOpenPlusTotal = seattle.cookiesPurchasedPerHour(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
let seattleListPlacement = document.getElementById('mainid');
// for (listItems = 0; listItems < hoursOpenPlusTotal.length; listItems++){}
let elementForSeattleData = document.createElement('li');
elementForSeattleData.textContent = seattle.cookiesPurchasedPerHour(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
seattleListPlacement.appendChild(elementForSeattleData);







let tokyo = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
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

let dubai = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
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

let paris = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
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

let lima = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.6,
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
