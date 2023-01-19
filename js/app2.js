'use strict';

let allStoreLocations = [];

function randomCustomersPerHour (min, max){
    let randomNumberOfCustomers = 0;
    while (randomNumberOfCustomers < min){
      randomNumberOfCustomers = Math.round(Math.random() * max);
      if (randomNumberOfCustomers >= min && randomNumberOfCustomers <= max) {
        // console.log('This will return: ' + randomNumberOfCustomers);
        return randomNumberOfCustomers
      }
    }
  };

function CityData(name, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer){
    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.averageCookiesPerCustomer = averageCookiesPerCustomer;
};

CityData.prototype.cookiesPurchasedPerHour = function (){
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
    return hourlyCookieOutput;
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
    cell2.innerHTML = this.cookiesPurchasedPerHour()[0];
    cell3.innerHTML = this.cookiesPurchasedPerHour()[1];
    cell4.innerHTML = this.cookiesPurchasedPerHour()[2];
    cell5.innerHTML = this.cookiesPurchasedPerHour()[3];
    cell6.innerHTML = this.cookiesPurchasedPerHour()[4];
    cell7.innerHTML = this.cookiesPurchasedPerHour()[5];
    cell8.innerHTML = this.cookiesPurchasedPerHour()[6];
    cell9.innerHTML = this.cookiesPurchasedPerHour()[7];
    cell10.innerHTML = this.cookiesPurchasedPerHour()[8];
    cell11.innerHTML = this.cookiesPurchasedPerHour()[9];
    cell12.innerHTML = this.cookiesPurchasedPerHour()[10];
    cell13.innerHTML = this.cookiesPurchasedPerHour()[11];
    cell14.innerHTML = this.cookiesPurchasedPerHour()[12];
    cell15.innerHTML = this.cookiesPurchasedPerHour()[13];
    cell16.innerHTML = this.cookiesPurchasedPerHour()[14];
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

//create & render table header
let tableHeaderData = [' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

function renderTHead () {
    let tHeadElement = document.getElementById('tableHeader');
    let row1 = document.createElement('tr');
    let cell1 = document.createElement('th');
    let cell2 = document.createElement('th');
    let cell3 = document.createElement('th');
    let cell4 = document.createElement('th');
    let cell5 = document.createElement('th');
    let cell6 = document.createElement('th');
    let cell7 = document.createElement('th');
    let cell8 = document.createElement('th');
    let cell9 = document.createElement('th');
    let cell10 = document.createElement('th');
    let cell11 = document.createElement('th');
    let cell12 = document.createElement('th');
    let cell13 = document.createElement('th');
    let cell14 = document.createElement('th');
    let cell15 = document.createElement('th');
    let cell16 = document.createElement('th');
    cell1.innerHTML = tableHeaderData[0];
    cell2.innerHTML = tableHeaderData[1];
    cell3.innerHTML = tableHeaderData[2];
    cell4.innerHTML = tableHeaderData[3];
    cell5.innerHTML = tableHeaderData[4];
    cell6.innerHTML = tableHeaderData[5];
    cell7.innerHTML = tableHeaderData[6];
    cell8.innerHTML = tableHeaderData[7];
    cell9.innerHTML = tableHeaderData[8];
    cell10.innerHTML = tableHeaderData[9];
    cell11.innerHTML = tableHeaderData[10];
    cell12.innerHTML = tableHeaderData[11];
    cell13.innerHTML = tableHeaderData[12];
    cell14.innerHTML = tableHeaderData[13];
    cell15.innerHTML = tableHeaderData[14];
    cell16.innerHTML = tableHeaderData[15];
    tHeadElement.appendChild(row1);
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

//make array for cookiesPurchasedPerHour data
// let citiesSalesNumbersPerHour = [];

// for (let i = 0; i < tableHeaderData.length - 1; i++){
//     citiesSalesNumbersPerHour.push(allStoreLocations[i].cookiesPurchasedPerHour());
// };

// function footerCellData (cities) {
//     for (let i = 0; i < allStoreLocations[i].cookiesPurchasedPerHour().length; i++){

//     }

//create & render table footer
let tableFooterData = ['Totals'];

function renderTFoot () {
    let tFootElement = document.getElementById('tableFooter');
    let row1 = document.createElement('tr');
    let cell1 = document.createElement('th');
    let cell2 = document.createElement('th');
    let cell3 = document.createElement('th');
    let cell4 = document.createElement('th');
    let cell5 = document.createElement('th');
    let cell6 = document.createElement('th');
    let cell7 = document.createElement('th');
    let cell8 = document.createElement('th');
    let cell9 = document.createElement('th');
    let cell10 = document.createElement('th');
    let cell11 = document.createElement('th');
    let cell12 = document.createElement('th');
    let cell13 = document.createElement('th');
    let cell14 = document.createElement('th');
    let cell15 = document.createElement('th');
    let cell16 = document.createElement('th');
    cell1.innerHTML = tableFooterData[0];
    cell2.innerHTML = tableFooterData[1];
    cell3.innerHTML = tableFooterData[2];
    cell4.innerHTML = tableFooterData[3];
    cell5.innerHTML = tableFooterData[4];
    cell6.innerHTML = tableFooterData[5];
    cell7.innerHTML = tableFooterData[6];
    cell8.innerHTML = tableFooterData[7];
    cell9.innerHTML = tableFooterData[8];
    cell10.innerHTML = tableFooterData[9];
    cell11.innerHTML = tableFooterData[10];
    cell12.innerHTML = tableFooterData[11];
    cell13.innerHTML = tableFooterData[12];
    cell14.innerHTML = tableFooterData[13];
    cell15.innerHTML = tableFooterData[14];
    cell16.innerHTML = tableFooterData[15];
    tFootElement.appendChild(row1);
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

//store CityData to array
allStoreLocations[0] = new CityData('Seattle', 23, 65, 6.3);
console.log(allStoreLocations[0]);

allStoreLocations[1] = new CityData('Tokyo', 3, 24, 1.2);
console.log(allStoreLocations[1]);

allStoreLocations[2] = new CityData('Dubai', 11, 38, 3.7);
console.log(allStoreLocations[2]);

allStoreLocations[3] = new CityData('Paris', 20, 38, 2.3);
console.log(allStoreLocations[3]);

allStoreLocations[4] = new CityData('Lima', 2, 16, 4.6);
console.log(allStoreLocations[4]);

//render table head
renderTHead();

//render data to table
allStoreLocations[0].renderData();
allStoreLocations[1].renderData();
allStoreLocations[2].renderData();
allStoreLocations[3].renderData();
allStoreLocations[4].renderData();

//render table footer
//renderTFoot();