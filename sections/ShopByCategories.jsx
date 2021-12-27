import Slider from "react-slick"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getCategories } from "../lib/fetchProduct"

export default function ShopByCategories() {
   const [categories, setCategories] = useState([])

   useEffect(async () => {
      const { data } = await getCategories()

      setCategories(data)
   }, [])

   const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1118,
            settings: {
               slidesToShow: 2.1,
            },
         },
         {
            breakpoint: 920,
            settings: {
               slidesToShow: 1.8,
            },
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1.2,
            },
         },

         {
            breakpoint: 700,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   }

   return (
      <div>
         <h2 className="h2">Shop By Category</h2>

         <div className="overflow-x-hidden px-4">
            <Slider {...settings}>
               {categories.map((cat, i) => (
                  <div key={i} className="">
                     <div className="relative w-auto max-w-xl rounded-md overflow-hidden h-64 bg-gray-800 mx-4">
                        <Image src={cat.image} alt={cat.name} layout="fill" objectFit="cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000b8]" />

                        <div className="text-white text-center w-full absolute bottom-0 left-0 p-4">
                           <h3 className="text-xl font-semibold tracking-wider mb-4">{cat.name}</h3>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}
