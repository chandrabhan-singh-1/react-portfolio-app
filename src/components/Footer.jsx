import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

import my from "../assets/my3.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={my} alt="Creator" />
        <h2>Chandrabhan Singh Rathore</h2>
        <p>"If you want to shine like a sun, first burn like a sun."</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://github.com/chandrabhan-singh-1" target="blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chandrabhan-singh-rathore-868951231/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/chandrabhan18_singh/"
            target="blank"
          >
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
