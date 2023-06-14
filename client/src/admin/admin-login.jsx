import React, { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login validation and authentication logic here
    if (username === 'admin' && password === 'password') {
      console.log('Admin logged in successfully!');
      // Redirect or perform further actions for successful login
    } else {
      console.log('Invalid credentials');
      // Display error message or perform other actions for failed login
    }
  };

  return (
    <div className=' p-1 justify-content-center border shadow'>
      <h3>Admin Login</h3>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input class="adm-pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button class="adm-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
