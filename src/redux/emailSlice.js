import { createSlice } from '@reduxjs/toolkit';

export const emailSlice = createSlice({
  name: 'email',
  initialState: {
    value: '',
  },
  reducers: {
    setEmail: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;

export const selectEmail = (state) => state.email.value;

export default emailSlice.reducer;