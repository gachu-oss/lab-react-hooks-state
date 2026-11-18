import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

function App() {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // State for cart management
  const [cart, setCart] = useState([])

  // State for category filtering
  const [category, setCategory] = useState('all')

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  function addToCart(product) {
    setCart([...cart, product])
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  let appClass = 'light'
  if (darkMode === true) {
    appClass = 'dark'
  }

  return (
    <div className={appClass}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList category={category} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  )
}

export default App