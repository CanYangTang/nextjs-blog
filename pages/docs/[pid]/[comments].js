import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid, comments } = router.query

  return <p>Post: {pid} Comments: {comments}</p>
}

export default Post