//console.log("Hola mundo")

const express = require('express');
const mongoose = require('mongoose');
const InscripcionSchema = require('./modelos/Inscripcion.js');

const app = express();
const router= express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());



//Conexion DB
mongoose.connect("mongodb+srv://prog_web:prog_web123@clusterprogweb.fe4y37c.mongodb.net/ActividadesDB?retryWrites=true&w=majority");
//
router.get('/', (req , res) => {
    res.send("El inicio de mi API.");
})

router.get('/inscripcion', (req , res) => {
    InscripcionSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo la tarea")
        }
        else{
            res.send(datos);
        }
    }) 
});

router.post('/inscripcion', (req, res) => {
    const nuevoRegistro = InscripcionSchema(req.body);
    nuevoRegistro
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
});

router.put('/inscripcion/:id', (req,res) => {
    const {id}=req.params;
    const {idInscricion,TipoDocumento,NumeroDocumento,Nombres,Apellidos,Direccion,Correo,
    Telefono,Celular,Link_pago,Codigo_ICFES,EstudiaFamiliar,EstratoSocial,Tipo_Colegio} =req.body;
    InscripcionSchema
    .updateOne({_id:id}, {$set: {idInscricion,TipoDocumento,NumeroDocumento,Nombres,Apellidos,Direccion,Correo,
        Telefono,Celular,Link_pago,Codigo_ICFES,EstudiaFamiliar,EstratoSocial,Tipo_Colegio}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
});

router.delete('/inscripcion/:id', (req,res) => {
    const {id}=req.params;
    InscripcionSchema
    .remove({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
});

router.delete('/inscripcion', (req,res) => {
    res.send("En metodo delete");
});

app.use(router);

app.listen(3000,() =>{
    console.log("Servidor corriendo puerto 3000");
});