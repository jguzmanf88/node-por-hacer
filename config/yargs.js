const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    demand: true,
    alias: 'c',
    default: true

}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('borrar', 'Eliminar un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .help()
    .argv;

module.exports = {
    argv
}