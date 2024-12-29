import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gamepage from './Gamepage'
import Playgame from './Playgame'

function Allrouts() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Gamepage/>}/>
            <Route path='game' element={<Playgame/>}/>
        </Routes>
    </div>
  )
}

export default Allrouts