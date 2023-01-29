import {loginUserAPI} from '@data/api/user/user-data-source';
import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import {LoginRequest, UserResponse} from '@data/api/user/user-entity';
import {AxiosError} from 'axios';

type UserState = {
  status: 'loading' | 'idle';
  error: string | null;
  user: UserResponse;
};

const initialState: UserState = {
  user: {} as UserResponse,
  error: null,
  status: 'idle',
};

export const LoginUser = createAsyncThunk(
  'get/getUsers',
  async (body: LoginRequest, {rejectWithValue}) => {
    try {
      return await loginUserAPI(body);
    } catch (error) {
      let err = error as AxiosError;
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(LoginUser.pending, state => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(LoginUser.fulfilled, (state, {payload}) => {
      console.log('payload fulfilled', payload);
      let user = payload.data;
      state.user = user;
      state.status = 'idle';
    });

    builder.addCase(LoginUser.rejected, (state, {payload}: any) => {
      console.log('payload ', payload);

      if (payload) state.error = payload?.msg;
      state.status = 'idle';
    });
  },
  reducers: {
    filterUser: (state, action) => {
      //   const {
      //     payload: {searchText = ''},
      //   } = action;
      //   let users = current(state.list);
      //   state.list = users.filter((user: UserAPIEntity) => {
      //     const user_name = user.first_name.toLowerCase();
      //     return user_name.includes(searchText);
      //   });
    },
  },
});

export const {filterUser} = userSlice.actions;

export default userSlice.reducer;
