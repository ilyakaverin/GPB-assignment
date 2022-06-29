import React, { useReducer } from 'react';
import { UserContext } from './ context/userContext';
import { stateReducer } from './reducer';
import Menu from './views/Menu/Menu';


const App = () => {

  const [state, dispatch] = useReducer(stateReducer, {
    username: 'Иванов А. И.'
  })
  return (
    <UserContext.Provider value={state}>
      <Menu />
    </UserContext.Provider> 
  )
}

export default App;
