
var form = document.getElementById('request-form');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    for (const [name,value] of data) {
      console.log(name, ":", value)
    }
  })