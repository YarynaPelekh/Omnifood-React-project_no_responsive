import logo from "./img/omnifood-logo.png";
import "./css/general.css";
import "./css/style.css";

function Header() {
  return (
    <header class="header">
      <a href="#">
        <img
          class="logo"
          alt="Omnifood logo"
          // src="../src/components/img/omnifood-logo.png"
          src={logo}
        />
      </a>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="#">
              How it works
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#">
              Meals
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a class="main-nav-link nav-cta" href="#">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
