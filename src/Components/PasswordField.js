import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordField(props) {
  const { className, id, onChangeProp, onBlurProp } = props;
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form.Group controlId="password" className={`password-field ${className}`} id={id}>
      <div className="input-group">
        <Form.Control
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => {
              setPassword(e.target.value);
              if (typeof onChangeProp === "function"){ onChangeProp(e.target.value, id); }
            }
          } 
          onBlur={onBlurProp}// OUTPUT => <Form.Control onChange="setPassword(...); passCheck(this.value);" />
          placeholder='Password'
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleToggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
    </Form.Group>
  );
}

export default PasswordField;