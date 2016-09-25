import React from 'react'

export const TasksView = (props) => (
  <div className="row">
    <div className="row" style={{textAlign: "center"}}>
      <h2 className="header">Курсы</h2>
    </div>
    <ul className="collection">
      <li className="collection-item avatar">
        <img src="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60" alt="Автор курса" className="circle"/>
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
    <ul className="pagination" style={{margin: "50px 0px 0px 0px"}}>
      <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
      <li className="active"><a href="#!">1</a></li>
      <li className="waves-effect"><a href="#!">2</a></li>
      <li className="waves-effect"><a href="#!">3</a></li>
      <li className="waves-effect"><a href="#!">4</a></li>
      <li className="waves-effect"><a href="#!">5</a></li>
      <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
    </ul>
  </div>
)
