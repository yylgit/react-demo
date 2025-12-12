import { useEffect, useState } from "react"

export function Child(props: {a: number, b: number, c: number}) {
  // console.log('child render', props.a,props.b,props.c)
  return <div>Child {props.a} {props.b} {props.c}</div>
}

export default function Parent() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)
  const [c, setC] = useState(1)
  const [d, setD] = useState(1)

  console.log('parent render', a,b,c,d)


  useEffect(() => {
    setA(a + 1)
  }, [d])


  useEffect(() => {
    setTimeout(() => {
      setB(b + 1)
    }, 100)
  }, [d])


  useEffect(() => {
    setTimeout(() => {
      setC(c + 1)
    }, 200)
  }, [d])


  return <div>
    <Child a={a} b={b} c={c} />

    <button onClick={() => setD(d + 1)}>setD</button>
  </div>
}