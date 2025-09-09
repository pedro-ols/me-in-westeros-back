import CastleModel from "../models/castle.model.js";

class CastleController {
    async getAllCastles(req, res) {
        try {   
            const castles = await CastleModel.getAllCastles();
            res.status(200).json({ message: "Castelos encontrados com êxito", castles });
        }       
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar castelos" });
        }   
    }

    async getCastleById(req, res) {
        const { id } = req.params;
        try {
            const castle = await CastleModel.getCastleById(id);
            if (castle) {
                res.status(200).json({ message: "Castelo encontrado com êxito", castle });
            }   
            else {
                res.status(404).json({ error: "Castelo não encontrado" });
            }   
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar castelo" });
        }
    }

    async createCastle(req, res) {
        const castleData = req.body;
        
        
        try {
            if(!castleData.name){
                return res.status(400).json({ error: "Nome do castelo é obrigatório" });
            }
            if(!castleData.houseId){
                return res.status(400).json({ error: "Casa do castelo é obrigatória" });
            }

            const newCastle = await CastleModel.createCastle(castleData);  

            res.status(200).json({ message: "Castelo criado com êxito", newCastle });
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao criar castelo" });
        }   
    }

    async updateCastle(req, res) {
        const { id } = req.params;
        const castleData = req.body;
        try {
            if(!await CastleModel.getCastleById(id)){
                return res.status(404).json({ error: "Castelo não encontrado" });
            }
            const updatedCastle = await CastleModel.updateCastle(id, castleData);
            res.status(200).json({ message: "Castelo atualizado com êxito", updatedCastle });
        }           
        catch (error) {
            res.status(500).json({ error: "Erro ao atualizar castelo" });
        }
    }

    async deleteCastle(req, res) {
        const { id } = req.params;  
        try {
            if(!await CastleModel.getCastleById(id)){
                return res.status(404).json({ error: "Castelo não encontrado" });
            }
            await CastleModel.deleteCastle(id);
            res.status(200).json({ message: "Castelo deletado com êxito" });
            res.status(204).end();
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao deletar castelo" });
        }   
    }
}

export default new CastleController();