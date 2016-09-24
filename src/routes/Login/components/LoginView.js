import React from 'react'
import './LoginView.scss'

export const LoginView = () => (
  <div>
    <h1>Login View</h1>

    <form onSubmit={() => {}}>
      <div className="form-row">
        <span className="form-label"> Login: </span>
        <input type="text" name="login" value="JohnDoe" onChange={() => {}}/>
      </div>
      <div className="form-row">
        <span className="form-label"> Password: </span>
        <input type="password" name="password" value="12345678Aa" onChange={() => {}}/>
      </div>
      <div className="form-row">
        <input type="submit" value="Login" />
      </div>
    </form>

  </div>
)

export default LoginView
