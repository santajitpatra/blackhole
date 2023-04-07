import React from 'react'
import { Header, Banner, ProductFeed, Footer } from "@/components"


function home ({ products }) {
  return (
    <div className='bg-gray-100'>
            <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer/>
    </div>

  )
}



export async function getServerSideProps(context) {

  // const products = await fetch("https://fakestoreapi.com/products").then(
  //   (res) => res.json()
  // );

  const res = await fetch(`https://fakestoreapi.com/products`)
  const products = await res.json()

  
  return { props: { products } }


}

export default home;
