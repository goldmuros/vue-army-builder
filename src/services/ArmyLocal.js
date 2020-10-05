const army = {
  getArmies: () => {
    return new Promise(resolve => {
      const armies = [
        {
          id: "dwarf",
          title: "Enanos",
          src: "dwarf.png"
        },
        {
          id: "darkElf",
          title: "Elfos Oscuros",
          src: "dark_elf.png"
        }
      ];

      return resolve(armies);
    });
  }
};

export default army;
