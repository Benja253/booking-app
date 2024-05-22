import { createSlice } from '@reduxjs/toolkit';

export const notificationsslice = createSlice({
    name: 'notifications',
    initialState: {
      message: '',
      isShow: false,
      isBgColorGreen: false
    },
    reducers: {
      showNotifications: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      closeNotifications: (state) => ({
        ...state,
        isShow: false
      })
    }
})

export const { showNotifications, closeNotifications } = notificationsslice.actions;

export default notificationsslice.reducer;