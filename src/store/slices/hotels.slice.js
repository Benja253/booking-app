import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: null,
    reducers: {
      setHotelsSlice: (state, action) => action.payload
    }
})

export const { setHotelsSlice } = hotelsSlice.actions;

export default hotelsSlice.reducer;

export const getHotelsThunk = () => dispatch => {
  const url = 'https://hotels-api.academlo.tech/hotels'
  axios.get(url)
    .then(res => dispatch(setHotelsSlice(res.data)))
    .catch(err => console.log(err))
}