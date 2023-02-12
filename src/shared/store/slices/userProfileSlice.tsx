import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUserProfileState } from '../../globalTypes';

const initialState: IUserProfileState = {
    id: 0,
    name: 'Tomasz Nowak',
    email: 'tomasznowak@gmail.com',
};

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
      edit: (state) => {
        console.log("Editing...",state);
      },
    },
  })

export const {edit} = userProfileSlice.actions;

export default userProfileSlice.reducer;