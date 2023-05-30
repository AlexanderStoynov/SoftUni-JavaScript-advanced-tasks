'use strict';

function solve(speed, place) {

   let allowedspeed = 0;
   let status = undefined;

   if (place == 'residential') {

      allowedspeed = 20;
   }

   else if (place == `city`) {
      allowedspeed = 50;
   }

   else if (place == `interstate`) {
      allowedspeed = 90;
   }

   else if (place == `motorway`) {
      allowedspeed = 130;
   }

   if (speed <= allowedspeed) {
      console.log(`Driving ${speed} km/h in a ${allowedspeed} zone`)
   }

   else{

      if (speed > allowedspeed && speed <= allowedspeed + 20) {
         status = "speeding";
      }

      else if (speed > allowedspeed + 20 && speed <= allowedspeed + 40) {
         status = "excessive speeding";
      }

      else {
         status = "reckless driving";
      }
      
      console.log(`The speed is ${speed - allowedspeed} km/h faster than the allowed speed of ${allowedspeed} - ${status}`);
   }

}

