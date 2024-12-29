import React from 'react'
import { Link } from 'react-router-dom';
// import Dice from './../../public/Images/alldice.png';





const Gamepage = () => {
  return (
    <div className='container'>
        <img src= {"/Images/alldice.png"}alt=""  className='dice'/>

        <div className='title'>
        <h1>DICE GAME</h1>

        <Link to={"/game"}>
        <button>Play Now</button>
        </Link>
        
        </div>
       
    </div>
  )
}

export default Gamepage