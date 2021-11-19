import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  else {
    const { pid } = router.query
    return <p>Pid: {pid}</p>
  }
}


// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()
//   if(!data){
//     return {
//       // An optional boolean value to allow the page to return a 404 status and page.
//       notFound: false, 
//       //An optional redirect value to allow redirecting to internal and external resources.
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     } 
//   };
//   return {
//     // will be passed to the page component as props
//     props: {
//       data,
//       /*params contains the route parameters for pages using dynamic routes. 
//       For example, if the page name is [id].js , then params will look like { id: ... }. 
//       */
//       routeName: context.params
//     },
//     //An optional amount in seconds after which a page re-generation can occur.
//     revalidate: false, 
//   }
// }

export async function getStaticPaths() {
  return {
    //The paths key determines which paths will be pre-rendered
    paths: [
      { params: { pid: 'tcy'} },
      { params: { pid: '123'} } 
    ],
    /*If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page;
    If fallback is true,The paths that have not been generated at build time will not result in a 404 page. 
    Instead, Next.js will serve a “fallback” version of the page on the first request to such a path;
    If fallback is 'blocking', new paths not returned by getStaticPaths will wait for the HTML to be generated, 
    identical to SSR (hence why blocking), and then be cached for future requests so it only happens once per path.
    */
    fallback: true,  // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.pid is 1

  // Pass post data to the page via props
  return {
    props: { params },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  }
}

export default Post;
