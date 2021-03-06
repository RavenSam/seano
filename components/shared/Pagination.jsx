import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { Fragment } from "react"
import { useLoaded } from "../../hooks"

export default function Pagination({ currentPage = 1, totalPages = 2 }) {
   const loaded = useLoaded()

   // const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1)

   // const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1)

   const nextPage = () => console.log("Next")

   const prevPage = () => console.log("Prev")

   if (!loaded) return <p>Loading</p>

   return (
      <div className="flex text-gray-700">
         <button
            className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 disabled:opacity-60"
            onClick={prevPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
         >
            <ChevronLeftIcon className="h-5 w-5" />
         </button>

         <div className="flex font-medium rounded-full bg-gray-200 p-1">
            {[...Array(totalPages)].map((x, i) => (
               <Fragment key={i}>
                  <button
                     className={`w-10 h-10 sm:flex justify-center items-center transition duration-150 ease-in  rounded-full ${
                        i + 1 === currentPage ? "bg-black text-white" : "hidden hover:bg-gray-300"
                     }`}
                     aria-label="Page Number"
                  >
                     {i + 1}
                  </button>
               </Fragment>
            ))}
         </div>

         <button
            className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 disabled:opacity-60"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
         >
            <ChevronRightIcon className="h-5 w-5" />
         </button>
      </div>
   )
}
