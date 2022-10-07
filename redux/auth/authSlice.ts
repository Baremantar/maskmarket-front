import { createSlice } from '@reduxjs/toolkit'
import { fetchHandlers } from './fetchLogin'

function getStorageValue(item: string) {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(item)
    } else return null
}

export type StateType = {
    fetching: boolean
    error: string | null
    token: string | null
}


const initialState: StateType = {
    token: getStorageValue('token'),
    fetching: false,
    error: null
}

const authReducerSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        changeFetchStatus: (state, action) => {
            state.fetching = action.payload
        }
    },
    extraReducers: (builder) => {
        fetchHandlers(builder)
    }
})



export default authReducerSlice.reducer