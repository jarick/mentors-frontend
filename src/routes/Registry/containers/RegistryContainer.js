
import { connect } from 'react-redux'
import { RegistryView } from './../components/RegistryView'
import { changeInput, save } from './../modules/registry'

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
  registry: state.registry
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistryView)
