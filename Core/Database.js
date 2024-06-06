import pg from 'pg'
import QueryResult from './QueryResult.js';
const {Pool}=pg

//Singleton
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.pool = new Pool({
     
    });

    Database.instance = this;

  }

  async query(text, params) {
    try{
      const start = Date.now();
      const res = await this.pool.query(text, params);
      const duration = Date.now() - start;
  
      const rs = new QueryResult({text, duration, rows: res.rowCount },res.rows)
      
      
      return rs;
    }catch(error){
      throw new Error("Error a nivel de query "+error)
    }
   
  }

  async close() {
    await this.pool.end();
  }
}

// Uso del singleton


// Cerrar la conexión cuando sea necesario
// await db.close();

export default Database