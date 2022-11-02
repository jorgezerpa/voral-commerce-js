import '../styles/globals.css'
import { MainLayout } from '@layouts/MainLayout'
import { MainContextContainer } from '../Context/mainContext'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <MainContextContainer>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MainContextContainer>
    </>
  ) 
}

export default MyApp
