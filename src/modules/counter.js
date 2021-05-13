// 액션 타입
const SET_DIFF = 'counter/SET_DIFF'; // 모듈(파일) 이름 counter를 접두사로 붙여주는 이유는 다른 모듈과 이름이 중복되지 않기 위해서
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 리듀서
const initialState = {
  number: 0,
  diff: 1
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      }

    default:
      return state;
  }
}