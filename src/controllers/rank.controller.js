import { rankQuery } from "../repositories/rank.repository.js";

export async function getRank(req, res) {
    try {
        const rank = await rankQuery()
        res.status(200).send(rank.rows)
    } catch (error) {
        res.status(500).send(error.message);
      }
}