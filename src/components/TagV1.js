import React, { useEffect, useState } from 'react'
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

const TagV1 = () => {
    const [tag, setTag] = useState('dogs')
    const [gif, setGif] = useState()

    const fetchGif = async (tag) => {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`)
        setGif(data.data.images.downsized_large.url)
    }

    useEffect(() => {
        fetchGif()
    }, [])

    const handleClick = () => {
        fetchGif(tag)
    }

    return (
        <div>
            <h3>RandomV1</h3>
            <img src={gif} alt="gif" />
            <input type='text' placeholder='tag' onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick}>Generate new Gif</button>
        </div>
    )
}

export default TagV1