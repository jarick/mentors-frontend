
import { connect } from 'react-redux'
import { CompetentsView } from './../components/CompetentsView'
import { load } from './../modules/competents'

const mapDispatchToProps = {
  load
}

const mapStateToProps = (state) => ({
  competents: state.competents
})

export default connect(mapStateToProps, mapDispatchToProps)(CompetentsView)
