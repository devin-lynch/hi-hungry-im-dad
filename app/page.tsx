'use client'

import { useState, useEffect } from 'react'

export default function Home() {

  const [joke, setJoke] = useState()

    const fetchJoke = async () => {
      try {
        let response = await fetch('http://localhost:8000')
        let data = await response.json()
        return data
      } catch (error) {
        console.log(error)
      }
    }

  useEffect(() => {
    fetchJoke().then(setJoke)
  }, [])

  const handleButtonClick = async () => {
    try {
      setJoke(await fetchJoke())
    } catch (error) {
      console.log(error)
    }
  }

  const stashJoke = async () => {
    try {
      let response = await fetch('http://localhost:8000/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: joke
        })
      })
      let data = await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='text-center mt-8'>

        <p>{joke}</p>
        <button
        className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4'
          onClick={() => {stashJoke()}}
        >
          save
        </button>
      <div>
        <button
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4'
          onClick={() => {handleButtonClick()}}
        >
          fetch joke
        </button>
      </div>
    </main>
  )
}
