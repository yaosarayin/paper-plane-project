import React from "react"
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'



export default function Layout({ children }) {
  return (
    <div>
      <Navbar />      
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}