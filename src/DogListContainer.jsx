import { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher')
  const [selectUrls, setSelectUrls] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const list = data.message
        setBreeds(Object.keys(list))
      })
  }, [])

  const onClickSwichImage = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/3`)
      .then(response => response.json())
      .then(data => {
        setSelectUrls(data.message)
      })
  }

  const handleBreedChange = event => {
    setSelectedBreed(event.target.value)
  }

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        onChange={handleBreedChange}
        selectedBreed={selectedBreed}
        selectUrls={selectUrls}
        onClickSwichImage={onClickSwichImage}
      />
    </div>
  )
}

export default DogListContainer
