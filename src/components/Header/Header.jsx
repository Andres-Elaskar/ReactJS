import logo from "../../logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "./header.css";
export default function Header() {
  return (
    <div>
      <header>
        <div className="img-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Cositas</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li className="cart">
              <a href="#">
                <CartWidget />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}