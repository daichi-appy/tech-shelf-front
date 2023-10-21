import Image from 'next/image'

async function getCSRFToken(){
  const res = await fetch('http://localhost:8080/csrf')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const test_data = await getCSRFToken()
  return (
    <div>{ test_data.csrfToken }</div>
  )
}
