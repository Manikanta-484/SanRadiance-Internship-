import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Register.css';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        // Redirect to home page after successful registration
        navigate('/');
      }
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <div className="logo">🔷</div>
        <h2>Create your account</h2>
        <form onSubmit={handleRegister}>
          <label>Full name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Corey Barker"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="corybarker@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="(+750) 932-8907"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="register-btn">Register</button>
        </form>

        <div className="divider">Or</div>

        <button className="github-btn">Continue with GitHub</button>

        <p className="terms-text">
          By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Register;
