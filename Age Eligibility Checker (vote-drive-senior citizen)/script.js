function check(){
let age = Number(document.getElementById("age").value);
if(age >= 60){
  result.innerText = "Senior Citizen"
}else if(18 <= age){
   result.innerText = "Eligible to Vote & Drive";
}else{
    result.innerText = "Not Eligible";
}
}