import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbarLanding";

const LoginSignup = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState(false); 
  const navigate = useNavigate(); 

  // Manejo del login
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
  
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("rol", response.data.rol); 
        
        alert("Inicio de sesión exitoso");
  
        if (response.data.rol === "admin") {
          navigate("/Admin");
        } else if (response.data.rol === "keeper") {
          navigate("/Cuidador"); 
        } 
      } else {
        setMessage("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en el login:", error);
      setMessage("Error al iniciar sesión");
    }
  };
  

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <div className="input-box">
            <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required
            />
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} 
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="forgot-link">
            <a href="recuperar">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          {message && <div className="error-message">{message}</div>}
        </form>
      </div>

      <div className="form-box register">
        <form action="#">
          <h1>Registro</h1>

          <div className="input-box">
            <input type="text" placeholder="Nombre" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Correo" required />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Teléfono" required />
            <i className="bx bxs-phone"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn">
            Registrarse
          </button>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>¡Bienvenido!</h1>
          <img src="./imagenes/brazalete.png" alt="Brazalete" />
          <p>¿No tienes una cuenta?</p>
          <button className="btn register-btn" onClick={() => setIsActive(true)}>
            Regístrate
          </button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>¡Bienvenido!</h1>
          <img src="./imagenes/brazalete.png" alt="Brazalete" />
          <p>¿Ya tienes una cuenta?</p>
          <button className="btn login-btn" onClick={() => setIsActive(false)}>
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
