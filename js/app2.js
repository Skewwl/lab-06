'use strict';

//variables
let form = document.getElementById('form');
let inputButton = document.getElementById("submit-button");
let cityName = document.getElementById('cityName');
let minCustomers = document.getElementById('minimumCustomers');
let maxCustomers = document.getElementById('maximumCustomers');
let averageCookiesPCustomer = document.getElementById('averageCookies/Customer');

let allStoreLocations = [];

function randomCustomersPerHour(min, max) {
  let randomNumberOfCustomers = 0;
  while (randomNumberOfCustomers < min) {
    randomNumberOfCustomers = Math.round(Math.random() * max);
    if (randomNumberOfCustomers >= min && randomNumberOfCustomers <= max) {
      // console.log('This will return: ' + randomNumberOfCustomers);
      return randomNumberOfCustomers
    }
  }
};

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

//create & render table header
let tableHeaderData = [' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

function renderTHead() {
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

//create & render table footer
let tableFooterData = ['Totals'];

function renderTFoot() {
  let tFootElement = document.getElementById('tableFooter'); 
  let row1 = document.createElement('tr');
  let cell1 = document.createElement('th'); cell1.className='cell';
  let cell2 = document.createElement('th'); cell2.className='cell';
  let cell3 = document.createElement('th'); cell3.className='cell';
  let cell4 = document.createElement('th'); cell4.className='cell';
  let cell5 = document.createElement('th'); cell5.className='cell';
  let cell6 = document.createElement('th'); cell6.className='cell';
  let cell7 = document.createElement('th'); cell7.className='cell';
  let cell8 = document.createElement('th'); cell8.className='cell';
  let cell9 = document.createElement('th'); cell9.className='cell';
  let cell10 = document.createElement('th'); cell10.className='cell';
  let cell11 = document.createElement('th'); cell11.className='cell';
  let cell12 = document.createElement('th'); cell12.className='cell';
  let cell13 = document.createElement('th'); cell13.className='cell';
  let cell14 = document.createElement('th'); cell14.className='cell';
  let cell15 = document.createElement('th'); cell15.className='cell';
  let cell16 = document.createElement('th'); cell16.className='cell';
  cell1.innerHTML = hourlyTotals[0];
  cell2.innerHTML = hourlyTotals[1];
  cell3.innerHTML = hourlyTotals[2];
  cell4.innerHTML = hourlyTotals[3];
  cell5.innerHTML = hourlyTotals[4];
  cell6.innerHTML = hourlyTotals[5];
  cell7.innerHTML = hourlyTotals[6];
  cell8.innerHTML = hourlyTotals[7];
  cell9.innerHTML = hourlyTotals[8];
  cell10.innerHTML = hourlyTotals[9];
  cell11.innerHTML = hourlyTotals[10];
  cell12.innerHTML = hourlyTotals[11];
  cell13.innerHTML = hourlyTotals[12];
  cell14.innerHTML = hourlyTotals[13];
  cell15.innerHTML = hourlyTotals[14];
  cell16.innerHTML = hourlyTotals[15];
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

//event handler & create new row
form.addEventListener("submit", function(subEvent){
  subEvent.preventDefault();
  let cityNameValue = cityName.value;
  let minCustomersValue = minCustomers.value;
  let maxCustomersValue = maxCustomers.value;
  let averageCookiesPCustomerValue = averageCookiesPCustomer.value;
  allStoreLocations.push(new CityData(cityNameValue, minCustomersValue, maxCustomersValue, averageCookiesPCustomerValue));
  // console.log(allStoreLocations[allStoreLocations.length - 1].cookieNumbers);
  allStoreLocations[allStoreLocations.length - 1].cookiesPurchasedPerHour();
  allStoreLocations[allStoreLocations.length - 1].renderData();
  // console.log(allStoreLocations[allStoreLocations.length - 1].cookieNumbers);
  
  //+= footer data

  let newHourlyTotals = [];
  for (let i = 1; i < hourlyTotals.length; i++){
    let updateHour = hourlyTotals[i];
    updateHour = allStoreLocations[allStoreLocations.length-1].cookieNumbers[i-1];
    newHourlyTotals.push(updateHour)
  }
  //newhourlyTotals is the array with the new cities numbers
  console.log(newHourlyTotals);


  form.reset();
});

//make array for cookiesPurchasedPerHour data
let hourlyTotals = ['Total'];

for (let i = 0; i < tableHeaderData.length -1; i++) {
  let hourTotal = 0;
  for (let j = 0; j < allStoreLocations.length; j++) {
    // let dailyTotal = allStoreLocations[j].cookiesPurchasedPerHour()[j];
    hourTotal += allStoreLocations[j].cookieNumbers[i];
  }
  hourlyTotals.push(hourTotal);
}

console.log(hourlyTotals);

//render table footer
renderTFoot();