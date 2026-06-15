function check(){
  let year = Number(document.getElementById("year").value);

  if(year % 4 === 0){
    document.getElementById("result").innerText =
      year + " is a Leap Year";
  }
  else{
    document.getElementById("result").innerText =
      year + " is Not a Leap Year";
  }
}