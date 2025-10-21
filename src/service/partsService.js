import { insertPart } from "../repository/partsRepository.js"

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