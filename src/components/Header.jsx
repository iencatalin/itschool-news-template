import { useState } from "react";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <header>
      <nav className={`${styles.nav} bg-primary w-100`}>
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="p-3">
            <img
              src="https://www.itschool.ro/images/logo-itschool-dark.svg"
              alt="itschool logo"
            />
          </Link>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} text-light`}
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/technology"
                  className="p-3 text-uppercase text-light"
                >
                  Tech
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/football"
                  className="p-3 text-uppercase text-light"
                >
                  Fotbal
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/fashion"
                  className="p-3 text-uppercase text-light"
                >
                  Fashion
                </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
                <Link to="/favorites" className="p-3 text-uppercase text-light">
                  Favorite
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
