// @ts-check

import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/chippiparai-indian/Indian-Chippiparai.jpg',
  )

  const onClickChangeImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random') // APIのURL
      .then(response => {
        return response.json()
      })
      .then(myJson => {
        setDogUrl(myJson['message'])
      })
  }

  return (
    <>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={onClickChangeImage}>更新</button>
    </>
  )
}

export default Description
