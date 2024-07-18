import {configureStore} from "@reduxjs/toolkit"
import ChangLight from "./lightSlice.jsx"
const LightConfig = configureStore({
    reducer :{
        light :ChangLight
    }
})

 export default LightConfig