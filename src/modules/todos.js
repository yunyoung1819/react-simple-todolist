// 액션 타입을 정의하고, 액션 생성 함수를 만듭니다.
import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';  // 추가
const TOGGLE = 'todos/TOGGLE';  // 토글
const REMOVE = 'todos/REMOVE';  // 삭제

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);
