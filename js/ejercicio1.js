const auto = {
    color: 'Rojo',
    marca: 'Ferrari',
    modelo: 'Clasico',

    encender: ()=>{
        document.write(`<h3>El auto se ha encendido</h3>`)
    },
    apagar: ()=>{
        document.write(`<h3>El auto se ha apagado</h3>`)
    }
}

let estadoAuto = parseInt(prompt(`Ingrese la opcion que desee:
    1. Encender el auto
    2. Apagar el auto`));

if(estadoAuto === 1){
    document.write(`<h4>El auto se ha encendido</h4>`);
}else{
    document.write(`<h4>El auto se ha apagado</h4>`);
}