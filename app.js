(() => {
    const App = {
        handlers: {
            handleClick() {
                this.remove();
            }
        },
        methods: {
            Fibonacci(number) {
                const fibonacci = [0, 1];
                for (let i = 2; i < number; i++) {
                    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
                }
                return fibonacci;
            },
            Cards(fibonacci) {
                const container = document.getElementById("containerJS");
                fibonacci.forEach(num => {
                    const div = document.createElement("div");
                    div.className = "div-card";
                    div.innerHTML = num;
                    container.appendChild(div);
                    div.addEventListener("click", App.handlers.handleClick);
                });
            }
        },
        init() {
            const calcularBtn = document.getElementById("calcularBtn");
            calcularBtn.addEventListener("click", this.CalculaFibonacci);

            // const container = document.getElementById("containerJS");
            // while (container.firstChild) {
            //     container.removeChild(container.firstChild);
            // }
            // document.getElementById("calcularBtn").addEventListener("click", this.CalculaFibonacci);
        },
        CalculaFibonacci() {
            const container = document.getElementById("containerJS");
            const numero = parseInt(document.getElementById("numero").value);
            if (numero > 0) {
                const resultado = App.methods.Fibonacci(numero);
                App.methods.Cards(resultado);
            } else {
                alert("El número debe ser positivo");
            }
        }
    };

    App.init();
})();
