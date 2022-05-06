function displayValue() {
  var ele = document.getElementsByName("methods");
  let arrayValue = document.getElementById("array").value.replace(/\s+/g, '');
  let arr = String(arrayValue).split(",").map((num) => {
    return Number(num);
  })
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      if (ele[i].value == "filter") {
        let result = divisibleByTwo(arr);
        document.getElementById("result").innerHTML
          = "value: " + result;
      }
      else {
        let result = reduceMethod(arr);
        document.getElementById("result").innerHTML
          = "value: " + result;
      }
    }
  }
}

function divisibleByTwo(numlist) {
  let newArray = numlist.filter(num => num % 2 == 0);
  return newArray
}

function reduceMethod(numlist) {

  let initialValue = 0;
  let sumWithInitial = numlist.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial
}
