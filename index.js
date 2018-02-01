//Assignment 5
//Create Javascript object to represent data and also create functions to 
//retreive data from the objects.

//import fs module
//import readline module
let fs = require("fs");
let readline = require("readline");

//Required variable declarations for performing the operation
let lineno = 0;
//Declare Array (countries)variable to store the result
let countries = [];

let run = function () {
//Create readline interaface using createInterface method to read the CSV file 
let rl = readline.createInterface({
   input: fs.createReadStream('data/country_details.csv')
   
});

//Create class(In JavaScript) having classname(country(countryname,area)) 
//The class should contain all the properties and functions
  function country (countryname, area){
    this.countryname = countryname;
    this.area = area;
    this.populationData = populationData;
    this.gdpData = gdpData;
    this.gdpincomeData = gdpincomeData;
    this.gdppppData = gdppppData;
  }


//Create supporting function to add Population data to object
function populationData(population)
{
	this.populationData = population;
}
//Create supporting function to  add Gdp data to object
function gdpData(gdp)
{
  this.gdpData = gdp;
}
//Create supporting function to add 'GrossDomesticProduct' to object
function gdpincomeData(gdpincome)
{
  this.gdpincomeData = gdpincome;
}

//Create supporting function to add purchasing power parity(PPP) data to object
function gdppppData(gdpppp)
{
  this.gdppppData = gdpppp;
}


//Create supporting function populateCountriesData which stores country object
//(countryObject) into countries array.
function populateCountriesData(curdata)
{
  countries.push(curdata);
}


rl.on('line', function(line) {

//Create new object to store the filtered data
let lineRecords = line.trim().split(",");
if(lineno>0)
{
	let countryname = lineRecords[0];
	let area = parseFloat(lineRecords[1]);
  //console.log(countryname);
   //create object(for ex.name can be - countryObject) of the class country(countryname,area)
  let newcountry = new country(countryname,area); 
    //read from csv file Population2010 till population2015 and store it in populationData array
	let populationData1 = [];
  for(let index=2; index<=7; index++)
  {
    populationData1.push(parseFloat(lineRecords[index]));
  }

  //console.log(populationData1);
	//read from csv file GDP2010 till GDP2015 and store it in gdpData array
  let gdpData1 = [];
  for(let index=8; index<=13; index++)
  {
    gdpData1.push(parseFloat(lineRecords[index]));
  }
  //console.log(gdpData1);
	//read from csv file 'GrossDomesticProduct2010' till 'GrossDomesticProduct2015' and store it in gdpincomeData array
  let gdpincomeData1 = [];
  for(let index=14; index<=19; index++)
  {
    gdpincomeData1.push(parseFloat(lineRecords[index]));
  }
  //console.log(gdpincomeData1);  
     //read from csv file PPP2010 till PPP2015 and store it in gdppppData array
  let gdppppData1 = [];
  for(let index=20; index<=25; index++)
  {
    gdppppData1.push(parseFloat(lineRecords[index]));
  }
  //console.log(gdppppData1);

    //call supporting function on the object created (for ex.name can be - countryObject)
    //and pass the populationData 
    
    newcountry.populationData(populationData1);
    newcountry.gdpData(gdpData1);
    newcountry.gdpincomeData(gdpincomeData1);
    newcountry.gdppppData(gdppppData1);

    //countryObject.addPopulation(populationData);
    //do the same thing for other functions and their properties.

     //pass the object(countryObject) to the global array (countries) by calling 
     //populateCountriesData
     populateCountriesData(newcountry);
     // lineno++;
}
lineno++;
// else
// {
//   lineno++;
// }

});

rl.on('close', function(err){
//console.log(countries[0]);

});

}

module.exports = {
	exec: run,
	countries: countries
};

run ();		