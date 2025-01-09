import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Manager = ({ passwordArray, setpasswordArray,form,setform }) => {

  // const [form, setform] = useState({ site: '', username: '', password: '' })
  // const [passwordArray, setpasswordArray] = useState([])
  
  const getPasswords=async()=>{
    
    let req=await fetch("http://localhost:3000/")
    let data=await req.json()
    console.log(data)
    setpasswordArray(data)
    
  }
  useEffect(() => {

    getPasswords()
   
  }, [])
  const savePassword = async() => {
    console.log(form)
    setpasswordArray([...passwordArray,{...form,id:uuidv4()}])
    // localStorage.setItem('passwords', JSON.stringify([...passwordArray,{...form,id:uuidv4()}]))
    // console.log([...passwordArray, form])
    let res= await fetch("http://localhost:3000/",{method:"POST",body:JSON.stringify({...form,id:uuidv4()}),headers:{"Content-Type":"application/json"}})
  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      <div className='flex justify-center p-5 m-5'>
        <div className="w-3/4">
          <div className="text-center">
            <h1 className="text-4xl font-bold"> <span className='text-blue-500'>&lt;</span><span className='text-slate-400'>Passop</span><span className='text-blue-500'>/&gt;</span></h1>

            <p className="mb-4">Your own password manager</p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <input value={form.site} name="site" onChange={handleChange} placeholder="Enter website url" className="w-full p-2 py-1 border border-blue-500 rounded-full" type="text" />
            <div className="flex justify-between w-full gap-4">
              {/* <input type="text" />
            <input type="text" /> */}
              <input name="username" value={form.username} onChange={handleChange} placeholder="Enter Username" className="w-full p-2 py-1 border border-blue-500 rounded-full" type="text" />
              <input name="password" value={form.password} onChange={handleChange} placeholder="Enter Password" className="w-full p-2 py-1 border border-blue-500 rounded-full " type="text" />
            </div>
            <>

              <button onClick={savePassword} className="flex items-center justify-center px-2 py-2 text-center bg-blue-500 border-2 rounded-full border-slate-600 hover:bg-blue-300">
                <lord-icon
                  src="https://cdn.lordicon.com/sbnjyzil.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#e8308c"
                >
                </lord-icon>ADD PASSWORD</button>
            </>
          </div>
        </div>

      </div>
    </>
  )
}

export default Manager
