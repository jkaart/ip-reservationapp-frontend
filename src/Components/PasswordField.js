import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { passCheck } from './UserResetPassword';

function PasswordField(props) {
  const { className, id, onChangeProp } = props;
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
          onChange={
            (e) => {
              setPassword(e.target.value);
              passCheck(e.target.value);
            }
          } // OUTPUT => <Form.Control onChange="setPassword(...); passCheck(this.value);" />
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