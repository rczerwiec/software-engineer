import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserProfileState{
    id: number;
    name: string;
    email: string;
}

const initialState: UserProfileState = {
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