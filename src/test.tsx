

import { useState } from "react"

import { flushSync } from 'react-dom';

const count = 1_000
export default function Test() {

   function dosometimeconsumejob(i: number) {
      // for(let j=0;j<1_000_000_0;j++){
      //    // do nothing
      // }
      return new Promise(resolve => setTimeout(resolve, 10))
   }

   const [current, setCurrent] = useState(0)

   async function start() {
      for(let i=0;i<count;i++){
         await dosometimeconsumejob(i)
         if(i%10 === 0){
            console.log(i)
            setCurrent(i)
            // flushSync(() => {
            //    setCurrent(i)
            // })
         }
      }
   }
   

  return <div>
  <div>current: {current}/{count}</div>
  <button onClick={start}>start</button>
  </div>
}