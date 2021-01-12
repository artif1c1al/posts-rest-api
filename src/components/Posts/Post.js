import {Card} from "react-bootstrap"

export default function Post({title, author, content}) {
  return (
    <Card className="p-4 mb-3">
      <Card.Title className='text-primary'>{title}</Card.Title>
      <Card.Text>{content}</Card.Text>
      <Card.Text><small>{author}</small></Card.Text>
    </Card>
  )
}