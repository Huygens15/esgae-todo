import React from 'react'

const header = () => {
  return (
    <header className="flex items-center">
      <span>ESGAE ToDo</span>
      <nav>
        <ul>
          <a href="#"><li>Taches</li></a>
          <a href="#"><li>A propos</li></a>
          <a href="#"><li>Contacts</li></a>
        </ul>
      </nav>
    </header>
  )
}

export default header
