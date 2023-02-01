import newsSlice from "@domain/news-slice";
import userSlice from "@domain/user-slice";
import { configureStore } from "@reduxjs/toolkit";

let store = configureStore({
    reducer: {
        user: userSlice,
        news: newsSlice
    }
    
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
