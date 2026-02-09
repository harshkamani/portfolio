import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'Harsh Kamani | Data Science & Python Developer Portfolio',
  description: 'Harsh Kamani - MCA Student & Python Developer specializing in Data Science and Machine Learning. View my portfolio and projects.',
  keywords: ['Harsh Kamani', 'Data Science', 'Python Developer', 'MCA Student', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Harsh Kamani' }],
  creator: 'Harsh Kamani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harshkamani.com',
    title: 'Harsh Kamani | Data Science & Python Developer',
    description: 'MCA Student specializing in Data Science and Python development. Building data-driven solutions.',
    siteName: 'Harsh Kamani Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Kamani | Data Science & Python Developer',
    description: 'MCA Student specializing in Data Science and Python development.',
    creator: '@harshkamani',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
