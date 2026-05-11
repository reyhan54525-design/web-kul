let display = document.getElementById("display");

function appendValue(value){

  let lastChar = display.value.slice(-1);

  let operators = ["+", "-", "*", "/"];

  // cegah operator dobel
  if(
    operators.includes(lastChar) &&
    operators.includes(value)
  ){
    return;
  }

  // cegah mulai dengan operator
  if(
    display.value === "0" &&
    operators.includes(value)
  ){
    return;
  }

  // cegah titik dobel
  if(lastChar === "." && value === "."){
    return;
  }

  // ganti angka 0 awal
  if(display.value === "0" && value !== "."){
    display.value = value;
  }else{
    display.value += value;
  }

}

function clearDisplay(){

  display.value = "0";

}

function calculate(){

  try{

    if(display.value === ""){
      return;
    }

    let result = eval(display.value);

    if(result === Infinity || isNaN(result)){
      display.value = "Error";
    }else{
      display.value = 
    parseFloat(result.toFixed(10));
    }

  }catch(error){

    display.value = "Error";

  }

}