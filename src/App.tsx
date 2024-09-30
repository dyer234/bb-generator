import { useState } from 'react'
import './App.css'

// @ts-ignore
import Breakify from './breakify.jsx';

function App() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


  return (
    <>
        <div className={"text-white"}>
            <div className={"flex"}>
                <div className={"pl-2 sm:pl-10 pt-10"}>Breaking Bad Logo Generator</div>
            </div>
            <div
                className={"mt-4 text-center justify-center mx-auto text-xl sm:text-2xl text-gray-700"}>
                <input className={"rounded border-4 border-b-gray-50"} placeholder={"Breaking"} value={firstName}
                       onChange={(e) => {
                           setFirstName(e.target.value)
                       }}/>
                <input className={"ml-10 rounded border-4 border-b-gray-50 mt-2"} placeholder={"Bad"}
                       value={lastName} onChange={(e) => {
                    setLastName(e.target.value)
                }}/>

            </div>
            <div className={"justify-center text-center mt-10 md:mt-32 text-6xl sm:text-6xl md:text-9xl"}>
                <Breakify firstName={firstName} lastName={lastName}/>
            </div>
        </div>
    </>
  )
}

export default App
