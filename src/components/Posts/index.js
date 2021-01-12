import Post from './Post'
import {Context} from '../../Context'
import {useContext} from 'react'
import Masonry from "react-masonry-css";

export default function Posts() {
  const {
    posts,
    searchReq,
  } = useContext(Context)

  const showPosts = () => {
    const filteredPosts =
      posts.filter(
        post =>
          post.author.slice(0, searchReq.length).toLowerCase() === searchReq.toLowerCase()
      )
    return filteredPosts.map((post, i) => <Post key={i} title={post.title} author={post.author} content={post.content}/>)
  }

  const breakpointColumnsObj = {
    default: 3,
    772: 2,
    500: 1
  };

  return (
    <div className='posts'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="posts__masorny-grid"
        columnClassName="posts__masorny-col"
      >
        {posts && showPosts()}
      </Masonry>
    </div>
  )
}