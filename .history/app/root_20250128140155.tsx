import { Partytown } from '@builder.io/partytown/react'
import { type LinksFunction } from '@remix-run/node'
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from '@remix-run/react'
import { Analytics } from '@vercel/analytics/react'
import stylesheet from '~/tailwind.css?url'
import TailwindIndicator from './components/tailwind-indicator'
import { useLayoutEffect } from 'react'
import { changeTheme, getTheme } from './hooks/use-theme'
import { HighlightInit } from '@highlight-run/remix/client'

export default function App() {

    useLayoutEffect(() => {
        changeTheme('yellow')
    }, [])
    return (
        <html lang='en' className='dark'>
          
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1'
                />
              
          
       
            </head>
            <body className='relative overflow-x-hidden bg-background font-dm antialiased'>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <TailwindIndicator />
            </body>
        </html>
    )
}
