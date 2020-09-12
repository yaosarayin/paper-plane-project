import React from "react"
import GraphImg from "graphcms-image"
import {Link} from 'gatsby'

export default function BlogPreview({ post: { title,slug,date,coverImage,excerpt,tags }}) {
console.log(title)
  return (
    <div>
        <Link key={slug} to={`${slug}`}><h2>{title}</h2></Link>
        <GraphImg image={coverImage} maxWidth={800} />
    </div>
  )
}