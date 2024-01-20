import React, { useState, useEffect } from "react";
import CounterComponent from "./CounterComponent";

const LifecycleComponent1 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    console.log('Установлен');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVsZW5hMTExMUBleGFtcGxlLmNvbSIsImlkIjo0NDksImlhdCI6MTcwMzI2MTc0MX0._dYDcZ0Nlth88Q6E3952ALB3FSToSf5_wp-GPlqyd48';
    fetch("https://todo-redev.herokuapp.com/api/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);

  useEffect(() => {
    if (count % 2 === 0) {
      setShouldUpdate(true);
      console.log(`Count: ${count}`);
    } else {
      setShouldUpdate(false);
    }
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Компонент удален");
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <CounterComponent count={count}/>
      <button onClick={handleClick}>Увеличить</button>
    </div>
  );
};



export default LifecycleComponent1