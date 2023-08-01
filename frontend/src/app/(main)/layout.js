import Providers from "./providers";
import {Toaster} from "react-hot-toast";
import './globals.css'


export const metadata = {
    title: "Varlam Zhordania",
}

export default function ShopLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Ruslan+Display&display=swap"
                rel="stylesheet"/>
        </head>
        <body>
        <Toaster position="top-right" reverseOrder={false} toastOptions={{
            style: {
                background: 'var(--background-main)',
                color: 'var(--text)'
            },
            success: {
                style: {
                    background: 'var(--background-main)',
                    color: 'green'
                },
            },
            error: {
                style: {
                    background: 'var(--background-main)',
                    color: 'red'
                },
            },
        }}/>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}