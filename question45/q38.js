"use strict";
//parveenhumaira
//date: 10 August, 2024
Object.defineProperty(exports, "__esModule", { value: true });
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city_names, country = "Pakistan") {
    console.log(`${city_names} is in the ${country}`);
}
describe_city("Karachi");
describe_city("lahore");
describe_city("New York", "United states");