import GameSavingLoader from "./classes/GameSavingLoader";
import GameSaving from "./classes/GameSaving";

(async () => {
    try {
        const saving = await GameSavingLoader().load();
        const data = JSON.parse(saving);

        return new GameSaving(data)
    } catch (error) {
        console.error(error);
    }
})();