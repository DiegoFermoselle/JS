// Función para calcular el costo
function calcularCosto(material, cantidad, tiempo) {
    let costoMaterial;
    let costoPorHora = 10; // Costo base por hora de impresión

// Definir el costo por gramo o metro según el material
    if (material === "PLA") {
        costoMaterial = 0.05; // Costo por gramo
    } else if (material === "ABS") {
        costoMaterial = 0.09;
    } else if (material === "PETG") {
        costoMaterial = 0.07;
    } else {
        console.log("Material no reconocido.");
        return;
    }

// Calcular el costo total
    let costoTotal = (costoMaterial * cantidad) + (costoPorHora * tiempo);
    return costoTotal;
}

// Ciclo para permitir múltiples cálculos
while (true) {
// Solicitsr datos al usuario
    let material = prompt("Ingrese el tipo de material (PLA, ABS, PETG):");
    let cantidad = parseFloat(prompt("Ingrese la cantidad de material (en gramos):"));
    let tiempo = parseFloat(prompt("Ingrese el tiempo de impresión (en horas):"));

// Validar entrada de datos
    if (isNaN(cantidad) || isNaN(tiempo)) {
        console.log("Datos inválidos. Inténtelo de nuevo.");
        continue;
    }

// Calcular y mostrar el costo
    let costo = calcularCosto(material, cantidad, tiempo);
    if (costo) {
        console.log(`Material: ${material}`);
        console.log(`Cantidad: ${cantidad} gramos`);
        console.log(`Tiempo de impresión: ${tiempo} horas`);
        console.log(`Costo total: $${costo}`);
    }

// Preguntar si quiere hacer otro cálculo
    let otraVez = prompt("¿Desea calcular otro costo? (si/no):");
    if (otraVez !== "si") {
        break;
    }
}

console.log("Gracias por usar la calculadora de costos para impresión 3D.");
