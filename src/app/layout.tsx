/* eslint-disable react/react-in-jsx-scope */
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { default as Navbar } from '@/components/navbar'
import Providers from '@/components/providers'
import ThemeProvider from '@/components/theme-provider'
import { Toaster } from 'sonner'
const inter = Inter({
	subsets: ['latin'],
})

const meta: Metadata = {
	title: 'Posh Punk Digital Flea Market',
	description:
		'Posh Punk Digital Emporium for vintage fashion, handmade goods, digital arts, DIY supplies, music, vintage toys, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='h-full' suppressHydrationWarning>
			<body className={cn('relative h-full font-sans antialiased', inter.className)}>
				<main className='relative flex flex-col min-h-screen'>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
						<Providers>
							<Navbar />
							<div className='flex-grow flex-1'>
								<main className='relative flex flex-col min-h-screen'>
									<div className='flex-grow flex-1'>{children}</div>
								</main>
							</div>
						</Providers>
					</ThemeProvider>
				</main>

				<Toaster position='top-center' richColors />
			</body>
		</html>
	)
}
