const  Model  = require("../models/Model");

const Mahasiswa = class Mahasiswa extends Model {

    constructor(){
        // this.connectionDB();
    }

    getAll(){
        const db = super.connectionDB();
    }
}

module.exports = Mahasiswa;