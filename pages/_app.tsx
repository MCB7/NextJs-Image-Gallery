import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/ThemeContext'; // import based on where you put it
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }: AppProps) {
  return (

    <GoogleReCaptchaProvider
    reCaptchaKey ={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!}
    scriptProps={{
      async: false,
      defer: false,
      appendTo: "head",
      nonce: undefined,
    }}
  >
  <ThemeProvider>
  <Component {...pageProps} />
  </ThemeProvider>
  </GoogleReCaptchaProvider>
  )
}
