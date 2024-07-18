import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.About_container}>
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      {/* top */}
      <div className={styles.top_about}>
        <p className="title">About Me</p>
        <h1>Crafting stories through design and innovation</h1>
      </div>

      {/* Bottom */}

      <div className={styles.bottom_about}>
        {/* left */}
        <div className={styles.left_about}>
          <div className={styles.card}>
            <img src="/src/assets/Image/trophy.png" />
            <h2>My Purpose</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              consectetur tempore. Quasi voluptate qui necessitatibus vero,
              eaque similique.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/src/assets/Image/drex.png" />
            <h2>My Purpose</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              consectetur tempore. Quasi voluptate qui necessitatibus vero,
              eaque similique.
            </p>
          </div>


        </div>
        {/* right */}
        <div className={styles.right_about}>
            <div className={styles.shapeImage} >
                <img src = "/src/assets/Image/Untitled design.png" />
            </div>
            <div className={styles.shape3} ></div>
            <div className={styles.circleSlice} >
                <img src ="/src/assets/Image/circleSlice.png" />
                <p> Daily Activity</p>
            </div>
        </div>
      </div>
    </div>
  );
}
