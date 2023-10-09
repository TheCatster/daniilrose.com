import './globals.css'
import Navigation from "./components/navbar"
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
        <Navigation/>
        {children}
        </body>
        </html>
    )
}
