import ProductoRepositorio from '../../Persistencia/Repositorios/ProductoRepositorio.js'

class ProductoService{

    constructor(){
        this.productoRepositorio = new ProductoRepositorio();
    }
    async  getAllProductos() {
        try {
       
          const productos = await this.productoRepositorio.getAllProductos();
           
          return productos
        } catch (error) {
          throw new Error('Error fetching products from the database '+error);
        }
      }

      async  getCategorias() {
        try {
       
          const categorias = await this.productoRepositorio.getCategorias();
          
           
          return categorias
        } catch (error) {
          throw new Error('Error fetching products from the database '+error);
        }
      }
      async  getProductosByNombre(qNombre) {
        try {
       
          const productos = await this.productoRepositorio.getProductosByNombre(qNombre);
           
          return productos
        } catch (error) {
          throw new Error('Error fetching products from the database '+error);
        }
      }
      async  getProductosById(id) {
        try {
       
          const productos = await this.productoRepositorio.getProductosById(id);
           
          return productos
        } catch (error) {
          throw new Error('Error fetching products from the database '+error);
        }
      }
      
}

export default ProductoService;
