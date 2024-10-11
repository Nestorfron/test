const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        users: ["user1", "user2", "user3"],
      },
      actions: {
        login: (userData) => {
          const store = getStore();
          setStore({
            ...store,
            user: userData,
          });
        },
        logout: () => {
          setStore({
            user: null,
            token: null,
          });
        },
        setMessage: (message) => {
          setStore({ message });
        },
      },
    };
  };
  
  export default getState;
  