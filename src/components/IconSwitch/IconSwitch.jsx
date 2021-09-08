import './IconSwitch.css'
import React from 'react'

export default function IconSwitch(props) {
   return (
     <div 
         className='iconswitch material-icons'
         onClick={() => props.onSwitch(props.icon)}
     >
         {props.icon}
     </div>
   )
}