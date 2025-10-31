fetch("https://upadhayay.github.io/db.json")
.then(function(response){
  return response.json();
})
.then(function(d){
  console.log(d);

  var container = document.getElementById("papers-container");
  var books = d.books;

  for (var i = 0; i < books.length; i++) {
    var b = books[i];

    // only show published ones
    if (b.published == true) {
      var div = document.createElement("div");
      div.className = "papers-container";

      div.innerHTML =
        "<h3>" + b.title + "</h3>" +
        "<p><strong>Year:</strong> " + b.year + "</p>";

      container.appendChild(div);
    }
  }
});
