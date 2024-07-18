import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  light: false,
  menu : true,
}

const LightSlice = createSlice({
  name: 'light',
  initialState: initialState,
  reducers: {
    changeLight(state, action) {
      state.light = action.payload;
    },
    ChangeMenuSize (state) {
      state.menu = !state.menu;
  },
  },
})

export const { changeLight,ChangeMenuSize } = LightSlice.actions
export default LightSlice.reducer;

 export function  ChangeLightFunc (light) {
  return typeof light === "boolean" ?
   {type:"light/changeLight", payload : light} :
   {type:"light/changeLight", payload : false}
}
export function ChangeMenuSizeFunc(){
  return {type:"light/ChangeMenuSize"}
}