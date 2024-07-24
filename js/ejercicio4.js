class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimirDatos(){
        document.write(`<ul>
            <li>El codigo del producto es: ${this.codigo}</li>
            <li>El nombre del producto es: ${this.nombre}</li>
            <li>El precio del producto es: ${this.precio}</li>
            </ul>`);
    }
}

const producto1 = new Producto(1, 'Celular', 500.000);
const producto2 = new Producto(2, 'Remera', 12.000);
const producto3 = new Producto(3, 'Labial', 8.000);

const productos = [producto1, producto2, producto3];

productos.forEach(producto => producto.imprimirDatos());