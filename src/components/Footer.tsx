import "../CSS_styles/Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer: React.FC = () => {
  return (
    <footer id="dk-footer" className="dk-footer">
      <div className="container-fluid">
        {/* Contenedor principal */}
        <div className="row justify-content-evenly g-4">
          {/* Columna 1: Información y Redes Sociales */}
          <div className="col-md-12 col-lg-3 px-3">
            <div className="dk-footer-box-info">
              <a href="/" className="footer-logo">
                <img
                  src="/img/tuki.jpg"
                  alt="footer_logo"
                  className="img-fluid"
                />
              </a>
              <p className="footer-info-text">
                La soledad te espera cuando la lucidez te ha abandonado.
              </p>
              <div className="footer-social-link">
                <h3>Síguenos en:</h3>
                <ul>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:wiloidrovogd@gmail.com" className="gmail">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Columna 2: Contacto */}
          <div className="col-md-12 col-lg-3 px-3">
            <div className="contact-us">
              <div className="contact-icon">
                <i className="fa fa-map-o" aria-hidden="true"></i>
              </div>
              <div className="contact-info">
                <h3>Urcuquí, Ecuador</h3>
              </div>
            </div>
            <div className="contact-us contact-us-last">
              <div className="contact-icon">
                <i
                  className="fa fa-volume-control-phone"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="contact-info">
                <h3>+593 99 479 0 288</h3>
                <p>Llámanos</p>
              </div>
            </div>
          </div>

          {/* Columna 3: Enlaces */}
          <div className="col-md-12 col-lg-3 px-3">
            <div className="footer-widget footer-left-widget">
              <div className="section-heading">
                <h2>Enlaces</h2>
                <span className="animate-border border-black mb-3"></span>
              </div>
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="/mapa">Mapa</a>
                </li>
                <li>
                  <a href="#">Equipo</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span>&copy; 2024 Visual Crime. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
