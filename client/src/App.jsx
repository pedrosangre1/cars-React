import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import Header from "./componets/header/Header"
import Home from './componets/home/Home';
import Login from './componets/login/Login';
import Register from './componets/regiser/Register';
import GameList from './componets/game-list/GameList';
import GameCreate from './componets/game-create/GameCreate';
import GameDetails from './componets/game-details/GameDetails';
import { AuthContext } from './contexts/authContext';


function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) =>{
    // TODO: Quick solution, fix next time
    localStorage.setItem('accessToken', state.accessToken)
    
    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
  email: authState.email,
  accessToken: authState.accessToken,
  isAuthenticated: !!authState.email,
  changeAuthState,
}

   return (
    <AuthContext.Provider value = {contextData}>
  <div id="box">
     <h1>Коли</h1>
      <Header/>
    <main id="main-content">
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/register' element = {<Register />}></Route>
        <Route path='/games' element = {<GameList />}></Route>
        <Route path='/cars/:carsId/details' element = {<GameDetails />}></Route>
        <Route path='/games/create' element = {<GameCreate />}></Route>
      </Routes>
    </main>
 </div>
 </AuthContext.Provider>
  )
}

export default App
