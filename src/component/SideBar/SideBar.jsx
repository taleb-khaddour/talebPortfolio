// import "./SideBar.css";
import styles from "./SideBar.module.css";
import Icon from "@mdi/react";
import { mdiAccountBox, mdiBookOpenPageVariant, mdiFountainPenTip, mdiHome, mdiMenu, mdiToolboxOutline } from "@mdi/js";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeMenuSizeFunc } from "../../redux/lightSlice";
// import { Link } from "react-router-dom";

export default function SideBar() {
const menu = useSelector(state=>state.light.menu);//eslint-disable-line no-unused-vars
const dispatch = useDispatch();
function handelChangeMenu(){
  dispatch(ChangeMenuSizeFunc());
  
}

  // const [menu, setMenu] = useState(true);
  return (
    <div className={`${styles.sidebar_container} ${menu ? styles.active : ""}`}>
      <div className={`${styles.top} ${menu ? "active" : ""}`}>
        <div className={styles.top_left}>
          <img src="/logo/5.png" />
          <span className={`${styles.logo_text}${menu ? styles.active : ""}`}>
            Taleb
          </span>
        </div>
        <div
          className={styles.top_right}
          onClick={
            handelChangeMenu
          }
        >
          <Icon path={mdiMenu} size={1} />
        </div>
      </div>
      <div className={styles.bottom_footer}>
      <div className={styles.bottom}>
        {/*  */}

     <div className={`${styles.Links_menu} ${menu ? styles.active : ""}`}>

          <div className={styles.Links_menu_left}>
          {/* <img className={styles.menuIcon} src="/src/Icons/SideBar/home1.svg"/ > */}
          <Icon className={styles.menuIcon} path={mdiHome} size={1.4} />
          </div>
          <div className={styles.Links_menu_right}>
            <p className={`${styles.Text_Menu_link}${menu ? styles.active : ""}`}>Home</p>
          </div>
        </div>
        {/* 
        
        
        */}
            
            <div className={`${styles.Links_menu} ${menu ? styles.active : ""}`}>
          <div className={styles.Links_menu_left}>
        <Icon className={styles.menuIcon} path={mdiBookOpenPageVariant} size={1.4}  />
          </div>
          <div className={styles.Links_menu_right}>
            <p className={`${styles.Text_Menu_link}${menu ? styles.active : ""}`}>About me</p>
          </div>
        </div>
        {/* 
        
        
        */}
         <div className={`${styles.Links_menu} ${menu ? styles.active : ""}`}>
          <div className={styles.Links_menu_left}>
        <Icon className={styles.menuIcon} path={mdiToolboxOutline} size={1.4}  />
          </div>
          <div className={styles.Links_menu_right}>
            <p className={`${styles.Text_Menu_link}${menu ? styles.active : ""}`}>services</p>
          </div>
        </div>
         <div className={`${styles.Links_menu} ${menu ? styles.active : ""}`}>
          <div className={styles.Links_menu_left}>
        <Icon className={styles.menuIcon} path={mdiFountainPenTip} size={1.4}  />
          </div>
          <div className={styles.Links_menu_right}>
            <p className={`${styles.Text_Menu_link}${menu ? styles.active : ""}`}>Skills</p>
          </div>
        </div>

        <div className={`${styles.Links_menu} ${menu ? styles.active : ""}`}>
          <div className={styles.Links_menu_left}>
        <Icon className={styles.menuIcon} path={mdiAccountBox} size={1.4}  />
       
          </div>
          <div className={styles.Links_menu_right}>
            <p className={`${styles.Text_Menu_link}${menu ? styles.active : ""}`}>Contact</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        
        <p><strong>&copy;</strong>  taleb khaddour item 2024</p>
      </div>
      </div>
     
    </div>
  );
}
