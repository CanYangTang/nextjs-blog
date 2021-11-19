import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

const Post = () => {
  const router = useRouter()
  const { pid, comments } = router.query
  const { data, error } = useSWR('/tangcanyang/api/hello', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return <p>Pid: {pid} Comments: {comments} Data: {data.text}</p>
}

// export async function getServerSideProps(context) {
//   const {
//     /*params: If this page uses a dynamic route, params contains the route parameters. 
//     If the page name is [id].js , then params will look like { id: ... }. */
//     params,
//     // req: The HTTP IncomingMessage object,
//     req,
//     // res: The HTTP response object.
//     res,
//     //query: An object representing the query string.
//     query,
//   } = context;
//   if(!query) {
//     return {
//       //An optional boolean value to allow the page to return a 404 status and page.
//       notFund: true,
//       //redirect - An optional redirect value to allow redirecting to internal and external resources.
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }
//   return {
//     //An optional object with the props that will be received by the page component.
//     props: {}, 
   
    
//   }
// }

export default Post