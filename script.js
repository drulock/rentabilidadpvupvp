var boton = document.getElementById("boton")
boton.addEventListener("click", valorMatchmaking);

function valorMatchmaking(){
    var numero = valorInput.value;
    var valor = parseInt(valorInput.value);
    var resultadoChild = document.getElementById("resultado");
    var p = document.createElement("p");
    var x = 18.5;
    var y = 16;
    var z = 12;
    var q = 11;
    var w = 9.5;
    var e = 9.1;
    var r = 8.5;
    var t = 8.1;
    var u = 7.8;
    var i = 7;
    var o = 6;
    var a = 5.2;
    var s= 4.6;
    var d = 4.2;
    if (numero === "") {
        valorInput.setAttribute("placeholder", "Escribe un número");
    } 
    else if (numero > 10 && numero <= 20){
            p.textContent = (x-((numero-10)*0.25)).toFixed(2);
            resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 20 && numero <= 40){
            p.textContent = (y-((numero-20)*0.2)).toFixed(2);
            resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 40 && numero <= 50) {
            p.textContent = (z-((numero-40)*0.1)).toFixed(2);
            resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 50 && numero <= 80) {
            p.textContent = (q-((numero-50)*0.05)).toFixed(2);
            resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 80 && numero <= 84) {
        p.textContent = (w-((numero-80)*0.1)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 84 && numero <= 88) {
        p.textContent = (e-((numero-84)*0.15)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 88 && numero <= 90) {
        p.textContent = (r-((numero-88)*0.2)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 90 && numero <= 92) {
        p.textContent = (t-((numero-90)*0.15)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 92 && numero <= 96) {
        p.textContent = (u-((numero-92)*0.2)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 96 && numero <= 100) {
        p.textContent = (i-((numero-96)*0.25)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 100 && numero <= 104) {
        p.textContent = (o-((numero-100)*0.2)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 104 && numero <= 108) {
        p.textContent = (a-((numero-104)*0.15)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 108 && numero <= 112) {
        p.textContent = (s-((numero-108)*0.1)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero > 112 && numero <= 115) {
        p.textContent = (d-((numero-112)*0.05)).toFixed(2);
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }
    else if (numero >= 116) {
        p.textContent = "4";
        resultadoChild.replaceChild(p, resultado.firstElementChild);
    }



    switch(valor){
        case 0:
            p.textContent = "34";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break; 
        case 1:
            p.textContent = "30.85";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
        case 2:
            p.textContent = "27.2";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
        case 3:
            p.textContent = "25.55";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
        case 4:
            p.textContent = "23.4";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
        case 5:
            p.textContent = "22";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
        case 6:
            p.textContent = "20.6";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
        case 7:
            p.textContent = "19.95";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
        case 8:
            p.textContent = "19.3";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
        case 9:
            p.textContent = "18.9";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
        case 10:
            p.textContent = "18.5";
            resultadoChild.replaceChild(p, resultado.firstElementChild);
        break;
    }
}
