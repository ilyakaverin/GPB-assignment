import React, { useReducer } from 'react';
import { UserContext } from './ context/userContext';
import { stateReducer } from './reducer';
import Menu from './views/Menu/Menu';
import Navigation from './views/Navigation/Navigation';



const App = () => {

  const [state, dispatch] = useReducer(stateReducer, {
    username: 'Иванов А. И.'
  })

  return (
    <UserContext.Provider value={{state, dispatch}}>
      <Menu />
      <Navigation />
    </UserContext.Provider> 
  )
}

export default App;
