import React from 'react'



import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from 'next/head'

const Layout = ({children}) => {
  return (<>
 
      <Navbar />
      {children}
      <Footer />

    </>
  )
}

export default Layout
