import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActionCreators from 'app/redux/actionCreator'

const ActionCreators = {
  ...AuthActionCreators
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};