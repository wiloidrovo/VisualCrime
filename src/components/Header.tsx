import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
      {/*logo */}
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h2 className="m-1">Visual Crime</h2>
        </Link>
      </div>

      {/* Navegación y Botones */}
      <div className="d-flex align-items-center gap-4 ms-auto">
        {/* Navegación */}
        <nav className="d-flex gap-4">
          <Link to="/" className="text-white text-decoration-none">
            Inicio
          </Link>
          <Link to="/mapa" className="text-white text-decoration-none">
            Mapa
          </Link>
          <Link to="#" className="text-white text-decoration-none">
            Gráficas
          </Link>
        </nav>
        {/* Botones */}
        <div className="d-flex gap-3">
          <Link
            to="/login"
            className="btn btn-outline-light text-decoration-none"
          >
            Iniciar Sesión
          </Link>

          <button className="btn btn-danger">Explorar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
