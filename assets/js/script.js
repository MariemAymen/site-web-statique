function fetchComponent(url, elementId) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
         if (elementId.indexOf('blog-') !== -1) {
              document.getElementById('card-img').id = "card-img-"+ elementId
              document.getElementById("card-img-" + elementId).src = 'assets/images/'+ elementId + '.jpg'
        }
        if (elementId.indexOf('team-') !== -1) {
              document.getElementById('card-ag-img').id =  "card-ag-img-" + elementId
              document.getElementById("card-ag-img-" + elementId).src = 'assets/images/'+ elementId + '.jpg'
        } 
      });
  }