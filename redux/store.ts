import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import authReducer from './auth/authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(thunk)
    },
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch