import express from 'express'
class Router {

    constructor(clase) {
      this.clase=clase
      this.router = express.Router()
    }
  
     getClase(){
      return this.clase;
    }

    defineRoutes() {
      throw new Error('Método defineRoutes no implementado');
    }
  }
  
  export default Router;