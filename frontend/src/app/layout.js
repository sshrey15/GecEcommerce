import { Inter } from 'next/font/google'
import './globals.css'
import Authprovider from '../component/authprovider/Authprovider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GecBazaar - Your Online Marketplace',
  description: 'Explore the best products and deals on GecBazaar, your go-to online marketplace for quality and convenience.',
  icons: {
    icon: [

      '/favicon.ico?v=4',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: ['/apple-touch-icon.png?v=4'],

  }
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body className={inter.className}>
        <Authprovider>
        <Navbar/>
      
        {children}
        <Footer />
        </Authprovider>

      
        
        </body>
    </html>
  )
}
