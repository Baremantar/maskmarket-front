import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserStateActionCreators from 'redux/action-creators/UserActions'

const ActionCreators = {
    ...UserStateActionCreators,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
