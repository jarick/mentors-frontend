import React from 'react'

export const IssuesView = (props) => (
  <div className="row">
    <div className="row" style={{textAlign: "center"}}>
      <h2 className="header">Прохождение курса</h2>
    </div>
    <ul className="collection">
      <li className="collection-item avatar">
        <i className="material-icons circle">done</i>
        <span className="title">Название задания</span>
        <p>
          Описание задания
        </p>
        <div className="secondary-content" style={{width: 200}}>
          <div style={{float: "left", display:"inline", width: 25, marginRight: 7}}>
            <a href="#!">
              <i className="material-icons">grade</i>
            </a>
          </div>
          <div style={{float: "left", display:"inline", width: 100, marginRight: 7}}>
            <a className="indigo-text" href="#!">
              10 мин.
              <i className="material-icons">visibility</i>
            </a>
          </div>
          <div style={{float: "left", display:"inline", width: 25}}>
            <a className="deep-purple-text" href="#!">
              <i className="material-icons">comment</i>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
)
