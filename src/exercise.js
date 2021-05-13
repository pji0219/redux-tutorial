import { createStore } from 'redux';

// 초기 상태
const initialState = {
  counter: 0,
  text: '',
  list: []
}

// 타입들
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = ' ADD_TO_LIST';

// 액션 생성 함수 (괄호 쳐서 return 생략 가능)
const increase = () => ({
  type: INCREASE,
})

const decrease = () => ({
  type: DECREASE,
})

const changeText = text => ({
  type: CHANGE_TEXT,
  text
})

const addToList = item => ({
  type: ADD_TO_LIST,
  item
})

// 리듀서
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      }

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }

    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }

    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }

    default:
      return state;

  }
}

// 스토어 생성
const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
}

const unsubscribe = store.subscribe(listener);
// unsubscribe(); <- 구독 해제 하고 싶을 때 호출하면 된다.

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요!'));
store.dispatch(addToList({ id: 1, text: '와우' }));