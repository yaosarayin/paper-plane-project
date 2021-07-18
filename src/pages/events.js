import React from "react"
import Layout from "../components/layout"
import EventsGallery from "../components/events-gallery"

const Events = () => {
  return (
    <Layout header={<h1 className="chinese-h1">活动</h1>}>
      <div className="section ">
        {/* <div className='section bg-purple-100'><p>更多内容马上来！</p></div> */}
        <EventsGallery />
      </div>
    </Layout>
  )
}
export default Events
