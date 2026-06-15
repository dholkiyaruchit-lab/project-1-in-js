function check(){
let ch = document.getElementById("char").value.toLowerCase();

if(ch == "a" || ch == "e" || ch == "i"|| ch == "o" || ch == "u" ){
    result.innerText = "Vowel";
}else{
    result.innerText = "Consonant";
}
}