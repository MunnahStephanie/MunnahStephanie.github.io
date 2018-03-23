  $(document).ready(function() {

    $("#card-body").mouseenter(function() {
      $.getJSON("pets.json", function(json) {

        var html = "";
        // Only change code below this line.
       json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'card'>";
  keys.forEach(function(key) {
    html += "<label>" + key + "</label>: " + val[key] + "<br>";
  });
  html += "</div><br>";
}); 
        
        
        // Only change code above this line.

        $(".message").html(html);

      });
    });
  });