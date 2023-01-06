import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [reminder, setReminder] = useState('')
    const [hasReminder, setHasReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            alert('Task cannot be empty')
            return
        }

        onAdd({ title, reminder, hasReminder })
        setTitle('')
        setReminder('')
        setHasReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>reminder & Time</label>
                <input type="text" placeholder="Add date & time" value={reminder} onChange={(e) => setReminder(e.target.value)} />
            </div>
            <div className="form-control">
                <label className="make-inline">Set Reminder</label>
                <input type="checkbox" checked={hasReminder} value={reminder} onChange={(e) => setHasReminder(e.currentTarget.checked)} />
            </div>
            <div className="form-control">
                <input type="submit" value="Create Task" />
            </div>
        </form>
    )
}

export default AddTask