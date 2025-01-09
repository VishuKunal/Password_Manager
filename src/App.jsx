import { useState } from 'react'
import Navbar from './component/Navbar'
import Manager from './component/Manager'
import Table from './component/Table'

function App() {
  const [count, setCount] = useState(0)
   const [passwordArray, setpasswordArray] = useState([])
  const [form, setform] = useState({ site: '', username: '', password: '' })
  return (
    <>
    <Navbar />
    <Manager passwordArray={passwordArray} setpasswordArray={setpasswordArray} form={form} setform={setform}/>
    <Table passwordArray={passwordArray} setpasswordArray={setpasswordArray} form={form} setform={setform}/>
    </>
  )
}


export default App
