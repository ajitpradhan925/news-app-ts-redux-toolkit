import {NewsAPIEntity} from './news-entity';
import axios from '@configs/axios-config';
import {createAsyncThunk} from '@reduxjs/toolkit';

// Login user api
export const sliderNewsApi = async (page: number, size: number) => {
  return await axios.get<NewsAPIEntity[]>(`news/getAllNews/${page}/${size}`);
};
