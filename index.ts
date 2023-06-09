import Arbol from "./arbol";

const arbol = new Arbol([5, 2, 7, 1, 3, 6, 8, 9, 4, 10])

console.log(arbol.inOrden())
console.log(arbol.preOrden())
console.log(arbol.postOrden())