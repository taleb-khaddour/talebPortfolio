 import styles from './Nav.module.css'
 import Icon from '@mdi/react';
import { mdiMagnify ,mdiWhiteBalanceSunny,mdiMoonWaningCrescent } from '@mdi/js';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeLightFunc } from '../../redux/lightSlice';

function Search (){
const LightChange = useSelector(state=>state.light.light);//eslint-disable-line no-unused-vars

    return(
        <div  className={`${styles.left} ${LightChange ? styles.light : ""}`}>
    
        <input type="search" className={styles.Search_input} />
        <Icon  className={styles.Icon} path={mdiMagnify} size={1.5} />
    
</div>
    )
}

function LightButton() {
    const dispatch = useDispatch(); //eslint-disable-line no-unused-vars
    const LightChange = useSelector(state=>state.light.light);//eslint-disable-line no-unused-vars
function HandelChangeLight(value){
    dispatch(ChangeLightFunc(value));
}

    return (
        <>
            {!LightChange ? (
                <Icon
                    path={mdiWhiteBalanceSunny}
                    size={1.5}
                    onClick={() => HandelChangeLight(true)}
                />
            ) : (
                <Icon
                    path={mdiMoonWaningCrescent}
                    size={1.5}
                    onClick={() => HandelChangeLight(false)}
                />
            )}
        </>
    );
}



export default function Nav ({light,setLight}){//eslint-disable-line no-unused-vars
const LightChange = useSelector(state=>state.light.light);//eslint-disable-line no-unused-vars



return (

<div className={`${styles.nav_section} ${LightChange ? styles.light : ""}`}>
       
        <div className={`${styles.right} ${LightChange ? styles.light : ""}`}>
            <ul >
            <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                {/* <li><a href='#'></a></li> */}
            </ul>
            </div>

 <div className={`${styles.center} ${LightChange ? styles.light : ""}`}> 
<h3>Taleb</h3>
{LightChange?
<img src="/Logo/1.png" width={100} />:
<img src="/Logo/2.png" width={100} />
}
<h3>Portfolio</h3>

</div>

<Search  />
<LightButton />




    </div>
    
 );
}
Nav.propTypes = {
    light: PropTypes.bool,
    setLight:PropTypes.func
  };
  Search.propTypes = {
    light: PropTypes.bool,
  };
  LightButton.propTypes ={
    light: PropTypes.bool,
    setLight: PropTypes.func
  }
 