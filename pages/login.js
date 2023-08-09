import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";


const login = () => {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    router.push(`/content/${username}/m1`);
  };

  return (
    <div className='wholebody'>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form className='form' onSubmit={handleSubmit}>
            <h1 className='h1'>Login</h1>
            <span style={{padding: '5px', marginBottom: '10px'}} className='span'>using your credentials</span>
            <input
              type="text"
              placeholder="Username"
              className="input"
              name="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button style={{marginTop: '20px'}} className='button' type="submit">Login</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className='h1'>Generate Credentials</h1>
              <p style={{color:'white'}} className='p'>Fill the attached form</p>
              <Link href={"/google-form"}>
                <button className="ghost button" id="signUp">Fill Details</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default login