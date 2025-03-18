import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; // Importa la librería jwt-decode
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
      // Realiza la solicitud POST al servidor
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Verifica si la respuesta contiene un token
      if (response.data && response.data.token) {
        // Almacena el token en el localStorage
        localStorage.setItem("token", response.data.token);

        // Decodifica el token para extraer información
        const decodedToken = jwtDecode(response.data.token);

        // Almacena el rol en el localStorage (si está presente en el token)
        if (decodedToken.rol) {
          localStorage.setItem("rol", decodedToken.rol);
        }

        console.log("Respuesta del servidor:", response.data);
        console.log("Token decodificado:", decodedToken);

        // Muestra un mensaje de éxito
        setMessage("Inicio de sesión exitoso");

        // Redirige según el rol
        if (decodedToken.rol === "admin") {
          navigate("/Admin");
        } else if (decodedToken.rol === "keeper") {
          navigate("/Cuidador");
        } else {
          // Si el rol no es reconocido, redirige a una página por defecto
          navigate("/");
        }
      } else {
        // Si no hay token en la respuesta, muestra un mensaje de error
        setMessage("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en el login:", error);

      // Maneja errores específicos de Axios
      if (error.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        if (error.response.status === 401) {
          setMessage("Credenciales incorrectas");
        } else {
          setMessage("Error al iniciar sesión");
        }
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        setMessage("No se recibió respuesta del servidor");
      } else {
        // Otros errores
        setMessage("Error al iniciar sesión");
      }
    }
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <Navbar /> {/* Barra de navegación */}
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <div className="input-box">
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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