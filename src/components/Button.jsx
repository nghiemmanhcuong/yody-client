import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <Link
            to={props.link}
            className={`button ${props.outline && 'outline'} ${props.bold && 'bold'}`}
            style={{fontSize: `${props.fontSize}px`,width:props.width ? props.width : ''}}
        >
            {props.text}
        </Link>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    outline: PropTypes.bool,
    bold: PropTypes.bool,
    width: PropTypes.number,
};

export default Button;
