
document.getElementById("boton-si").addEventListener("click", function() {
    document.getElementById("imagen").src = "imagen2.png";
    document.getElementById("parrafo").innerText = "Es una cita. ¡Nos vemos este 14 de Febrero, lindura! 😍❤️ ";
    document.getElementById("botones").classList.add("hidden");
});

let noButtonClicked = false;

    document.getElementById("boton-no").addEventListener("click", function() {
        if (!noButtonClicked) {
            document.getElementById("imagen").src = "imagen3.jpg";
            document.getElementById("parrafo").innerText = "El boton de no solo está para efectos visuales 😡";
            noButtonClicked = true;
        }
            let button = document.getElementById("boton-no");
            let newX = Math.random() * (window.innerWidth - button.offsetWidth);
            let newY = Math.random() * (window.innerHeight - button.offsetHeight);
            button.style.position = "absolute";
            button.style.left = newX + "px";
            button.style.top = newY + "px";
    });