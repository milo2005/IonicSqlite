import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseConnectionProvider {

  db: SQLiteObject;

  constructor() { }

  getConnection(): Promise<SQLiteObject> {
    if(this.db){
      return Promise.resolve(this.db);
    }else{
      const sqlite = new SQLite();
      return sqlite.create({
        name: 'planetas.db',
        location: 'default'
      }).then(db => {
        this.db = db;
        return this.init().then(res=>{
          return Promise.resolve(db);
        });        
      })
    }
  }

  init():Promise<any> {
    const sql = "CREATE TABLE IF NOT EXISTS planeta ("
      + "id INTEGER PRIMARY KEY AUTOINCREMENT"
      + ", nombre VARCHAR"
      + ", gravedad FLOAT"
      + ")";
    return this.db.executeSql(sql, []);    
  }


}
