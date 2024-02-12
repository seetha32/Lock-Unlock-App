// Write your code here
import {useState} from 'react'

import {BackGroundContainer} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const onSetLock = () => {
    setIsLocked(!isLocked)
  }

  return (
    <BackGroundContainer>
      {isLocked ? (
        <>
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <p>Your Device is Locked</p>
        </>
      ) : (
        <>
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <p>Your Device is Unlocked</p>
        </>
      )}
      <button type="submit" onClick={onSetLock}>
        {isLocked ? 'Lock' : 'Unlock'}
      </button>
    </BackGroundContainer>
  )
}

export default Unlock
