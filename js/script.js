
/* get geolocation
window.onload = function() {
  var startPos;
  navigator.geolocation.getCurrentPosition(function(position) {
    startPos = position;
  });
};
*/
var noods;

$.getJSON("js/items.json", function(json) { // this will show the info it in firebug console
  noods = json;
  console.log(noods);
});