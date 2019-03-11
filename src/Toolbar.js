import React from 'react'
import Link from 'react-router-dom'
import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <a href="/">Optimal Traffic Control</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/login">Log In</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar