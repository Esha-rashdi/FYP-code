import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function RegistrationForm() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle registration (e.g., API call)
    console.log('User registered:', formData);
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h1 className="h1" style={{ color: 'var(--primary-50)' }}>Register</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="text-reg" style={{ color: 'var(--primary-100)' }}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="text-reg" style={{ color: 'var(--primary-100)' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <label className="text-reg" style={{ color: 'var(--primary-100)' }}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
        </label>
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
