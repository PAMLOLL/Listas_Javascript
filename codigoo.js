var lista = []
for(var i=0; i<=10;i++){
    lista.push(i);
}


/**Crea lista de frutas y verduras utilizando un array literal
 */
var numero = 3;
var texto = "tres";

var NombreFrutas =["fresa", "melocoton", "pera"];


/**
 * Agrega un elemento al final de la lista de frutas y verduras que creaste en el ejercicio anterior
 */
NombreFrutas.push("manzana");
NombreFrutas.unshift("limón");


/**
 * Accede al tercer elemento de la lista de frutas y verdura y cambia su valor por una nueva fruta o verdura
 */
NombreFrutas[2]= "kiwi";


/**
 * Recorre la lista de frutas y verduras utilizando un bucle for y muestra cada elemento en la consola
 */

for(var i=0; i< NombreFrutas.length; i++){
    alert(NombreFrutas[i]);
}

/**
 * Haz una lista con while
 */

/**
 * Crea una función que reciba una lista como parámetro y devuelva el número de elementos de la lista
 */
function totalELementosLista( lista){
    return lista.length;
}
    

/**
 * Crea una funcion que reciba una lista y un elemento como parametro y devuelva verdaderi su el elemento se encuentra en la lista o falso en caso contrario
 */
function seEncuentraEnListaElemento( lista, elemento){
for(var i=0; i<lista.length; i++){
        if(lista[i] == elemento){
            return true;
        }
    }
    return false;

}


/**
 * Crea una función que reciba una lista y un elemento como parámetros y elimine el elemento de la lista si se encuentra en ella.
 */
function borrarElementoDeLista(lista, elemento){
    for( var i=0; i<lista.length; i++){
        if(lista[i] == elemento){
            delete lista[i];
            break;
        }
    }
}


/**
 * Crea una función que reciba una lista de números como parámetro y devuelva el mayor número de la lista.

 */
function listaMayorElemento(lista){
    lista.sort();
    return lista.pop();
}


/**
 * Crea una función que reciba una lista de números como parámetro y devuelva el menor número de la lista.
 */
function listaMenorElemento(lista){
    lista.sort();
    return lista.shift();
}
