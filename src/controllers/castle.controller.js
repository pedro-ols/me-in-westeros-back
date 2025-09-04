import CastleModel from "../models/castle.model.js";

class CastleController {
    async getAllCastles(req, res) {
        try {   
            const castles = await CastleModel.getAllCastles();
            res.json(castles);
        }       
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar personagens" });
        }   
    }

    async getCastleById(req, res) {
        const { id } = req.params;
        try {
            const castle = await CastleModel.getCastleById(id);
            if (castle) {
                res.json(castle);
            }   
            else {
                res.status(404).json({ error: "Personagem não encontrado" });
            }   
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar personagem" });
        }
    }

    async createCastle(req, res) {
        const castleData = req.body;
        // console.log(castleData);
        
        
        try {
            if(!castleData.name){
                return res.status(400).json({ error: "Nome do personagem é obrigatório" });
            }
            if(!castleData.houseId){
                return res.status(400).json({ error: "Casa do personagem é obrigatória" });
            }

            const newCastle = await CastleModel.createCastle(castleData);  

            res.status(201).json(newCastle);
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao criar personagem" });
        }   
    }

    async updateCastle(req, res) {
        const { id } = req.params;
        const castleData = req.body;
        try {
            if(!await CastleModel.getCastleById(id)){
                return res.status(404).json({ error: "Personagem não encontrado" });
            }
            const updatedCastle = await CastleModel.updateCastle(id, castleData);
            res.json(updatedCastle);
        }           
        catch (error) {
            res.status(500).json({ error: "Erro ao atualizar personagem" });
        }
    }

    async deleteCastle(req, res) {
        const { id } = req.params;  
        try {
            if(!await CastleModel.getCastleById(id)){
                return res.status(404).json({ error: "Personagem não encontrado" });
            }
            await CastleModel.deleteCastle(id);
            res.status(204).end();
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao deletar personagem" });
        }   
    }
}

export default new CastleController();