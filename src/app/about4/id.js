import { useRouter } from 'next/router'

export default function About4() {
  const router = useRouter()
  const {id} = router.query;
  // Check if the router is ready to avoid undefined query values
  if (!router.isReady) {
    return <p>Loading...</p>
  }

  return <p>Post: {id}</p>
}
