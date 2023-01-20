'use strict';

//variables
let form = document.getElementById('form');
let inputButton = document.getElementById("submit-button");
let cityName = document.getElementById('cityName');
let minCustomers = document.getElementById('minimumCustomers');
let maxCustomers = document.getElementById('maximumCustomers');
let averageCookiesPCustomer = document.getElementById('averageCookies/Customer');

//constructor function
function CityData(name, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer) {
    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.averageCookiesPerCustomer = averageCookiesPerCustomer;
    this.cookieNumbers = [];
  };
  
  CityData.prototype.cookiesPurchasedPerHour = function () {
    let i = 0;
    let customersPerHour;
    let hourlyCookieOutput = [];
    while (i < 14) {
      customersPerHour = randomCustomersPerHour(this.minHourlyCustomers, this.maxHourlyCustomers);
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
    this.cookieNumbers = hourlyCookieOutput;
  };
  
  CityData.prototype.renderData = function () {
    //grab tbody element
    let tableBody = document.getElementById('allStoreLocations');
    //create rows & cells
    let row1 = document.createElement('tr');
    let cell1 = document.createElement('th');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let cell4 = document.createElement('td');
    let cell5 = document.createElement('td');
    let cell6 = document.createElement('td');
    let cell7 = document.createElement('td');
    let cell8 = document.createElement('td');
    let cell9 = document.createElement('td');
    let cell10 = document.createElement('td');
    let cell11 = document.createElement('td');
    let cell12 = document.createElement('td');
    let cell13 = document.createElement('td');
    let cell14 = document.createElement('td');
    let cell15 = document.createElement('td');
    let cell16 = document.createElement('td');
    //add data to cells
    cell1.innerHTML = this.name;
    this.cookiesPurchasedPerHour();
    cell2.innerHTML = this.cookieNumbers[0];
    cell3.innerHTML = this.cookieNumbers[1];
    cell4.innerHTML = this.cookieNumbers[2];
    cell5.innerHTML = this.cookieNumbers[3];
    cell6.innerHTML = this.cookieNumbers[4];
    cell7.innerHTML = this.cookieNumbers[5];
    cell8.innerHTML = this.cookieNumbers[6];
    cell9.innerHTML = this.cookieNumbers[7];
    cell10.innerHTML = this.cookieNumbers[8];
    cell11.innerHTML = this.cookieNumbers[9];
    cell12.innerHTML = this.cookieNumbers[10];
    cell13.innerHTML = this.cookieNumbers[11];
    cell14.innerHTML = this.cookieNumbers[12];
    cell15.innerHTML = this.cookieNumbers[13];
    cell16.innerHTML = this.cookieNumbers[14];
    //append rows to body & append cells to rows
    tableBody.appendChild(row1);
    row1.appendChild(cell1);
    row1.appendChild(cell2);
    row1.appendChild(cell3);
    row1.appendChild(cell4);
    row1.appendChild(cell5);
    row1.appendChild(cell6);
    row1.appendChild(cell7);
    row1.appendChild(cell8);
    row1.appendChild(cell9);
    row1.appendChild(cell10);
    row1.appendChild(cell11);
    row1.appendChild(cell12);
    row1.appendChild(cell13);
    row1.appendChild(cell14);
    row1.appendChild(cell15);
    row1.appendChild(cell16);
  };

form.addEventListener("submit", function(){
    let cityNameValue = cityName.value;
    let minCustomersValue = minCustomers.value;
    let maxCustomersValue = maxCustomers.value;
    let averageCookiesPCustomerValue = averageCookiesPCustomer.value;
    
    CityData(cityNameValue, minCustomersValue, maxCustomersValue, averageCookiesPCustomerValue);
    // console.log(submitEvent.target);
});