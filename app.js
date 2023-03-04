
class banco {
    constructor(nombre, id, tasa12, tasa24, tasa36) {
        this.nombre = nombre
        this.id = id
        this.tasa12 = tasa12
        this.tasa24 = tasa24
        this.tasa36 = tasa36
    }
}

const Hsbc = new banco('Hsbc', 30, 45, 50)
const Macro = new banco('Macro', 27, 39, 56)
const Frances = new banco('Frances', 40, 48, 59)

let bancoOpcion = parseInt(
    prompt('Coloca el número de banco con el que deseas cotizar: 1. Banco HSBC  2.Banco Macro  3.Banco Frances')
)

let respuestaBanco = false
let bancoSeleccionado

while (respuestaBanco === false) {
    if (bancoOpcion === 1) {
        respuestaBanco = true
        bancoSeleccionado = Hsbc
    } else if (bancoOpcion === 2) {
        respuestaBanco = true
        bancoSeleccionado = Macro
    } else if (bancoOpcion === 3) {
        respuestaBanco = true
        bancoSeleccionado = Frances
    } else {
        respuestaBanco = parseInt(
            prompt(
                'Coloca un número de banco elegido: 1. Banco HSBC  2.Banco Macro  3.Banco Frances'
            )
        )
    }
}

const respuestaImporte = parseInt(prompt('Ingresa el importe que desea verificar'))

const cuota12 = calculadoraCuota(respuestaImporte, bancoSeleccionado.tasa12, 12)
const cuota24 = calculadoraCuota(respuestaImporte, bancoSeleccionado.tasa24, 24)
const cuota36 = calculadoraCuota(respuestaImporte, bancoSeleccionado.tasa36, 36)

function calculadoraCuota(monto, tasa, meses) {
    const cuota = (monto * (monto * tasa)) / 100 / meses
    return cuota
}
alert(`Las opciones que te ofrecemos en Banco ${bancoSeleccionado.nombre} son: 1.${cuota12} mensuales a 12 meses - 2.${cuota24} mensuales a 24 meses - 3.${cuota36} mensuales a 36 meses`)


