import React, { useEffect } from 'react'
import {Text} from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../core/hooks/redux-hooks';
import { GetUser } from '../../../data/api/user/user-data-source';
import useNews from '../../../domain/news/useNews';
import { useUser } from '../../../domain/user/useUser';
function Home() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);


  useEffect(() => {
    dispatch(GetUser())
  }, [dispatch])

  console.log("users ", users);
  
  return (
    <Text>home</Text>
  )
}

export default Home;