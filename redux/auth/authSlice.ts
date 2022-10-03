import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

function getStorageValue(item: string) {
    if (typeof localStorage !== 'undefined') {
        console.log(localStorage.getItem(item))
        return localStorage.getItem(item)
    } else return null
}

type DataType = {
    username: string
    password: string
}

class ResponseData {
    public token
    constructor(token: string) {
        this.token = token
    }
}

const fetchLogin = createAsyncThunk('auth/fetchLogin', async (data, { rejectWithValue }) => {
    try {
        const response = await fetch('/api/login', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Wrong username or password!')
        }

        const parsedResponse = await response.json() as ResponseData

        return parsedResponse.token 

    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
    }
})

type StateType = {
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
            state.fetching = true
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            
        })
    }
})



export default authReducerSlice.reducer