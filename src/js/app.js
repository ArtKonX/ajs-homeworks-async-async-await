import GameSavingLoader from "./classes/GameSavingLoader";

(async () => {
    try {
        const saving = GameSavingLoader().load();
        return saving
    } catch (error){
        console.error(error);
    }
  })();