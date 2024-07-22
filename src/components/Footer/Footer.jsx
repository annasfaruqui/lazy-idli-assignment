import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa6";
import styles from "./Footer.module.css";

const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: FaLinkedin,
    linkTo: "https://www.linkedin.com/in/annasfaruqui",
  },
  {
    id: 2,
    name: "Portfolio",
    icon: FaGlobe,
    linkTo: "https://annasfaruqui.netlify.app",
  },
  {
    id: 3,
    name: "GitHub",
    icon: FaGithub,
    linkTo: "https://github.com/annasfaruqui",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          &lt; / &gt; &nbsp;Coded by <strong>Mohammed Annas Faruqui</strong>
        </p>
        <ul className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.linkTo} className={styles.icon}>
                <link.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
