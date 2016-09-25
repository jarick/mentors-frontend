import React from 'react'
import './Header.css'

export const Header = () => (
  <nav>
    <div className='container'>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Ментор всегда рядом</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Компетенции</a></li>
          <li><a href="/">Мои задачи</a></li>
          <li><a href="/profile">Профиль</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
