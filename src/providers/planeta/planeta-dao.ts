import { Injectable } from '@angular/core';
import { DatabaseConnectionProvider } from '../database-connection/database-connection';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Planeta } from './planeta';


@Injectable()
export class PlanetaDaoProvider {

  db: SQLiteObject;

  constructor(public con: DatabaseConnectionProvider) {
    con.getConnection().then(db => this.db = db);
  }

  insert(planeta: Planeta) {
    const sql = "INSERT INTO planeta (nombre, gravedad) VALUES(?,?)";
    return this.db.executeSql(sql, [planeta.nombre, planeta.gravedad]);
  }

  update(planeta: Planeta) {
    const sql = "UPDATE planeta set nombre = ?, gravedad = ? WHERE id = ?";
    return this.db.executeSql(sql, [planeta.nombre, planeta.gravedad, planeta.id]);
  }

  delete(id: number) {
    const sql = "DELETE planeta WHERE id = ?";
    return this.db.executeSql(sql, [id]);
  }

  planetaById(id: number): Promise<Planeta> {
    const sql = "SELECT * FROM planeta WHERE id = ?";
    return this.db.executeSql(sql, [id]).then(results => {
      let planeta = null;
      if (results.rows.length > 0) {
        planeta = results.rows.item(0);
      }
      return Promise.resolve(planeta);
    });
  }

  all(): Promise<Planeta[]> {
    const sql = "SELECT *  FROM planeta";
    return this.db.executeSql(sql, []).then(results=>{
      let data = [];
      for(let i = 0; i<results.rows.length; i++){
        const planeta = results.rows.item(i);
        data.push(planeta);
      }
      return Promise.resolve(data);
    });
  }


}
