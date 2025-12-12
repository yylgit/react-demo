import { useState, useEffect } from 'react'
import { flushSync } from 'react-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('A');
  useEffect(() => {
    // 这个 setTimeout 将回调推入了宏任务队列，脱离了React的控制
    setTimeout(async () => {
      // flushSync(() => {
      //   setCount(1);
      // });
     
      setCount(1);  // 第一次更新，立即触发渲染
      console.log('Count updated', count);
      // await new Promise(resolve => setTimeout(resolve, 0));
      await new Promise(resolve => requestAnimationFrame(resolve));
      // await new Promise(resolve => requestAnimationFrame(resolve));
      // await new Promise(resolve => requestAnimationFrame(resolve));
      debugger
      setName('B'); // 第二次更新，再次触发渲染
      console.log('Name updated', name);
      // 这里不会进行批处理，会导致两次连续的渲染。
    }, 1000);
  }, []);

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>
        Name is {name}
      </p>
    </>
  )
}

export default App
