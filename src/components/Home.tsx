import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Main.scss";
import pic from "../assets/images/pic.jpg";
import { Instagram, LinkedIn, X } from "@mui/icons-material";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pic} width="100px" height="150px" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
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
          <h1>Cyfa</h1>
          <p>Software Developer</p>

          {/* Test change */}
          <div className="mobile_social_icons">
            <a
              href="https://github.com/yujisatojr"
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
        </div>
      </div>
    </div>
  );
}

export default Main;
