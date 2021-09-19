import { ChakraProvider } from "@chakra-ui/react"
import '../styles/globals.css'
import { AuthUserProvider } from '../context/AuthUserContext.js';

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </AuthUserProvider>

  )
}
export default MyApp
