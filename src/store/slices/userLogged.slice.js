import { createSlice } from '@reduxjs/toolkit';

export const userLoggedSlice = createSlice({
    name: 'userLogged',
    initialState: null,
    reducers: {
      setUserSlice: (state, action) => action.payload
    }
})

export const { setUserSlice } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;
