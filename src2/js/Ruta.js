class Ruta {
  constructor (nombre, minutos, bases) {
    this._nombre = nombre;
    this._minutos = minutos;
    this._bases = bases;
    this._salidas = new Array(5);
  }

  set nombre (newNombre) {
    this._nombre = newNombre;
  }

  get nombre () {
    return this._nombre;
  }

  get minutos () {
    return this._minutos;
  }

  get bases () {
    return this._bases;
  }

  set bases (newBases) {
    this._bases = newBases;
  }

  get salidas () {
    return this._salidas;
  }

  set salidas (camion, base, horaI, horaF) {
    let salida = new Salida(camion, base, horaI, horaF);
    this._salidas.push(salida);
  }

}

class Salida {
  constructor (camion, base, horaInicio, horaFin) {
    this._camion = camion;
    this._base = base;
    this._horaInicio = horaInicio;
    this._horaFin = horaFin;
  }
}

class Base {
  constructor (nombre, latitud, longitud, tiempo) {
    this._nombre = nombre;
    this._latitud = latitud;
    this._longitud = longitud;
    this._tiempo = tiempo;
  }

  set nombre (newNombre) {
    this._nombre = newNombre;
  }

  get nombre () {
    return this._nombre;
  }

  get ubicacion () {
    return {x: this._latitud, y: this._longitud};
  }

  get tiempo () {
    return this._tiempo;
  }
}
