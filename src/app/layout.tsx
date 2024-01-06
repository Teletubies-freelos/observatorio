import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

import { Inter } from 'next/font/google'

import { ThemeTogglerProvider } from '@/providers/ThemeTogglerP';
import { NavBar } from '@/components/Navbar';

import './reset.css'
import { NavbarContainer } from '@/containers/Navbar/NavbarContainer';

if(process.env.IS_MSW_ON && process.env.NODE_ENV === 'development' && typeof window === 'undefined'){
  import('../msw/Server').then(({MSWServer}) =>{
    MSWServer.init();
  }) 
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeTogglerProvider>
            <NavbarContainer />
            {children}
          </ThemeTogglerProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
