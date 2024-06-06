import Producto from '../Modelos/Producto.js'
import Database from '../../../../Core/Database.js'
class ProductoRepositorio {
    constructor() {
        this.db = new Database()
    }
    async getAllProductos() {
        try {
            const queryResult = await this.db.query('select p.id as id, p.nombre, precio, unidades, peso, descripcion, stock, marca, procedencia_id,color, tamano,imagen, talla, c.nombre as categoria, pr.nombre as procedencia, co.nombre as condicion, sc.nombre as subcategoria, imagenes_alternativas from productos p inner join categorias c on c.id=p.categoria_id inner join subcategorias sc on sc.id=p.subcategoria_id inner join procedencias pr on pr.id = p.procedencia_id inner join condiciones co on co.id = p.condicion_id');
            return queryResult.result.map(row => new Producto(row));
        } catch (error) {
            throw new Error('Error fetching products from the database ' + error);
        }
    }

    async getCategorias() {
        try {
            const queryResult = await this.db.query("select * from categorias");

            const queryResult2 = await this.db.query("select * from subcategorias");
         
            let res = [ queryResult.result, queryResult2.result]
            
            return res
        } catch (error) {
            throw new Error('Error fetching products from the database ' + error);
        }
    }

    async getProductosByNombre(qNombre) {
        try {
            
            console.log(qNombre)
            if (!qNombre || qNombre == "") {
                const queryResult = await this.db.query("select p.id, p.nombre, precio, unidades, peso, descripcion, stock, marca, procedencia_id,color, tamano,imagen, talla, c.nombre as categoria, pr.nombre as procedencia, co.nombre as condicion, sc.nombre as subcategoria, imagenes_alternativas from productos p inner join categorias c on c.id=p.categoria_id inner join subcategorias sc on sc.id=p.subcategoria_id inner join procedencias pr on pr.id = p.procedencia_id inner join condiciones co on co.id = p.condicion_id  where lower(p.nombre) like '%" + qNombre + "%' limit 10;");

                return queryResult.result.map(row => new Producto(row));

            } else{
                const queryResult = await this.db.query("select p.id, p.nombre, precio, unidades, peso, descripcion, stock, marca, procedencia_id,color, tamano,imagen, talla, c.nombre as categoria, pr.nombre as procedencia, co.nombre as condicion, sc.nombre as subcategoria, imagenes_alternativas from productos p inner join categorias c on c.id=p.categoria_id inner join subcategorias sc on sc.id=p.subcategoria_id inner join procedencias pr on pr.id = p.procedencia_id inner join condiciones co on co.id = p.condicion_id  where lower(p.nombre) like '%" + qNombre + "%';");

                return queryResult.result.map(row => new Producto(row));
            }

        } catch (error) {
            throw new Error('Error fetching products from the database ' + error);
        }
    }

    async getProductosById(id) {
        try {

            const queryResult = await this.db.query("select p.id, p.nombre, precio, unidades, peso, descripcion, stock, marca, procedencia_id,color, tamano,imagen, talla, c.nombre as categoria, pr.nombre as procedencia, co.nombre as condicion, sc.nombre as subcategoria, imagenes_alternativas from productos p inner join categorias c on c.id=p.categoria_id inner join subcategorias sc on sc.id=p.subcategoria_id inner join procedencias pr on pr.id = p.procedencia_id inner join condiciones co on co.id = p.condicion_id where p.id=" + id + ";");

            return queryResult.result.map(row => new Producto(row));
        } catch (error) {
            throw new Error('Error fetching products from the database ' + error);
        }
    }




}

export default ProductoRepositorio;