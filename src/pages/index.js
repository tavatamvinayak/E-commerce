import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductView from '@/components/Products/ProductView'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <main className='container mx-auto p-5'>
      <h1 className='h1 font-bold text-center text-4xl'> Products</h1>
      <ProductView/>
  
    </main>

    </>
  )
}
