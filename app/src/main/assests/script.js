
let num = 0;
let res_num = 0;

//from first para
document.getElementById("p1").textContent = num;
//add button functions
document.getElementById("b1").onclick=function(){
  num -= 1;
  document.getElementById("p1").textContent = num;
}
document.getElementById("b2").onclick=function(){
  document.getElementById("p1").textContent = res_num;
}
document.getElementById("b3").onclick=function(){
  num += 1;
  document.getElementById("p1").textContent = num;
}