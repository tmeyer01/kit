import './globals.css'
import { Alex_Brush, Anton, Montserrat } from 'next/font/google'

// components
import Header from '@/components/sections/Header/Header';
import Footer from '@/components/sections/Footer/Footer';

// context provider
import NavContextProvider from '@/context/NavContext';


const alexBrush = Alex_Brush({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-alexBrush'
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton'
})

export const metadata = {
  title: 'Gravel and pavé',
  description: 'Illegitimi non carborundum',
}


export default function RootLayout({ children}) {

  return (
    <NavContextProvider>
      <html lang="en">
        <body className={`${alexBrush.variable} ${montserrat.variable} ${anton.variable} overflow-x-hidden relative `}>
          <Header/>
          {children}
        </body>
      </html>
    </NavContextProvider>
  )
}
