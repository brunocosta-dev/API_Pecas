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
        const sql = "SELECT * FROM parts WHERE name_parts = ?;";
        const values = [name]
        const result = await db.get(sql,values)
        return result
    }catch(e){
        console.error('Error get parts to database:', e.message);
        throw e;
    }
}

export async function selectAllPart(){
    let db;
    try{
        db = await connection();
        const sql = "SELECT * FROM parts;";
        const result = await db.all(sql)
        return result
    }catch(e){
        console.error('Error get parts to database:', e.message);
        throw e;
    }
}


export async function sqlUpdatePart(id, name_parts, dscr_parts){
    let db;
    try{
        db = await connection();
        const sql = "UPDATE parts SET name_parts = ?, dscr_parts = ? WHERE id_parts = ?;";
        const values = [name_parts, dscr_parts, id]
        const result = await db.run(sql,values)
        if (result.changes === 0) {
            throw new Error(`Peça com ID ${id} não encontrada ou nenhum dado foi alterado.`);
        }
        return result
    }catch(e){
        console.error('Error update parts to database:', e.message);
        throw e;
    }
}

export async function sqlDeletePart(id){
    let db;
    try{
        db = await connection();
        const sql = "DELETE FROM parts WHERE id_parts = ?;";
        const values = [id]
        const result = await db.run(sql,values)
        if(result.changes === 0){
            throw new Error(`Parts not found with ID:${id}`);
        }
        return result
    }catch(e){
        console.error('Error delete parts to database:', e.message);
        throw e;
    }
}