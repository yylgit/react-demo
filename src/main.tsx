
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import Test from './test.tsx'
// import Parent from './Parent.tsx'
import TestContextComponent from './TestContext.tsx'

createRoot(document.getElementById('root')!).render(
        <TestContextComponent />
)   
