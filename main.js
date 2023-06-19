const form = document.getElementById("form");

form.addEventListener('submit', function(e){
    e.preventDefault();



let A = parseFloat(document.getElementById("numA").value);
let B = parseFloat(document.getElementById("numB").value);


if (A === B) {
  alert("O campo B não pode ser igual, precisa ser maior que o A");
} else if (A > B) {
  alert("O campo B precisa ser maior que o A");
} else {
  alert("Aprovado");
}

});