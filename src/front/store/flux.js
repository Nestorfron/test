const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      providers: [],
      branchs: [],
      assets: [],
      usersMB: [],
      migrations: [],
      role: ["Master", "Admin", "Ingeniero de Campo"]
    },
    actions: {
    },
  };
};

export default getState;
