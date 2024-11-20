import { useEffect, useState } from "react";

export const Meal = () => {
  const [count, setCount] = useState(0);

  function handlePlus(){
    setCount(prev => prev + 1);
  }

  function handleMinus(){
    setCount(count - 1);
  }

  useEffect(() => {
    console.log("count changed");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button style={{width: "50px", padding: "10px", fontSize: "30px"}} onClick={handleMinus}>-</button>
      <button style={{width: "50px", padding: "10px", fontSize: "30px"}} onClick={handlePlus}>+</button>
    </div>
  );
}