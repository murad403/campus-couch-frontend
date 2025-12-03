import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const Wrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        {/* navbar */}

            <Navbar></Navbar>

      <main>
        {children}
      </main>
      {/* footer */}
      <Footer></Footer>
    </div>
  )
}

export default Wrapper
