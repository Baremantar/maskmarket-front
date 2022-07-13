import { Dispatch } from 'redux'
import { UserActionsType } from 'redux/actions/UserActions'

export const setName = (name: string) => {
    return async (dispatch: Dispatch<UserActionsType>) => {
        dispatch({ type: 'CHANGE_NAME', payload: name })
    }
}
