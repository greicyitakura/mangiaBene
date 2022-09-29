import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-success main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Mangia Bene</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mangiabene-navbar"
          aria-controls="mangiabene-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mangiabene-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="link" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="link">Menu</a>
            </li>
            <li>
              <a href="link">Admin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
