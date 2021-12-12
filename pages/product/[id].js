import Head from "next/head"
import { useState } from "react"
import { ProductDescriptions, ProductGallery, ProductInfo, Reviews, SimilarProduct } from "../../components"

const colors = ["#ec4899", "#FF87CA", "#B000B9", "#396EB0", "#009DAE"]

const clientsReviews = [
   {
      image: "/user.jpg",
      name: "john doe",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe",
      rating: 4,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe",
      rating: 5,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
   {
      image: "/user.jpg",
      name: "john doe",
      rating: 4,
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque impedit reprehenderit atque earum",
   },
]

export default function Product() {
   const [productColor, setProductColor] = useState(colors[0])

   return (
      <>
         <Head>
            <title>Product</title>
         </Head>

         <section className="lg:container lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mt-8">
            <div className="px-4 ">
               <ProductGallery colors={colors} productColor={productColor} setProductColor={setProductColor} />
            </div>

            <div className="px-4">
               <ProductInfo productColor={productColor} />
            </div>
         </section>

         <section className="px-4">
            <ProductDescriptions />
         </section>

         <section className="px-4">
            <Reviews reviews={clientsReviews} />
         </section>

         <section className="px-4">
            <SimilarProduct />
         </section>
      </>
   )
}
