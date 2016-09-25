
import { connect } from 'react-redux'
import { IssuesView } from './../components/IssuesView'
import { load } from './../modules/issues'

const mapDispatchToProps = {
  load
}

const mapStateToProps = (state) => ({
  issues: state.issues
})

export default connect(mapStateToProps, mapDispatchToProps)(IssuesView)
