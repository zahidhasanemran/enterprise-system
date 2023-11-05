'use client'
import { useState } from 'react'

interface WhoAmIProps {
  whoAmIAction: () => Promise<string>
}

const WhoAmIButton = ({ whoAmIAction }: WhoAmIProps) => {
  const [name, setName] = useState<string>()

  return (
    <div>
      <button
        onClick={async () => {
          setName(await whoAmIAction())
        }}
      >
        Who am I
      </button>
      {name && <div>Your name is {name} </div>}
    </div>
  )
}

export default WhoAmIButton
