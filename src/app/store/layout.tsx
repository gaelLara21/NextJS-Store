import { Description } from "../components/home/Description";
import { Hero } from "../components/home/Hero";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";
import '/src/app/sass/globals.sass'
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100","300","500","700"],
    subsets: ["latin"],
})

export default function RootLayout({children}: 

    {children: React.ReactNode
    }){

    return(
<html lang="en">
    <body className={roboto.className}>
        <Header />
        {children}
        <Footer/>
    </body>
</html>
    )
}