"use client";
import { SessionProvider } from "next-auth/react";


const authprovider = ({pageProps,children}) => {

  return (
    <SessionProvider 
    
      
    >
      {children}
    </SessionProvider>
  );
};

export default authprovider;
