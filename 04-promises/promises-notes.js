// Las promesas son objetos

// constructor ->

// palabra reservada new
// resolve - Es una fincion que nos permitirá pasar la promesa de pendiente a resuelta
// reject - Es una funcion que nos permitirá pasar la promesa de pendiente a rechazada
const myPromise = new Promise((resolve, reject) => {
  // logica interna
  const todoBien = true;
  if (todoBien) {
    resolve("oki");
  } else {
    reject("todo salio mal");
  }
});

//Los objetos tipo promesa cuentan con 2 métodos

//then() -> Se ejecuta cuando la promesa se resolvio exitosamente
//Recibe lo que mandamos a la funcion (resolve)
//catch() -> Se ejecuta cuando la promesa ha sido rechazada
//Recibe la que mandamos en la funcion reject()

myPromise
  .then((result) => {
    console.log(result);
  }) // "oki"
  .catch((error) => {
    console.error(error);
  }); // "no se que paso"

// wrapper en una funcion

function myFirstPromise() {
  return new Promise((resolve, reject) => {
    //logica interna
    const todoBien = true;
    if (todoBien) {
      resolve("oki / desde la funcion que regresa una promesa");
    } else {
      reject("todo salio mal / desde la funcion que regresa una promesa");
    }
  });
}

// const myFirstPromise = () => new Promise(() => {})

//const myFirstPromise = () =>{
//  return new Promise(() => {})
//}

//para definir funciones voy fuctions
//callbacks -> arrow fuctions

myFirstPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
