import {useState,useEffect} from 'react';

function CountDown(){
  let [count, setCount] = useState(30);
  let [times, setTimes] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      if(times > 0){
        if(count > 1) setCount(count => count - 1);
        else {
          setCount(30);
          setTimes(times => times - 1);
        }
      }
    }, 1000);
  }
  , [count]);

  return (
    <div>
      {times > 0 ? <h1>{count}</h1> : <h1>Fateme</h1>}   
    </div>
  )

}

export default CountDown;