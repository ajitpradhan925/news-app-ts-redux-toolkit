import { UserAPIEntity } from "./user-entity"
import axios from '../../../core/configs/axios-config';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getUsersAPI = async (): Promise<UserAPIEntity[]> => {
    console.log("coming ");
    return (await axios.get("users?page=2")).data;
}

// export const GetUser = createAsyncThunk<any>(
//     "get/getUsers",
//     async () => {
//         let res = await axios.get("users?page=2");
//         console.log("res ", res);
//         return res; 
        
//     }
// )

export const GetUser = createAsyncThunk(
    'get/getUsers',
    () => getUsersAPI().then(res => {
        return res;
    }))
