import React from "react";
import ReactDOM from "react-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
