
var form = document.getElementById('request-form');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);

    let name = data.get('name');
    let dough = data.get('dough');
    let date = data.get('date');
    let topping = data.getAll('topping');

    console.log('-------send email-------')

    let toppings = topping.reduce((ts, t) => ts + ', ' + t);
    let msg = name + ' would like to have a pizzer with ';
    msg += toppings;
    msg += ' on ' + dough + ' dough';
    msg += ' on ' + date;
    console.log(msg);
  })