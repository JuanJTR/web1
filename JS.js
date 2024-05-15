

function CalculaFibonacci() {

    // Eliminar todos los elementos del contenedor
            
    const container = document.getElementById("containerJS");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    var numero = parseInt(document.getElementById("numero").value);
    if (numero>0) {
        var resultado = Fibonacci(numero);
        // alert("La serie de Fibonacci hasta " + numero + " es: " + resultado);
    } else {
        alert("El número debe ser positivo")
    }
}

function Fibonacci(number) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (var i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    Cards(fibonacci)
    return fibonacci;

}

function Cards(fibonacci) {
    var container = document.getElementById("containerJS")
    for (let i = 0; i < fibonacci.length; i++) {
        const num = fibonacci[i];
        var div = document.createElement('div');
        // div.id = 'miDiv';
        div.className = 'div-card';
        div.innerHTML = num;
        container.appendChild(div);
        // Agregar el evento de clic para eliminar
        div.addEventListener('click', function() {
            // div.remove();
            this.remove();
            // mostrarModal()
            
        });
    }
}
