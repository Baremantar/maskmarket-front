import { UserActionsType as Actions } from '../actions/UserActions'

interface IState {
    name: string
}

export const initialState: IState = {
    name: 'Evgeniy',
}

export const UserReducer = (state = initialState, action: Actions): IState => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            return { ...state, name: action.payload }
        }
        default:
            return state
    }
}
