import { useState } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App"
function Trial() {
  const [ password, setPassword ] = useState('');

  return (
    <div className="container">
      <div className="col-md-6 mx-auto text-right">
        <div className="form-group mb-1">
            <App />
        
          <input
            type="password"
            className="form-control shadow-none"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        
        <PasswordStrengthMeter password={password} />
      </div>
    </div>
  );
}

export default Trial;