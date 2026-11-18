import React from 'react'
import styles from '../styles/ProductCard.module.css'

function ProductCard(props) {
  const product = props.product

  let cardClass = styles.card
  let stockText = 'In Stock'

  if (product.inStock === false) {
    cardClass = styles.card + ' ' + styles.outOfStock
    stockText = 'Out of Stock'
  }

  function handleAddClick() {
    props.addToCart(product)
  }

  return (
    <div className={cardClass}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {stockText}</p>

      <button
        data-testid={'product-' + product.id}
        onClick={handleAddClick}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard