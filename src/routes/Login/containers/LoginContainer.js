
import { connect } from 'react-redux'
import { LoginView } from './../components/LoginView'
import { changeInput, save } from './../modules/login'

const mapDispatchToProps = {
  onChangeInput(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    return changeInput(name, value)
  },
  onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    return save(form)
  }
}

const mapStateToProps = (state) => ({
  login: state.login
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
