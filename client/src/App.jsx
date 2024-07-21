import {Routes, Route} from 'react-router-dom';

import Header from "./componets/header/Header"
import Home from './componets/home/Home';
import Login from './componets/login/Login';
import Register from './componets/regiser/Register';
import GameList from './componets/game-list/GameList';
import GameCreate from './componets/game-create/GameCreate';

function App() {
   return (
  <div id="box">
     <h1>Cars</h1>
      <Header/>
    <main id="main-content">
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/register' element = {<Register />}></Route>
        <Route path='/games' element = {<GameList />}></Route>
        <Route path='/games/create' element = {<GameCreate />}></Route>
      </Routes>
    </main>
 </div>
  )
}

export default App
