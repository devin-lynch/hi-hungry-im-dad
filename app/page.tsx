'use client'

import { useState, useEffect } from 'react'

export default function Home() {

  const [joke, setJoke] = useState()

  const fetchJoke = async () => {
    try {
        const url = 'https://icanhazdadjoke.com/'
        let response = await fetch(url, {
          headers: {
            Accept: 'application/json'
          }
        })
        let data = await response.json()
        // console.log(data)
        return data.joke
      } catch (error) {
        console.log(error)
      }
    }

  useEffect(() => {
    setJoke(fetchJoke())
  }, [])

  const handleButtonClick = () => {
    setJoke(fetchJoke())
  }

  return (
    <main className='text-center mt-8'>
      <p>{joke}</p>
      <button
        className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4'
        onClick={() => {handleButtonClick()}}
      >
        fetch joke
      </button>
    </main>
  )
}
