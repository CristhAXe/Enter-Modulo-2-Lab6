//Validar Presupuesto

function validarPresupuesto(movimientos, limite) {
    const totalGastos = movimientos
        .filter(mov => mov.tipo === "egreso")
        .reduce((acc, mov) => acc + mov.valor, 0);

    return totalGastos > limite;
}
// categorizar por monto
function categorizarPorMonto(movimientos) {
    return movimientos.map(mov => {
        let categoria = "bajo";

        if (mov.valor >= 500) categoria = "alto";
        else if (mov.valor >= 200) categoria = "medio";

        return { ...mov, categoria };
    });
}
// Analizar patrones de gasto
function analizarPatrones(movimientos) {
    return movimientos
        .filter(mov => mov.tipo === "egreso")
        .slice() // evita mutar el array original
        .sort((a, b) => b.valor - a.valor);
}

// Busqueda avanzada
function busquedaAvanzada(movimientos, criterios) {
    return movimientos.filter(mov => {
        return (
            (!criterios.tipo || mov.tipo === criterios.tipo) &&
            (!criterios.minimo || mov.valor >= criterios.minimo) &&
            (!criterios.maximo || mov.valor <= criterios.maximo) &&
            (!criterios.nombre ||
                mov.nombre.toLowerCase().includes(criterios.nombre.toLowerCase()))
        );
    });
}

console.log(validarPresupuesto(movimientos, 500));

console.log(categorizarPorMonto(movimientos));

console.log(analizarPatrones(movimientos));

console.log(busquedaAvanzada(movimientos, {
    tipo: "egreso",
    minimo: 100,
    nombre: "comida"
}));