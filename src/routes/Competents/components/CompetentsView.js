import React from 'react'

export const CompetentsView = () => (
  <div className="row">
    <div className="row" style={{textAlign: "center"}}>
      <h2 className="header">Тематики</h2>
    </div>
    <ul className="collection">
      <li className="collection-item avatar">
        <img src="https://node-os.com/images/nodejs.png" alt="node js" className="circle"/>
        <span className="title">Название тематики</span>
        <p>
          Описание о чём тематика
        </p>
        <div className="secondary-content" style={{width: 70}}>
          <div style={{float: "left", display:"inline", width: 25, marginRight: 7}}>
            <a href="#!">
              <i className="material-icons">format_list_numbered</i>
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
