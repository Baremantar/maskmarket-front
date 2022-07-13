import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from 'redux/reducers'
import { initialState as UserState } from 'redux/reducers/UserReducer'

export const store = configureStore({
    reducer: RootReducer,
    preloadedState: {
        UserState: UserState,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
