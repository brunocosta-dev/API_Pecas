import sqlite3 from 'sqlite3'
import {open} from 'sqlite'
import path from 'path'

const DBPATH = path.resolve('auto_parts.db')

export async function connection() {
    const db = await open({
        filename: DBPATH,
        driver: sqlite3.Database
    });
    await db.exec(`CREATE TABLE IF NOT EXISTS parts(id_parts INTEGER PRIMARY KEY AUTOINCREMENT ,name_parts TEXT NOT NULL UNIQUE,dscr_parts TEXT NOT NULL)`);
    return db;
}