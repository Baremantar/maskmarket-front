export const UserActions = {
    ACTION_NAME: 'CHANGE_NAME',
}

type ChangeName = {
    type: 'CHANGE_NAME'
    payload: string
}

export type UserActionsType = ChangeName
