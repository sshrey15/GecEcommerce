"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const page = () => {
    const session = useSession();
    console.log(session)

  return (
    <div>
        <button onClick={()=>signIn("google")} >sign in with google</button>
        {
            session.data?.user?.name
        }
       
    </div>
  )
}

export default page