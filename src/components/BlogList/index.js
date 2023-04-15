import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogItems-container">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} eachBlog={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
