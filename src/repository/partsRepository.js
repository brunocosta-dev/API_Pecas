import { connection } from "../config/db.js";

export async function insertPart(name, dscr){
    let db;
    try{
        db = await connection();
        const sql = "INSERT INTO parts(name_parts, dscr_parts) VALUES(?,?);";
        const values = [name, dscr]
        const result = await db.run(sql,values)
        return result
    }catch(e){
        console.error('Error saving parts to database:', e.message);
        throw e;
    }
}

export async function selectByNamePart(name){
    let db;
    try{
        db = await connection();
        const sql = "SELECT name_parts, dscr_parts FROM parts WHERE name_parts = ?;";
        const values = [name]
        const result = await db.get(sql,values)
        return result
    }catch(e){
        console.error('Error get parts to database:', e.message);
        throw e;
    }
}


export async function sqlUpdatePart(newName, name){
    let db;
    try{
        db = await connection();
        const sql = "UPDATE parts SET name_parts = ? WHERE name_parts = ?;";
        const values = [newName, name]
        const result = await db.run(sql,values)
        return result
    }catch(e){
        console.error('Error update parts to database:', e.message);
        throw e;
    }
}

export async function sqlDeletePart(name){
    let db;
    try{
        db = await connection();
        const sql = "DELETE FROM parts WHERE name_parts = ?;";
        const values = [name]
        const result = await db.run(sql,values)
        return result
    }catch(e){
        console.error('Error delete parts to database:', e.message);
        throw e;
    }
}