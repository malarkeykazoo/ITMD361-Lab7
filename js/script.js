function init(){
//add your javascrip between these two lines of code
  document.getElementById("entrybutton").addEventListener("click", f1);
  function f1() {
    var ei = document.getElementById("entryinput").value;
    document.getElementById("textoutput").innerHTML = ei;
    alert("Joshua Lau: " + ei);
  }
  window.addEventListener('load', init);
}
