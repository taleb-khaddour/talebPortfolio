 import {  useSelector } from 'react-redux';
import About from '../About/About';
import Home from '../Home/Home';
import Service from '../Services/Service';
import Skills from '../Skills/Skills';
import styles from './MainPage.module.css'
 
export default function MainPage (){
   const menu = useSelector((state) => state.light.menu); //eslint-disable-line no-unused-vars

 return (
 <div   className={`${styles.hero_section} ${menu ? styles.active : ""}`}>
    <Home />
    <About />
    <Service />
    <Skills />

 </div> 
 );
}
 