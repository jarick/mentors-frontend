
import { connect } from 'react-redux'
import {VerifyView} from './../components/VerifyView'
import {changeInput, save} from './../modules/verify'

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
  verify: state.verify
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyView)
