const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('============Por Hacer============'.green);
        for (let tarea of listado) {
            console.log(tarea.des);
            console.log('Estado: ' + tarea.completado);
            console.log("/////////////////////////".gray)
        }
        console.log('================================='.green);
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)
        break;
    case 'borrar':
        let borrado = porHacer.eliminar(argv.descripcion);
        console.log(borrado);
    default:
        console.log("Opcion no valida")
}