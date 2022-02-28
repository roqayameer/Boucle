import React from 'react'
import { FaSnapchat } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
        <div className="footer_content">
          <h3>Bouclé</h3>
          <p>Beauty is in the eyes of the beholder</p>
          <ul className="socials">
            {/* <li> <FFaFacebook /></li> */}
            <li>
              {" "}
              <FaLinkedin />
            </li>
            <li>
              {" "}
              <FaSnapchat />
            </li>
            <li>
              {" "}
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div className="footer_bottom">
          <p>
            copyright &copy; 2022 codeOpacity. designed by{" "}
            <span>Roqaya&Sundus</span>
          </p>
        </div>
      </footer>
  )
}
