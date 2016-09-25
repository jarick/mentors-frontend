
import { connect } from 'react-redux'
import { ProfileView } from './../components/ProfileView'
import { changeInput, save, load } from './../modules/profile'

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
  profile: state.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
