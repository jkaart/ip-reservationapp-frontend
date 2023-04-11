import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordField(props) {
    const { className, id, onChange, onBlur, isInvalid } = props;
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const buttonBorderRadiusStyling = {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius:0,
        borderColor: "rgb(206, 212, 218)"
    };
    //verticalAlign: "middle !important"

    return (
        <Form.Group controlId="password" className={`password-field ${className}`} id={id}>
            <div className="input-group">
                <Form.Control
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (typeof onChange === "function") { onChange(e); }
                    }
                    }
                    onBlur={onBlur}// OUTPUT => <Form.Control onChange="setPassword(...); passCheck(this.value);" />
                    placeholder='Password'
                    isInvalid={isInvalid}
                />
                <div className="input-group-append">
                    <button 
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={handleToggleShowPassword}
                        style={buttonBorderRadiusStyling}
                    >
                        {showPassword ? <FaEyeSlash title="Show password" /> : <FaEye title="Hide password" />}
                    </button>
                </div>
            </div>
        </Form.Group>
    );
}

export default PasswordField;