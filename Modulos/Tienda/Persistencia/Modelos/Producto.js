class Producto {
  constructor(row) {
    this.id = row.id;
    this.nombre = row.nombre || "Sin información";
    this.precio = row.precio || "Sin información";
    this.unidades = row.unidades || "Sin información";
    this.peso = row.peso || "Sin información";
    this.descripcion = row.descripcion || "Sin información";
    this.stock = row.stock || "Sin información";
    this.categoria = row.categoria || "Sin información";
    this.subcategoria = row.subcategoria || "Sin información";
    this.marca = row.marca || "Sin información";
    this.procedencia = row.procedencia || "Sin información";
    this.color = row.color || "Sin información";
    this.tamano = row.tamano || "Sin información";
    this.talla = row.talla || "Sin información";
    this.condicion = row.condicion || "Sin información";
    this.imagenes_alternativas = row.imagenes_alternativas || "Sin información";
    this.imagen = row.imagen || "Sin información";
  }
  
  }
  
export default Producto;