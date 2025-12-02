import React from 'react'
import Navbar from '../shared/Navbar'

const Wrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='max-w-[1500px] mx-auto'>
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
