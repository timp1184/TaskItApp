var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var response = JSON.parse(xhttp.responseText);
       var people = response.people;
      


      var output = '';
      for (var i = 0; i < people.length; i++) {
        output += `<li> ${people[i].name}</li><p>${people[i].age}`;
      }
      document.getElementById('people')
      .innerHTML = output;
     }

};
xhttp.open("GET", "test.json", true);
xhttp.send();
