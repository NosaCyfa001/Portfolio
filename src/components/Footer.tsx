import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Footer.scss";
import { Instagram, LinkedIn, X } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/NosaCyfa001"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a>
          <Instagram />
        </a>
        <a>
          <X />
        </a>
        <a
          href="https://www.linkedin.com/in/nosa-ugobor-b1a40327a/?trk=opento_sprofile_topcard"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
      <p>© 2025 Cyfa Tech. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
