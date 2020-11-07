//Data initialization
let data = "";

//Function to handle data input & converting data
process.stdin.on("data", (customInput) => {
  data += customInput;

  //Splitting data into array
  let dataArr = data.split(" ");

  let decimal = dataArr[0];
  let basis = dataArr[1];

  //converting data into desired basis and then saved in result
  let result = (decimal >>> 0).toString(basis);

  //converting all string into uppercase
  result = result.toUpperCase();

  //if result less than 8 digit, add lead zero
  if (result.length < 8) {
    let leadZero = "";
    for (let i = 0; i < 8 - result.length; i++) {
      leadZero += "0";
    }
    console.log(`${leadZero}${result}`);
  } else {
    console.log(result);
  }
});
