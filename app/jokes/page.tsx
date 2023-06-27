'use client'

import { useState, useEffect } from 'react'

export default function Jokes() {

    const [jokes, setJokes] = useState([])

    useEffect(() => {
        const unleashJokes = async () => {
            try {
                let response = await fetch('http://localhost:8000/jokes')
                let data = await response.json()
                
                return data
            } catch (error) {
                console.log(error)
            }
        }
        unleashJokes().then(setJokes)
        console.log(jokes)
    }, [])

    const jokies = jokes.map((joke, i) => {
        return <li>{joke.text}</li>
    })

    return (
        <div className='text-center mt-6'>
            <ul>{jokies}</ul>
            <div className='mt-4'>
                <a style={{background: 'blue'}} href="http://localhost:3000/">more jokes</a>
            </div>
        </div>
    )
}