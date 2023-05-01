import './globals.css'
import Header from "@/app/components/Header";
import {Mulish} from 'next/font/google';
import Footer from "@/app/components/Footer";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

export const metadata = {
    title: 'Movie Info',
    description: 'Get latest info about movies and webseries from netflix',
    Image:
        {
            src:"/lucifer_logo.png",
            width: 800,
            height: 600,
        },
    robots: {
        index: true,
    }

}


export default function RootLayout({children}) {
    return (
        <html lang="en" className={mulish.className}>
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
