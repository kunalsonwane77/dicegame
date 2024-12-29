import React, { useState } from 'react'
// import Numdice from './../Images/dice_1.png';


function Playgame() {

 let dicenum = [1,2,3 ,4 ,5 ,6]

 let [score,setscore]=useState(0)

 let [selectednum,setselectednum]=useState()

 let [rolldicenum,setrolldicenum]=useState(1)



 function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min) ;
  }




function rolldice(){
  let randumnum=  getRandom(1,7)
  
 
    
   if(!selectednum){
    alert("select number first")

    return;
   }
   else if(selectednum==randumnum){
    setscore(score+selectednum)
   }

   setrolldicenum(randumnum)
  
}




  return (
    <div className='maindiv'>
     <div className='scorecontainer'>
        <div className='score'>
            <h1>{score}</h1>
            <h2>Total Score</h2>
        </div>

        <div>
            {dicenum.map((el,i)=>{

                let isselcted=el==selectednum
                return (
                    <button  key={i} className={`dicebtn ${isselcted?'selected':''}`} onClick={()=>setselectednum(el)}>{el}</button>
                )
            })}

            <p>Select number</p>
        </div>
        
     </div>

     <div className='diceclick'>
     <img src={`/Images/dice_${rolldicenum}.png`} alt={`Dice `} onClick={rolldice} />
        <h1>Click on Dice to roll</h1>

        <button onClick={()=>{
            setscore(0)
            setselectednum(null)
        }}>Reset Score</button>
        <button>Show Rules</button>

     </div>
     

    </div>
  )
}

export default Playgame