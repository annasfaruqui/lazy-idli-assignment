import styles from "./GallerySection.module.css";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";

function GallerySection() {
  return (
    <section id="gallery-section" className={styles.section}>
      <figure className={styles.galleryImg}>
        <img src={img1} alt="img-1" />
      </figure>
      <figure className={styles.galleryImg}>
        <img src={img2} alt="img-1" />
      </figure>
      <figure className={styles.galleryImg}>
        <img src={img3} alt="img-1" />
      </figure>
      <figure className={styles.galleryImg}>
        <img src={img4} alt="img-1" />
      </figure>
    </section>
  );
}

export default GallerySection;
