import React from "react";

function Nav( { currentPage, pageChangeHandler } ) {

  return (
    <header className="d-flex justify-content-center px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about"
              onClick={() => pageChangeHandler('About')}
              className={currentPage === 'About' ? 'active-nav' : ''}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <a data-testid="portfolio" href="#portfolio"
              onClick={() => pageChangeHandler('Portfolio')}
              className={currentPage === 'Portfolio' ? 'active-nav' : ''}>
              Portfolio
            </a>
          </li>
          <li className={"mx-2"}>
            <a data-testid="resume" href="#resume"
              onClick={() => pageChangeHandler('Resume')}
              className={currentPage === 'Resume' ? 'active-nav' : ''}>
              Resume
            </a>

          </li>
          <li className={"mx-2"}>
            <a data-testid="contact" href="#contact"
              onClick={() => pageChangeHandler('Contact')}
              className={currentPage === 'Contact' ? 'active-nav' : ''}>
              Contact
            </a>

          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;