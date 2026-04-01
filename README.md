# Enter-Modulo-2-Lab6
## 🚀 Laboratorio 06: Programación Funcional

En este laboratorio se aplicó programación funcional para mejorar el manejo de datos financieros en un sistema de presupuesto personal. Se utilizaron métodos como `map()`, `filter()`, `reduce()` y `sort()` para hacer el código más limpio, reutilizable y fácil de mantener.

---

## 🎯 Objetivo

El objetivo fue transformar un código imperativo en uno funcional, aplicando funciones puras y evitando repetir lógica (principio DRY).

---

## 🧠 Funciones Implementadas

### ✅ validarPresupuesto

Esta función verifica si los gastos superan un límite definido.

* Filtra los movimientos de tipo egreso
* Suma los valores
* Retorna `true` o `false`

```js
function validarPresupuesto(movimientos, limite) {
    const totalGastos = movimientos
        .filter(mov => mov.tipo === "egreso")
        .reduce((acc, mov) => acc + mov.valor, 0);

    return totalGastos > limite;
}
```

---

### 🏆 categorizarPorMonto

Clasifica los movimientos en tres categorías: bajo, medio y alto.

* Usa `map()` para transformar el array
* No modifica los datos originales

```js
function categorizarPorMonto(movimientos) {
    return movimientos.map(mov => {
        let categoria = "bajo";

        if (mov.valor >= 500) categoria = "alto";
        else if (mov.valor >= 200) categoria = "medio";

        return { ...mov, categoria };
    });
}
```

---

### 📊 analizarPatrones

Ordena los gastos de mayor a menor para analizar en qué se gasta más.

* Filtra solo egresos
* Usa `sort()` para ordenar

```js
function analizarPatrones(movimientos) {
    return movimientos
        .filter(mov => mov.tipo === "egreso")
        .slice()
        .sort((a, b) => b.valor - a.valor);
}
```

---

### 🔍 busquedaAvanzada

Permite buscar movimientos con múltiples criterios.

* Filtra por tipo, monto mínimo, máximo y nombre
* Los criterios son opcionales

```js
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