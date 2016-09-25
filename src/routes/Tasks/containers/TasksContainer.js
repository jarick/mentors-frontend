
import { connect } from 'react-redux'
import { TasksView } from './../components/TasksView'
import { load } from './../modules/tasks'

const mapDispatchToProps = {
  onLoad() {
    return load()
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksView)
