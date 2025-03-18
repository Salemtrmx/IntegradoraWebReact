import "../css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbarLanding";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <section id="inicio">
        <div className="contenido">
          <Navbar />
          <div className="presentacion">
            <p className="bienvenida">Bienvenido</p>
            <h2>
              Descubre el nuevo <span>Brazalete de recordatorios</span>
            </h2>
            <p className="descripcion">
              Aquí encontrarás información relevante acerca de nuestro nuevo
              producto
            </p>
            <a href="#sobremi">Comenzar</a>
          </div>
        </div>
      </section>

      <section id="sobremi">
        <p className="titulo-seccion" data-aos="fade-up">
          Propósito
        </p>

        <div className="contenedor" data-aos="fade-up">
          <div className="contenedor-foto">
            <img
              src="https://www.toptecnouy.com/imgs/productos/productos34_35396.jpg"
              alt="Brazalete"
            />
          </div>

          <div className="sobremi">
            <h2>
              Brazalete <span>V1</span>
            </h2>
            <h3>Diseñado para el cuidado</h3>
            <p>
              Cuidar de un ser querido a distancia ahora es más fácil y seguro.
              Nuestro brazalete inteligente está diseñado para ayudar a las
              personas a recordar la hora exacta de tomar sus medicamentos. Con
              alertas programables y notificaciones en tiempo real, este
              dispositivo brinda tranquilidad tanto a los usuarios como a sus
              cuidadores.
            </p>
          </div>
        </div>
        <a href="#Detalles">Continuar</a>
      </section>

      <section id="Detalles">
        <p className="titulo-seccion">Recordatorios Personalizables</p>
        <div className="contenedor">
          <div className="contenedor-foto">
            <img
              src="https://www.toptecnouy.com/imgs/productos/productos34_35396.jpg"
              alt="Brazalete"
            />
          </div>

          <div className="sobremi">
            <h2>
              Brazalete <span>V1</span>
            </h2>
            <h3>Ajustalo a tu medida</h3>
            <p>
              Programa fácilmente los horarios de los medicamentos desde una
              aplicación móvil intuitiva.
            </p>
          </div>
        </div>
        <a href="#contacto">Continuar</a>
      </section>

      <section id="contacto">
        <h3 className="titulo-seccion">Contáctame</h3>
        <div className="contenedor-form">
          <form>
            <div className="fila mitad">
              <input type="text" placeholder="Nombre Completo *" />
              <input type="email" placeholder="Dirección de Email" />
            </div>
            <div className="fila">
              <input type="text" placeholder="Tema..." />
            </div>
            <div className="fila">
              <textarea
                cols="30"
                rows="10"
                placeholder="Tu Mensaje..."
              ></textarea>
            </div>
            <input
              type="submit"
              value="Enviar Mensaje"
              className="btn-enviar"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;