import {useState} from 'react'

import NyanCatStyles from './styles'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NyanCat = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const positions = ['minimal', 'left', 'middle', 'right']

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % positions.length)
  }

  return (
    <>
      <NyanCatStyles />
      <div id="nyanCatOverly" className={`overlay cat-${positions[currentIndex]}`}>
        <div className="rainbow">
          <div className="sprite" />
        </div>

        {/* eslint-disable-next-line react/jsx-no-bind */}
        <button type="button" className="button--no-display" onClick={handleClick}>
          <div className="cat">
            <div className="tail">
              <div className="sprite" />
            </div>
            <div className="feet">
              <div className="sprite" />
            </div>
            <div className="poptart" />
            <div className="head" />
          </div>
        </button>
      </div>
    </>
  )
}

export {NyanCat}
