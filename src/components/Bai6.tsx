import {useState} from 'react'

export default function Bai6() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>Bai6
      <h1>Bạn đã click 0 lần: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
