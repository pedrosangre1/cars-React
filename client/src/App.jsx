import {Routes, Route} from 'react-router-dom';

import { AuthContextProvaider } from './contexts/authContext';

import Header from "./componets/header/Header"
import Home from './componets/home/Home';
import Login from './componets/login/Login';
import Register from './componets/regiser/Register';
import GameList from './componets/game-list/GameList';
import GameCreate from './componets/game-create/GameCreate';
import GameDetails from './componets/game-details/GameDetails';
import Logout from './componets/logout/Logout';


function App() {


   return (
    <AuthContextProvaider >
  <div id="box">
     <h1>Коли</h1>
      <Header/>
    <main id="main-content">
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/register' element = {<Register />}></Route>
        <Route path='/logout' element = {<Logout />}></Route>
        <Route path='/cars' element = {<GameList />}></Route>
        <Route path='/cars/:carsId/details' element = {<GameDetails />}></Route>
        <Route path='/cars/create' element = {<GameCreate />}></Route>
      </Routes>
    </main>
 </div>
 </AuthContextProvaider>
  )
}

export default App
