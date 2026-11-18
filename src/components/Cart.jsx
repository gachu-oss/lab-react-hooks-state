import React from 'react'

function Cart(props) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {props.cart.map(function (item, index) {
          return <li key={index}>{item.name} is in your cart.</li>
        })}
      </ul>
    </div>
  )
}

export default Cart