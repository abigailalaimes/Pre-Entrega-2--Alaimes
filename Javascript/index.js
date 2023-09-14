const acceso = prompt("Ingresa la clave de socios para ingresar al sitio");

if (acceso === "travesura-realizada") {
  function RevelarStock(saga, autor) {
    this.saga = saga;
    this.autor = autor;
  }

  const libroUno = new RevelarStock("Acotar", "Sara J Maas");
  const libroDos = new RevelarStock("Harry Potter", "J. K. Rowling");
  const libroTres = new RevelarStock("Los juegos del hambre", "Suzanne Collins");

  while (acceso === "travesura-realizada") {
    let eleccion = parseInt(prompt("Ingrese el número de la saga que desea adquirir para verificar stock (ACOTAR(1)- HARRY POTTER(2)- LOS JUEGOS DEL HAMBRE(3))"));

    switch (eleccion) {
      case 1:
        alert(`Título: ${libroUno.saga}\nAutor: ${libroUno.autor}\nEstás de suerte, tenemos suficiente stock!`);
        break;
      case 2:
        alert(`Título: ${libroDos.saga}\nAutor: ${libroDos.autor}\n¡Apúrate! Quedan 2 unidades.`);
        break;
      case 3:
        alert(`Título: ${libroTres.saga}\nAutor: ${libroTres.autor}\nLo sentimos, no tenemos stock por el momento.`);
        break;
      default:
        alert('Error. Ingresa una opción válida.');
        break;
    }
    acceso = prompt("Ingresa la clave de socios para ingresar al sitio");
  }
} else {
  alert('Contraseña incorrecta. Verifica los datos ingresados.');
}




    