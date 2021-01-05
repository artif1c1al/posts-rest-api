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
    return filteredPosts.map((post, id) => <Post key={id} title={post.title} author={post.author}>{post.body}</Post>)
  }

  const breakpointColumnsObj = {
    default: 3,
    780: 2,
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