
import React, { useState, useEffect } from 'react';
import login from '../services/authService.js'; // Import your login function
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Attempting to login with:', email, password); // Debugging line
    const success = await login(email, password);
    console.log('Login success status:', success); // Debugging line

    if (success) {
      router.push('/Dashboard');
    } else {
      alert('Login failed!');
    }
  };
  return (

    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{
        flex: 1,
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '3rem'
      }}>
       
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem'
      }}>
        <div style={{
          maxWidth: '400px',
          width: '100%',
          padding: '2rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <h1>Hostel Hunt</h1>
          <p>Login to find you stay</p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '1rem', fontSize: '1rem', marginBottom: '1rem' }}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '1rem', fontSize: '1rem', marginBottom: '1rem' }}
            />
            <button type="submit" style={{ padding: '1rem', fontSize: '1rem', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
   
  );
}
