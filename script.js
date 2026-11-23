// Creamos las variables b y c y les damos un valor inicial
let b = 0;
let c = 0;

// Buscamos el boton y hacemos que funcione cuando le damos click
document.getElementById("generar").addEventListener("click", function() {

    // Generamos numeros aleatorios entre -10 y 10
    b = Math.floor(Math.random() * 21) - 10;
    c = Math.floor(Math.random() * 21) - 10;

    // Mostramos los valores que salieron en la pagina
    document.getElementById("valorB").textContent = "b = " + b;
    document.getElementById("valorC").textContent = "c = " + c;

    // Revisamos si c es igual a 0 para saber si es una funcion lineal
    if (c == 0) {

        // Mostramos la formula de la funcion lineal
        document.getElementById("funcion").textContent = "f(x) = " + b + "x";

        // Aqui se muestran las caracteristicas de la funcion lineal
        document.getElementById("lineal").innerHTML =
            "La función es lineal.<br>" +
            "Su expresión es f(x) = " + b + "x.<br>" +
            "Su gráfica es una línea recta que pasa por el origen (0, 0).<br>" +
            (b > 0 ? "Es creciente." : b < 0 ? "Es decreciente." : "Tiene pendiente cero.");

        // Dejamos vacia la caja de la funcion afin
        document.getElementById("afin").textContent = "";

    } else {

        // Mostramos la formula de la funcion afin
        document.getElementById("funcion").textContent = "f(x) = " + b + "x + " + c;

        // Se muestran las caracteristicas que tiene la funcion afin
        document.getElementById("afin").innerHTML =
            "La función es afín.<br>" +
            "Su expresión es f(x) = " + b + "x + " + c + ".<br>" +
            "Corta el eje Y en (0, " + c + ").<br>" +
            "Su inclinación depende del valor de b.<br>" +
            "Es una traslación vertical de la función lineal en " + c + " unidades.";

        // Dejamos vacia la caja de la funcion lineal
        document.getElementById("lineal").textContent = "";
    }
});

// Buscamos donde se selecciona el archivo de geogebra
document.getElementById("archivo").addEventListener("change", function() {

    // Revisamos si se selecciono algun archivo
    if (this.files.length > 0) {

        // Mmostramos el nombre del archivo que seleccionamos
        document.getElementById("nombreArchivo").textContent =
            "Archivo seleccionado: " + this.files[0].name;

    } else {

        // Si no se selecciona nada aparece este mensaje
        document.getElementById("nombreArchivo").textContent =
            "No se ha seleccionado ningún archivo.";
    }
});
