import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

function ProductList(props) {
  let filteredProducts = sampleProducts

  if (props.category !== 'all') {
    filteredProducts = sampleProducts.filter(function (product) {
      return product.category === props.category
    })
  }

  if (filteredProducts.length === 0) {
    return (
      <div>
        <h2>Available Products</h2>
        <p>No products available</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.map(function (product) {
        return (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={props.addToCart}
          />
        )
      })}
    </div>
  )
}

export default ProductList