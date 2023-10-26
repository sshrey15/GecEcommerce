"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    // Sign out the user
    await signOut("google");

    // Go back to the previous page
    router.back();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
