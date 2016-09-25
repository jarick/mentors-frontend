import React from 'react'
import { IndexLink, Link } from 'react-router'

export const Footer = (props) => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Наш слоган: тра-та тра-та ... опа-опа</h5>
          <p className="grey-text text-lighten-4">
            Тут мноооогооо букв о том кто мы такие и что мы делаем
          </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Разделы</h5>
          <ul>
            <li>
              <IndexLink to='/' className="grey-text text-lighten-3">
                Компетенции
              </IndexLink>
            </li>
            <li>
              <Link to='/issues' className="grey-text text-lighten-3">
                Задания
              </Link>
            </li>
            <li>
              <Link to='/login' className="grey-text text-lighten-3">
                Логин
              </Link>
            </li>
            <li>
              <Link to='/registry' className="grey-text text-lighten-3">
                Регистрация
              </Link>
            </li>
            <li>
              <Link to='/tasks' className="grey-text text-lighten-3">
                Курсы
              </Link>
            </li>
            <li>
              <Link to='/verify' className="grey-text text-lighten-3">
                Подтверждение E-Mail
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2016 MediaPark
        <Link to='http://mediapark.co/' className="grey-text text-lighten-4 right">
          О компании
        </Link>
      </div>
    </div>
  </footer>
)
