// Initialize butotn with users's prefered color
//let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("byte", ({ byte }) => {
  console.log(byte);
  var gb = byte/(1024*1024*1024);
  document.getElementById("1").innerHTML=Math.round(gb*1000)/1000+" GB";
  document.getElementById("2").innerHTML=Math.round(gb*1.8*1000)/1000+" kilowatt hours";
  document.getElementById("3").innerHTML=Math.round(gb*1.8*.92*1000)/1000+" pounds";
  document.getElementById("4").innerHTML=Math.round(gb*1.8*.92*2400*1000)/1000+" pounds";
});
