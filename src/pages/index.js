import { Navbar } from "@commons/Navbar"
import { Footer } from "@commons/Footer"
import { Login } from "@components/Login"

export default function Home() {
  return (
    <>
      <Navbar/>
        <Login />
      <Footer/>
    </>
  )
}
