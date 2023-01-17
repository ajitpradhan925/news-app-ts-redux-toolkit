import { UserAPIEntity } from "./user-entity"
import axios from '../../../core/configs/axios-config';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getUsersAPI = (): Promise<UserAPIEntity[]> => {
    return axios.get("users?page=2");
}

export const GetUser = createAsyncThunk<UserAPIEntity[]>(
    "get/getUsers",
    async () => {
        return await getUsersAPI();
    }
)