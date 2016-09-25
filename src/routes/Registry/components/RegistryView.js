
import React from 'react'

const If = React.createClass({
  render() {
    return (this.props.test) ? this.props.children : false
  }
})

export const RegistryView = (props) => (
  <div className="row">
    <div className="row" style={{textAlign: "center"}}>
      <h2 className="header">Регистрация</h2>
    </div>
    <If test={props.registry.isFail} >
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
          <input name="mail" required="true" id="mail" type="email"
                 value={props.registry.data.mail} onChange={props.onChangeInput}/>
          <label htmlFor="mail">E-Mail</label>
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
