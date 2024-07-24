class Libro {
  #isbn;
  #titulo;
  #autor;
  #paginas;
  constructor(isbn, titulo, autor, paginas) {
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#paginas = paginas;
  }
  get isbn() {
    return this.#isbn;
  }
  set titulo(value) {
    this.#isbn = value;
  }
  get titulo() {
    return this.#titulo;
  }
  set titulo(value) {
    this.#titulo = value;
  }
  get autor() {
    return this.#autor;
  }
  set autor(value) {
    this.#autor = value;
  }
  get paginas() {
    return this.#paginas;
  }
  set paginas(value) {
    this.#paginas = value;
  }
  mostrarLibro() {
    document.write(`<ul>
            <li>ISBN: ${this.#isbn}</li>
            <li>Titulo: ${this.#titulo}</li>
            <li>Autor: ${this.#autor}</li>
            <li>Numero de Paginas: ${this.#paginas}</li>
            </ul>`);
  }
}

const libro1 = new Libro(
  "978-3-16-148410-0",
  "El Quijote",
  "Miguel de Cervantes",
  863
);
const libro2 = new Libro(
  "978-0-262-13472-9",
  "Cien Años de Soledad",
  "Gabriel García Márquez",
  471
);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.paginas > libro2.paginas) {
  document.write(`<p>El libro "${libro1.titulo}" tiene más páginas.</p>`);
} else if (libro1.paginas < libro2.paginas) {
  document.write(`<p>El libro "${libro2.titulo}" tiene más páginas.</p>`);
} else {
  document.write(`<p>Ambos libros tienen el mismo número de páginas.</p>`);
}
