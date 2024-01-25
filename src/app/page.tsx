import Image from 'next/image'
import Link from 'next/link'
import Products from './products/page'

export default function Home() {
  return (
    <div className='page'>
      <Products></Products>
      <Link href={'/login'}><button className='no-underline p-7 rounded-md border-none shadow-md bg-amber-700 text-white'>Login</button></Link>
      <Link href={'/register'}><button className='no-underline p-7 border-none rounded-md shadow-md bg-amber-700 text-white'>Register</button></Link>
    </div>
  )
}
