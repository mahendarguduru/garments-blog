import React from 'react';
import './style.css';

const Card=(props=>{
    return(
       <div className='card' {...props}>
           {props.children}
            
       </div>
    )
})

export default Card;