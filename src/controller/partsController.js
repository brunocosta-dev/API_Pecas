import { saveParts, listByNameParts, updateParts, delParts, listAllParts } from "../service/partsService.js";

export async function postParts(req, res) {
    const {name_parts, dscr_parts} = req.body;
    let newParts;
    
    try{
        newParts = await saveParts(name_parts,dscr_parts);
        res.status(201).json({
            status:"Parts saved on data base",
            id_peca: newParts.lastID,
            changes: newParts.changes
        })
    }catch(e){
        let statusCode = 500;
        let errorMessage = "Unable to save the parts. Please try again."
        
        if (e.message && e.message.includes('cannot be empty or invalid')){
            statusCode = 400;
            errorMessage = e.message;
        } else if (e.message && e.message.includes('SQLITE_CONSTRAINT')){
            statusCode = 409;
            errorMessage = 'There is a part with that name'
        }
        
        console.error("Unable to save parts to database.", e.message);
        res.status(statusCode).json({
            status: "Unable to save parts to database.",
            error: errorMessage
        })
    }
}

export async function getParts(req, res) {
    const name = req.query.name;
    let part;
    try{
        if(!name || name.trim() === ''){
            part = await listAllParts();
            res.status(201).json({
                status:"Parts get on data base",
                part
            })           
        }else{
            part = await listByNameParts(name);
            res.status(201).json({
                status:"Parts get on data base",
                part
            })
        }
    }catch(e){
        let statusCode = 500;
        let errorMessage = "Unable to get the parts. Please try again."
        
        if (e.message && e.message.includes('cannot be empty or invalid')){
            statusCode = 400;
            errorMessage = e.message;
        } else if (e.message && e.message.includes('SQLITE_CONSTRAINT')){
            statusCode = 409;
            errorMessage = 'There is a part with that name'
        }
        
        console.error("Unable to get parts to database.", e.message);
        res.status(statusCode).json({
            status: "Unable to get parts to database.",
            error: errorMessage
        })
    }
}

export async function putParts(req, res) {
    const {new_name, name_parts} = req.body;
    let newParts;
    
    try{
        newParts = await updateParts(new_name, name_parts);
        res.status(201).json({
            status:"Parts saved on data base",
            id_peca: newParts.lastID,
            changes: newParts.changes
        })
    }catch(e){
        let statusCode = 500;
        let errorMessage = "Unable to save the parts. Please try again."
        
        if (e.message && e.message.includes('cannot be empty or invalid')){
            statusCode = 400;
            errorMessage = e.message;
        } else if (e.message && e.message.includes('SQLITE_CONSTRAINT')){
            statusCode = 409;
            errorMessage = 'There is a part with that name'
        }
        
        console.error("Unable to update parts to database.", e.message);
        res.status(statusCode).json({
            status: "Unable to update parts to database.",
            error: errorMessage
        })
    }
}

export async function deleteParts(req, res) {
    const {name_parts} = req.body;
    let newParts;
    
    try{
        newParts = await delParts(name_parts);
        res.status(201).json({
            
        })
    }catch(e){
        let statusCode = 500;
        let errorMessage = "Unable to delete the parts. Please try again."
        
        if (e.message && e.message.includes('cannot be empty or invalid')){
            statusCode = 400;
            errorMessage = e.message;
        } else if (e.message && e.message.includes('SQLITE_CONSTRAINT')){
            statusCode = 409;
            errorMessage = 'There is a part with that name'
        }
        
        console.error("Unable to delete parts to database.", e.message);
        res.status(statusCode).json({
            status: "Unable to delete parts to database.",
            error: errorMessage
        })
    }
}