import React from 'react'

const If = React.createClass({
  render() {
    return (this.props.test) ? this.props.children : false
  }
})

export const VerifyView = (props) => (
  <div className="row">
    <div className="row" style={{textAlign: "center"}}>
      <h2 className="header">Подтверждение E-Mail</h2>
    </div>
    <If test={props.verify.isFail} >
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
          <input required="true" name="id" id="id" type="number"
                 value={props.verify.data.id} onChange={props.onChangeInput}/>
          <label htmlFor="id">ID вашей авторизации</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="checkword" required="true" minLength="5" id="checkword" type="text"
                 value={props.verify.data.checkword} onChange={props.onChangeInput}/>
            <label htmlFor="checkword">Код</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input id="password" name="password" required="true" minLength="8" type="password"
                 value={props.verify.data.password} onChange={props.onChangeInput}/>
          <label htmlFor="password">Пароль</label>
        </div>
      </div>
      <div className="row" style={{textAlign: "center"}}>
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
