import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Footer() {


  return (
    <header className="flex-row px-1 justify-content-center">
      <ul className="flex-row">
        <li className="mx-2">
          <a href="https://github.com/infojunkie01">
            GitHub
            </a>
        </li>
        <li className={"mx-2"}>
          <a href="#">
            Linkedin
            </a>
        </li>
        <li className={"mx-2"}>
          <a href="#">
            Twitter
            </a>
        </li>
    
      </ul>
    </header>
  );
}

export default Footer;