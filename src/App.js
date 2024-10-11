import React, { useEffect } from 'react';
import { useContext } from 'react';
import '../src/styles/App.css';
import Nav_bar from "../src/components/navbar";
import { Context } from "../src/store/AppContext";


function App() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUsers();
    actions.getBranchs();
    actions.getProviders();
    actions.getAssets();
    actions.getUsersMB();
    actions.getMigrations();
  }, []);


  return (
    <div className="App">
      <Nav_bar />
      <h1 className='text-3xl text-center underline'>Prueba4</h1>
      {store.users.map((user) => {
        return <h1>{user}</h1>
      })};
    </div>
  );
}

export default App;