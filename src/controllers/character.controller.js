import characterModel from "../models/character.model.js";

class characterController {
    async getAllCharacters(req, res) {
        try {   
            const characters = await characterModel.getAllCharacters();
            res.json(characters);
        }       
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar personagens" });
        }   
    }

    async getCharacterById(req, res) {
        const { id } = req.params;
        try {
            const character = await characterModel.getCharacterById(id);
            if (character) {
                res.json(character);
            }   
            else {
                res.status(404).json({ error: "Personagem não encontrado" });
            }   
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao buscar personagem" });
        }
    }

    async createCharacter(req, res) {
        const characterData = req.body;
        
        try {
            if(!characterData.name){
                return res.status(400).json({ error: "Nome do personagem é obrigatório" });
            }
            if(!characterData.houseId){
                return res.status(400).json({ error: "Casa do personagem é obrigatória" });
            }

            const newCharacter = await characterModel.createCharacter(characterData);  

            res.status(201).json(newCharacter);
        }   
        catch (error) {
            res.status(500).json({ error: "Erro ao criar personagem" });
        }   
    }

    async updateCharacter(req, res) {
        const { id } = req.params;
        const characterData = req.body;
        try {
            if(!await characterModel.getCharacterById(id)){
                return res.status(404).json({ error: "Personagem não encontrado" });
            }
            const updatedcharacter = await characterModel.updateCharacter(id, characterData);
            res.json(updatedcharacter);
        }           
        catch (error) {
            res.status(500).json({ error: "Erro ao atualizar personagem" });
        }
    }

    async deleteCharacter(req, res) {
        const { id } = req.params;  
        try {
            if(!await characterModel.getCharacterById(id)){
                return res.status(404).json({ error: "Personagem não encontrado" });
            }
            await characterModel.deleteCharacter(id);
            res.status(204).end();
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao deletar personagem" });
        }   
    }
}

export default new characterController();