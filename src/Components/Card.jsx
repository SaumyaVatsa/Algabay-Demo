import React from 'react'
import IndexCard from './IndexCard'
import "./Card.css"

function Card(props) {
  return (
    <div style={{margin: '20px'}}>
        <h2>{props.headline}</h2>
        <div className='container'>
            <IndexCard name='Nifty 50' price='18200.84 INR' cStatus='+0.23%' status={true} />
            <IndexCard name='SENSEX' price='16900.43 INR' cStatus='-0.34%' status={false}/>
            <IndexCard name='SENSEX'  price='18510.43 INR' cStatus='+0.84%' status={true} />
            <p className='option'>See all </p>
        </div>
    </div>
  )
}

export default Card