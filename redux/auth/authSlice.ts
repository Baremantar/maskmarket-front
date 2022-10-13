import { createSlice } from '@reduxjs/toolkit'
import { fetchLogin } from './fetchLogin'

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

        builder.addCase(fetchLogin.pending, (state) => {
            state.token = null
            state.fetching = true
        })
        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.fetching = false
            if (action.payload instanceof Error) {
                state.error = action.payload.message
            }
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            if (!action.payload) {
                return
            }
            const { token } = action.payload
            state.token = token
            state.fetching = false
        })

    }
})



export default authReducerSlice.reducer