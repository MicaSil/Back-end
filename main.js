class Usuario {
    constructor(nombre, apellido, libros , mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(nombre) {
        this.mascotas.push(nombre);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(titulo, autor) {
        this.libros.push({titulo, autor});
    }
    getBookNames() {
        return this.libros.map(libro => libro.titulo);
    }
}

let usuario = new Usuario ("Guillermo", "Ferrari", [], []);
let usuario1 = new Usuario ("Matias", "Ferrari", [], []);
let usuario2 = new Usuario ("Micaela", "Silvera", [], []);
let usuario3 = new Usuario ("Delfina", "Ferrari", [], []);


usuario.addMascota("Perro");
usuario1.addMascota("Gato");
usuario2.addMascota("Erizo");
usuario3.addMascota("Conejo");

usuario.addBook("Fundamentos de la Metafisica", "Immanuel Kant");
usuario1.addBook("Un lugar en el mundo", "Katherine Marsh");
usuario2.addBook("A traves de mi ventana", "Ariana Godoy");
usuario3.addBook("Locuras lejos de casa", "Lady Pecas");


console.log("El usuario es: ", usuario);
console.log("El usuario es: ", usuario1);
console.log("El usuario es: ", usuario2);
console.log("El usuario es: ", usuario3);

console.log("Cantidad de mascotas: ", usuario.countMascotas());
console.log("Cantidad de mascotas: ", usuario1.countMascotas());
console.log("Cantidad de mascotas: ", usuario2.countMascotas());
console.log("Cantidad de mascotas: ", usuario3.countMascotas());

console.log("Titulo de libros: ", usuario.getBookNames());
console.log("Titulo de libros: ", usuario1.getBookNames());
console.log("Titulo de libros: ", usuario2.getBookNames());
console.log("Titulo de libros: ", usuario3.getBookNames());