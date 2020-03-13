import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increase, decrease, setDiff, setNumber } from "../modules/counter";
import "./SetterNav.scss";

function CounterContainer() {
  //상태조회
  const { number, diff, unit } = useSelector(
    state => ({
      //어떤것들을 이 컴포넌트에서 불러올건지
      number: state.counter.number,
      diff: state.counter.diff,
      unit: state.counter.unit
    }),
    shallowEqual
  );
  //액션을 디스패치할 때
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetNumber = number => dispatch(setNumber(number));
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <div className="SetterNav">
      <Counter
        number={number}
        diff={diff}
        unit={unit}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
        onSetNumber={onSetNumber}
      />
    </div>
  );
}

export default CounterContainer;
