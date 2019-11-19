import { Map } from 'immutable';    // Immutable 사용
import { handleActions, createAction } from 'redux-actions';    // redux-action 사용

// 액션 타입 정의
const SET_INPUT = 'input/SET_INPUT';

// createAction을 사용하여 액션 생성 함수 생성
export const setInput = createAction(SET_INPUT);

// 리듀서 초기 상태 정의
const initialState = Map({
    value: ''
});

// handleAction을 사용하여 리듀서 정의
export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload)
    }
}, initialState);