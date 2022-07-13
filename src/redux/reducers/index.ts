import { combineReducers } from '@reduxjs/toolkit'
import { UserReducer } from './UserReducer'

export const RootReducer = combineReducers({
    UserState: UserReducer,
})
