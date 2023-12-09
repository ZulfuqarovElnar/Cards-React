import { combineReducers } from 'redux';
import { Action } from 'redux';

interface SetLanguageAction extends Action {
  payload: string;
}

const initialState = {
  selectedLanguage: '',
};

const languageReducer = (state = initialState, action: SetLanguageAction) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  language: languageReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
