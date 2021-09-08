import './ListView.css'
import React from 'react'

export default function ListView(props) {
   return (
     <div className='listview'>
         {props.products.map((product) => {
            return (
               <div 
               className='listview-item'
               key={product.name + product.color}
               >
                  <img 
                    className='listview-item-img'
                    src={product.img} 
                    alt={product.name}
                  /> 
                  <div className='listview-item-name'>{product.name.toUpperCase()}</div>
                  <div className='listview-item-color'>{product.color}</div>
                  <div className='listview-item-price'>${product.price}</div>
                  <button className='listview-item-button'>add to cart</button>
               </div>
            )
         })}
     </div>
   )
}