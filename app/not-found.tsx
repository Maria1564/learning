import Link from 'next/link'
 
const NotFound = () => {
  return (
    <div>
        <h1>Ooooh no((</h1>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound