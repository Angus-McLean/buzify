function processMyDopeText(evt) {
  var myElem = document.getElementById('mydopetext');
  var myText = myElem.value;
  var newURL = "http://www.messenger.com";
  chrome.tabs.create({ url: newURL });
}

window.onload = function () {
  var myElem2 = document.getElementById('mybutton');
  myElem2.onclick = processMyDopeText;
}
