"use client";
import { SessionProvider } from "next-auth/react";

const Authprovider = ({pageProps,children}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default Authprovider;