//console.log("Hola mundo")

const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require('./modelos/Tarea.js');

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

router.get('/tarea', (req , res) => {
    TareaSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo la tarea")
        }
        else{
            res.send(datos);
        }
    })
});

router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });

    nuevaTarea.save(function(err,datos){
        if(err){
            console.log(err);
        }
        res.send("Tarea almacenada correctamente.");
    });
});

app.use(router);

app.listen(3000,() =>{
    console.log("Servidor corriendo puerto 3000");
});