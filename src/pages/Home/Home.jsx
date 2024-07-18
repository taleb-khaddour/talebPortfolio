import { mdiProgressDownload } from "@mdi/js";
import styles from "./Home.module.css";
import Icon from "@mdi/react";
import CV from "../../assets/Taleb_Khaddour_CV.pdf"//eslint-disable-line no-unused-vars

export default function Home() {
  return (
    <div className={styles.Home_section}>
        <img src="/src/assets/Image/WhatsApp Image 2024-06-02 at 12.45.49_404683ba-Photoroom.png" />


        {/* <img   className={styles.ImageOther }  src="/src/assets/Image/png-clipart-geometry-anamorphosis-illusion-shape-art-zig-zag-angle-photography-removebg-preview.png" /> */}
        <div className={styles.Shape1 }></div>
        <div className={styles.Shape2 }></div>
        <div className={styles.Shape3 }></div>
        <div className={styles.Shape4 }></div>
  
        <div className={styles.ShapeImage }></div>
        <div className={styles.Shape_triangle}></div>
        <div className={styles.Shape_triangle1}></div>
      <div className={styles.Text_Home_section}>
        <h1>HI, I{"'"}M Taleb! CREATIVE <span>CODER</span> </h1>

        <p>
          I{"'"}m a passionate UI/UX designer with a mission to create delightful
          and intuitive digital experiences. With a strong foundation in design
          principles and a keen eye for detail, I specialize in translating
          complex ideas into user-friendly interfaces that captivate and engage.
        </p>
        <a  className="btn" >Download CV<Icon path={mdiProgressDownload} size={1.1} /></a>
        {/* <a href={CV} className="btn" download={"Taleb khaddour CV"} >Download CV<Icon path={mdiProgressDownload} size={1.1} /></a> */}
      </div>
    </div>
  );
}
