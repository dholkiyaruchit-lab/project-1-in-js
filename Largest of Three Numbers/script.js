function largest(){
  let a=+document.getElementById("n1").value;
  let b=+document.getElementById("n2").value;
  let c=+document.getElementById("n3").value;

  if(a>b && a>c){
    result.innerText=a+" is Largest";
  }
  else if(b>a && b>c){
    result.innerText=b+" is Largest";
  }
  else{
    result.innerText=c+" is Largest";
  }
}