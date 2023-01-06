import PropTypes from 'prop-types'

const Btn = ({ text, onClick }) => {
    return (
        <button className="btn" onClick={onClick}>{text}</button>
    )
}

Btn.defaultProps = {
    text: 'Button',
}

Btn.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Btn