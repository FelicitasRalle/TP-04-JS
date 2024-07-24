class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    calcularPerimetro(){
        this.perimetro = (this.ancho*2)+(this.alto*2);
    }
    calcularArea(){
        this.area = this.ancho*this.alto;
    }
    mostrarPerimetro(){
        document.write(`<p>El perimetro del rectangulo es: ${this.perimetro}</p>`);
    }
    mostrarArea(){
        document.write(`<p>El area del rectangulo es: ${this.area}</p>`);
    }
}

const rectangulo1 = new Rectangulo(20,10);

rectangulo1.calcularPerimetro();
rectangulo1.calcularArea();

rectangulo1.mostrarPerimetro();
rectangulo1.mostrarArea();
