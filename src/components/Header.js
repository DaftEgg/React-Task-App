import PropTypes from 'prop-types'
import Button from './Button'
import { FaAdjust } from 'react-icons/fa'

const Header = ({ title, showAddTask, onAdd, onToggleNightMode }) => {
    return (
        <header>
            <FaAdjust style={nightModeStyle} onClick={onToggleNightMode} />
            <h2>{title}</h2>
            <Button text={showAddTask ? "Close" : "Add"} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

const nightModeStyle = {
    marginRight: '10px',
    cursor: 'pointer'
}

export default Header