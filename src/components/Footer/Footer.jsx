import { socialLinks } from "../../data/social_links-data";
import styles from "./Footer.module.css";

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
