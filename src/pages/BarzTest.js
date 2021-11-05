import React, { useState, useEffect } from 'react'

const BarzTest = () => {
  const [album, setAlbum] = useState('')

  useEffect(() => {
    // gotta remember this syntax, especially with the headers when hitting these APIs
    fetch('https://api.spotify.com/v1/albums/3SpBlxme9WbeQdI9kx7KAV', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer  BQDFx6JVVmyiToaSS-tYG9EQy7iJLCIYOWCYlkseRB3qKiWZHVUdROB9wnHnckb97d3oNGGTfT_KR0H02po2mXy0qFjPTv-GaI0xpnJ_U5dEAZjjIfrjdeJYs1yO5SVKSHYRCanw--Idp1M',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setAlbum(data.artists[0].name)
      })
  }, [])

  return (
    <div>
      <div>Yoo</div>
      {album}
    </div>
  )
}

export default BarzTest
