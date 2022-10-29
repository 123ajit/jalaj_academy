import React from "react";
import CV from "../../assets/cv.pdf";

function CTA() {
  return (
    <div className="cta">
      {/* <a className="btn" href={CV} download>
        Download CV
      </a> */}

      <a href="#contact" className="btn btn-primary">
        Join Today
      </a>
    </div>
  );
}

export default CTA;
