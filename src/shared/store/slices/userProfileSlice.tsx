import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserProfileState } from '../../globalTypes';

const initialState: IUserProfileState = {
    id: 0,
    username: 'Tomnow1',
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
      change: (state, action: PayloadAction<IUser>) => {
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.name = action.payload.name;
        state.email = action.payload.email;

      }
    },
  })

export const {edit, change} = userProfileSlice.actions;

export default userProfileSlice.reducer;