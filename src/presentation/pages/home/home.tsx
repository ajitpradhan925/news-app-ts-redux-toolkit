import { useAppDispatch, useAppSelector } from '@configs/redux-hooks';
import React, { useEffect } from 'react'
import {Text} from 'react-native'


function Home() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user);

  
  return (
    <Text>home</Text>
  )
}

export default Home;