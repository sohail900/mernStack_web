import { configureStore } from '@reduxjs/toolkit'
import { articleAPI } from './articlesAPI'
export const store = configureStore({
    reducer: {
        [articleAPI.reducerPath]: articleAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(articleAPI.middleware),
})
