import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onAddReminder }) => {
    return (
        <div className={`task noselect ${task.hasReminder ? 'reminder' : ''}`} onDoubleClick={() => onAddReminder(task.id)}>
            <h3>{task.title}</h3>
            <span className="delete"><FaTimes onClick={() => onDelete(task.id)} /></span>
            <p>{`${task.hasReminder && task.reminder !== '' ? task.reminder : 'No reminder set'}`}</p>
        </div>
    )
}

export default Task