import Head from "next/head"
import { SignupForm } from "../components"

export default function Signup() {
   return (
      <>
         <Head>
            <title>Seano - Sign up and create an account</title>
            <meta name="description" content="Create Seano account" />
         </Head>

         <div className="flex items-center justify-center min-h-screen sm:bg-gray-100">
            <div className="bg-white sm:shadow-lg  sm:border-t-2 border-t-blue-500 rounded-b-md  p-4 sm:p-6 lg:p-8 w-full max-w-md">
               <SignupForm />
            </div>
         </div>
      </>
   )
}
