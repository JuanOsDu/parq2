import Router from '../../../../Core/Router.js'
import TiendaController from '../../Logica/Controladores/TiendaController.js'
 

class TiendaRouter extends Router {
    constructor() {
        super('tienda');
        this.defineRoutes();
        this.tiendaController = new TiendaController("tienda");
    }

    defineRoutes() {
        this.router.get('/Tienda', async(req, res) => {
            try{

                //const data = await this.tiendaController.getProductos()
                // Renderiza la vista 'index.ejs' en la carpeta 'views'
                const data = await this.tiendaController.getCategorias()
                return res.render('Tienda', { productos: [] , categorias:data});

            }catch(error){
                console.log(error)
                return res.render('InternalError', { error: error });
            }
            
        });
        this.router.get('/api/categorias', async(req, res) => {
            try{
                const nombre = req.query.nombre || ''

                const data = await this.tiendaController.getCategorias()
            
                return res.status(200).json({
                    categorias:data[0],
                    subcategorias: data[1]
                })
            }catch(error){
                console.log(error)
                return res.render('InternalError', { error: error });
            }
        });
      
        this.router.get('/api/buscarProductos', async(req, res) => {
            try{
                const nombre = req.query.nombre || ''

                const data = await this.tiendaController.getProductosByNombre(nombre)
            
                return res.status(200).json({
                    productos:data
                })
            }catch(error){
                console.log(error)
                return res.render('InternalError', { error: error });
            }
        });



        this.router.get('/vistaDetalle', async(req, res) => {
            try{
                const id = parseInt(req.query.id)
                const data = await this.tiendaController.getProductosById(id)
                // Renderiza la vista 'index.ejs' en la carpeta 'views'
                return res.render('vistaDetalle', { productos: data });
            }catch(error){
                console.log(error)
                return res.render('InternalError', { error: error });
            }
        });
    }

}

export default TiendaRouter;