/*
Construir, aplanar y pintar un muro

1.-Construir un muro
2.-Aplanr el muro
3.-Pintar
*/

const muro = {
  estaConstruido: false,
  estaAplanado: false,
  estaPintado: false,
};

function construir(muroAConstruir) {
  muroAConstruir.estaConstruido = true;
  return muroAConstruir;
}

function aplanar(muroAAplanar) {
  muroAAplanar.estaAplanado = true;
  return muroAAplanar;
}

function pintar(muroAPintar) {
  muroAPintar.estaPintado = true;
  return muroAPintar;
}
//sincrono
const muroConstruido = construir(muro);
console.log("muroConstruido:", muroConstruido);
const muroAplanado = aplanar(muroConstruido);
console.log("muroConstruido:", muroConstruido);

//Asyncrona

function construir(muroAConstruir) {}
