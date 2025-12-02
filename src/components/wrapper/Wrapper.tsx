import React from 'react'
import Navbar from '../shared/Navbar'

const Wrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        {/* navbar */}
        <div>
            <Navbar></Navbar>
        </div>
      <main>
        {children}
      </main>
      {/* footer */}
      <div>

      </div>
    </div>
  )
}

export default Wrapper
