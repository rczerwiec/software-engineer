import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserProfileState } from '../../globalTypes';


//TODO:
// 1. Replace slice with rtk query.
//https://formik.org/docs/guides/validation

const initialState: IUserProfileState = {
    id: 1,
    username: 'Bret',
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
};

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
      edit: (state, action: PayloadAction<{username: string; name: string; email:string}>) => {
        state.username = action.payload.username;
        state.name = action.payload.name;
        state.email = action.payload.email;
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