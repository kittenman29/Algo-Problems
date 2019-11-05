
// Create a function that prints out a calendar.
// Do not use any built-in calendar functions :)

// Givens:
// * The number of days in the month
// * The start day of the month

function printCal(numberOfDays, startDay) {
    let output = [['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']];
    let day = 1;
  ​
    // add days of the month
    while (day <= numberOfDays) {
      let emptyWeek = Array(7).fill('  ');
      
      while (startDay < 7 && day <= numberOfDays) {
        emptyWeek[startDay] = day < 10 ? ` ${day}` : day;
        startDay++;
        day++;
      }
  ​
      output.push(emptyWeek);
      startDay = 0;
    }
  ​
    // print output
    for (let arr of output) {
      console.log(arr.join(' '));
    }
  }    
                       
      
// This function should print something like the following:
 
// Su Mo Tu We Th Fr Sa
//                    1
// 2  3  4  5  6  7  8
// 9 10 11 12 13 14 15
// 16 17 18 19 20 21 22
// 23 24 25 26 27 28 29
// 30 31

printCal(31, 6)

