import { insertPart, selectByNamePart, sqlUpdatePart, sqlDeletePart, selectAllPart } from "../repository/partsRepository.js"

export async function saveParts(name, dscr) {
    if(typeof name != 'string' || typeof dscr != 'string' || !name.trim() || !dscr.trim()){
        throw new Error('Invalid input type. Name and description must be text.');
    }
    try{
        let part = await insertPart(name, dscr);
        return part;
    }catch(e){
        console.error('Error saved parts', e.message);
        throw e;
    }
}

export async function listByNameParts(name) {
    try{
        let part = await selectByNamePart(name);
        return part;
    }catch(e){
        console.error('Error get parts', e.message);
        throw e;
    }
}

export async function listAllParts() {
    try{
        let part = await selectAllPart();
        return part;
    }catch(e){
        console.error('Error get parts', e.message);
        throw e;
    }
}

export async function updateParts(id, name_parts, dscr_parts) {
    if(typeof name_parts != 'string' || typeof dscr_parts != 'string' || !name_parts.trim() || !dscr_parts.trim()){
        throw new Error('Invalid input type. Name and description must be non-empty text.');
    }
    try{
        let part = await sqlUpdatePart(id, name_parts, dscr_parts);
        return part;
    }catch(e){
        console.error('Error update parts', e.message);
        throw e;
    }
}

export async function delParts(id) {
    try{
        let part = await sqlDeletePart(id);
        return part;
    }catch(e){
        console.error('Error delete parts', e.message);
        throw e;
    }
}