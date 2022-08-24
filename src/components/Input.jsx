import PropTypes from 'prop-types';
import {AiFillCaretDown} from 'react-icons/ai';

const Input = ({
    placeholder,
    onChangeValue,
    value,
    name,
    element,
    data,
    disabled,
    address,
    error,
    type,
}) => {
    return (
        <div className={`input ${error ? 'error' : ''}`}>
            {element == 'input' &&
                (value != null ? (
                    <input
                        type={type ? type : 'text'}
                        name={name}
                        placeholder={placeholder}
                        onChange={(e) => onChangeValue(e)}
                        value={value}
                    />
                ) : (
                    <input
                        type={type ? type : 'text'}
                        name={name}
                        placeholder={placeholder}
                        onChange={(e) => onChangeValue(e)}
                    />
                ))}
            {element == 'select' && (
                <div className={`input_select ${disabled ? 'disabled' : ''}`}>
                    <div className='input_select_text'>
                        {address == '' ? placeholder : ''}
                        {!disabled && <span>{address == '' ? '---' : address}</span>}
                    </div>
                    <div className='input_select_icon'>
                        <div className='input_select_icon_hr'></div>
                        <AiFillCaretDown />
                    </div>
                    <div className='input_select_dropdown'>
                        <div
                            className={`input_select_dropdown_item ${
                                address == '' ? 'active' : ''
                            }`}
                            data-name={name}
                            data-value=''
                            data-code={0}
                            onClick={(e) => onChangeValue(e)}
                        >
                            ---
                        </div>
                        {data &&
                            data.map((item) => (
                                <div
                                    className={`input_select_dropdown_item ${
                                        address == item.name ? 'active' : ''
                                    }`}
                                    key={item.code}
                                    data-name={name}
                                    data-value={item.name}
                                    data-code={item.code}
                                    onClick={(e) => onChangeValue(e)}
                                >
                                    {item.name}
                                </div>
                            ))}
                    </div>
                </div>
            )}
            {element == 'textarea' && (
                <textarea
                    name={name}
                    cols='30'
                    rows='3'
                    placeholder={placeholder}
                    onChange={(e) => onChangeValue(e)}
                ></textarea>
            )}
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    onChangeValue: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    data: PropTypes.array,
    disabled: PropTypes.bool,
    address: PropTypes.string,
    type: PropTypes.string,
};

export default Input;
