import React from 'react';


const CounterComponent = React.memo(({count}) => {
  return (
    <div>
      <p>Count:{count}</p>
    </div>
  )
}, (prevProps, nextProps) => {
  if(nextProps.count % 2 !== 0){
    console.log(`Count: ${prevProps.count}`)
    return true;
  } else {
    return false;
  }
}
);

export default CounterComponent;

