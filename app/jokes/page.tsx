'use client'

import { useState, useEffect } from 'react'

export default function Jokes() {

    const [jokes, setJokes] = useState([])
    const [jokeElements, setjokeElements] = useState([])
    const [comment, setComment] = useState('')

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


        const fetchComments = async (jokeId) => {
            try {
                let response = await fetch(`http://localhost:8000/comments/${jokeId}`)
                let data = await response.json()
                // console.log(data)
                return data
            } catch (error) {
                console.log(error)
            }
        }

        const daJokes = jokes.map(async (joke, i)  => {
            const allComments = await fetchComments(joke.id)
            const jokeComments = allComments.map((comment, i) => {
                return(
                    <p key={i}>{comment.text}</p>
                )
            })
            return (
                    <div className='mt-2'>
                        <li>
                            {joke.text}
                        </li>
                        {jokeComments}
                        <input type="text" name='comment' placeholder='comment'/>
                        <input type="submit" name='comment'/>
                    </div>
            )
        })
        setjokeElements(daJokes)
    }, [])

    return (
        <div className='text-center mt-6'>
            <ul>{jokeElements}</ul>
            <div className='mt-4'>
                <a style={{background: 'blue'}} href="http://localhost:3000/">more jokes</a>
            </div>
        </div>
    )
}