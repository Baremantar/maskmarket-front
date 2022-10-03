export enum ActionType {
    fetchLogin = 'FETCH_LOGIN',
    fetchSuccess = 'FETCH_SUCCESS',
    fetchFailure = 'FETCH_FAILURE'
}

type FETCH_LOGIN = {
    type: ActionType.fetchLogin
    payload: {
        username: string,
        password: string
    }
}

type AuthAction = FETCH_LOGIN

export default AuthAction