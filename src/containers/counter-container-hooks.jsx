import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/counter';
import { increase, decrease, setDiff } from '../modules/counter';

// 리덕스의 상태를 조회 하거나 액션을 디스패치
function CounterContainer() {
  // 스토어의 상태를 조회할 떄 사용
  const { number, diff } = useSelector(
    (state) => ({
      // counter 리듀서가 관리하는 state의 number 및 diff 조회
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIcrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
