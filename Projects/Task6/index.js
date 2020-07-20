//storing the temperature in kelvin scale.
const kelvin = 0;
//storing Kelvin to Celsius 
var celsius = kelvin-273;
//converting celsius to fahrenheit
var fahrenheit = celsius*(9/5)+32;
//rounding off fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


//converting celsius to newton
var newton = celsius*(33/100);
//rounding off newton
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
