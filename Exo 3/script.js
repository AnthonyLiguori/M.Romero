function makeRequest() {
    fetch("data.html")
      .then(function (response) {
        return response.text();
      })
  
      .then(function (data) {
       document.write(data)
      });
  }
  