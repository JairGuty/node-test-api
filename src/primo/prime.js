// Funcion que genera numeros primos desde un numero N dado.
const generarPrimo = (n) => {
    if (typeof n === 'number' && Number.isInteger(n)) {
        if (n >= 2) {
            let primos = [];
            let existePrimo = [];

            for(let i = 1; i <= n + 1 ; ++i) {
                existePrimo.push(true);
            }

            for (let i = 2; i <= n; i++) {
               if (existePrimo[i]) {
                   primos.push(i);

                   for (let j = 0; j * i < n; j++) {
                      existePrimo[i * j] = false;
                   }
               }
            }
          
         return primos.sort((i, j) => (j-i))
                            
        } else {
            throw Error('El numero debe ser mayor o igual a 2');
        }
    } else {
        throw TypeError('El argumento debe ser un numero entero');
    }
}

try {
    generarPrimo(100);
} catch (err) {
    console.log(`Error: ${err.message}`);
}


module.exports = {
    generarPrimo
}


