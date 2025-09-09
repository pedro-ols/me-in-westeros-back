import houseModel from "../models/house.model.js";

class HouseController {
    async getAllHouses(req, res) {
        try {
            const houses = await houseModel.getAllHouses();
            res.status(200).json({ message: "Casas encontradas com êxito", houses });
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar casas" });
        }
    }

    async getHouseById(req, res) {
        const { id } = req.params;
        try {
            const house = await houseModel.getHouseById(id);
            if (house) {
                res.status(200).json({ message: "Casa encontrada com êxito", house });
            } else {
                res.status(404).json({ error: "Casa não encontrada" });
            }
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar casa" });
        }
    }

    async createHouse(req, res) {
        const houseData = req.body;

        try {
            if (!houseData.name) {
                return res.status(400).json({ error: "Nome da casa é obrigatório" });
            }
            if (!houseData.bannerUrl) {
                return res
                    .status(400)
                    .json({ error: "Foto do estandarte da casa é obrigatória" });
            }
            const newHouse = await houseModel.createHouse(houseData);

            res.status(200).json({ message: "Casa criada com êxito", newHouse });
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar casa" });
        }
    }

    async updateHouse(req, res) {
        const { id } = req.params;
        const houseData = req.body;
        try {
            if (!(await houseModel.getHouseById(id))) {
                return res.status(404).json({ error: "Casa não encontrada" });
            }
            const updatedHouse = await houseModel.updateHouse(id, houseData);

            res.status(200).json({ message: "Casa atualizada com êxito" });
            res.json(updatedHouse);
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar casa" });
        }
    }

    async deleteHouse(req, res) {
        const { id } = req.params;
        try {
            if (!(await houseModel.getHouseById(id))) {
                return res.status(404).json({ error: "Casa não encontrada" });
            }
            await houseModel.deleteHouse(id);

            res.status(200).json({ message: "Casa deletada com êxito" });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar casa" });
        }
    }
}

export default new HouseController();
