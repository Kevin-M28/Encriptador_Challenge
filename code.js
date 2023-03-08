const codigo = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};
function transformar(word) {
    switch (word) {
        case 'a':
        case 'e':
        case 'i':
        case 'u':
        case 'o':
            return codigo[word];
        default:
            return word;
    }
}
function palabraCompleta(cod) {
    var texto = document.getElementById("mensajeinput");
    var palabra = texto.value;
    var palabraC = "";
    if(texto.value == ""){
        document.getElementById("mensajeoutput").style.backgroundImage = "url(imagenes/Snorlax.gif)";
        document.getElementById("copiar").style.display = "none";
        return document.getElementById("mensajeoutput").value = palabraC;
    }
    /*if(!verificar()){
        return document.getElementById("label1").style.value = "&#8252 Tu texto tiene mayusculas o ascentos";
    }*/
    if(cod == 0 && texto.value != ""){
        for (let x = 0; x < palabra.length ; x++){
            palabraC += transformar(palabra[x]);
        }
        document.getElementById("mensajeoutput").style.backgroundImage = "none";
        document.getElementById("copiar").style.display = "revert";
        return document.getElementById("mensajeoutput").value = palabraC;
    }
    
    if(cod == 1 && texto.value != ""){
        var i = 0;
        while((palabra.length) != i){
            palabraC+=palabra[i];
            i += transformar(palabra[i]).length;
        }
        document.getElementById("mensajeoutput").style.backgroundImage = "none";
        document.getElementById("copiar").style.display = "revert";
        return document.getElementById("mensajeoutput").value = palabraC;
    }
}
function copiarTexto() {
    var texto = document.getElementById("mensajeoutput");
    var copiarTexto = texto.value;
    navigator.clipboard.writeText(copiarTexto);
}
function verificar(){
    var texto = document.getElementById("mensajeinput");
    var patron =/A-ZáéíóúüZÁÉÍÓÚÜ/;
    if(texto.test(patron)){
        return false;
    }else{
        return true;
    }
}