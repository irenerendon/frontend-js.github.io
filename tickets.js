
      function calcularTotal() {
    var cantidad = document.getElementById('cantidad').value;
    var categoria = document.getElementById('categoria').value;
    var descuento = 0;
    var totalPagar = 0;

  
    if (categoria === 'Estudiante') {
        descuento = 0.8;
    } else if (categoria === 'Trainee') {
        descuento = 0.5;
    } else if (categoria === 'Junior') {
        descuento = 0.15;
    }


    totalPagar = cantidad * 200 * (1 - descuento); 

    document.getElementById('totalPagar').innerText = "Total a Pagar: $" + totalPagar;
}

function borrarFormulario() {
    document.getElementById('miFormulario').reset();
    document.getElementById('totalPagar').innerText = "Total a Pagar: $";
}