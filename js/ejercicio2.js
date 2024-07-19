const cuenta = {
    titular: 'Alex',
    saldo: 0,

    ingresar: (cantidad)=>{
        this.saldo += cantidad;
    },
    extraer: (cantidad)=>{
        if(cantidad<=this.saldo){
            this.saldo -= cantidad;
        }else{
            console.log(`La cantidad ingresada excede el saldo de su cuenta`);
        }
    },
    informar: ()=>{
        return `Titular: ${cuenta.titular}
        Saldo: ${cuenta.saldo}`;
    }
};

console.log(cuenta.informar());

cuenta.ingresar(1000);

cuenta.extraer(200);

console.log(cuenta.informar());