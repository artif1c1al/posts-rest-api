
export default function Post({title, author, children}) {
  return (
    <div className="post">
      <div className="post__title">{title}</div>
      <div className="post__content">{children}</div>
      <div className="post__author">{author}</div>
    </div>
  )
}