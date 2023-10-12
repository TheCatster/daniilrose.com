import './globals.css'
import Navbar from "./components/Navbar"
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Daniil Rose',
    description: 'I study and develop embedded systems and Linux-based operating systems',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    )
}
