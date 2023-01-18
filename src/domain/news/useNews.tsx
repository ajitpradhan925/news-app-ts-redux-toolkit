import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../core/hooks/redux-hooks'
import { RootState } from '../../data/redux/store';

function useNews() {
    const dispatch = useAppDispatch();
    const states = useSelector<RootState, any>(state => state.users);

    console.log("states ", states);
    

  return (
    <div>useNews</div>
  )
}

export default useNews