// Access the Ziptastic API to automatically fill in the City and State when entering zip code.
$(document).ready(function () {
  
  $('#zipCode').keyup(function(e){
    var zipCode = $(this).val();

    // don't do anything until/unless the zip code is at least five characters long and numeric
    if (zipCode.length === 5 && $.isNumeric(zipCode)) {
      var requestURL = 'http://ziptasticapi.com/' + zipCode +'?callback=?';
      $.getJSON(requestURL, null, function(data){
        console.log(data);
        
        if (data.city) $('#city').val(data.city);
        if (data.state) $('#state').val(data.state);
      });
    }
  });
});