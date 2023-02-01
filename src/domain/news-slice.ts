
import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';
import {LoginRequest, UserResponse} from '@data/api/user/user-entity';
import {AxiosError} from 'axios';
import { sliderNewsApi } from '@data/api/news/news-data-source';
import { NewsAPIEntity } from '@data/api/news/news-entity';

type Params = {
    page: number,
    size: number
}

type UserState = {
  status: 'loading' | 'idle';
  error: string | null;
  sliderNews: NewsAPIEntity[];
};

const initialState: UserState = {
  sliderNews: [],
  error: null,
  status: 'idle',
};

export const SliderNews = createAsyncThunk(
  'get/getSliderNews',
  async (params: Params, {rejectWithValue}) => {
    try {
      return await sliderNewsApi(params.page, params.size);
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
  name: 'news',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(SliderNews.pending, state => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(SliderNews.fulfilled, (state, {payload}) => {
      state.sliderNews = payload.data;
      state.status = 'idle';
    });

    builder.addCase(SliderNews.rejected, (state, {payload}: any) => {
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
