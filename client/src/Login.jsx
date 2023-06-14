import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic, e.g., send login credentials to the server
  };

  return (
    <div>
      <h1><center>Login</center></h1>
      <form className="form-sub" onSubmit={handleSubmit}>
        <label  htmlFor="email">Email:</label>
        <input class="email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input class="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button class="submit" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;




















// import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from "./context/AuthProvider";


// const LOGIN_URL = '/auth';

// const Login = () => {
//     const { setAuth } = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//        try {
//            const response = await axios.post(LOGIN_URL,
//                JSON.stringify({ user, pwd }),
//                 {
//                    headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             console.log(JSON.stringify(response?.data));
//             console.log(JSON.stringify(response));
//             const accessToken = response?.data?.accessToken;
//             const roles = response?.data?.roles;
//             setAuth({ user, pwd, roles, accessToken });
//             setUser('');
//             setPwd('');
//             setSuccess(true);
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
     





