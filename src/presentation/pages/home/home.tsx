import { useAppDispatch, useAppSelector } from '@configs/redux-hooks';
import { SliderNews } from '@domain/news-slice';
import React, { useEffect } from 'react'
import {Text} from 'react-native'


function Home() {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news);
  console.log("news ", news);
  
  useEffect(() => {
    dispatch(SliderNews({page: 1, size: 10}))
  }, []);

  return (
    <Text>home</Text>
  )
}

export default Home;