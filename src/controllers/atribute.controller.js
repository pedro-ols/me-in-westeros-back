import AtributeModel from "../models/atribute.model.js";

class AtributeController {
    async getAllAtributes(req, res) {
        try {   
            const atributes = await AtributeModel.getAllAtributes();
            res.status(200).json({ message: "atributos encontrados com êxito", atributes });
        }       
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar atributos" });
        }   
    }

    async getAtributeById(req, res) {
        const { id } = req.params;
        try {
            const atribute = await AtributeModel.getAtributeById(id);
            if (atribute) {
                res.status(200).json({ message: "atributo encontrado com êxito", atribute });
            }   
            else {
                res.status(404).json({ error: "atributo não encontrado" });
            }   
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar atributo" });
        }
    }

    async createAtribute(req, res) {
        const atributeData = req.body;
        
        try {
            if(!atributeData.strength || !atributeData.intelligence || !atributeData.agility || !atributeData.endurance || !atributeData.perception || !atributeData.charisma || !atributeData.luck){
                return res.status(400).json({ error: "Alguma informação dos atributos está faltando" });
            }
            if(!atributeData.characterId){
                return res.status(400).json({ error: "Indique a qual personagem esses atributos pertencem" });
            }

            const newAtribute = await AtributeModel.createAtribute(atributeData);  

            res.status(200).json({ message: "atributo criado com êxito", newAtribute });
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao criar atributo" });
        }   
    }

    async updateAtribute(req, res) {
        const { id } = req.params;
        const atributeData = req.body;
        try {
            if(!await AtributeModel.getAtributeById(id)){
                return res.status(404).json({ error: "atributo não encontrado" });
            }
            const updatedAtribute = await AtributeModel.updateAtribute(id, atributeData);
            res.status(200).json({ message: "atributo atualizado com êxito", updatedAtribute });
        }           
        catch (error) {
            res.status(500).json({ error: "Erro ao atualizar atributo" });
        }
    }

    async deleteAtribute(req, res) {
        const { id } = req.params;  
        try {
            if(!await AtributeModel.getAtributeById(id)){
                return res.status(404).json({ error: "atributo não encontrado" });
            }
            await AtributeModel.deleteAtribute(id);
            res.status(200).json({ message: "atributo deletado com êxito" });
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao deletar atributo" });
        }   
    }
}

export default new AtributeController();