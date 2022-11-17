let dateOne = new Date("December 25, 2010 23:15:30");

let dateTwo = new Date("December 25, 2010 23:15:30");

const monthСomparison = (data1, data2) => {
  //   if (Date.parse(data1 === NaN && data2 === NaN)) {
  //     return console.log("Both dates are not dates");
  //   }
  // else
  //   if (Date.parse(data1 === NaN)) {
  //     return console.log("first date is not a date");
  //   }
  // else
  //   if (Date.parse(data2 === NaN)) {
  //     return console.log("The second date is not a date");
  //   }
  //   else {}

  //   let parseData1 = Date.parse(data1)
  //   let parseData2 = Date.parse(data2)

  const string1 = String(data1.getMonth()) + String(data1.getFullYear());
  const string2 = String(data2.getMonth()) + String(data2.getFullYear());
  let result = string1 === string2;
  return result;
};

console.log(monthСomparison(dateOne, dateTwo));
