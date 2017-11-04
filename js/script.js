window.onload = function() {
  var startPos;
  navigator.geolocation.getCurrentPosition(function(position) {
    startPos = position;
  });
};

$.getJSON("items.json", function(json) {
  console.log(json); // this will show the info it in firebug console
});