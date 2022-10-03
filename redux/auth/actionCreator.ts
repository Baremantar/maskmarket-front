import { Dispatch } from '@reduxjs/toolkit'
import AuthAction, { ActionType } from './action'

type DataType = {
    username: string
    password: string
}

export const fetchLogin = (data: DataType) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({type: ActionType.fetchLogin, payload: data})
        const response = await fetch('/api/login', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            body: JSON.stringify(data)
        })
        
    }
}