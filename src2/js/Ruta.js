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

  set salidas (camion, baseI, horaI, horaF) {
    let salida = new Salida(camion, base, horaI, horaF);
    this._salidas.push(salida);
  }

}

class Salida {
  constructor (camion, baseI, horaInicio, horaFin) {
    this._camion = camion;
    this._baseI = baseI;
    this._horaInicio = horaInicio;
    this._horaFin = horaFin;
  }

  get camion () {
    return this._camion;
  }

  get baseI () {
    return this._baseI;
  }

  get horaInicio () {
    return this._horaInicio;
  }

  get horaFin () {
    return this._horaFin;
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
