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
          'Bearer  BQBFWszns8KXXm6TPnndG9VBY-40jr9VUF5pfJscq6I1WdtoVNFN-4Hw8PLudN0_WQzuNtVW2GEydOoaw5cUEeo84g7zZFULjpBEx3u7f46w-lpJDxF40DDC2ooNhJnoot5Zq_LORukk05w',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // setAlbum(data.artists[0].name)
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
