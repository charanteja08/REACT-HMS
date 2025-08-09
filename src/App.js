import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          maxWidth: '400px', 
          margin: 'auto', 
          background: 'white', 
          padding: '20px', 
          borderRadius: '10px', 
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)' 
        }}
      >
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', padding: '10px', margin: '8px 0', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', padding: '10px', margin: '8px 0', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <label>Password</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', padding: '10px', margin: '8px 0', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <button 
          type="submit" 
          style={{ width: '100%', padding: '10px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default App;
