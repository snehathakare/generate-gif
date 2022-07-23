import React, { useEffect, useState } from 'react'
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

const RandomV1 = () => {
    const [gif, setGif] = useState()
    const fetchGif = async () => {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        setGif(data.data.images.downsized_large.url)
    }

    useEffect(() => {
        fetchGif()
    }, [])

    const handleClick = () => {
        fetchGif()
    }

    return (
        <div>
            <h3>RandomV1</h3>
            <img src={gif} alt="gif" />
            <button onClick={handleClick}>Generate new Gif</button>

        </div>
    )
}

export default RandomV1