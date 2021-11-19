import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Slug: {slug.join()}</p>
}

export default Post