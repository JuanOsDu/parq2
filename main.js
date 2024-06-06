// Importa los módulos necesarios
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import RouterFactory from './Core/RouterFactory.js'
import fs from 'fs';


class main {



  init(){
//Configuracion basica
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const app = express();
app.use(express.static(__dirname+'/public'))


// Configura el motor de vistas

app.set('view engine', 'ejs');
app.set(`views`, path.join(__dirname, 'Views'));


//factory de rutas
const tiendaRouter = RouterFactory.crearRouter('tienda')


//uso de rutas

app.get('/', (req, res)=>{
  return res.render('index')
})
/*
app.get('/cliente', (req, res)=>{
  return res.render('cliente')
})
app.get('/comercial', (req, res)=>{
  return res.render('comercial')
})
app.get('/about', (req, res)=>{
  return res.render('about')
})*/
app.use('/',tiendaRouter.router)

// Define un puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});

  }
}

const server = new  main()
server.init()