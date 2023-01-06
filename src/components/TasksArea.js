import PropTypes from 'prop-types'
import Task from './Task.js'

const TasksArea = ({ tasks, onDelete, onAddReminder }) => {
    return (
        <div className="tasks-area">
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onAddReminder={onAddReminder} />))}
        </div>
    )
}

TasksArea.propTypes = {
    onDelete: PropTypes.func
}

export default TasksArea