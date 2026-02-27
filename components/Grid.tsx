import React from 'react'

type Props = {
  mode : 'light' | 'dark'
}

const Grid = ({ mode }: Props) => {
  return (
    <>
      {mode === 'dark' ? (
          <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 
            bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-0">
          </div>
        ) : (
          <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 
            bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] 
            bg-[size:80px_80px] 
            pointer-events-none 
            z-0">
          </div>
        )
      }
    </>
  )
}

export default Grid