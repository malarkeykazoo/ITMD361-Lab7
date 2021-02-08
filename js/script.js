function init(){
//add your javascrip between these two lines of code
  document.getElementById("entrybutton").addEventListener("click", f1);
  function f1() {
    var hObj =  document.querySelectorAll("h2.center");
    var hText = hObj.item(0).innerHTML;
    var ei = document.getElementById("entryinput").value;
    document.getElementById("textoutput").innerHTML = ei;
    alert(hText + ": " + ei);
  }
  window.addEventListener('load', init);
}