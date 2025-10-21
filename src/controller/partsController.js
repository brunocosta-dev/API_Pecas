import { saveParts } from "../service/partsService.js";

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