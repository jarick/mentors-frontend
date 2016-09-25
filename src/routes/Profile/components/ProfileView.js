
import React from 'react'

const If = React.createClass({
  render() {
    return (this.props.test) ? this.props.children : false
  }
})

export const ProfileView = (props) => (
  <div className="row">
    <div className="row" style={{textAlign: "center"}}>
      <h2 className="header">Личный кабинет</h2>
    </div>
    <If test={props.profile.isFail} >
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="card-panel red lighten-2">
            Проверьте правильность введенных данных.
          </div>
        </div>
      </div>
    </If>
    <form className="col s12" onSubmit={props.onSubmit}>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="name" id="name" type="text"
                 value={props.profile.data.name} onChange={props.onChangeInput} />
          <label htmlFor="name">Имя</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="lastName" id="lastName" type="text"
                 value={props.profile.data.lastName} onChange={props.onChangeInput} />
          <label htmlFor="lastName">Фамилия</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="avatar" id="avatar" type="text"
                 value={props.profile.data.avatar} onChange={props.onChangeInput} />
          <label htmlFor="avatar">Аватар</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s4 offset-s4" style={{textAlign: "center"}}>
          <button className="btn waves-effect waves-light" type="submit">
            Сохранить
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  </div>
)
