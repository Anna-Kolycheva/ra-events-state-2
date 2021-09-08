import './CardsView.css'
import React from 'react'

export default function CardsView(props) {
   return (
     <div className='cardview'>
         {props.products.map((product) => {
            return (
               <div 
               className='cardview-item'
               key={product.name + product.color}
               >
                  <p className='cardview-item-name'>{product.name.toUpperCase()}</p>
                  <p className='cardview-item-color'>{product.color}</p>
                  <p className='cardview-item-price'>${product.price}</p>
                  <button className='cardview-item-button'>add to cart</button>
                    <img 
                    className='cardview-item-img'
                    src={product.img} 
                    alt={product.name}
                    /> 
               </div>
            )
         })}
     </div>
   )
}