import { useState } from 'react'
import './App.css'

// @ts-ignore
import Breakify from './breakify.jsx'

function App() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


  return (
    <>
        <div className={"h-screen bg-green-950 relative text-white "}>
            <div className={"fixed text-8xl top-[20%] left-1/2 transform -translate-x-1/2 text-4xl"}>
            <Breakify firstName={firstName} lastName={lastName}/>
            </div>
                <div className={"fixed top-[60%] left-1/2 transform -translate-x-1/2 text-4xl text-black"}>
            <input className={"rounded border-4 border-b-gray-50"} placeholder={"First Word"} value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
            <input className={"ml-10 rounded border-4 border-b-gray-50"} placeholder={"Second Word"} value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
            </div>
            </div>
    </>
  )
}

export default App
