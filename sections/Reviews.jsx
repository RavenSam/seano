import Review from "../components/Review"

export default function Reviews({ reviews }) {
   return (
      <div className=" " id="reviews">
         <h2 className="h2">Reviews</h2>

         <div className="flex flex-col md:flex-row items-center md:items-start   ">
            <div className="">
               {reviews.map((review, i) => (
                  <Review review={review} key={i} />
               ))}
            </div>

            <div className="min-w-fit p-4 mx-auto">
               <button className="btn-1">Add a review</button>
            </div>
         </div>
      </div>
   )
}