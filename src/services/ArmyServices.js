import army from "./ArmyLocal";

const ArmyService = {
  getArmies: async () => {
    return await army.getArmies().then(armies => armies);
  }
};

export default ArmyService;
