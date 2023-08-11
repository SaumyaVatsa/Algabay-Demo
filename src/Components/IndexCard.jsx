import React from 'react'
import nifty from "../Assets/50.png"
import "./IndexCard.css"

function IndexCard(props) {
  return (
    <div className='indexCard'>
        <img src={nifty} alt="Stock Image" />
        <div className='stockData'>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        </div>
        {props.status ? <p className='cStatus' style={{color:'#09f005'}}>{props.cStatus}</p> : <p className='cStatus' style={{color:'red'}}>{props.cStatus}</p>}
        
    </div>
  )
}

export default IndexCard