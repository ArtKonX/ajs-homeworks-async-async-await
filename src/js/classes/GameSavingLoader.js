import json from "../modules/parser";
import read from "../modules/reader";

export default class GameSavingLoader {
    static async load() {
        try {
            const data = await read();
            const value = await json(data);
            return value
        } catch (error) {
            console.error(error);
        }
    }
}