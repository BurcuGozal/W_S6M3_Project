import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`




export default function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto(){
      axios
      .get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {console.log(err.message)})

    }
    // fetchPhoto()
  
    setApod({
      date: "2024-09-06",
      explanation:
        "Ringed ice giant Neptune lies near the center of this sharp near-infrared image from the James Webb Space Telescope. The dim and distant world is the farthest planet from the Sun, about 30 times farther away than planet Earth. But in the stunning Webb view, the planet's dark and ghostly appearance is due to atmospheric methane that absorbs infrared light. High altitude clouds that reach above most of Neptune's absorbing methane easily stand out in the image though. Coated with frozen nitrogen, N...",
      hdurl: "https://apod.nasa.gov/apod/image/2409/NeptuneTriton_webb1059.png",
      media_type: "image",
      service_version: "v1",
      title: "Ringed Ice Giant Neptune",
      url: "https://apod.nasa.gov/apod/image/2409/NeptuneTriton_webb1059.png",
    })
  }, [])

  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card 
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}

      />
    </section>
  )
}

 
