const mongoose=require('mongoose');

let InscripcionSchema = new mongoose.Schema({
    idInscricion: Number,
    TipoDocumento: String,
    NumeroDocumento: String,
    Nombres: String,
    Apellidos: String,
    Direccion: String,
    Correo: String,
    Telefono: String,
    Celular: String,
    Link_pago: String,
    Codigo_ICFES: String,
    EstudiaFamiliar: String,
    EstratoSocial: Number,
    Tipo_Colegio: String
});

module.exports = mongoose.model('Inscripcion',InscripcionSchema,'Inscripciones');