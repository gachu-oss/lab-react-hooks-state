import React from 'react'

function DarkModeToggle(props) {
  let buttonText = 'Toggle Dark Mode'

  if (props.darkMode === true) {
    buttonText = 'Toggle Light Mode'
  }

  return (
    <button onClick={props.toggleDarkMode}>
      {buttonText}
    </button>
  )
}

export default DarkModeToggle