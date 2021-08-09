const selectElement = document.querySelector('#bug_bug_type');
selectElement.addEventListener('change', (event) => {
  var inputValue = document.getElementById("bug_bug_type").value
  if (inputValue == 'feature') {
    var feature = ['new', 'started', 'completed'];
    bug_status.options.length = 0;
    for (i = 0; i < feature.length; i++) {
      option = document.getElementById("bug_status");
      var option = document.createElement("option");
      option.innerHTML = feature[i];
      bug_status.options.add(option);
    } 
  }     
  else {
   var bug = ['new', 'started', 'resolved'];
   bug_status.options.length = 0;
   for (i = 0; i < bug.length; i++) {
     option = document.getElementById("bug_status");
     var option = document.createElement("option");
     option.innerHTML = bug[i];
     bug_status.options.add(option);
   }
 }

});


