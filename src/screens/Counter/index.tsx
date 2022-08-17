import { useAppDispatch, useAppSelector } from "../../store/config";
import { setCounter } from "../../store/slices/counterSlice";

const Counter = () => {
  const { value } = useAppSelector((state) => state.conuter);
  const dispatch = useAppDispatch();

  const handleIncreaseClick = () => {
    dispatch(setCounter(value + 1));
  };

  const handleDecreaseClick = () => {
    dispatch(setCounter(value - 1));
  };

  return (
    <div>
      <p>Counter {value}</p>
      <div>
        <button onClick={handleIncreaseClick}>+</button>
        <button onClick={handleDecreaseClick}>-</button>
      </div>
    </div>
  );
};

export default Counter;
