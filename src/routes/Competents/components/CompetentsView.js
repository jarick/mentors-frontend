import React from 'react'

export const CompetentsView = () => (
  <ul className="collection">
    <li className="collection-item avatar">
      {/* <img src="images/yuna.jpg" alt="" className="circle"/> */}
      <i className="material-icons circle">folder</i>
      <span className="title">Название тематики</span>
      <p>
        Описание о чём тематика
      </p>
      <div className="secondary-content" style={{width: 100}}>
        <div style={{float: "left", display:"inline", width: 25, marginRight: 7}}>
          <a href="#!">
            <i className="material-icons">format list numbered</i>
          </a>
        </div>
        <div style={{float: "left", display:"inline", width: 25, marginRight: 7}}>
          <a className="indigo-text" href="#!">
            <i className="material-icons">done</i>
          </a>
        </div>
      </div>
    </li>
  </ul>
)
