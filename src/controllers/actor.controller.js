import ActorModel from "../models/actor.model.js";

class ActorController {
    async getAllActors(req, res) {
        try {   
            const actors = await ActorModel.getAllActors();
            res.status(200).json({ message: "atores encontrados com êxito", actors });
        }       
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar atores" });
        }   
    }

    async getActorById(req, res) {
        const { id } = req.params;
        try {
            const actor = await ActorModel.getActorById(id);
            if (actor) {
                res.status(200).json({ message: "ator encontrado com êxito", actor });
            }   
            else {
                res.status(404).json({ error: "ator não encontrado" });
            }   
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar ator" });
        }
    }

    async createActor(req, res) {
        const actorData = req.body;
        
        try {
            if(!actorData.name){
                return res.status(400).json({ error: "Nome do ator é obrigatório" });
            }

            const newActor = await ActorModel.createActor(actorData);  

            res.status(200).json({ message: "ator criado com êxito", newActor });
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao criar ator" });
        }   
    }

    async updateActor(req, res) {
        const { id } = req.params;
        const actorData = req.body;
        try {
            if(!await ActorModel.getActorById(id)){
                return res.status(404).json({ error: "ator não encontrado" });
            }
            const updatedActor = await ActorModel.updateActor(id, actorData);
            res.status(200).json({ message: "ator atualizado com êxito", updatedActor });
        }           
        catch (error) {
            res.status(500).json({ error: "Erro ao atualizar ator" });
        }
    }

    async deleteActor(req, res) {
        const { id } = req.params;  
        try {
            if(!await ActorModel.getActorById(id)){
                return res.status(404).json({ error: "ator não encontrado" });
            }
            await ActorModel.deleteActor(id);
            res.status(200).json({ message: "ator deletado com êxito" });
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao deletar ator" });
        }   
    }
}

export default new ActorController();