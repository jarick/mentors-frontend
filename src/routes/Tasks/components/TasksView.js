import React from 'react'

export const TasksView = (props) => (
  <div className="row">
    <div className="row" style={{textAlign: "center"}}>
      <h2 className="header">Курсы</h2>
    </div>
    <ul className="collection">
      <li className="collection-item avatar">
        {/* <img src="images/yuna.jpg" alt="" className="circle"/> */}
        <i className="material-icons circle">folder</i>
        <span className="title">Название курса</span>
        <p>
          Тематика курса<br/>
          Описание курса
        </p>
        <div className="secondary-content" style={{width: 100}}>
          <div style={{float: "left", display:"inline", width: 25, marginRight: 7}}>
            <a href="#!">
              <i className="material-icons">grade</i>
            </a>
          </div>
          <div style={{float: "left", display:"inline", width: 25, marginRight: 7}}>
            <a className="indigo-text" href="#!">
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
