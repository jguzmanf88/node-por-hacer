const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('Error: ', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (des) => {
    cargarDB();
    let porHacer = {
        des,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (des, comp = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.des === des);
    if (index >= 0) {
        listadoPorHacer[index].completado = comp;
        guardarDB();
        return true;
    } else {
        return false
    }
}

const eliminar = (des) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.des !== des)
    if (listadoPorHacer === nuevoListado) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}