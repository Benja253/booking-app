import { configureStore } from "@reduxjs/toolkit";
import hotels from './slices/hotels.slice'
import userLogged from './slices/userLogged.slice'

export default configureStore({
  reducer: {
    hotels,
    userLogged
  }
})