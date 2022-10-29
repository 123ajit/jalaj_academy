import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.PNG";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to math Guru !</h5>
        <h1>Learn with Jalaj Sir</h1>
        <h5 className="text-light">
          For every student, every classroom. Real results.
        </h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="img" />
        </div>

        <HeaderSocials />
        <a href="#" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
