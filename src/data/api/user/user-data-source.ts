import {LoginRequest, UserResponse} from './user-entity';
import axios from '@configs/axios-config';
import {createAsyncThunk} from '@reduxjs/toolkit';

// Login user api
export const loginUserAPI = async (body: LoginRequest) => {
  return await axios.post<UserResponse>('users/login', body);
};