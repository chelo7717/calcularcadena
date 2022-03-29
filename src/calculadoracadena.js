function obtenerSeparadores(cadena){
    let separadores =[",","-"];
    let pos=3;
    let pattern="";
    let character = cadena[pos];
    while((character!="[")&&(character!="]")){
        pattern = pattern+character;
        pos++;
        character = cadena[pos];
        if(cadena[pos+1]=="["){
            separadores.push(pattern);
            pattern="";
            pos=pos+2;
            character=cadena[pos];
        }
    }
    separadores.push(pattern);
    return separadores;
}
function definirCadenaDeNumeros(cadena,cadenasSeparadas){
    cadenasSeparadas = cadena.split(" ");
    let cadenaDeNumeros = cadenasSeparadas[1];
    return cadenaDeNumeros;
}
function calculadoraCadenas(cadena){
    let num =0;
    let separadores =[",","-"," "]
    var cadenasSeparadas=cadena;
    var cadenaDeNumeros=cadenasSeparadas;
    if(cadena.startsWith("//")){
        separadores = obtenerSeparadores(cadena);
        cadenaDeNumeros= definirCadenaDeNumeros(cadena,cadenasSeparadas)
    }
    let sumar=true;
    let caracter;
    let elemento;
    let numero;
    let secuencia="";
    let posicionActual=0;
    while(posicionActual<cadenaDeNumeros.length){
        numero="";
        secuencia="";
        caracter = cadenaDeNumeros[posicionActual];
        elemento = parseInt(caracter,10);
        if(isNaN(elemento)){
            while(isNaN(elemento)){
                secuencia = secuencia+caracter;
                posicionActual++;
                caracter = cadenaDeNumeros[posicionActual];
                elemento = parseInt(caracter,10);
            }
            if(separadores.includes(secuencia) == false){
                sumar=false;
            }
            else{
                sumar=true;
            }
        }
        else{
            while(isNaN(elemento)==false){
                numero = numero+caracter;
                posicionActual++;
                caracter = cadenaDeNumeros[posicionActual];
                elemento = parseInt(caracter,10);
            }
            elemento = parseInt(numero,10);
            if(elemento<1000 && sumar){
                num = num+elemento;
            }   
        }   
    }
    return num;
}
export default calculadoraCadenas;