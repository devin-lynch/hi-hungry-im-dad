'use client'

import { useState, useEffect } from 'react'

export default function Home() {

  const [joke, setJoke] = useState()

  useEffect(() => {
    const apiCall = async () => {
      try {
        const url = 'https://icanhazdadjoke.com/'
        const response = await fetch(url, {
          headers: {
            Accept: 'application/json'
          }
        })
        const data = await response.json()
        console.log(data)
        return data.joke
      } catch (error) {
        console.log(error)
      }
    }
    setJoke(apiCall())
  }, [])

  const handleButtonClick = () => {
    const apiCall = async () => {
      try {
        const url = 'https://icanhazdadjoke.com/'
        const response = await fetch(url, {
          headers: {
            Accept: 'application/json'
          }
        })
        const data = await response.json()
        console.log(data)
        return data.joke
      } catch (error) {
        console.log(error)
      }
    }
    setJoke(apiCall())
  }


  return (
    <main className='text-center mt-8'>
      {joke}
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4"
          onClick={() => {handleButtonClick()}}
        >
          fetch joke
        </button>
      </div>
    </main>
  )
}
