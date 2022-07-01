import React, { useReducer } from 'react';
import { UserContext } from './context/userContext';
import { stateReducer } from './reducer';
import Menu from './views/Menu/Menu';
import Navigation from './views/Navigation/Navigation';
import Main from './views/Main/Main';



const App = () => {

  const [state, dispatch] = useReducer(stateReducer, {
    username: 'Иванов А. И.',
    registryNumber: '',
    fullName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    citizenship: '',
    snils: '',
    registerAdress: '',
    livingAdress: ''
  })

  return (
    <UserContext.Provider value={{state, dispatch}}>
      <Menu />
      <Navigation />
      <Main />
    </UserContext.Provider> 
  )
}

export default App;
