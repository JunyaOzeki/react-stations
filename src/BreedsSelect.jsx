// @ts-check

import { useState, useEffect } from 'react'

export const BreedsSelect = props => {
  const { breeds, onChange, selectedBreed, selectUrls, onClickSwichImage } =
    props

  return (
    <>
      <div>
        <select name="breed" onChange={onChange}>
          {breeds.map(breed => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button onClick={onClickSwichImage}>表示</button>
      </div>
      <div>
        {selectUrls.map((url, index) => (
          <img key={index} src={url} alt={`A ${selectedBreed}`} />
        ))}
      </div>
    </>
  )
}

export default BreedsSelect
