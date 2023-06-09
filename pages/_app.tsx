import '@/styles/globals.css'
import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { AuthProvider } from '../utils/hooks/Auth'
import theme from '@/materialUITheme'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextThemeProvider attribute="class" enableSystem={true}>
    <ThemeProvider theme={theme}>
    <AuthProvider >
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AuthProvider>
    </ThemeProvider>
    </NextThemeProvider> 
  )
}
