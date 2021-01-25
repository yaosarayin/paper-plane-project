import React from "react"
import Navbar from '../components/Navbar'


export default function Content({ children }) {
  return (
    <div style={{margin: `3rem auto`,
                 maxWidth: 800, 
                 padding: `0 1rem`,
                 minHeight: '800px'}}>
      {children}
    </div>
  )
}