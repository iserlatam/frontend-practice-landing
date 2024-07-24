export default function Navbar() {
  return (
    <header className="header sticky">
      {/* LOGO COL */}
      <div className="logo">
        <img src="logo.png" width="154" alt="logo prueba" />
      </div>
      {/* NAVIGATION COL */}
      <nav className="nav">
        <li className="nav-item">
          <a href="" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">Service</a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">Feature</a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">Product</a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">Testimonial</a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">FAQ</a>
        </li>
      </nav>
      {/* ACTIONS COL */}
      <div className="actions">
        <button className="btn secondary">
          Login
        </button>
        <button className="btn primary">
          Sign Up
        </button>
      </div>
    </header>
  );
}
