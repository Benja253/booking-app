import { createSlice } from '@reduxjs/toolkit';

export const notificationsslice = createSlice({
    name: 'notifications',
    initialState: {
      message: 'User Created!',
      isShow: false,
      isBgColorGreen: false
    },
    reducers: {
      showNotifications: (state, action) => {
        return {
          ...action.payload
        }
      }
    }
})

export const { showNotifications } = notificationsslice.actions;

export default notificationsslice.reducer;