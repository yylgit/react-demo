import React from "react"
import { createContext, useContext, useState, useMemo } from "react"

interface TestContextType {
  name: string,
  age: number,
  setName: (name: string) => void,
  setAge: (age: number) => void,
}
const TestContext = createContext<TestContextType | null>(null)

export default function App() {
  return <TestContextProvider>
    <TestContextComponent />
  </TestContextProvider>
}

const TestContextComponent = React.memo(function() {
    const { name, age, setName, setAge } = useContext(TestContext) as TestContextType 
    console.log('TestContextComponent render', name, age)
    return <div>TestContext {name} {age}
      <button onClick={() => setName('new name'+1)}>setName</button>
      <button onClick={() => setAge(age + 1)}>setAge</button>
    </div>
})



export function TestContextProvider({ children }: { children: React.ReactNode }) {
    const [name, setName] = useState('name')
    const [age, setAge] = useState(18)
    
    // 使用 useMemo 记忆化 value，只有当 name 或 age 变化时才创建新对象
    const value = useMemo(() => ({ name, age, setName, setAge }), [name, age])
    
    return <TestContext.Provider value={value}>
      {children}
    </TestContext.Provider>
}
