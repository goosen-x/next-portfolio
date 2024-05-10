import './globals.css'
import { cn } from '@/lib/utils'

import { ThemeProvider } from '@/components/ui/theme-provider'
import type { Metadata } from 'next'
import { Manrope as FontSans } from 'next/font/google'
import { Footer, Header } from '@/components/layout'

const fontSans = FontSans({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-sans'
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className='scroll-smooth' lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
