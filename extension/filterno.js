document.getElementById("form").addEventListener("submit", function(e) {
	e.preventDefault();
	var text = document.getElementById("text").value;
	fetch('http://127.0.0.1:5000/analyze?text=' + text)
		.then(function(response) {
	      if (response.status !== 200) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }
	      // Examine the text in the response
	      response.text().then(function(data) {
	        document.getElementById('resp').innerHTML = data;
	      });
	    }
	  )
	  .catch(function(err) {
	    console.log('Fetch Error :-S', err);
	  });
})