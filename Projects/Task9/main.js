let raceNumber = Math.floor(Math.random() * 1000);
var reg = true;
var age = 18;

if(age >= 18 && reg === true)
{
  raceNumber += 1000;
}

if(age >= 18 && reg === true)
{
  console.log(`You can start your race at 9:30  and your race number is ${raceNumber}`);
}
else
 if(age >= 18 && reg === false)
 {
   console.log(`You can start your race at 11:00  and your race number is ${raceNumber}`);
 }
else
 if(age < 18)
 {
  console.log(`You can start their race at 12:30  and your race number is ${raceNumber}`);
 }
else 
{
  console.log("Please see the registration desk to get your Race Number");

}

