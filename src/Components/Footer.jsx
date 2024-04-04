import React from "react";
import "../Components/Footer.css";


function Footer() {
  return (
    <footer className=" py-4  ">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 ">
            <p className="mb-0 p-2">
              © 2024 All rights reserved By <span className="font-weight-bold">Haneesh</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;